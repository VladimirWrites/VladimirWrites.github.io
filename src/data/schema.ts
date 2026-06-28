// Builds per-page schema.org nodes from content-collection frontmatter.
// Everything is derived (no hardcoded duplicates). The author always references
// the site-wide Person node by @id so the entity stays unified.
import { SITE_URL, PERSON_ID, person } from './person';

const authorRef = { '@type': 'Person', '@id': PERSON_ID, name: person.name } as const;

function postUrl(slug: string): string {
  // trailingSlash: 'always' + directory build format.
  return `${SITE_URL}/${slug}/`;
}

function absImage(image?: string): string | undefined {
  return image ? new URL(image, SITE_URL).href : undefined;
}

// First GitHub repo link found in the body, used as codeRepository "where known".
function firstGithubRepo(body: string): string | undefined {
  const m = body.match(/https?:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+/);
  return m ? m[0].replace(/[).,]+$/, '') : undefined;
}

// Known droidcon (and other) cities derivable from talk tags -> a real venue.
const CITIES: Record<string, { city: string; country: string }> = {
  berlin: { city: 'Berlin', country: 'Germany' },
  lisbon: { city: 'Lisbon', country: 'Portugal' },
  london: { city: 'London', country: 'United Kingdom' },
};

interface EntryInput {
  collection: 'blog' | 'projects' | 'talks';
  title: string;
  date: Date;
  description?: string;
  tags?: string[];
  image?: string;
  slug: string;
  body: string;
  // Optional explicit talk venue (frontmatter); preferred over the city-tag map.
  venue?: string;
  venueStreet?: string;
  venueLocality?: string;
  venueCountry?: string;
}

function blogPosting(e: EntryInput): Record<string, unknown> {
  const iso = e.date.toISOString();
  const node: Record<string, unknown> = {
    '@type': 'BlogPosting',
    headline: e.title,
    name: e.title,
    datePublished: iso,
    dateModified: iso,
    author: authorRef,
    publisher: authorRef,
    mainEntityOfPage: postUrl(e.slug),
    url: postUrl(e.slug),
  };
  if (e.description) node.description = e.description;
  const img = absImage(e.image);
  if (img) node.image = img;
  if (e.tags?.length) node.keywords = e.tags.join(', ');
  return node;
}

function talkNode(e: EntryInput): Record<string, unknown> {
  const tags = e.tags ?? [];
  const cityKey = tags.find((t) => CITIES[t.toLowerCase()]);
  const url = postUrl(e.slug);

  // Build a Place from an explicit frontmatter venue, or fall back to the
  // city-tag map. Either yields an Event; with neither, fall through to
  // CreativeWork below.
  let place: Record<string, unknown> | undefined;
  if (e.venue) {
    const address: Record<string, unknown> = { '@type': 'PostalAddress' };
    if (e.venueStreet) address.streetAddress = e.venueStreet;
    if (e.venueLocality) address.addressLocality = e.venueLocality;
    if (e.venueCountry) address.addressCountry = e.venueCountry;
    place = { '@type': 'Place', name: e.venue, address };
  } else if (cityKey) {
    const c = CITIES[cityKey.toLowerCase()];
    place = {
      '@type': 'Place',
      name: c.city,
      address: { '@type': 'PostalAddress', addressLocality: c.city, addressCountry: c.country },
    };
  }

  if (place) {
    return {
      '@type': 'Event',
      name: e.title,
      description: e.description || undefined,
      startDate: e.date.toISOString(),
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: place,
      performer: authorRef,
      organizer: authorRef,
      url,
    };
  }

  return {
    '@type': 'CreativeWork',
    name: e.title,
    description: e.description || undefined,
    datePublished: e.date.toISOString(),
    author: authorRef,
    url,
  };
}

function projectNode(e: EntryInput): Record<string, unknown> {
  const tags = (e.tags ?? []).map((t) => t.toLowerCase());
  const url = postUrl(e.slug);
  const repo = firstGithubRepo(e.body);
  const isCourse = tags.includes('course') || tags.includes('video');
  const isLibrary = tags.includes('library');

  // Apps/tools -> SoftwareApplication. Courses and libraries -> CreativeWork.
  if (!isCourse && !isLibrary) {
    const node: Record<string, unknown> = {
      '@type': 'SoftwareApplication',
      name: e.title,
      description: e.description || undefined,
      author: authorRef,
      url,
    };
    if (tags.includes('web')) {
      node.applicationCategory = 'WebApplication';
      node.operatingSystem = 'Web';
    } else if (tags.includes('wearos')) {
      node.applicationCategory = 'UtilitiesApplication';
      node.operatingSystem = 'Wear OS';
    } else {
      node.applicationCategory = 'MobileApplication';
      node.operatingSystem = 'Android';
    }
    if (repo) node.codeRepository = repo;
    return node;
  }

  const node: Record<string, unknown> = {
    '@type': 'CreativeWork',
    name: e.title,
    description: e.description || undefined,
    datePublished: e.date.toISOString(),
    author: authorRef,
    url,
  };
  if (repo) node.codeRepository = repo;
  return node;
}

export function entrySchema(e: EntryInput): Record<string, unknown> {
  if (e.collection === 'blog') return blogPosting(e);
  if (e.collection === 'talks') return talkNode(e);
  return projectNode(e);
}

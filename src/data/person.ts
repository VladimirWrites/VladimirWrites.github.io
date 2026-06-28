// Single source of truth for the person/profile facts.
// Feeds the visible site, the schema.org structured data, and /llms.txt so they
// never drift. Use only facts already present on the site. Do not invent fields.

export const SITE_URL = 'https://vladimirj.dev';

// Stable @id so per-page JSON-LD (BlogPosting author, Event organizer, etc.)
// can reference this one Person node.
export const PERSON_ID = `${SITE_URL}/#person`;

// Profile links. The `url` values double as the schema.org `sameAs` array and
// as the hrefs rendered by SocialLinks.astro (keyed by `id`).
export const profiles = [
  { id: 'bluesky', label: 'Bluesky', url: 'https://bsky.app/profile/vladimirj.dev' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/vladimir-j' },
  { id: 'github', label: 'GitHub', url: 'https://github.com/VladimirWrites' },
  { id: 'stackoverflow', label: 'Stack Overflow', url: 'https://stackoverflow.com/users/5821000' },
  { id: 'medium', label: 'Medium', url: 'https://medium.com/@VladimirWrites' },
  { id: 'pluralsight', label: 'Pluralsight', url: 'https://www.pluralsight.com/authors/vladimir-jovanovic' },
  { id: 'googleplay', label: 'Google Play', url: 'https://play.google.com/store/apps/dev?id=6228447112810662324' },
] as const;

export const email = 'write@vladimirj.dev';

export const person = {
  name: 'Vladimir Jovanović',
  givenName: 'Vladimir',
  familyName: 'Jovanović',
  jobTitle: 'Android Developer',
  // Short bio, matching the homepage hero copy.
  description:
    'Android Developer building clean, stable mobile experiences since Android 2.2. Senior Engineer, Course Author, and Conference Speaker.',
  url: SITE_URL,
  image: `${SITE_URL}/images/vladimir-jovanovic.jpg`,
  email,
  worksFor: { name: 'Grammarly', url: 'https://grammarly.com' },
  knowsAbout: [
    'Android Development',
    'Java',
    'Kotlin',
    'Kotlin Multiplatform',
    'Wear OS development',
    'Firebase',
    'Unit, Screenshot, and Instrumentation testing',
    'Public speaking',
    'Mentoring',
  ],
  sameAs: profiles.map((p) => p.url),
};

// schema.org Person node, ready to drop into a JSON-LD graph.
export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: person.name,
  givenName: person.givenName,
  familyName: person.familyName,
  jobTitle: person.jobTitle,
  description: person.description,
  url: person.url,
  image: person.image,
  email: `mailto:${person.email}`,
  worksFor: {
    '@type': 'Organization',
    name: person.worksFor.name,
    url: person.worksFor.url,
  },
  knowsAbout: person.knowsAbout,
  sameAs: person.sameAs,
};

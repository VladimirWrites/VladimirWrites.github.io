import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { person, profiles, SITE_URL } from '../data/person';

// Build-time /llms.txt. Regenerates from the person data and content
// collections on every build, so it never drifts from the site.

function clean(text: string): string {
  // Keep each entry on one line.
  return text.replace(/\s+/g, ' ').trim();
}

function entryUrl(id: string): string {
  return `${SITE_URL}/${id.replace(/\.md$/, '')}/`;
}

type Entry = { title: string; url: string; description: string; date: Date };

function toEntries(items: { id: string; data: any }[]): Entry[] {
  return items
    .map((i) => ({
      title: clean(i.data.title),
      url: entryUrl(i.id),
      description: clean(i.data.description || ''),
      date: i.data.date as Date,
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

function section(heading: string, entries: Entry[]): string {
  const lines = entries.map((e) =>
    e.description ? `- [${e.title}](${e.url}): ${e.description}` : `- [${e.title}](${e.url})`,
  );
  return `## ${heading}\n\n${lines.join('\n')}`;
}

export const GET: APIRoute = async () => {
  const blog = toEntries(await getCollection('blog'));
  const projects = toEntries(await getCollection('projects'));
  const talks = toEntries(await getCollection('talks'));

  const parts: string[] = [];

  parts.push(`# ${person.name}`);
  parts.push(`> ${clean(person.description)}`);

  parts.push(
    section('About', [
      { title: 'About', url: `${SITE_URL}/about/`, description: clean(person.description), date: new Date(0) },
      { title: 'Home', url: `${SITE_URL}/`, description: `${person.name}, ${person.jobTitle}.`, date: new Date(0) },
    ]),
  );

  parts.push(section('Projects', projects));
  parts.push(section('Talks', talks));
  parts.push(section('Blog', blog));

  parts.push(
    `## Profiles\n\n` +
      profiles.map((p) => `- [${p.label}](${p.url})`).join('\n'),
  );

  parts.push(
    `## Feeds\n\n` +
      `- [RSS feed](${SITE_URL}/feed.xml)\n` +
      `- [Sitemap](${SITE_URL}/sitemap-index.xml)`,
  );

  const body = parts.join('\n\n') + '\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

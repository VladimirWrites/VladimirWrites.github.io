import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tag: z.array(z.string()).default([]),
    description: z.string().default(''),
    headerImage: z.boolean().default(false),
    image: z.string().optional(),
    hidden: z.boolean().default(false),
    externalLink: z.union([z.string(), z.boolean()]).default(false),
    author: z.string().default('vladimirjovanovic'),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tag: z.array(z.string()).default([]),
    description: z.string().default(''),
    headerImage: z.boolean().default(false),
    image: z.string().optional(),
    hidden: z.boolean().default(true),
    externalLink: z.union([z.string(), z.boolean()]).default(false),
    author: z.string().default('vladimirjovanovic'),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tag: z.array(z.string()).default([]),
    description: z.string().default(''),
    headerImage: z.boolean().default(false),
    image: z.string().optional(),
    hidden: z.boolean().default(true),
    externalLink: z.union([z.string(), z.boolean()]).default(false),
    author: z.string().default('vladimirjovanovic'),
    // Optional physical venue for in-person talks, used to emit a precise
    // schema.org Event/Place. Omit for online or unknown-venue talks.
    venue: z.string().optional(),
    venueStreet: z.string().optional(),
    venueLocality: z.string().optional(),
    venueCountry: z.string().optional(),
  }),
});

export const collections = { blog, projects, talks };

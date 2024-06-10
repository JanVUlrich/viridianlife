import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string(),
	heroImageCredits: z.string().optional(),
	draft: z.boolean(),
	hidden: z.boolean(),
	tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
		message: 'tags must be unique',
	}).optional(),
})

const posts = defineCollection({
	schema: postSchema
});

export const collections = { posts };

export type FrontMatter = z.infer<typeof postSchema>;
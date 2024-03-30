import { defineCollection, z, type CollectionEntry, type DataEntryMap } from 'astro:content';

export const blogSchema =  z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	});
export const menuSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	heroImage: z.string(),
	sections: z.array(
		z.object({
			title: z.string(),
			items: z.array(
				z.object({
					title: z.string(),
					description: z.string(),
					contains: z.array(
						z.enum([
							"meat",
							"dairy",
							"egg",
							"fish",
							"shellfish",
							"soy",
							"peanut",
							"tree-nut",
							"allium",
							"gluten",
						])
					)
				})
			)
		})
	)
});


export type Blog = z.infer<typeof blogSchema>;
export type Menu = z.infer<typeof menuSchema>;


export type Content<ContentType> = {
	slug: string;
	data: ContentType;
}

const blog = defineCollection({
	type: 'content',
	schema: blogSchema
});

const menu = defineCollection({
	type: 'data',
	schema: menuSchema,
});

export const collections = { blog, menu };

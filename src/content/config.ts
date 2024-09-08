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
							"pork",
							"dairy",
							"egg",
							"fish",
							"shellfish",
							"soy",
							"peanut",
							"tree-nut",
							"allium",
							"gluten",
							"alcohol",
							"caffeine"
						])
					)
				})
			)
		})
	)
});

export const recipeSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	heroImage: z.string(),
	ingredientSections: z.array(
		z.object({
			name: z.string(),
			ingredients: z.array(
				z.object({
					name: z.string(),
					quantity: z.number(),
					unit: z.enum([
						"cup",
						"oz",
						"tsp",
						"tbsp",
						"g",
						"mL",
						"lb",
					])
				})
			)
		})
	),
	stepSections: z.array(
		z.object({
			name: z.string().nullable(),
			steps: z.array(z.object({
				text: z.string(),
				note: z.string().optional(),
				image: z.string(),
			}))
		})
	)
});


export type Blog = z.infer<typeof blogSchema>;
export type Menu = z.infer<typeof menuSchema>;
export type Recipe = z.infer<typeof recipeSchema>;


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

const recipe = defineCollection({
	type: 'data',
	schema: recipeSchema
})

export const collections = { blog, menu, recipe };

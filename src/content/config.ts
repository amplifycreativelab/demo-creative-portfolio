import { defineCollection, z } from "astro:content";

const caseStudies = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      category: z.enum(["web", "branding", "photography", "content"]),
      location: z.string(),
      year: z.number(),
      servicesProvided: z.array(z.string()),
      heroImage: image(),
      heroCaption: z.string(),
      galleryImages: z.array(image()),
      galleryCaptions: z.array(z.string()),
      galleryCredits: z.array(z.string()),
      deliverables: z.object({
        brand: z.array(z.string()).optional(),
        web: z.array(z.string()).optional(),
        photo: z.array(z.string()).optional(),
        content: z.array(z.string()).optional(),
      }),
      outcome: z.string(),
      problem: z.array(z.string()),
      constraints: z.array(z.string()),
      approach: z.array(z.string()),
      resultsSummary: z.string(),
      metrics: z.array(
        z.object({
          label: z.string(),
          value: z.string(),
          detail: z.string(),
        })
      ),
      timeline: z.string(),
      testimonial: z.object({
        quote: z.string(),
        name: z.string(),
        role: z.string(),
      }),
      cta: z.string().optional(),
      featured: z.boolean().optional(),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = { caseStudies };

import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";
  // const branch = "main";

  export default defineConfig({
    branch,
    clientId: process.env.TINA_CLIENT_ID,
    token: process.env.TINA_TOKEN,
  
    build: {
      outputFolder: "admin",
      publicFolder: "static"
    },
    media: {
      tina: {
        mediaRoot: "images",
        publicFolder: "static",
  
      },
    },
    schema: {
      collections: [
        {
          name: "blog",
          label: "Blogs",
          path: "content/english/blog",
          match: {
            exclude: '_index'
          },
          ui: {
            filename: {
              slugify: (values) => {
                return `${values?.title?.toLowerCase()
                  .replace(/ /g, '-')
                  .replace(/[^-a-zA-Z_0-9]/g, '')}`
              },
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
              isTitle: true,
              required: true,
            },
            {
              type: "boolean",
              name: "featured",
              label: "Featured",
            },
            {
              type: "string",
              name: "synopsis",
              label: "Synopsis (text to appear on home page)",
            },
            {
              type: "image",
              name: "banner",
              label: "Banner",
            },
            {
              type: "datetime",
              name: "date",
              label: "Date",
              required: true
            },
            {
              type: "string",
              name: "tags",
              label: "Tags",
              list: true
            },
            {
              type: "string",
              name: "categories",
              label: "Categories",
              list: true
            },
            {
              type: "rich-text",
              name: "body",
              label: "Body",
              isBody: true,
            },
          ],
        },
        {
          name: "services",
          label: "Services",
          path: "content/english/services",
          match: {
            exclude: '_index'
          },
          ui: {
            filename: {
              slugify: (values) => {
                return `${values?.title?.toLowerCase()
                  .replace(/ /g, '-')
                  .replace(/[^-a-zA-Z_0-9]/g, '')}`
              },
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
              isTitle: true,
              required: true,
            },
            {
              type: "boolean",
              name: "featured",
              label: "Featured on homepage",
            },
            {
              type: "string",
              name: "synopsis",
              label: "Synopsis (text to appear on home page)",
            },
            {
              type: "string",
              name: "icon",
              label: "Icon (if appears on home page)",
            },
            {
              type: "image",
              name: "banner",
              label: "Banner",
            },
            {
              type: "number",
              name: "order",
              label: "Order(Lower comes first)",
            },
            {
              type: "string",
              name: "tags",
              label: "Tags",
              list: true
            },
            {
              type: "string",
              name: "keywords",
              label: "Keywords",
              list: true
            },
            {
              type: "rich-text",
              name: "body",
              label: "Body",
              isBody: true,
            },
          ],
        },
        {
          name: "team",
          label: "Team",
          path: "content/english/team/",
          format: "md",
          ui: {
            filename: {
              slugify: (values) => {
                return `${values?.name
                  ?.toLowerCase()
                  .replace(/ /g, '-')
                  .replace(/[^-a-zA-Z_0-9]/g, '')}`
              },
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Name and title",
              required: true,
            },
            {
              type: "string",
              name: "degree",
              label: "Degrees"
            },
            {
              type: "number",
              name: "exp_years",
              label: "Years of experience"
            },
            {
              type: "number",
              name: "order",
              label: "Order(Lower comes first)",
              required: true,
            },
            {
              type: "image",
              name: "image",
              label: "Image",
              required: true,
            },
            {
              type: "string",
              name: "position",
              label: "Position",
              required: true,
            },
            {
              type: "string",
              name: "span",
              label: "Span",      
              options: [
                {
                  value: 'normal',
                  label: 'Normal',
                },
                {
                  value: 'full',
                  label: 'Full',
                },
              ]
            },
            {
              type: "rich-text",
              name: "body",
              label: "Body",
              isBody: true,
              required: true
            },
          ],
        },
        {
          name: "about",
          label: "About pages",
          path: "content/english/about",
          match: {
            exclude: '**/_index'
          },
          ui: {
            filename: {
              slugify: (values) => {
                return `${values?.title?.toLowerCase()
                  .replace(/ /g, '-')
                  .replace(/[^-a-zA-Z_0-9]/g, '')}`
              },
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
              isTitle: true,
              required: true,
            },
            {
              type: "image",
              name: "banner",
              label: "Banner",
            },
            {
              type: "rich-text",
              name: "body",
              label: "Body",
              isBody: true,
            },
          ],
        },
        {
          name: "testimonials",
          label: "Testimonials",
          path: "content/english/sections",
          match: {
            include: 'testimonial'
          },
          ui: {
            allowedActions: {
              create: false,
              delete: false,
            }
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
              isTitle: true,
              required: true,
            },
            {
              type: "string",
              name: "description",
              label: "Description",
            },
            {
              type: "object",
              name: "testimonials",
              label: "Testimonials",
              list: true,
              fields: [
                {
                  label: "Author",
                  name: "name",
                  type: "string"
                },
                {
                  label: "Role",
                  name: "designation",
                  type: "string"
                },
                {
                  type: "image",
                  name: "avatar",
                  label: "Image",
                },
                {
                  label: "Quote",
                  name: "content",
                  type: "string",
                  ui: {
                    component: "textarea"
                  }
                }
              ]
            },
          ],
        },
      ],
    },
  });
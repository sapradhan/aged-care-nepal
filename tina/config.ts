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
          name: "facilities",
          label: "Facilities",
          path: "content/english/facilities",
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
              label: "Name",
              isTitle: true,
              required: true,
            },
            {
              type: "number",
              name: "weight",
              label: "Order(Lower comes first)",
              required: true
            },
            {
              type: "datetime",
              name: "lastUpdated",
              label: "Updated date",
              required: true
            },
            {
              type: "number",
              name: "lat",
              label: "Latitude",
            },
            {
              type: "number",
              name: "long",
              label: "Longitude",
            },
            {
              type: "string",
              name: "street_address",
              label: "Street Address",
            },
            {
              type: "string",
              name: "location",
              label: "Location",
            },
            {
              type: "number",
              name: "ward",
              label: "Ward",
            },
            {
              type: "string",
              name: "palika",
              label: "Municipality",
            },
            {
              type: "string",
              name: "district",
              label: "District",
            },
            {
              type: "string",
              name: "province",
              label: "Province",
            },
            {
              type: "string",
              name: "type",
              label: "Type",
              options: [
                {
                  value: 'govt',
                  label: 'Government',
                },
                {
                  value: 'non-profit',
                  label: 'Non-profit',
                },
                {
                  value: 'private',
                  label: 'Private',
                }
              ]
            },
            {
              type: "string",
              name: "tel",
              label: "Telephone",
            },
            {
              type: "string",
              name: "email",
              label: "Email",
            },
            {
              type: "string",
              name: "website",
              label: "Website",
            },
            {
              type: "string",
              name: "capacity",
              label: "Capacity",
            },
            {
              type: "string",
              name: "occupancy",
              label: "Occupancy",
            },
            {
              type: "number",
              name: "cost_per_month",
              label: "Cost per month",
            },
            {
              type: "string",
              name: "estd",
              label: "Established date AD",
            },
            {
              type: "string",
              name: "food",
              label: "Diet options",
              ui: {
                component: "textarea"
              }
            },
            {
              type: "string",
              name: "medical",
              label: "Medical facilities",
              ui: {
                component: "textarea"
              }
            },
            {
              type: "string",
              name: "services",
              label: "Services offered",
              ui: {
                component: "textarea"
              }
            },
            {
              type: "image",
              name: "banner",
              label: "Banner image",
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
                return `${values?.title
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
              label: "Name",
              required: true,
            },
            {
              type: "string",
              name: "degree",
              label: "Degrees"
            },
            {
              type: "string",
              name: "affiliation",
              label: "Affiliation"
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
            },
            {
              type: "string",
              name: "position",
              label: "Position",
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
          name: "donate",
          label: "Donate",
          path: "content/english/pages",
          match: {
            include: 'donate'
          },
          ui: {
            allowedActions: {
              create: false,
              delete: false,
            },
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
              type: "object",
              name: "accounts",
              label: "Accounts",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: `${item?.name} - ${item?.bank} `}
                },
              },
              fields: [
                {
                  label: "Account Name",
                  name: "name",
                  type: "string"
                },
                {
                  label: "Account No",
                  name: "ac_no",
                  type: "string"
                },
                {
                  label: "Bank",
                  name: "bank",
                  type: "string"
                },
                {
                  label: "Branch",
                  name: "branch",
                  type: "string"
                },
                {
                  label: "Code Type",
                  name: "code_type",
                  type: "string"
                },
                {
                  label: "Code",
                  name: "code",
                  type: "string"
                },
                {
                  label: "QR",
                  name: "qr",
                  type: "image"
                },
              ]
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
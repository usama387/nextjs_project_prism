//  this file exports the schema using db dialect and db connection string from env
export default {
  schema: "./utils/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://prism_owner:yVQfYN2RXHE3@ep-dawn-pine-a5dg6ijk.us-east-2.aws.neon.tech/prism?sslmode=require",
  },
};

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:wpnZ2tlSY6Mg@ep-tiny-mode-a7h01th7.ap-southeast-2.aws.neon.tech/AI-Form_builder?sslmode=require",
  },
});

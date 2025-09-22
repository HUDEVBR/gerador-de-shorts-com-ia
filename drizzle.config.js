/**@type {import ('drizzle-kit').Config} */
export default {
    schema: "./configs/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_xmpNUyofr8H3@ep-lingering-bird-acvgqpde-pooler.sa-east-1.aws.neon.tech/ai-short-video-generator?sslmode=require&channel_binding=require'
    }
};
import dotenv from "dotenv";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

dotenv.config(); // Load environment variables from .env file

export default defineConfig(({ mode }) => {
  console.log(`Mode actuel: ${mode}`);
  const env = loadEnv(mode, process.cwd(), ".env"); // Directly use process.env

  return {
    define: {
      "process.env.REACT_APP_API_KEY": JSON.stringify(env.REACT_APP_API_KEY),
      // Define other environment variables as needed
    },
    plugins: [react()],
  };
});

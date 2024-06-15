import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export default defineConfig(({ mode }) => {
  console.log(`Mode actuel: ${mode}`);
  const env = process.env; // Directly use process.env

  return {
    define: {
      "process.env.REACT_APP_API_KEY": JSON.stringify(env.REACT_APP_API_KEY),
      // Define other environment variables as needed
    },
    plugins: [react()],
  };
});

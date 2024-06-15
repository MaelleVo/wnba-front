import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  dotenv.config({ path: `./.env.${mode}` }); // Charge les variables d'environnement depuis .env

  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env.REACT_APP_API_KEY": JSON.stringify(env.api_key),
    },
    optimizeDeps: {
      include: ["axios"], // Ajoutez les dépendances que vous utilisez
    },
    plugins: [react()],
  };
});

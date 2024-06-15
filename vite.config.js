import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config(); // Charge les variables d'environnement depuis .env

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
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

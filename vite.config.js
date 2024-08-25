import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@layouts": path.resolve(__dirname, "./src/layouts"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@contexts": path.resolve(__dirname, "./src/contexts"),
            "@routes": path.resolve(__dirname, "./src/routes"),
            "@icons": path.resolve(__dirname, "./src/assets/icons"),
        },
    },
    server: {
        proxy: {
            "/api": {
                target: "https://food-ordering-api-restful.onrender.com",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});

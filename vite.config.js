import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //Add proxy
  server: {
    proxy: {
      "https://5vv8ikenvb.execute-api.us-east-1.amazonaws.com/default/correos":
        {
          target:
            "https://5vv8ikenvb.execute-api.us-east-1.amazonaws.com/default/correos",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
    },
  },
});

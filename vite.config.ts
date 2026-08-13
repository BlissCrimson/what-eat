import { defineConfig } from "vite";

export default defineConfig({
  base: "/what-eat/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        dishes: "pages/dishes.html",
        impressum: "pages/impresssum.html",
      },
    },
  },
});

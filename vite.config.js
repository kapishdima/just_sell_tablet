import { resolve } from "path";
import { defineConfig } from "vite";
import { readdirSync } from "fs";

const createHtmlEntries = () => {
  const files = readdirSync(resolve(__dirname, "src", "pages"));
  return files.reduce((acc, file) => {
    const fileName = file.split(".")[0];
    acc[fileName] = resolve(__dirname, "src", "pages", file);
    return acc;
  }, {});
};

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        ...createHtmlEntries(),
      },
    },
  },
});

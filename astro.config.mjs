import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://github.com/amplifycreativelab",
  base: "/creative-portfolio/",
  output: "static",
  trailingSlash: "always"
});

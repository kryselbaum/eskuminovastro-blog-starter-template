// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://kuminov.es",
	// /landings se sirve directamente desde landings.html, sin redirección a /landings/
	build: { format: "file" },
	trailingSlash: "never",
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});

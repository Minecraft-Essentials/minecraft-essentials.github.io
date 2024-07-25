import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	site: "https://minecraft-essentials.github.io/",
	redirects: {
		"/docsrs": "https://docs.rs/minecraft-essentials/",
		"/cratesio": "https://crates.io/minecraft-essentials/",
		"/github": "https://github.com/minecraft-essentials",
	},

	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
		starlight({
			title: "Minecraft-Essentials",
			plugins: [starlightBlog({
				title: "Minecraft-Essentials Blog",
				authors: {
					eveeifyeve: {
						name: "Eveeifyeve",
						title: "Creator of Minecraft-Essentials",
						picture: "https://github.com/eveeifyeve.png",
						url: "https://eveeifyeve.pages.dev",
					}
				}
			})],
			customCss: ["./src/styles/tailwind.css"],
			social: {
				github: "https://github.com/minecraft-essentials/minecraft-essentials",
			},
			defaultLocale: "root",
			locales: {
				root: {
					label: "English",
					lang: "en",
				}
			},
			sidebar: [
				{
					label: "Introduction",
					link: "/infomation/intro/",
				},
				{
					label: "JS Documentation",
					badge: {
						text: "WIP",
						variant: "caution"
					},
					items: [
						{
							label: "Installation",
							link: "/js/install/",
						},
					],
				},
				{
					label: "Rust Documentation",
					link: "https://docs.rs/minecraft-essentials/",
				},
				{
					label: "Minecraft Clients",
					items: [
						{
							label: "TeaClient",
							link: "https://teaclient.net",
							badge: {
								text: "Featured!",
								variant: "default",
							},
						},
						{
							label: "OpusClient",
							link: "https://opusclient.com",
						},
					],
				},
			],
			components: {
				SiteTitle: "./src/components/starlight/SiteTitle.astro",
				ThemeSelect: "./src/components/starlight/ThemeSelect.astro",
			},
		}),
	],
	compressHTML: true,
	cacheDir: "./src",
	vite: {
		resolve: {
			alias: {
				"@src": "/src",
			},
		},
	},
});

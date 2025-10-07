import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/icon", "@nuxt/image"],
    css: ["@/assets/app.css"],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    nitro: {
        preset: "vercel-static",
    },
    app: {
        head: {
            link: [{
                rel: "stylesheet",
                href: "https://css.hackclub.com/theme.min.css",
            }],
        },
    },
});

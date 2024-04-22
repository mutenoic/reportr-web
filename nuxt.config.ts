export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  experimental: {
    viewTransition: true,
  },
  app: {
    pageTransition: {
      name: 'page', mode: 'out-in', type: 'transition',
    },
  },
  modules: ['@nuxtjs/color-mode', 'nuxt-vuefire', '@nuxtjs/tailwindcss', 'shadcn-nuxt', "nuxt-icon"],

  ssr: false,
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vuefire: {
    auth: {
      enabled: true,
    },
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,

    },
    optionsApiPlugin: 'firestore',
  },
  telemetry: false,
  ssr: false,
  runtimeConfig: {
    public: {
      contactFormSecret: process.env.CONTACTFORM_SECRET
    }
  }

})

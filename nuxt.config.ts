// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  aos: {
    once: true
  },
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
  nitro: {
    devProxy: {
      "/devApi": {
          target:"https://alooxhi.s3.us-east-2.amazonaws.com",
          changeOrigin: true,
          prependPath: true
      }
    }
  },
  app: {
    head: {
      title: 'Natália Soares Rocha - Psicóloga',
      meta: [
        {
          name: "description",
          content: "Psicóloga graduada pela Universidade Cidade de São Paulo, e pós graduada em Psicologia Clínica na Universidade Cruzeiro do Sul. Atendo adolescentes e adultos através da Psicoterapia Humanista Existencial, proporcionando um ambiente seguro e acolhedor para a promoção do bem-estar e desenvolvimento."
        }
      ]
    }
  },
  css: ['@/assets/custom.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/vue-fontawesome'
    ]
  },
  modules: ['nuxt-quasar-ui', 'nuxt-icon', 'nuxt-aos'],
  quasar: {
    animations: 'all',
    sassVariables: '@/assets/styles/quasar.variables.sass',
    extras: {
      font: 'roboto-font',
    },
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },
});

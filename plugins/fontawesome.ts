import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(faGithub, faLinkedin, faInstagram, faFacebookF, faWhatsapp)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
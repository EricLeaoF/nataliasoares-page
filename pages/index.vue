<template>
  <div id="home" class="q-pa-md row q-gutter-md q-pb-xl justify-center q-pt-xl" style="background-color: #E9CFC2; height: 800px;">
    <div v-if="!isMobile" class="col-md-4 text-right-md-col-md" style="max-width: 500px;">
      <div v-if="!isMobile && $q.screen.width > 1000" :key="forceRerenderFlag" class="col-12 img-animation" style="display: flex; flex-direction: column; align-items: center;">
        <q-img
          src="/_nuxt/assets/SAVE_20230224_194933.jpg" 
          rounded="true" 
          class="q-mb-md rounded-borders .fade-in" 
          style="max-width: 400px; height: auto;">
        </q-img>
      </div>
    </div>
    <div class="" style="max-width: 400px">
      <div class="row justify-center">
        <img src="/_nuxt/assets/logo-principal.png" style="max-width: 350px">
      </div>
      <p class="text-center text-black" style="margin-top: -70px">
        <strong>CRP 06/189758</strong>
      </p>
      <p class="text-center text-secondary" style="color: #999999; font-size: 20px">
        <strong>Contruindo um ambiente seguro para que você se conheça</strong> 
      </p>
      <div class="row q-pt-xl justify-center">
        <q-btn href="https://api.whatsapp.com/send/?phone=5511973549232&text&type=phone_number&app_absent=0" target="_blank" label="Vamos conversar?" color="secondary" class="text-secondary col-xs-8 col-md-4 col-lg-5 col-xl-4 items-center"></q-btn>
      </div>
    </div>
    <!-- <div class="col-xs-11 col-md-7 col-lg-4 col-xl-4 justify-start">
      <h4 class="text-left text-secondary" style="font-size: 50px">
        <strong>Natália Soares Rocha</strong>
      </h4>
      <p class="text-left text-black" style="margin-top: -60px">
        <strong>CRP 06/189758</strong>
      </p>
      <br>
      <p class="text-h4 text-secondary">Psicóloga Clínica</p>
      <div style="margin-top: 30px">
        <p class="text-secondary" style="color: #999999; font-size: 15px">
          "Quando não somos mais capazes de mudar uma situação, somos desafiados a mudar a nós mesmos." - V. Frankl 
        </p>
      </div>  
      <div class="row q-pt-xl">
        <q-btn href="https://api.whatsapp.com/send/?phone=5511973549232&text&type=phone_number&app_absent=0" target="_blank" label="Vamos conversar?" color="secondary" class="text-secondary col-xs-12 col-md-4 col-lg-4 col-xl-4 items-center"></q-btn>
      </div>    
    </div> -->
  </div>
  <br>
  <!-- <div id="sobre" class="q-pa-md row justify-center q-gutter-md" style="overflow-x: hidden;">
    <div :class="!isMobile ? 'col-xs-8 col-md-6 col-lg-6 col-xl-4 q-pt-xl' : 'col-xs-12 col-md-6 q-pt-xl q-pl-md'" :key="forceRerenderFlag">
      <div class="text-h4 text-secondary text-center"><b> Sobre Mim </b></div>
      <div style="margin-top: 55px">
        <p><b>Psicóloga desde 2022, pela Universidade Cidade de São Paulo, e pós graduada em Fenomenologia-Existencial na Universidade Cruzeiro do Sul. </b></p>
        <p><b>Atendo adolescentes, adultos, casais e famílias através da Psicoterapia Humanista-Existencial, proporcionando um ambiente seguro e acolhedor para cada paciente.</b></p>
        <p><b>Acredito no desenvolvimento pleno de tudo que você pode se tornar. Acima de diagnósticos, existe um ser humano com uma história a ser revisitada, com feridas se curando e um futuro a viver.</b></p>
      </div>
    </div>
  </div> -->
  <div class="q-pa-md row q-gutter-md justify-center q-gutter-md" style="overflow-x: hidden;">
    <div id="sobre" :class="!isMobile ? 'col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5' : 'col-xs-12 col-md-2 q-pt-xl'" :key="forceRerenderFlag" style="max-width: 500px;">
      <div class="text-h4 text-secondary text-center"><b> Sobre Mim </b></div>
      <div style="margin-top: 55px" class="">
          <p><b>Psicóloga desde 2022, pela Universidade Cidade de São Paulo, e pós graduada em Fenomenologia-Existencial na Universidade Cruzeiro do Sul. Atendo adolescentes, adultos, casais e famílias através da Psicoterapia Humanista-Existencial, proporcionando um ambiente seguro e acolhedor para cada paciente. Acredito no desenvolvimento pleno de tudo que você pode se tornar. Acima de diagnósticos, existe um ser humano com uma história a ser revisitada, com feridas se curando e um futuro a viver.</b></p>
          <h6 class="text-center"><strong>Abordagem Humanista-Existencial</strong></h6>
          <p><b>A abordagem está relacionada com o modo que cada psicólogo se orienta na clínica, as teorias que ele se identifica e vai trabalhar.</b></p>
          <p><b>Na minha abordagem, acreditamos na responsabilização de cada pessoa pela própria vida, buscamos ampliar o olhar do paciente para novas possibilidades nos contextos vividos e explorar formas de agir. É tanto para aqueles que buscam curar-se, que querem mudança em suas vidas ou estão passando por algum sofrimento, como para os que querem se conhecer e olhar de um novo jeito para a vida.</b></p>
        </div>
    </div>
    <div :class="!isMobile ? '' : 'col-12'" :key="forceRerenderFlag">
      <q-img
        src="/_nuxt/assets/5I6A2691.JPG" 
        rounded="true" 
        class="q-mb-md rounded-borders .fade-in" 
        style="max-width: 400px; height: auto; width: 400px">
      </q-img>
    </div>
  </div>


  <div class="main-layout" style="margin-top: 100px">
    <header class="text-secondary">
      <h2>"A psicoterapia permite o cuidado com a sua existência"</h2>
      <p style="font-size: 10px"> B. T. Sapienza </p>
    </header>

    <section class="services">
      <div class="services-content bg-primary">
          <h2> <b> A TERAPIA </b></h2>
      </div>
    </section>

    <section class="testimonials">
      <div class="text-column-1">
        <p>É um processo de acolhimento e descoberta, livre de julgamentos</p>
      </div>
      <div class="text-column-2 q-pa-lg text-center">
        <p>Pode te ajudar a se entender e enxergar novos horizontes</p>
      </div>
      <div class="text-column-3">
        <p>É sobre abraçar a sua história para um presente mais leve</p>
      </div>
    </section>
  </div>

  <div class="col-12 text-h4 text-secondary text-center q-pb-lg q-pt-xl"><b> Avaliações </b></div>
  <div class="q-pa-md row bg-primary">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="secondary"
      navigation
      padding
      height="380px"
      class="bg-primary col-12 rounded-borders"
      infinite
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-card class="col-xs-12 col-md-5 col-lg-4 col-xl-3" flat bordered>
            <q-card-section>
              <q-rating
                v-model="ratingModel"
                size="2em"
                color="orange"
                readonly
              />
              <div class="text-caption text-grey q-pt-md">
                <p>
                  "Estar 1 hora por semana com a Natália é minha 1 hora por semana que sei que posso falar tudo que estiver passando pela minha cabeça. Ela me deixou tão a vontade desde o primeiro dia, pra falar, pra chorar, pra perguntar, que sinto falta quando não temos essa hora da semana, mais até do que a espera pelo encontro com uma amiga de infância. 

Não sei como ela faz isso, mas acerta nas palavras sempre! Até quando é pra dar aquele puxãozinho de orelha. E em cima disso, nunca me sinto julgada. 

Sempre simpática, atenciosa, atenta aos detalhes (onde depois de meia dúzia de sessões já me conhecia como ninguém, por como eu dizia o “oi” no início da sessão), e preocupada em estar sendo ajuda e apoio.

A sorte me deu a Nat como psicóloga e eu sou eternamente grata a isso."
                </p>
                <p>J. D., 28 anos </p>
              </div>
            </q-card-section>
          </q-card>        
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-card class="col-xs-12 col-md-5 col-lg-4 col-xl-3" flat bordered>
            <q-card-section>
              <q-rating
                v-model="ratingModel"
                size="2em"
                color="orange"
                readonly
              />
              <div class="text-caption text-grey q-pt-md">
                <p>
                  "Desde o início, me passou muita segurança de poder me abrir. Com um sorrisão e sempre prestando bastante atenção, fez eu me sentir acolhido, que ela realmente estava querendo me ouvir e se importando com o que eu sentia e tinha para falar. Toda sessão é uma nova descoberta, e saio de lá com outra cabeça, reflexivo, mas mais leve do que entrei. Sinto que por mais imperfeito que eu me sinta, estou aos poucos descobrindo que todos são, e que há muita beleza nisso!"
                </p>
                <p>M. L., 24 anos </p>
              </div>
            </q-card-section>
          </q-card> 
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-card class="col-xs-12 col-md-5 col-lg-4 col-xl-3" flat bordered>
            <q-card-section>
              <q-rating
                v-model="ratingModel"
                size="2em"
                color="orange"
                readonly
              />
              <div class="text-caption text-grey q-pt-md">
                <p>
                  "Profissional que me surpreendeu pela postura, conhecimento e maturidade profissional em sabe de suas limitações, fui um paciente difícil e criterioso mas em 8 meses de tratamento eu obtive o resultado esperado, com auxílio e dedicação da profissional."                
                </p>
                <p>J. O., 50 anos</p>
              </div>
            </q-card-section>
          </q-card> 
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

  <div class="q-pa-md row justify-center q-gutter-md" style="overflow-x: hidden;">
    <div id="contato" :class="!isMobile ? 'col-xs-8 col-md-4 col-lg-4 col-xl-2 q-pt-xl' : 'col-xs-12 col-md-2 q-pt-xl q-pl-lg'" :key="forceRerenderFlag">
      <div class="text-h4 text-secondary"><b> Entre em contato </b></div>
        <p class="q-pt-lg q-pb-lg"> Atendimento online e presencial de segunda à sexta, das 8h às 21h </p>
        <font-awesome-icon icon="fas envelope" />
        <ul class="q-gutter-md">
          <li>
            <font-awesome-icon icon="fa-brands fa-whatsapp" style="font-size: 25px; margin-bottom: -5px; margin-right: 10px" />
            <a href="https://api.whatsapp.com/send/?phone=5511973549232&text&type=phone_number&app_absent=0" target="_blank" class="contact-link">
              (11) 97354-9232
            </a>
          </li>
          <li>
            <a href="mailto:nataliasoaresrocha.psi@gmail.com" target="_blank" class="contact-link"> <Icon style="font-size: 25px; margin-right: 9px; color: black" name="fa6-regular:envelope"/>
              nataliasoaresrocha.psi@gmail.com
            </a>
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-instagram" style="font-size: 25px; margin-bottom: -5px; margin-right: 10px" />
            <a href="https://instagram.com/nataliasoares.psi" target="_blank" class="contact-link">
              nataliasoares.psi
            </a>
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-linkedin" style="font-size: 25px; margin-bottom: -5px; margin-right: 10px" />
            <a href="https://www.linkedin.com/in/natalia-psi06189758" target="_blank" class="contact-link">
              Natália Soares Rocha
            </a>
          </li>
        </ul>
    </div>
    <div :class="!isMobile ? 'q-pt-xl col-xs-10 col-md-4 col-lg-4 col-xl-3' : 'col-12'" :key="forceRerenderFlag">
      <q-card v-if="!isMobile">
        <q-card-section>
          <q-form action="https://formsubmit.co/nataliasoaresrocha.psi@gmail.com" method="post" class="q-gutter-md q-pa-xl" ref="myForm">
            <q-input color="secondary" v-model="name" label="Seu nome *" hint="Nome e sobrenome" name="name" lazy-rules :rules="[val => val && val.length > 0 || 'Insira um valor válido para o nome']" :disable="mailSent"></q-input>
            <q-input color="secondary" v-model="email" label="Seu email *" name="email" lazy-rules :rules="[val => validateEmail(val)]" :disable="mailSent"></q-input>
            <q-input color="secondary" v-model="phone" label="Telefone *" name="phone" lazy-rules mask="(##) #########" :rules="[val => val !== null && val !== '' || 'Insira um valor válido para o telefone']" :disable="mailSent"></q-input>
            <q-input color="secondary" type="textarea" name="message" v-model="message" label="Mensagem *" lazy-rules :rules="[val => val !== null && val !== '' || 'Insira um valor válido para a mensagem']" :disable="mailSent"></q-input>
            <div class="q-pb-md row justify-center">
              <q-btn label="Enviar" type="submit" color="secondary" :loading="loading" :disable="mailSent"></q-btn>
            </div>
            <input type="hidden" value="http:localhost:3000/success" name="_next">
            <input type="hidden" name="_cc" value="ericlf2015@hotmail.com">
            <input type="hidden" name="_autoresponse" value="Obrigado pelo envio. Logo entraremos em contato!">
          </q-form>
        </q-card-section>  
      </q-card>
      <q-form v-else action="https://formsubmit.co/nataliasoaresrocha.psi@gmail.com" method="post" class="q-gutter-md q-pa-xl" ref="myForm">
        <q-input color="secondary" v-model="name" label="Seu nome *" hint="Nome e sobrenome" name="name" lazy-rules :rules="[val => val && val.length > 0 || 'Insira um valor válido para o nome']" :disable="mailSent"></q-input>
        <q-input color="secondary" v-model="email" label="Seu email *" name="email" lazy-rules :rules="[val => validateEmail(val)]" :disable="mailSent"></q-input>
        <q-input color="secondary" v-model="phone" label="Telefone *" name="phone" lazy-rules mask="(##) #########" :rules="[val => val !== null && val !== '' || 'Insira um valor válido para o telefone']" :disable="mailSent"></q-input>
        <q-input color="secondary" type="textarea" name="message" v-model="message" label="Mensagem *" lazy-rules :rules="[val => val !== null && val !== '' || 'Insira um valor válido para a mensagem']" :disable="mailSent"></q-input>
        <div class="q-pb-md row justify-center">
          <q-btn label="Enviar" type="submit" color="secondary" :loading="loading" :disable="mailSent"></q-btn>
        </div>
        <input type="hidden" value="https://nataliasoaresrochapsi.com/success" name="_next">
        <input type="hidden" name="_cc" value="ericlf2015@hotmail.com">
        <input type="hidden" name="_autoresponse" value="Obrigado pelo envio. Logo entraremos em contato!">
      </q-form>
    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'pt-BR',
    style: 'font-size: 13px'
  },
  title: "Natália Soares Rocha - Psicóloga",
  meta: [
    {
      name: "description",
      content: "Psicóloga desde 2022, pela Universidade Cidade de São Paulo, e pós graduada em Fenomenologia-Existencial na Universidade Cruzeiro do Sul. Atendo adolescentes e adultos através da Psicoterapia Humanista Existencial, proporcionando um ambiente seguro e acolhedor para a promoção do bem-estar e desenvolvimento."
    },
    {
      name: "keywords",
      content: "psicologia, fenomenologia, humanista, adolescentes, online, atendimento, terapia, existencial"
    }
  ]
})
  import { defineComponent, ref } from 'vue'
  import { useQuasar, LocalStorage } from 'quasar'
  import { onMounted } from 'vue'
  import axios from 'axios'

  const $q = useQuasar()
  const slide = ref(1)
  const name = ref('')
  const email = ref('')
  const phone = ref('')
  const message = ref('')
  const myForm = ref(null)
  const loading = ref(false)
  const mailSent = ref(false)
  const isMobile = ref($q.platform.is.mobile)
  const forceRerenderFlag = ref(1)
  const ratingModel = ref(5)
  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
    return emailRegex.test(email) || 'Insira um email válido'
  }

  onMounted(() => {
    console.log($q.screen)
    forceRerenderFlag.value++
    window.scrollTo(0, 0)
    const messageText = LocalStorage.getItem('message_text')
    if (messageText) {
      message.value = messageText
      LocalStorage.remove('message_text')
    }
  })

const onSubmit = async () => {
  try {
    loading.value = true
    await axios.post('/api/mail', { name: name.value, email: email.value, phone: phone.value, message: message.value})
    // onReset()
    $q.notify({
      type: 'success',
      message: 'Formulário enviado com sucesso!',
      position: 'top-right',
      color: 'positive'
    })
    mailSent.value = true
  } catch (error) {
    console.log('error', error)
    $q.notify({
      type: 'error',
      message: 'Erro ao enviar formulário!',
      position: 'top-right',
      color: 'negative'
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>

  @keyframes fadeIn {
  from {
      opacity: 0;
      transform: translateY(-20px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
  }

  @keyframes fadeInDown {
   0% {
      opacity: 0;
      transform: translateY(0);
   }
   50% {
    opacity: 0.5;
    transform: translateY(-10px);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   }
} 

.main-layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  animation: fadeIn 1s ease-out;
}

header {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 100px;
}

h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

p {
  color: #666;
}

.services-content {
  text-align: center;
  max-width: 50%; /* Garante que o conteúdo seja responsivo dentro da seção */
  background-color: #B9BFA5;
  margin: 20px auto; /* Adiciona margem superior e centraliza horizontalmente */
  animation: fadeIn 2s ease-out;
}

.img-animation {
  animation: fadeInDown 1s ease-out;
}

.testimonials {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: 20px auto;
  padding: 10px;
  animation: fadeIn 2s ease-out;
}

.text-column-1 {
  flex: 1;
  margin: 0;
  margin-top: 10px;
}

.text-column-2 {
  flex: 1;
  margin: 0;
  margin-top: 50px;
}

.text-column-3 {
  flex: 1;
  margin: 0;
  margin-top: 10px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1em;
}

.contact-link {
    color: grey;
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: -10px;
    padding: 0;
  }
</style>

<template>
  <div id="home" class="q-pa-md row q-gutter-md q-pb-xl justify-center q-pt-xl" style="background-color: #E9CFC2; height: 800px">
    <div class="col-md-4 text-right-md-col-md">
      <div class="col-12 q-hidden-xs img-animation" v-if="!isMobile && $q.screen.width > 1000" :key="forceRerenderFlag" style="display: flex; flex-direction: column; align-items: flex-end;">
        <q-img
          src="/_nuxt/assets/SAVE_20230224_194933.jpg" 
          rounded="true" 
          class="q-mb-md rounded-borders .fade-in" 
          style="max-width: 400px; height: auto;">
        </q-img>
      </div>
    </div>
    <div class="col-xs-8 col-md-6 justify-start q-pl-xl">
      <h4 class="text-left text-secondary" style="font-size: 50px">
        <strong>Natália Soares Rocha</strong>
      </h4>
      <p class="text-left text-black" style="margin-top: -60px">
        <strong>CRP 06/189758</strong>
      </p>
      <div style="margin-top: 30px">
        <p class="text-secondary" style="color: #999999; font-size: 25px">
          "Quando não somos mais capazes de mudar uma situação, somos desafiados a mudar a nós mesmos. — Viktor Frankl"
        </p>
      </div>  
      <div class="row q-pt-xl">
        <q-btn href="https://api.whatsapp.com/send/?phone=5511973549232&text&type=phone_number&app_absent=0" target="_blank" label="Agendar uma consulta" color="secondary" class="text-secondary col-4 items-center"></q-btn>
      </div>    
    </div>
  </div>
  <br>
  <div id="sobre" class="q-pa-md row justify-center q-gutter-md" style="overflow-x: hidden;">
    <div :class="!isMobile ? 'col-xs-8 col-md-6 col-lg-6 col-xl-3 q-pt-xl' : 'col-xs-12 col-md-6 q-pt-xl q-pl-md'" :key="forceRerenderFlag">
      <div class="text-h4 text-secondary text-center"><b> Sobre Mim </b></div>
      <div style="margin-top: 55px">
        <p><b>Psicóloga desde 2022, pela Universidade Cidade de São Paulo, e pós graduada em Fenomenologia-Existencial na Universidade Cruzeiro do Sul. Atendo adolescentes e adultos através da Psicoterapia Humanista Existencial, proporcionando um ambiente seguro e acolhedor para a promoção do bem-estar e desenvolvimento.</b></p>
        <p><b>Há uma forma de existir única em cada um de nós, para mim, o sentido se encontra na Psicologia, no ouvir e no acolher.</b></p>
        <p><b>Sua caminhada não precisa ser sozinho, você pode compartilhar suas dores e, juntos, podemos trabalhar sobre elas.</b></p>
      </div>
    </div>
  </div>

  <div class="main-layout" style="margin-top: 100px">
    <header class="text-secondary">
      <h1>"A psicoterapia permite o cuidado com a sua existência"</h1>
      <p>Psicóloga Clínica | Ajudando você a trilhar o seu caminho</p>
    </header>

    <section class="services">
      <div class="services-content bg-primary">
          <h2>A TERAPIA</h2>
      </div>
    </section>

    <section class="testimonials">
      <div class="text-column-1">
        <p>É um processo de acolhimento e descoberta, livre de julgamentos</p>
      </div>
      <div class="text-column-2">
        <p>Pode te ajudar a se entender e enxergar novos horizontes</p>
      </div>
      <div class="text-column-3">
        <p>É sobre abraçar a sua história para um presente mais leve</p>
      </div>
    </section>
  </div>

  <div class="q-pa-md row">
    <div class="col-12 text-h4 text-secondary text-center q-pb-lg"><b> Avaliações dos pacientes </b></div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="secondary"
      navigation
      padding
      height="300px"
      class="bg-primary col-12 rounded-borders"
      infinite
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-card class="col-3" flat bordered>
            <q-card-section>
              <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
              <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <!-- <div class="text-overline text-green-9 text-center q-pt-md">R$ 00,00</div> -->
            </q-card-section>
          </q-card>        
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-card class="col-3" flat bordered>
            <q-card-section>
              <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
              <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <!-- <div class="text-overline text-green-9 text-center q-pt-md">R$ 00,00</div> -->
            </q-card-section>
          </q-card> 
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-card class="col-3" flat bordered>
            <q-card-section>
              <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
              <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <!-- <div class="text-overline text-green-9 text-center q-pt-md">R$ 00,00</div> -->
            </q-card-section>
          </q-card> 
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <q-card class="col-3" flat bordered>
            <q-card-section>
              <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
              <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <!-- <div class="text-overline text-green-9 text-center q-pt-md">R$ 00,00</div> -->
            </q-card-section>
          </q-card> 
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

  <div class="q-pa-md row justify-center q-gutter-md" style="overflow-x: hidden;">
    <div id="contato" :class="!isMobile ? 'col-xs-8 col-md-4 col-lg-4 col-xl-2 q-pt-xl' : 'col-xs-12 col-md-2 q-pt-xl q-pl-lg'" :key="forceRerenderFlag">
      <div class="text-h4 text-secondary"><b> Entre em contato </b></div>
        <p class="q-pt-lg q-pb-lg"> Atendimentos online de segunda à sexta, das 8h às 21h </p>
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
        </ul>
    </div>
    <div :class="!isMobile ? 'q-pl-xl q-pt-xl col-xs-10 col-md-4' : 'col-12'" :key="forceRerenderFlag">
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
        <input type="hidden" value="http:localhost:3000/success" name="_next">
        <input type="hidden" name="_cc" value="ericlf2015@hotmail.com">
        <input type="hidden" name="_autoresponse" value="Obrigado pelo envio. Logo entraremos em contato!">
      </q-form>
    </div>
  </div>
</template>

<script setup>
useHead({
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
  max-width: 60%;
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

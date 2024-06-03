<template>
  <q-layout view="lHh Lpr lFf">
    <div reveal elevated class="bg-white" style="height: 65px" >
      <q-navbar v-if="isMobile">
        <q-toolbar>
          <q-btn flat round dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        </q-toolbar>
        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
          <div class="q-pt-xl">
            <q-tabs
              vertical
              class="text-secondary"
            >
              <q-tab clickable @click="navigateTo('home')">INÍCIO</q-tab>
              <q-tab clickable @click="navigateTo('sobre')">SOBRE MIM</q-tab>
              <q-tab clickable @click="navigateTo('contato')">CONTATO</q-tab>
            </q-tabs>
          </div>
          
        </q-drawer>
        
      </q-navbar>
      <q-navbar v-else>
        <q-tabs dense style="height: 50px;" class="text-secondary gt-xs">
          <q-space></q-space>
          <q-tab style="margin-left: 160px" clickable @click="navigateTo('home')">INÍCIO</q-tab>
          <q-tab clickable @click="navigateTo('sobre')">SOBRE MIM</q-tab>
          <q-tab clickable @click="navigateTo('contato')">CONTATO</q-tab>
          <q-space></q-space>
          <a href="https://api.whatsapp.com/send/?phone=5511973549232&text&type=phone_number&app_absent=0" target="_blank">
            <font-awesome-icon icon="fa-brands fa-whatsapp" style="font-size: 25px; margin-bottom: -8px; margin-right: 30px" class="text-secondary" />
          </a>

          <a href="https://instagram.com/nataliasoares.psi" target="_blank">
            <font-awesome-icon icon="fa-brands fa-instagram" style="font-size: 25px; margin-bottom: -8px; margin-right: 30px" class="text-secondary" />
          </a>

          <a href="https://www.linkedin.com/in/natalia-psi06189758" target="_blank">
            <font-awesome-icon icon="fa-brands fa-linkedin" style="font-size: 25px; margin-bottom: -8px; margin-right: 30px" class="text-secondary" />
          </a>
        </q-tabs>
      </q-navbar>
      
    </div>

    <q-page-container style="background-color: #F6F6F6 ">
      <router-view />
    </q-page-container>

    <div v-if="isMobile" reveal bordered class="bg-secondary text-white q-pa-lg q-gutter-md" style="height: 150px;">
      <div>
        <div class="text"><a style="color: white" href="mailto:nataliasoaresrocha.psi@gmail.com">nataliasoaresrocha.psi@gmail.com</a></div>
        <div class="text"> (11) 97354 9232 </div>
        <div class="q-pt-md">
          <a href="https://api.whatsapp.com/send/?phone=5511973549232&text&type=phone_number&app_absent=0" target="_blank">
            <font-awesome-icon icon="fa-brands fa-whatsapp" style="font-size: 25px; margin-bottom: -8px; margin-right: 30px" class="text-secondary" />
          </a>

          <a href="https://instagram.com/nataliasoares.psi" target="_blank">
            <font-awesome-icon icon="fa-brands fa-instagram" style="font-size: 25px; margin-bottom: -8px; margin-right: 30px" class="text-secondary" />
          </a>

          <a href="https://www.linkedin.com/in/natalia-psi06189758" target="_blank">
            <font-awesome-icon icon="fa-brands fa-linkedin" style="font-size: 25px; margin-bottom: -8px; margin-right: 30px" class="text-secondary" />
          </a>
        </div>
        
      </div>
    </div>
    <div v-else reveal bordered class="row bg-secondary text-white" style="height: 150px; display: flex; align-items: center; justify-content: space-between;">
      <div class="col-4">
        <!-- Conteúdo da div à esquerda -->
      </div>
      <div class="col-12 text-center q-pb-xl">
        <h8>©2024 por Natália Soares Rocha.</h8>
      </div>
    </div>
  </q-layout>

  
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router' // Importe o Vue Router
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const contato = ref(null)
    const $q = useQuasar()
    const router = useRouter() // Obtenha o objeto do router
    const isMobile = ref($q.platform.is.mobile)
    const leftDrawerOpen = ref(false)
    const navigateTo = (routeName) => {
      leftDrawerOpen.value = false
      console.log(routeName)
      if (routeName === 'home') {
        setTimeout(() => {
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
          });
        }, 10);
      } else {
        setTimeout(() => {
          var element = document.getElementById(routeName)
          element.scrollIntoView({ behavior: 'smooth' });
        }, 10);
      } 
    }

    return {
      isMobile,
      leftDrawerOpen,
      contato,
      navigateTo
    }
  }
})
</script>

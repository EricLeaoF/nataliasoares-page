<template>
  <q-layout>
    <q-page-container>
      <q-page class="bg-primary window-height window-width row justify-center items-center">
        <div class="column">
          <!-- <img src="~assets/docleve-logo-removebg-preview.png" class="q-mt-xl" style="max-width: 400px; height: auto;"> -->
        </div>
        <div class="column">
          <div class="row">
            <q-card square bordered class="q-pa-lg shadow-1">
              <q-card-section>
                <p> <b> Formulário enviado com sucesso. Obrigado! </b>  </p>
              </q-card-section>
              <q-card-actions class="q-px-md">
                <q-btn unelevated color="secondary" size="md" class="full-width" label="Página Incial" @click="backToHome" />
              </q-card-actions>
              <q-card-section class="text-center q-pa-none">
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout> 
</template>

<script>
definePageMeta({
  layout: false,
});
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',
  components: {
  },

  setup () {
    const router = useRouter()


    const backToHome = async () => {
      if (true) {
        router.push("/")
      }
    }

    return {
      router,
      // functions
      backToHome
    }
  }
})
</script>
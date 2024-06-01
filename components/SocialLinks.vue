<script setup lang="ts">
export interface EssentialLinkProps {
  class?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  class: ''
});
</script>
<template>
  <a href="https://www.facebook.com/seu-usuario-do-facebook" target="_blank">
    <font-awesome-icon icon="fa-brands fa-facebook-f" style="font-size: 25px; margin-bottom: -8px; margin-right: 30px" :class="class" />
  </a>

  <a href="https://instagram.com/alguminsta" target="_blank">
    <font-awesome-icon icon="fa-brands fa-instagram" style="font-size: 25px; margin-bottom: -8px; margin-right: 30px" :class="class" />
  </a>

  <a href="https://www.linkedin.com/in/algumlinkedin" target="_blank">
    <font-awesome-icon icon="fa-brands fa-linkedin" style="font-size: 25px; margin-bottom: -8px; margin-right: 30px" :class="class" />
  </a>      
</template>
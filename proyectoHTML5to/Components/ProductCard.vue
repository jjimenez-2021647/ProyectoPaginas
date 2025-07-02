<!-- ProductCard.vue -->
<template>
  <div class="card-product kafa__center">
    <div class="badge-overlay">
      <img class="badge-image" :src="badgeSrc" alt="Badge" v-if="badgeSrc">
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    badgeSrc: String
  }
}
</script>

<style scoped>
.card-product {
  position: relative;
  /* ...otros estilos... */
}
.badge-overlay {
  position: absolute;
  top: 8%;
  right: 0;
  transform: translateY(-50%);
  background-color: transparent;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}
.badge-image {
  max-width: 50px;
  height: auto;
}
</style>
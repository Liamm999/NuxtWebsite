<template>
  <div class="card text-center">
    <img class="thumb" :src="product.image" alt="product thumbnail" />
    <p class="font-bold text-gray-600 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View details</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// readonly type
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.thumb {
  height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>

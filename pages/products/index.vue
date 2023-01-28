<!-- this index.vue is the root path of the products -->
<template>
  <div>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="product in products">
        <ProductCard :product="product"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

// the data after fetching will be assigned to a variable named "products"
const { data: products } = await useFetch("https://fakestoreapi.com/products");

// overwrite title to change the title and meta of the website in this page
useHead({
  title: "Liammpee | Product",
  meta: {
    name: "description",
    content: "Products page",
  },
});
</script>

<style lang="scss" scoped></style>

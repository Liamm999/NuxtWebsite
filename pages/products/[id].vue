<!-- This page is for each product detail (with different id) -->
<template>
  <div>
    <ProductDetail :product="productDetail"></ProductDetail>
  </div>
</template>

<script setup>
// get parameter id
const { id } = useRoute().params;

const productDetailUrl = "https://fakestoreapi.com/products/" + id;

// fetch data product detail:
const { data: productDetail } = await useFetch(productDetailUrl, { key: id });

// if product not found, throw an error
if (!productDetail.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true, // fatal = true will forces the application to show error page when an error occurs
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped></style>

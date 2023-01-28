<template>
  <div class="card mt-7 max-w-sm mx-auto text-center">
    <p class="mt-7 text-9xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button @click="handleClick" class="btn my-7">Go home...</button>
  </div>
</template>

<script lang="ts" setup>
defineProps(["error"]);

const handleClick = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped></style>

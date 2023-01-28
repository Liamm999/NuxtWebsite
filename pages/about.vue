<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum veniam
      tenetur rem a adipisci dicta nobis eveniet, nulla culpa molestiae fugiat
      fugit tempora hic animi quia dolor perspiciatis atque. Asperiores!
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum veniam
      tenetur rem a adipisci dicta nobis eveniet, nulla culpa molestiae fugiat
      fugit tempora hic animi quia dolor perspiciatis atque. Asperiores!
    </p>
    <span>{{ data }}</span>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>

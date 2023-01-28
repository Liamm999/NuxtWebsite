<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/"
          ><img
            class="w-20"
            src="https://seal.deha.vn/wp-content/uploads/2021/09/1_mh8il3s3hB0Xdpx6ffQLTw.png"
            alt="nuxt_Logo"
        /></NuxtLink>
      </nav>
    </header>

    <!-- Content from here -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>

  <!-- footer -->
  <footer class="container mx-auto p-4 flex justify-between border-t-2">
    <ul class="flex gap-4">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink class="btn" to="/products">Products</NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped></style>

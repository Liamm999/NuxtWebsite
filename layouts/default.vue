<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/"
          ><img
            class="w-20"
            src="https://seal.deha.vn/wp-content/uploads/2021/09/1_mh8il3s3hB0Xdpx6ffQLTw.png"
            alt="nuxt_Logo"
        /></NuxtLink>
        <ul class="flex gap-4 pt-4">
          <li>
            <!-- Nuxtlink help navigate to a route and just load what is new instead of load the whole web -->
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn" to="/products">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Content from here -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>

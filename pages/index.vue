<template>
  <div class="min-h-screen hero hero-container" :style="{ backgroundImage: imgUrl }">
    <div class="bg-opacity-60 hero-overlay" />
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          Hello There
        </h1>
        <p class="mb-5">
          Just A Simple sharing page, i will recommend some movies and dramas here
        </p>
        <button class="btn btn-primary" @click="goto">
          <NuxtLink to="/movie">Get Started</NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const imgUrl = '/img/background.jpg'
  useHead({
  title: 'Welcome',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<style scoped>
  .hero-container {
    background-image: url('/img/background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
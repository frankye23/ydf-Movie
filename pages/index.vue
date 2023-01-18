<template>
  <div class="min-h-screen hero hero-container" :style="{ backgroundImage: imgUrl }">
    <div class="bg-opacity-60 hero-overlay" />
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          Hello there
        </h1>
        <p class="mb-5">
          Just A Simple share page
        </p>
        <button class="btn btn-primary" @click="goto">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const imgUrl = './public/img/background.jpg'
  useHead({
  title: 'Welcome',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],

  // const goto = () => {
  //   $router.push('/movie')
  // }
})
</script>

<style scoped>
  .hero-container {
    background-image: url('./public/img/background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
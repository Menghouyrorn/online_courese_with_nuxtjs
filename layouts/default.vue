<template>
  <div>
    <div class="w-full flex items-center justify-between p-6 bg-blue-200 h-[8vh]">
      <div class="cursor-pointer">
        <h1 class="font-bold text-lg">Online Course</h1>
      </div>
      <div class="flex gap-x-4">
        <NuxtLink to="/">
            <h1>Home</h1>
        </NuxtLink>
        <NuxtLink :to="firstlesson.path">
            Course
        </NuxtLink>
       <NuxtLink to="/about"> <h1>About</h1></NuxtLink>
       <NuxtLink to="/login">
        <h1>Login</h1>
       </NuxtLink>
      </div>
    </div>
    <div class="p-2">
        <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const firstlesson = useFirstLesson();
</script>
<style lang="css" scoped>
</style>
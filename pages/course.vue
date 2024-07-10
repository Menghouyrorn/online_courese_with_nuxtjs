<template>
  <div
    class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center justify-center"
  >
    <div>
      <div class="prose mb-b flex justify-between items-center w-full">
        <h1 class="text-3xl">
          <span class="font-medium">
            <span class="font-bold">{{ title }}</span>
          </span>
        </h1>
        <!-- <UserCard/> -->
      </div>

      <div class="flex flex-row justify-center flex-grow">
        <div
          class="mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
        >
          <h3>Chapters</h3>
          <div
            class="space-y-1 flex flex-col"
            v-for="chapter in chapters"
            :key="chapter.slug"
          >
            <h4 class="font-bold">{{ chapter.title }}</h4>
            <nuxt-link
              v-for="(lesson, index) in chapter.lessons"
              :key="lesson.slug"
              class="flex flex-row space-x-1 no-underline prose-sm font-normal prose"
              :to="lesson.path"
              :class="{
                'text-blue-500': lesson.path == $route.fullPath,
                'text-gray-600': lesson.path != $route.fullPath,
              }"
            >
              <span class="text-gray-500">{{ index + 1 }}.</span>
              <span>{{ lesson.title }}</span>
            </nuxt-link>
          </div>
        </div>
        <div class="p-12 bg-white rounded-md w-[65ch]">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { chapters, title } = useCoures();
console.log(chapters);
</script>

<!-- <style scoped>
  .router-link-active{
    @apply text-blue-500;
  }
</style> -->
  
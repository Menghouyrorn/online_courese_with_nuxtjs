<template>
    <div>
        <p>This is Test Page</p>
        <p>This is chapterPage : {{ $route.params.chapterSlug }}</p>
        <p>This is LessonPage : {{ $route.params.lessonSlug }}</p>
    </div>
</template>

<script setup>
    const data = useCoures();
    console.log(data);
</script>
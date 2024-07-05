<template>
    <div>
        <iframe 
        width="480"
        height="315"
        :src="`https://player.vimeo.com/video/${props.videoId}`"
        title="Video Player" 
        frameborder="0"
        allowfullscreen
        allow="accelermeter; autoplay; clipboard-write; encrypted-media"
        ></iframe>
    </div>
</template>

<script setup>
    const props = defineProps({
        videoId:{
            type:Number,
            require:true,
        }
    });
</script>
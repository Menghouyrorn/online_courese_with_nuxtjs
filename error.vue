<template>
    <div>
        <div v-if="error.statusCode == 404" class="w-ful">
            <h1>{{ error.message }}</h1>
            <p>{{ error.statusCode }}</p>
        </div>
        <div v-else class="w-full">
            <h1>{{ error.message }}</h1>
            <p>{{ error.statusCode }}</p>
        </div>
    </div>
</template>

<script setup>
    const error = useError();
</script>
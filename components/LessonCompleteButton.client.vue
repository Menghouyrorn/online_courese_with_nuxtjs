<template>
  <div>
    <label :class="`p-2 cursor-pointer text-xs rounded ${modelValue ? 'bg-green-700':'bg-gray-500'} text-white`">
      <input
        type="checkbox"
        :value="modelValue"
        @input="() => $emit('update:modelValue', !modelValue)"
        class="hidden"
      />
      {{ modelValue ? "Completed!" : "Mark as complete" }}
    </label>   
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
::selection {
  display: none;
}
</style>
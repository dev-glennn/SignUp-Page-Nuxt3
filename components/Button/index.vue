<script lang="ts" setup>
interface ButtonProps {
  text: string;
}
withDefaults(defineProps<ButtonProps>(), {
  text: 'Button'
});
// emit
defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();
</script>

<template>
  <button
    class="button text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600"
    @click="$emit('click', $event)"
  >
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
}
</style>

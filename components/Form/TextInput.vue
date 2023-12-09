<script lang="ts" setup>
// props
interface TextInputProps {
  modelValue: string;
  placeholder?: string;
  type?: string;
}
withDefaults(defineProps<TextInputProps>(), {
  modelValue: '',
  placeholder: '',
  type: 'text'
});
// emit
const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: Pick<TextInputProps, 'modelValue'>): void;
}>();
// actions
const clickHandler = (event: Event) => {
  if (!event?.target) return;
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <input
    class="text__input block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    @input="clickHandler"
  />
</template>

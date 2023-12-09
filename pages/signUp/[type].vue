<script lang="ts" setup>
const route = useRoute();
const type = route.params.type;
</script>

<template>
  <div class="text-bold">
    {{ type }}
  </div>
</template>

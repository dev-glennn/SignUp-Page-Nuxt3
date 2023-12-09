<script lang="ts" setup>
const route = useRoute();
const type = route.params.type;
const step = ['account', 'userInfo', 'cardInfo'];
// 회원가입 단계에 해당하지 않은 페이지를 호출할 경우
if (typeof type !== 'string' || !step.includes(type)) {
  navigateTo(`/signUp/${step[0]}`);
}
</script>

<template>
  <div class="text-bold">
    {{ type }}
  </div>
</template>

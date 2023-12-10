<script lang="ts" setup>
/** import */
const route = useRoute();

/** data */
const type = computed(() => route.query.type);
const step = [
  { id: 'account', title: '개인정보 입력' },
  { id: 'userInfo', title: '배송지 정보 입력' },
  { id: 'cardInfo', title: '결제정보 입력' }
];
const stepIds = step.map((key) => key.id);

/** condition */
if (typeof type.value !== 'string' || !stepIds.includes(type.value)) {
  navigateTo({ query: { type: stepIds[0] } });
}

/** computed */
const currentStep = computed<number>(() => {
  const findIndex = stepIds.findIndex((key) => key === type.value);
  return findIndex === -1 ? 0 : findIndex;
});
const title = computed(() => `0${currentStep.value + 1}. ${step[currentStep.value].title}`);
const nextStep = computed<number>(() => {
  let nextStep = currentStep.value + 1;
  if (nextStep >= step.length - 1) return step.length - 1;
  return nextStep;
});
const prevStep = computed<number>(() => {
  let prevStep = currentStep.value - 1;
  if (prevStep <= 0) return 0;
  return prevStep;
});
const isLastStep = computed<boolean>(() => currentStep.value >= step.length - 1);

/** Functions */
const nextHandler = () => {
  if (isLastStep.value) {
    return navigateTo({ path: '/' });
  }
  return navigateTo({ query: { type: step[nextStep.value].id } });
};
const prevHandler = () => {
  return navigateTo({ query: { type: step[prevStep.value].id } });
};
</script>

<template>
  <p class="text-xl mb-5 sm:mb-10">{{ title }}</p>
  <SignUpAccount
    v-if="type === stepIds[0]"
    @next="nextHandler"
  />
  <SignUpUserInfo
    v-if="type === stepIds[1]"
    @prev="prevHandler"
    @next="nextHandler"
  />
  <SignUpCardInfo
    v-if="type === stepIds[2]"
    @prev="prevHandler"
    @next="nextHandler"
  />
</template>

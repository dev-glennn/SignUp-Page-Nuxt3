<script lang="ts" setup>
/** import */
import { useUserStore } from '@/stores/user';
const store = useUserStore();

/** data */
const userInfo = computed(() => store.getUserInfo);
const accountInfo = computed(() => store.getAccountInfo);
const cardNumber = computed(() => store.getCardNumber);
const userInfoList = computed(() => {
  const userInfoValue = userInfo.value;
  return [
    { label: '주소', value: `[${userInfoValue.zonecode}] ${userInfoValue.address}` },
    { label: '연락처', value: userInfoValue.phoneNumber },
    { label: '이메일 주소', value: accountInfo.value.email },
    { label: '비밀번호', value: accountInfo.value.password },
    { label: '카드정보', value: Object.values(cardNumber.value).join('-') }
  ];
});

/** Function */
const setInitHandler = () => {
  store.$reset();
  return navigateTo({ path: '/signUp', query: { type: 'account' } });
};
</script>

<template>
  <div class="section">
    <p class="text-xl mb-10">🐈‍⬛ '{{ userInfo.name }}'님 회원가입이 완료되었어요!</p>
    <div class="flex flex-col gap-5">
      <FormInputWithErrorLabel
        v-for="(item, index) in userInfoList"
        :key="index"
        :label="item.label"
      >
        <FormTextInput
          :modelValue="item.value"
          readonly
        />
      </FormInputWithErrorLabel>
    </div>
    <Button
      class="mt-10"
      type="button"
      :text="'다시하기'"
      @click="setInitHandler"
    />
  </div>
</template>

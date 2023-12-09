<script lang="ts" setup>
/** import */
import { useUserStore } from '~/stores/user';
const store = useUserStore();

/** data */
const userInfo = computed(() => store.getUserInfo);
const accountInfo = computed(() => store.getAccountInfo);
const cardNumber = computed(() => store.getCardNumber);
const userInfoList = computed(() => {
  const userInfoValue = userInfo.value;
  return [
    { label: '이름', value: userInfoValue.name },
    { label: '주소', value: `[${userInfoValue.zonecode}] ${userInfoValue.address}` },
    { label: '연락처', value: userInfoValue.phoneNumber },
    { label: '이메일 주소', value: accountInfo.value.email },
    { label: '비밀번호', value: accountInfo.value.password },
    { label: '카드정보', value: Object.values(cardNumber.value).join('-') }
  ];
});
</script>

<template>
  <div class="section">
    <p class="text-xl mb-10">🔔 회원가입 완료!</p>
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
  </div>
</template>

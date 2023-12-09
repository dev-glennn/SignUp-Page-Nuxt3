<script lang="ts" setup>
/** import */
import { RegExpRule } from '~/composables/useValidationCheck';
import { useUserStore } from '~/stores/user';
const store = useUserStore();

/** data */
// email
const email = computed({
  get() {
    return store.getAccountInfo.email;
  },
  set(newValue) {
    store.setAccountEmail(newValue);
  }
});
// password
const password = computed({
  get() {
    return store.getAccountInfo.password;
  },
  set(newValue) {
    store.setAccountPassword(newValue);
  }
});
// password Check
const passwordCheck = ref<string>('');
// validation check
const isValidEmail = computed(() => RegExpRule.email.test(email.value));
const isValidPassword = computed(() => RegExpRule.password.test(password.value));
const isValidPasswordCheck = computed(() => password.value === passwordCheck.value);
const isValid = computed(() => isValidEmail.value && isValidPassword.value && isValidPasswordCheck.value);

/** emit */
const emit = defineEmits<{
  (e: 'next'): void;
}>();

/** function */
const submitHandler = (e: Event) => {
  e.preventDefault();
  if (!isValid.value) return;
  emit('next');
};
</script>

<template>
  <div class="section">
    <form
      class="flex flex-col gap-3"
      @submit="submitHandler"
    >
      <FormInputWithErrorLabel
        :label="'이메일'"
        :error="!isValidEmail ? '올바른 이메일 주소를 입력해주세요.' : ''"
      >
        <FormTextInput
          v-model="email"
          type="email"
          placeholder="dev.glennn@gmail.com"
        />
      </FormInputWithErrorLabel>

      <FormInputWithErrorLabel
        :label="'비밀번호'"
        :error="
          !isValidPassword ? '영문 대문자, 소문자, 숫자, 특수문자가 포함된 8자리 이상의 문자열을 입력해주세요.' : ''
        "
      >
        <FormTextInput
          v-model="password"
          type="password"
          placeholder="8자 이상의 영문 대소문자, 숫자, 특수문자의 조합"
        />
      </FormInputWithErrorLabel>

      <FormInputWithErrorLabel
        :label="'비밀번호 확인'"
        :error="!isValidPasswordCheck ? '비밀번호와 일치하지 않습니다.' : ''"
      >
        <FormTextInput
          v-model="passwordCheck"
          type="password"
          placeholder="비밀번호 확인"
        />
      </FormInputWithErrorLabel>

      <Button
        class="mt-10"
        type="submit"
        :text="'다음'"
      />
    </form>
  </div>
</template>

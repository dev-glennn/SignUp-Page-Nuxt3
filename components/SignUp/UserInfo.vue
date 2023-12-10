<script lang="ts" setup>
/** import */
import { RegExpRule } from '@/composables/useValidationCheck';
import { useUserStore } from '@/stores/user';
const store = useUserStore();
// head
const runtimeConfig = useRuntimeConfig();
useHead({
  script: [{ src: runtimeConfig.public.daumURL }]
});

/** data */
// name
const name = computed({
  get() {
    return store.getUserInfo.name;
  },
  set(newValue) {
    store.setUserName(newValue);
  }
});
// phoneNumber
const phoneNumber = computed({
  get() {
    return store.getUserInfo.phoneNumber;
  },
  set(newValue) {
    store.setUserPhoneNumber(newValue);
  }
});
// zonecode
const zonecode = computed(() => store.getUserInfo.zonecode);
// address
const address = computed(() => store.getUserInfo.address);
// validation check
const isValidName = computed(
  () =>
    (RegExpRule.korean.test(name.value) || RegExpRule.english.test(name.value)) &&
    !RegExpRule.disallowedCharacters.test(name.value)
);
const isValidPhoneNumber = computed(() => RegExpRule.phoneNumber.test(phoneNumber.value));
const isValidAddress = computed(() => !!zonecode.value || !!address.value);
const isValid = computed(() => isValidName.value && isValidPhoneNumber.value && address.value);

/** emit */
const emit = defineEmits<{
  (e: 'prev'): void;
  (e: 'next'): void;
}>();

/** Function */
const daumPostCodeOpen = () => {
  new daum.Postcode({
    oncomplete: function (data: { zonecode: string; address: string }) {
      store.setUserZoneCode(data.zonecode);
      store.setUserAddress(data.address);
    }
  }).open();
};
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
        :label="'이름'"
        :error="!isValidName ? '2글자 이상의 한글 완성형, 또는 3글자 이상의 영문 알파벳을 입력해주세요.' : ''"
      >
        <FormTextInput
          v-model="name"
          placeholder="2글자 이상의 한글, 또는 3글자 이상의 영문 이름"
        />
      </FormInputWithErrorLabel>

      <FormInputWithErrorLabel
        :label="'연락처'"
        :error="!isValidPhoneNumber ? '올바른 휴대폰번호를 입력해주세요.' : ''"
      >
        <FormTextInput
          v-model="phoneNumber"
          placeholder="ex) 010-0000-0000"
        />
      </FormInputWithErrorLabel>

      <FormInputWithErrorLabel
        :label="'주소'"
        :error="!isValidAddress ? '우편번호 및 주소를 확인해주세요.' : ''"
      >
        <div class="flex items-center mb-2 gap-2">
          <FormTextInput
            v-model="zonecode"
            placeholder="우편번호"
            readonly
          />
          <Button
            :text="'우편번호'"
            class="shrink-0"
            @click="daumPostCodeOpen"
          />
        </div>
        <FormTextInput
          v-model="address"
          placeholder="주소"
          readonly
        />
      </FormInputWithErrorLabel>

      <div class="flex gap-4 mt-10">
        <Button
          type="button"
          :text="'이전'"
          class="flex-1"
          @click="$emit('prev')"
        />
        <Button
          type="submit"
          :text="'다음'"
          class="flex-1"
        />
      </div>
    </form>
  </div>
</template>

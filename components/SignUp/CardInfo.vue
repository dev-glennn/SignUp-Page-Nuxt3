<script lang="ts" setup>
/** import */
import { RegExpRule } from '@/composables/useValidationCheck';
import { useUserStore } from '@/stores/user';
const store = useUserStore();

/** data */
// cardNumber1
const cardNumber1 = computed({
  get() {
    return store.getCardNumber.number1;
  },
  set(newValue) {
    store.setCardNumber1(newValue);
  }
});
// cardNumber2
const cardNumber2 = computed({
  get() {
    return store.getCardNumber.number2;
  },
  set(newValue) {
    store.setCardNumber2(newValue);
  }
});
// cardNumber3
const cardNumber3 = computed({
  get() {
    return store.getCardNumber.number3;
  },
  set(newValue) {
    store.setCardNumber3(newValue);
  }
});
// cardNumber4
const cardNumber4 = computed({
  get() {
    return store.getCardNumber.number4;
  },
  set(newValue) {
    store.setCardNumber4(newValue);
  }
});

/** computed */
const cardNumber = computed(() =>
  [cardNumber1.value, cardNumber2.value, cardNumber3.value, cardNumber4.value].join(' ')
);
const isValid = computed(() => {
  if (!RegExpRule.cardNumber.test(cardNumber.value)) {
    return false;
  }
  const digits = cardNumber.value.replace(/\s/g, '').split('').map(Number);
  let sum = 0;
  // 5105 1051 0188 1288
  // 8888 8888 8888 8888
  // 1234 5678 9012 3452
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];
    if (i % 2 === 0) {
      digit *= 2;
      if (digit >= 9) {
        digit = Math.floor(digit / 10) + (digit % 10);
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
});

/** emit */
const emit = defineEmits<{
  (e: 'prev'): void;
  (e: 'next'): void;
}>();

/** Function */
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
        :label="'카드번호'"
        :error="!isValid ? '유효하지 않은 카드번호 입니다.' : ''"
      >
        <div class="flex gap-2 items-center">
          <FormTextInput
            v-model="cardNumber1"
            maxLength="4"
          />
          <FormTextInput
            v-model="cardNumber2"
            maxLength="4"
          />
          <FormTextInput
            v-model="cardNumber3"
            maxLength="4"
          />
          <FormTextInput
            v-model="cardNumber4"
            maxLength="4"
          />
        </div>
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
          :text="'완료'"
          class="flex-1"
        />
      </div>
    </form>
  </div>
</template>

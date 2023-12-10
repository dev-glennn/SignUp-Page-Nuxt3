import { defineStore } from 'pinia';
import { isEmpty, useHasEmptyValues } from '@/composables/useHasEmptyValue';

type AccountType = Pick<RegisterSchema, 'email' | 'password'>;
type UserType = Pick<RegisterSchema, 'name' | 'phoneNumber' | 'zonecode' | 'address'>;
type CardType = ValueOf<Pick<RegisterSchema, 'cardNumber'>>;

const initialAccountInfo: AccountType = Object.freeze({
  email: '',
  password: ''
});
const initialUserInfo: UserType = Object.freeze({
  name: '',
  phoneNumber: '',
  zonecode: '',
  address: ''
});

const initialCardNumber: CardType = Object.freeze({
  number1: '',
  number2: '',
  number3: '',
  number4: ''
});

export const useUserStore = defineStore('user', {
  state: () => ({
    accountInfo: structuredClone(initialAccountInfo),
    userInfo: structuredClone(initialUserInfo),
    cardNumber: structuredClone(initialCardNumber)
  }),
  getters: {
    getAccountInfo: (state) => state.accountInfo,
    getUserInfo: (state) => state.userInfo,
    getCardNumber: (state) => state.cardNumber,
    getAuth: (state) => {
      return !useHasEmptyValues(state.accountInfo) && !useHasEmptyValues(state.userInfo) && !isEmpty(state.cardNumber);
    }
  },
  actions: {
    setAccountInfo(accountInfo: AccountType) {
      this.accountInfo = accountInfo;
    },
    setAccountEmail(email: ValueOf<Pick<AccountType, 'email'>>) {
      this.accountInfo.email = email;
    },
    setAccountPassword(password: ValueOf<Pick<AccountType, 'password'>>) {
      this.accountInfo.password = password;
    },
    setUserInfo(userInfo: UserType) {
      this.userInfo = userInfo;
    },
    setUserName(name: ValueOf<Pick<UserType, 'name'>>) {
      this.userInfo.name = name;
    },
    setUserPhoneNumber(phoneNumber: ValueOf<Pick<UserType, 'phoneNumber'>>) {
      this.userInfo.phoneNumber = phoneNumber;
    },
    setUserZoneCode(zonecode: ValueOf<Pick<UserType, 'zonecode'>>) {
      this.userInfo.zonecode = zonecode;
    },
    setUserAddress(address: ValueOf<Pick<UserType, 'address'>>) {
      this.userInfo.address = address;
    },
    setCardNumber1(number1: ValueOf<Pick<CardType, 'number1'>>) {
      this.cardNumber.number1 = number1;
    },
    setCardNumber2(number2: ValueOf<Pick<CardType, 'number2'>>) {
      this.cardNumber.number2 = number2;
    },
    setCardNumber3(number3: ValueOf<Pick<CardType, 'number3'>>) {
      this.cardNumber.number3 = number3;
    },
    setCardNumber4(number4: ValueOf<Pick<CardType, 'number4'>>) {
      this.cardNumber.number4 = number4;
    },
    setInit() {
      this.accountInfo = initialAccountInfo;
      this.userInfo = initialUserInfo;
      this.cardNumber = initialCardNumber;
    }
  }
});

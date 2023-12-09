import { defineStore } from 'pinia';

const initialAccountInfo: AccountType = {
  email: '',
  password: ''
};
const initialUserInfo: UserType = {
  name: '',
  phoneNumber: '',
  address: ''
};
const initialCardNumber: CardType = {
  part1: '',
  part2: '',
  part3: '',
  part4: ''
};

export const useUserStore = defineStore('user', {
  state: () => ({
    accountInfo: initialAccountInfo,
    userInfo: initialUserInfo,
    cardNumber: initialCardNumber
  }),
  getters: {
    getAccountInfo: (state) => state.accountInfo,
    getUserInfo: (state) => state.userInfo,
    getCardNumber: (state) => state.cardNumber,
    getAuth: (state) => {
      return (
        !useHasEmptyValues(state.accountInfo) &&
        !useHasEmptyValues(state.userInfo) &&
        !useHasEmptyValues(state.cardNumber)
      );
    }
  },
  actions: {
    setAccountInfo(accountInfo: { email: string; password: string }) {
      this.accountInfo = accountInfo;
    },
    setUserInfo(userInfo: { name: string; phoneNumber: string; address: string }) {
      this.userInfo = userInfo;
    },
    setCardInfo(cardInfo: { part1: string; part2: string; part3: string; part4: string }) {
      this.cardNumber = cardInfo;
    },
    setInit() {
      this.accountInfo = initialAccountInfo;
      this.userInfo = initialUserInfo;
      this.cardNumber = initialCardNumber;
    }
  }
});

interface RegisterSchema {
  email: string; // 이메일
  password: string; // 비밀번호
  name: string; // 이름
  phoneNumber: string; // 휴대폰 번호
  zonecode: string; // 우편번호
  address: string; // 주소
  cardNumber: {
    number1: string;
    number2: string;
    number3: string;
    number4: string;
  }; // 카드번호
}

type ValueOf<T> = T[keyof T];

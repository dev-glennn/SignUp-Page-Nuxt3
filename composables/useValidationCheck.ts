export const RegExpRule: { [id: string]: RegExp } = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
  korean: /^[가-힣]{2,}$/,
  english: /^[a-zA-Z]{3,}$/,
  disallowedCharacters: /[^\w가-힣]/,
  phoneNumber: /^0\d{2,3}[ -]?\d{3,4}[ -]?\d{4}$/,
  cardNumber: /^(?:\d{4}\s?){4}$/
};

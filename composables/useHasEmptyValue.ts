const isEmpty = (value: undefined | null | string | object) => {
  if (value === undefined || value === null) {
    return true; // undefined 또는 null인 경우
  }

  if (typeof value === 'string' && value.trim() === '') {
    return true; // 빈 문자열인 경우
  }

  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true; // 빈 객체인 경우
  }

  return false; // 빈 값이 아닌 경우
};

export const useHasEmptyValues = (obj: { [id: string]: string }) => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (isEmpty(obj[key])) {
        return true; // 빈 값이 존재함
      }
    }
  }
  return false;
};

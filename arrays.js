export const length = (arr) => {
  let r = 0;
  // eslint-disable-next-line no-unused-vars
  for (const iterator of arr) {
    r++;
  }

  return r;
};

export const push = (arr, ...elements) => {
  if (length(elements) <= 0) return 0;
  for (const element of elements) {
    arr[length(arr)] = element;
  }
  return length(arr);
};

export const map = (array, callbackFunction) => {
  const newArray = [];
  for (const item of array) {
    push(newArray, callbackFunction(item));
  }
  return newArray;
};

export const filter = (array, callbackFunction) => {
  const newArray = [];
  for (const item of array) {
    if (callbackFunction(item)) {
      push(newArray, item);
    }
  }
  return newArray;
};

export const find = (array, callbackFunction) => {
  for (const item of array) {
    if (callbackFunction(item)) {
      return item;
    }
  }
};

export const findIndex = (array, callbackFunction) => {
  for (let i = 0; i < length(array); i++) {
    if (callbackFunction(array[i])) {
      return i;
    }
  }
  return -1;
};

export const join = (array, separator) => {
  if (!separator) {
    separator = ",";
  }
  let joinedString = "";
  for (const item of array) {
    joinedString += item;
    if (item !== array[length(array) - 1]) {
      joinedString += separator;
    }
  }
  return joinedString;
};

export const some = (arr, callbackFunction) => {
  for (const item of arr) {
    if (callbackFunction(item)) return true;
  }

  return false;
};

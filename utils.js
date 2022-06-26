const arrayMethods = {
  orEquals: "orEquals",
  orNotEquals: "orNotEquals",
  andEquals: "andEquals",
  andNotEquals: "andNotEquals",
  orGratherTahn: "orGratherTahn", //
  orNotGratherThan: "orNotGratherThan", //
  orGreaterThan: "orGreaterThan", //
  orNotGreaterThan: "orNotGreaterThan", //
  andGratherThan: "andGratherThan", //
  andNotGratherThan: "andNotGratherThan", //
  orLessThan: "orLessThan", //
  orNotLessThan: "orNotLessThan", //
  andLessThan: "andLessThan", //
  andNotLessThan: "andNotLessThan", //
};

Object.defineProperty(Array.prototype, arrayMethods.orEquals, {
  value: function (targetValue) {
    return this?.includes(targetValue);
  },
});

Object.defineProperty(Array.prototype, arrayMethods.orNotEquals, {
  value: function (targetValue) {
    return this?.some((value) => value !== targetValue);
  },
});

Object.defineProperty(Array.prototype, arrayMethods.andEquals, {
  value: function (targetValue) {
    return this?.every((value) => {
      return value === targetValue;
    });
  },
});

Object.defineProperty(Array.prototype, arrayMethods.andNotEquals, {
  value: function (targetValue) {
    return this?.every((value) => {
      return value !== targetValue;
    });
  },
});

const arr = ["1-wellig", "2-wellig", "3-wellig"];

console.log(arr.orEquals("2-wellig"));
console.log(arr.orNotEquals("2-wellig"));
console.log(arr.andEquals("2-wellig"));
console.log(arr.andNotEquals("2-wellig"));

export const max = (num1, num2, num3, num4) => {
  if (typeof num1 == "string" && typeof num2 == "number") {
    if (num1.includes("vw")) {
      return (parseInt(num1.slice(0, num1.length - 2)) * num3) / 100 > num2
        ? num2
        : (parseInt(num1.slice(0, num1.length - 2)) * num3) / 100;
    } else if (num1.includes("vh")) {
      return (parseInt(num1.slice(0, num1.length - 2)) * num4) / 100 > num2
        ? num2
        : (parseInt(num1.slice(0, num1.length - 2)) * num4) / 100;
    }
  } else if (typeof num2 == "string" && typeof num1 == "number") {
    if (num2.includes("vw")) {
      return (parseInt(num2.slice(0, num2.length - 2)) * num3) / 100 > num1
        ? num1
        : (parseInt(num2.slice(0, num2.length - 2)) * num3) / 100;
    } else if (num2.includes("vh")) {
      return (parseInt(num2.slice(0, num2.length - 2)) * num4) / 100 > num1
        ? num1
        : (parseInt(num2.slice(0, num2.length - 2)) * num4) / 100;
    }
  }
};

export const largestPhoneSize = 520;

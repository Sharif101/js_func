function feeCalculation(fee) {
  if (fee > 75) {
    let a = fee * 0.25 + fee;
    if (a % 50 !== 0) {
      let res = Math.ceil(a / 50) * 50;
      return res;
    } else {
      return a;
    }
  } else {
    return 100;
  }
}

// test cases
// console.log("100 =>", feeCalculation(60));
// console.log("150 =>", feeCalculation(100));
// console.log("250 =>", feeCalculation(200));
// console.log("400 =>", feeCalculation(300));
//    console.log("500 =>", feeCalculation(400));

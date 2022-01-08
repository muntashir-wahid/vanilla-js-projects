"use strict";

// Temperature converter

const outputFildsForTemp = [
  document.querySelector(".celcius-value"),
  document.querySelector(".farenheit-value"),
  document.querySelector(".kelvin-value"),
];
const outputMsgFildForTemp = document.querySelector(".show-temp");
document.querySelector(".convert-temp").addEventListener("click", function () {
  const inputValues = [
    Number(document.querySelector(".celcius-value").value),
    Number(document.querySelector(".farenheit-value").value),
    Number(document.querySelector(".kelvin-value").value),
  ];
  const celcToFar = (celcValue) => (9 * celcValue) / 5 + 32;
  const celcToKel = (celcValue) => celcValue + 273;
  const outputValuesFroCelc = [
    inputValues[0],
    celcToFar(inputValues[0]),
    celcToKel(inputValues[0]),
  ];
  // console.log(outputValuesForCalc);
  const farToCel = (farValue) => ((farValue - 32) * 5) / 9;
  const farToKel = (farValue) => ((farValue - 32) * 5) / 9 + 273;
  const outputValuesFroFar = [
    farToCel(inputValues[1]),
    inputValues[1],
    farToKel(inputValues[1]),
  ];
  const kelToCelc = (kelValue) => kelValue - 273;
  const kelToFar = (kelValue) => ((kelValue - 273) * 9) / 5 + 32;
  const outputValuesForKel = [
    kelToCelc(inputValues[2]),
    kelToFar(inputValues[2]),
    inputValues[2],
  ];

  if (!inputValues[1] && !inputValues[2]) {
    for (let i = 0; i < outputFildsForTemp.length; i++) {
      outputFildsForTemp[i].value = outputValuesFroCelc[i];
    }
    outputMsgFildForTemp.textContent = `${outputValuesFroCelc[0]} degree celsius is ${outputValuesFroCelc[1]} degree farenheit and ${outputValuesFroCelc[2]} kelvin.`;
  } else if (!inputValues[0] && !inputValues[2]) {
    for (let i = 0; i < inputValues.length; i++) {
      outputFildsForTemp[i].value = outputValuesFroFar[i];
    }
    outputMsgFildForTemp.textContent = `${outputValuesFroFar[1]} degree farenheite is ${outputValuesFroFar[0]} degree celsius and ${outputValuesFroFar[2]} kelvin.`;
  } else if (!inputValues[0] && !inputValues[1]) {
    for (let i = 0; i < inputValues.length; i++) {
      outputFildsForTemp[i].value = outputValuesForKel[i];
    }
    outputMsgFildForTemp.textContent = `${outputValuesForKel[2]} kelvin is ${outputValuesForKel[0]} degree celsius and ${outputValuesForKel[1]} degree farenhite.`;
  }
});

// Relode button for temperature
document.querySelector(".relode-temp").addEventListener("click", function () {
  for (let i = 0; i < outputFildsForTemp.length; i++) {
    outputFildsForTemp[i].value = "";
    outputMsgFildForTemp.textContent = "";
  }
});

// Currency converter
const outputFildsForCurrency = [
  document.querySelector(".bdt"),
  document.querySelector(".doller"),
  document.querySelector(".pound"),
  document.querySelector(".inr"),
];
const outputMsgFildForCurrency = document.querySelector(".show-currency");
document
  .querySelector(".convert-currency")
  .addEventListener("click", function () {
    const inputValues = [
      Number(document.querySelector(".bdt").value),
      Number(document.querySelector(".doller").value),
      Number(document.querySelector(".pound").value),
      Number(document.querySelector(".inr").value),
    ];
    // console.log(inputValues);
    // console.log(outputFildsForCurrency);
    const bdtToUsd = (bdt) => bdt * 0.012;
    const bdtToPound = (bdt) => bdt * 0.0088;
    const bdtToInr = (bdt) => bdt * 0.89;
    const outputValuesforBdt = [
      inputValues[0],
      bdtToUsd(inputValues[0]),
      bdtToPound(inputValues[0]),
      bdtToInr(inputValues[0]),
    ];
    // console.log(outputValuesforBdt);
    const usdToBdt = (usd) => usd * 85.84;
    const usdToPound = (usd) => usd * 0.75;
    const usdToInr = (usd) => usd * 76.03;
    const outputValuesforUsd = [
      usdToBdt(inputValues[1]),
      inputValues[1],
      usdToPound(inputValues[1]),
      usdToInr(inputValues[1]),
    ];
    // console.log(outputValuesforUsd);
    const poundToBdt = (pound) => pound * 113.74;
    const poundToUsd = (pound) => pound * 1.32;
    const poundToInr = (pound) => pound * 100.74;
    const outputValuesforPound = [
      poundToBdt(inputValues[2]),
      poundToUsd(inputValues[2]),
      inputValues[2],
      poundToInr(inputValues[2]),
    ];
    // console.log(outputValuesforPound);
    const inrToBdt = (inr) => inr * 1.13;
    const inrToUsd = (inr) => inr * 0.013;
    const inrToPound = (inr) => inr * 0.0099;
    const outputValuesforInr = [
      inrToBdt(inputValues[3]),
      inrToUsd(inputValues[3]),
      inrToPound(inputValues[3]),
      inputValues[3],
    ];
    // console.log(outputValuesforInr);
    if (!inputValues[1] && !inputValues[2] && !inputValues[3]) {
      for (let i = 0; i < inputValues.length; i++) {
        outputFildsForCurrency[i].value = outputValuesforBdt[i];
      }
      outputMsgFildForCurrency.textContent = `${outputValuesforBdt[0]} BDT is ${outputValuesforBdt[1]} in USD ${outputValuesforBdt[2]} in Pound and ${outputValuesforBdt[3]} in INR.`;
    } else if (!inputValues[0] && !inputValues[2] && !inputValues[3]) {
      for (let i = 0; i < inputValues.length; i++) {
        outputFildsForCurrency[i].value = outputValuesforUsd[i];
      }
      outputMsgFildForCurrency.textContent = `${outputValuesforUsd[1]} USD is ${outputValuesforUsd[0]} in BDT ${outputValuesforUsd[2]} in Pound and ${outputValuesforUsd[3]} in INR.`;
    } else if (!inputValues[0] && !inputValues[1] && !inputValues[3]) {
      for (let i = 0; i < inputValues.length; i++) {
        outputFildsForCurrency[i].value = outputValuesforPound[i];
      }
      outputMsgFildForCurrency.textContent = `${outputValuesforPound[2]} Pound is ${outputValuesforPound[0]} in BDT ${outputValuesforPound[1]} in USD and ${outputValuesforPound[3]} in INR.`;
    } else if (!inputValues[0] && !inputValues[1] && !inputValues[2]) {
      for (let i = 0; i < inputValues.length; i++) {
        outputFildsForCurrency[i].value = outputValuesforInr[i];
      }
      outputMsgFildForCurrency.textContent = `${outputValuesforInr[3]} INR is ${outputValuesforInr[0]} in BDT ${outputValuesforInr[1]} in USD and ${outputValuesforInr[2]} in Pound.`;
    }
  });

// Relode button for currency

document
  .querySelector(".relode-currency")
  .addEventListener("click", function () {
    for (let i = 0; i < outputFildsForCurrency.length; i++) {
      outputFildsForCurrency[i].value = "";
      outputMsgFildForCurrency.textContent = "";
    }
  });

// Age calculator

document.querySelector(".calculate-age").addEventListener("click", function () {
  const inputYeras = [
    Number(document.querySelector(".birth-year").value),
    Number(document.querySelector(".current-year").value),
  ];
  console.log(inputYeras);
  const calcAge = (fromYear, toYear) => toYear - fromYear;
  let age = calcAge(inputYeras[0], inputYeras[1]);
  console.log(age);
  const toMonths = (ageValue) => ageValue * 12;
  const toDays = (ageValue) => ageValue * 12 * 30;
  const outputFilds = [
    document.querySelector(".years"),
    document.querySelector(".months"),
    document.querySelector(".days"),
  ];
  const outputValues = [age, toMonths(age), toDays(age)];
  console.log(outputValues);
  for (let i = 0; i < outputFilds.length; i++) {
    outputFilds[i].textContent = outputValues[i];
  }
  document.querySelector(
    ".show-age"
  ).textContent = `Hello!!Your age is ${age} year(s).It's ${outputValues[1]}  month(s) and ${outputValues[2]} day(s).`;
});

// Length converter
const outputFildsForLength = [
  document.querySelector(".inch"),
  document.querySelector(".foot"),
  document.querySelector(".merer"),
  document.querySelector(".centimeter"),
];
const outputMsgFildForLength = document.querySelector(".show-length");
document
  .querySelector(".calculate-length")
  .addEventListener("click", function () {
    const inputValues = [
      Number(document.querySelector(".inch").value),
      Number(document.querySelector(".foot").value),
      Number(document.querySelector(".merer").value),
      Number(document.querySelector(".centimeter").value),
    ];
    const inchToFt = (inchValue) => inchValue * 0.0833;
    const inchToMeter = (inchValue) => inchValue * 0.0254;
    const inchToCm = (inchValue) => inchValue * 2.54;
    const outputValuesforInch = [
      inputValues[0],
      inchToFt(inputValues[0]),
      inchToMeter(inputValues[0]),
      inchToCm(inputValues[0]),
    ];
    // console.log(outputValuesforInch);
    const ftToInch = (ftValue) => ftValue * 12;
    const ftToMeter = (ftValue) => ftValue * 0.3048;
    const ftToCm = (ftValue) => ftValue * 30.48;
    const outputValuesforFt = [
      ftToInch(inputValues[1]),
      inputValues[1],
      ftToMeter(inputValues[1]),
      ftToCm(inputValues[1]),
    ];
    // console.log(outputValuesforFt);
    const meterToInch = (meterValue) => meterValue * 39.3701;
    const meterToFt = (meterValue) => meterValue * 3.28084;
    const meterToCm = (meterValue) => meterValue * 100;
    const outputValuesforMeter = [
      meterToInch(inputValues[2]),
      meterToFt(inputValues[2]),
      inputValues[2],
      meterToCm(inputValues[2]),
    ];
    // console.log(outputValuesforMeter);
    const cmToInch = (cmValue) => cmValue * 0.393701;
    const cmToFt = (cmValue) => cmValue * 0.0328084;
    const cmToMeter = (cmValue) => cmValue * 0.01;
    const outputValuesforCm = [
      cmToInch(inputValues[3]),
      cmToFt(inputValues[3]),
      cmToMeter(inputValues[3]),
      inputValues[3],
    ];
    // console.log(outputValuesforCm);
    if (!inputValues[1] && !inputValues[2] && !inputValues[3]) {
      for (let i = 0; i < inputValues.length; i++) {
        outputFildsForLength[i].value = outputValuesforInch[i];
      }
      outputMsgFildForLength.textContent = `${outputValuesforInch[0]} Inch(s) is ${outputValuesforInch[1]} in Foot ${outputValuesforInch[2]} in Meter and ${outputValuesforInch[3]} in Centimeter.`;
    } else if (!inputValues[0] && !inputValues[2] && !inputValues[3]) {
      for (let i = 0; i < inputValues.length; i++) {
        outputFildsForLength[i].value = outputValuesforFt[i];
      }
      outputMsgFildForLength.textContent = `${outputValuesforFt[1]} Foot(s) is ${outputValuesforFt[0]} in Inch ${outputValuesforFt[2]} in Meter and ${outputValuesforFt[3]} in Centimeter.`;
    } else if (!inputValues[0] && !inputValues[1] && !inputValues[3]) {
      for (let i = 0; i < inputValues.length; i++) {
        outputFildsForLength[i].value = outputValuesforMeter[i];
      }
      outputMsgFildForLength.textContent = `${outputValuesforMeter[2]} Meter(s) is ${outputValuesforMeter[0]} in Inch ${outputValuesforMeter[1]} in Foot and ${outputValuesforMeter[3]} in Centimeter.`;
    } else if (!inputValues[0] && !inputValues[1] && !inputValues[2]) {
      for (let i = 0; i < inputValues.length; i++) {
        outputFildsForLength[i].value = outputValuesforCm[i];
      }
      outputMsgFildForLength.textContent = `${outputValuesforCm[3]} Centimeter(s) is ${outputValuesforCm[0]} in Inch ${outputValuesforCm[1]} in Foot and ${outputValuesforCm[2]} in Meter.`;
    }
  });
// Relode button for length
document.querySelector(".relode-length").addEventListener("click", function () {
  for (let i = 0; i < outputFildsForLength.length; i++) {
    outputFildsForLength[i].value = "";
    outputMsgFildForLength.textContent = "";
  }
});

// Mass converter
const outputFildsForMass = [
  document.querySelector(".kg"),
  document.querySelector(".gram"),
  document.querySelector(".m-pound"),
];
const outputMsgFildForMass = document.querySelector(".show-mass");
document
  .querySelector(".calculate-mass")
  .addEventListener("click", function () {
    const inputValues = [
      Number(document.querySelector(".kg").value),
      Number(document.querySelector(".gram").value),
      Number(document.querySelector(".m-pound").value),
    ];
    const kgToGram = (kgValue) => kgValue * 1000;
    const kgToPound = (kgValue) => kgValue * 2.20462;
    const outputValuesFroKg = [
      inputValues[0],
      kgToGram(inputValues[0]),
      kgToPound(inputValues[0]),
    ];
    // console.log(outputValuesFroKg);
    const gramToKg = (gram) => gram * 0.001;
    const gramToPound = (gram) => gram * 0.00220462;
    const outputValuesFroGram = [
      gramToKg(inputValues[1]),
      inputValues[1],
      gramToPound(inputValues[1]),
    ];
    // console.log(outputValuesFroGram);
    const poundToKg = (pound) => pound * 0.453592;
    const poundToGraam = (pound) => pound * 453.592;
    const outputValuesFroPound = [
      poundToKg(inputValues[2]),
      poundToGraam(inputValues[2]),
      inputValues[2],
    ];
    // console.log(outputValuesFroPound);
    if (!inputValues[1] && !inputValues[2]) {
      for (let i = 0; i < inputValues.length; i++) {
        outputFildsForMass[i].value = outputValuesFroKg[i];
      }
      outputMsgFildForMass.textContent = `${outputValuesFroKg[0]} kg(s) is ${outputValuesFroKg[1]} in gram and ${outputValuesFroKg[2]} in pound.`;
    } else if (!inputValues[0] && !inputValues[2]) {
      for (let i = 0; i < inputValues.length; i++) {
        outputFildsForMass[i].value = outputValuesFroGram[i];
      }
      outputMsgFildForMass.textContent = `${outputValuesFroGram[1]} gram(s) is ${outputValuesFroGram[0]} in kg and ${outputValuesFroGram[2]} in pound.`;
    } else if (!inputValues[0] && !inputValues[1]) {
      for (let i = 0; i < inputValues.length; i++) {
        outputFildsForMass[i].value = outputValuesFroPound[i];
      }
      outputMsgFildForMass.textContent = `${outputValuesFroPound[2]} pound(s) ${outputValuesFroPound[0]} in kg and ${outputValuesFroPound[1]} in gram.`;
    }
  });
document.querySelector(".relode-mass").addEventListener("click", function () {
  for (let i = 0; i < outputFildsForMass.length; i++) {
    outputFildsForMass[i].value = "";
    outputMsgFildForMass.textContent = "";
  }
});

// BMI calculator

document.querySelector(".calculate-bmi").addEventListener("click", function () {
  const inputValues = [
    Number(document.querySelector(".mas").value),
    Number(document.querySelector(".height").value),
  ];
  console.log(inputValues);
  const outputFild = document.querySelector(".bmi");
  const calcBmi = (mass, height) => mass / height ** 2;
  const bmiValue = calcBmi(inputValues[0], inputValues[1]);
  console.log(bmiValue);
  outputFild.textContent = bmiValue;
  document.querySelector(
    ".show-bmi"
  ).textContent = `Hello!!Your mass is ${inputValues[0]} kg(s) and height is ${inputValues[1]} meter(s).Your BMI is ${bmiValue}.`;
});

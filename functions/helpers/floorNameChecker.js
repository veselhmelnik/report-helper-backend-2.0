const { floorNameReg } = require("../../regularExpressions");

function floorNameChecker(floor) {
  console.log(floor);
  let isNameCorrect = false;
  for (let key in floorNameReg) {
    if (floor.match(floorNameReg[key])) {
      isNameCorrect = true;
    }
  }
  return isNameCorrect;
}

module.exports = floorNameChecker;

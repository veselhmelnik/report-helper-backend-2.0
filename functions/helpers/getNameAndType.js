const { nameAndTypeReg } = require("../../regularExpressions");

function nameAndType(text, nameReg, typeReg) {
  console.log(text);
  return {
    floorName: text.match(nameReg)[0],
    floorType: text.match(typeReg)[0],
  };
}

function getNameAndType(text) {
  const {
    floorTypeAtticReg,
    floorNameAtticReg,
    floorTypeRoofReg,
    floorNameRoofReg,
    floorTypeDwellingReg,
    floorNameDwellingReg,
    floorNameOtherReg,
    floorTypeOtherReg,
  } = nameAndTypeReg;

  if (text.includes("Other Structure")) {
    return nameAndType(text, floorNameOtherReg, floorTypeOtherReg);
  } else if (text.includes("Attic")) {
    return nameAndType(text, floorNameAtticReg, floorTypeAtticReg);
  } else if (text.includes("Roof")) {
    return nameAndType(text, floorNameRoofReg, floorTypeRoofReg);
  } else {
    return nameAndType(text, floorNameDwellingReg, floorTypeDwellingReg);
  }
}

module.exports = getNameAndType;

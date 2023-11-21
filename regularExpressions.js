const addressReg = /(?<=Property Report - )(.*)(?= Report Generated)/gm;
const areaReg = /(?<=Living Area:) \d{2,7}ft./gm;
const floorReg = /\d{1,2}.(?=Floor)/gm;
const bedroomsReg = /\d{1,2}.(?=Bedrooms)/gm;
const bathesReg = /(?<=Bedrooms)(.*)(?=Bathroom)/gm;
const floorNameOtherReg = /Other Structure \d*\/(.*)(?= RoomFloor)/;
const floorTypeOtherReg = /\D{11} (?=Other Structure \d*\/(.*)(?= RoomFloor))/;
const floorNameDwellingReg = /Dwelling \d*\/(.*\s)(?=RoomFloor)/g;
const floorTypeDwellingReg = /\D{12} (?=Dwelling \d*\/)/g;
const floorNameRoofReg = /Dwelling \d*\/(.*\s)(?=RoomFloor)/g;
const floorTypeRoofReg = /Roof/;
const floorNameAtticReg = /Dwelling \d*\/(.*\s)(?=RoomFloor)/g;
const floorTypeAtticReg = /\D{20} (?=Dwelling \d*\/)/g;
const roomsReg = /\D{1,16}-\d\d/gm;
const aboveFloorReg = /Dwelling \w*\/NA\/Above Grade \w/;
const belowFloorReg = /Dwelling \w*\/NA\/Below Grade \w/;
const atticFloorReg = /Dwelling \w*\/NA\/Attic/;
const OtheStructureFloorReg = /Other Structure \w*\/NA\//;

const nameAndTypeReg = {
    floorNameOtherReg,
    floorTypeOtherReg,
    floorNameDwellingReg,
    floorTypeDwellingReg,
    floorNameRoofReg,
    floorTypeRoofReg,
    floorNameAtticReg,
    floorTypeAtticReg,
}

const mainInfoReg = {
    addressReg,
    areaReg,
    floorReg,
    bedroomsReg,
    bathesReg
}

const floorNameReg = {
    aboveFloorReg,
    belowFloorReg,
    atticFloorReg,
    OtheStructureFloorReg
}
module.exports = {mainInfoReg, floorNameReg, nameAndTypeReg, roomsReg}
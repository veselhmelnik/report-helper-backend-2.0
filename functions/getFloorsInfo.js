const helper = require('./helpers');
const {roomsReg} = require('../regularExpressions');

function mainInfo (rooms, text) {
  const nameAndType = helper.getNameAndType(text);
  return {
    roomCount: rooms.length,
    floorName: nameAndType.floorName.trim(),
    isCorrectFloorName: helper.floorNameChecker(nameAndType.floorName),
    floorType: nameAndType.floorType.trim(),
    isCorrectFloorType: helper.floorTypeChecker(nameAndType.floorName, nameAndType.floorType)
  }
}

function getFloorsInfo(text) {
  let floorArr = [];
  let roomsArr = [];
  
  for (let i = 1; i < text.length - 1; i++) {
    const rooms = text[i].match(roomsReg);
    let floorObj = mainInfo(rooms, text[i]);

    arr = [];
    rooms.map((room) => {
      if (room.includes('ft')) {
        const reg = /[A-Z]\D{1,15}\d\d/;
        roomsArr.push(room.match(reg)[0].trim());
        arr.push(room.match(reg)[0].trim());
      } else {
        roomsArr.push(room.trim());
        arr.push(room.trim());
      }
      floorObj.rooms = arr;
    })
    floorArr.push(floorObj);
  }
  floorArr.map((item) => {
    item.rooms = item.rooms.map((room) => room = helper.roomNumberChecker(roomsArr, room, item.floorName));
  })
  
  return floorArr;
}

module.exports = getFloorsInfo;
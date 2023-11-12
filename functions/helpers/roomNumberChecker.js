const listOfDwellingRooms = [
  "Entry",
  "Hallway",
  "Kitchen",
  "Living Room",
  "Den",
  "Dining",
  "Family Room",
  "Bathroom",
  "Water Closet",
  "Bedroom",
  "Closet",
  "Walk-In Closet",
  "Laundry",
  "Room",
  "Media Room",
  "Loft",
  "Pantry",
  "Recreation  Room",
  "Stairs",
  "Sun Room",
  "Unfinished",
  "Garage",
  "Utility/Storage",
  "Bay Window",
  "Void",
  "Linen",
];
const listOfOtherStructureRooms = [
  "Shed",
  "Barn",
  "Greenhouse",
  "Workshop",
  "Pole Building",
  "Stables",
  "Riding Area",
  "Pool House",
  "Garage",
  "Bathroom",
  "Water Closet",
  "Kitchen",
  "Room",
  "Bedroom",
  "Closet",
  "Void",
  "Stairs",
];

function isRoomUnique(arr, room) {
  if (arr.filter((item) => item === room).length > 1) {
    return false;
  } else {
    return true;
  }
}

function isCorrectRoomNumber(arr, room) {
  const checkNumber = room.slice(-2) - 1;
  if (checkNumber > 0 && checkNumber < 10) {
    if (!arr.includes(`${room.slice(0, -3)}-0${checkNumber}`)) {
      return false;
    }
  }
  if (checkNumber >= 10) {
    if (!arr.includes(`${room.slice(0, -3)}-${checkNumber}`)) {
      return false;
    }
  }
  return true;
}

function isCorrectRoomName(floorName, room) {
  if (
    floorName.includes("Dwelling") &&
    !listOfDwellingRooms.includes(room.slice(0, -3))
  ) {
    return false;
  }
  if (
    floorName.includes("Other Structure") &&
    !listOfOtherStructureRooms.includes(room.slice(0, -3))
  ) {
    return false;
  }
  return true;
}

function roomNumberChecker(arrOfRooms, room, floorName) {
  return {
    name: room,
    isUnique: isRoomUnique(arrOfRooms, room),
    isCorrectNumber: isCorrectRoomNumber(arrOfRooms, room),
    isCorrectName: isCorrectRoomName(floorName, room),
  };
}

module.exports = roomNumberChecker;

function floorTypeChecker(floor, type) {
  let isCorrectType = true;
  const dwellingTypes = {
    "Above Grade": "Dwelling",
    "Below Grade": "Dwelling",
  };

  const otherStructureTypes = {
    "Other Structure": "Detached",
    "Attic": "Above Grade Non GLA",
  };

  for (let key in dwellingTypes) {
    if (floor.includes(key) && floor.includes(dwellingTypes[key])) {
      if (!type.includes(key)) {
        isCorrectType = false;
      }
    }
  }

  for (let key in otherStructureTypes) {
    if (floor.includes(key)) {
      if (!type.includes(otherStructureTypes[key])) {
        isCorrectType = false;
      }
    }
  }

  return isCorrectType;
}

module.exports = floorTypeChecker;

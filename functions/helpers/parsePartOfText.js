function parseString(currentString, regExp) {
  return currentString.match(regExp)[0].trim();
}

module.exports = parseString;

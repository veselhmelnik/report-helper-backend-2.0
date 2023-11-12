function getFormattedText(text) {
  return text.replace(/(\r\n|\n|\r)/gm, " ").split("Floor Area");
}

module.exports = getFormattedText;

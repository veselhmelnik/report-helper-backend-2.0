const getMainInfo = require('./getMainInfo');
const getFloorsInfo = require('./getFloorsInfo');

function getObject (text) {
    const mainInfo = getMainInfo(text[0]);
    const floorsInfo = getFloorsInfo(text);
    return ({mainInfo, floorsInfo})
}

module.exports = getObject;
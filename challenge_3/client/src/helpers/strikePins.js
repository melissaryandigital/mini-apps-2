const strikePins = (pinsLeft) => {
  return Math.floor(Math.random() * (pinsLeft - 0) + 0);
}

module.exports = strikePins;
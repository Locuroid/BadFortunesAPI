const words = require('./arrays.js');

const nouns = words.nouns
const verbs = words.verbs
const adjs = words.adjs
const timeframes = words.timeframes
const names = words.names

function randomnum(max) {
  return Math.floor(Math.random() * max);
}

function createFortune() {
  var noun = nouns[randomnum(nouns.length)]
  var noun2 = nouns[randomnum(nouns.length)]
  var verb = verbs[randomnum(verbs.length)]
  var adj = adjs[randomnum(adjs.length)]
  var name = names[randomnum(names.length)]
  var timeframe = timeframes[randomnum(timeframes.length)]
  
  function chooseStructure() {
    var structures = [
      `You should avoid ${noun} ${timeframe}.`, `You will ${verb} ${noun2} ${timeframe}.`, `The ${noun} in the ${noun2} are ${adj}.`, `Beware ${noun}, they will ${verb} ${noun2}.`, `Stop searching for ${noun}.`, `${noun} may be pleasant, but ${noun2} are more satisfying.`, `This fortune is lying to you.`, `keep your ${noun} ${adj}`, `${name} knows. Everyone knows.`
    ]
    return structure = structures[randomnum(structures.length)]
  }

  return chooseStructure()
}

function formattedFortune() {
  return createFortune().toUpperCase()
}

exports.makeFortune = function() {
  return formattedFortune()
} 
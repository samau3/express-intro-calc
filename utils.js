const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  let splitNums = strNums.split(',')
  console.log(splitNums)
  let convertedNums = splitNums.map(value => {
    let number = Number(value)
    if (isNan(number)) throw new BadRequestError()
    else return number
  })

  return convertedNums
}


module.exports = { convertStrNums };
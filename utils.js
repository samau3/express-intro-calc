const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  if (strNums.length === 0) throw new BadRequestError(`Numbers are required`)
  let splitNums = strNums.split(',')
  // console.log(splitNums)
  let convertedNums = splitNums.map(value => {
    let number = Number(value)
    if (isNaN(number)) throw new BadRequestError(`${value} is not a number`)
    else return number
  })

  return convertedNums
}


module.exports = { convertStrNums };
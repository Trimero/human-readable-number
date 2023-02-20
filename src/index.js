module.exports = function toReadable (number) {
  
    const dozensNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const hundredNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const array = [...number.toString()].map(Number);

    if (number === 0) {
        return "zero"
    }

    if (number < 20) {
    return dozensNumbers[number - 1] + ''
  }
  if (array[1] == 0 && number < 100) {
    return `${hundredNumbers[array[0] - 2]}`
}   
if (array[1] == 0 && array[2] == 0){
    return `${dozensNumbers[array[0] - 1]} hundred`
}
    if (number < 100) {
        return `${hundredNumbers[array[0] - 2]} ${dozensNumbers[array[1] - 1]}`
    }
    if (number > 100 && array[1] == 0){
    return `${dozensNumbers[array[0] - 1]} hundred ${dozensNumbers[array[2] - 1]}`
}
    if (number > 109 && array[1] == 1) {
        return `${dozensNumbers[array[0] - 1]} hundred ${dozensNumbers[array[2] + 9]}`
    }
    if (number > 100 && array[1] > 1 && array[2] == 0) {
        return `${dozensNumbers[array[0] - 1]} hundred ${hundredNumbers[array[1] - 2]}`
    }
    if (number > 100) {
        return `${dozensNumbers[array[0] - 1]} hundred ${hundredNumbers[array[1] - 2]} ${dozensNumbers[array[2] - 1]}`
    }
}
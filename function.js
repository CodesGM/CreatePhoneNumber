
// By template literals:
const createPhoneNumber1 = numbers => `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;


// By mapping:
function createPhoneNumber2(numbers){
  let t = "(***) ***-****";
  return numbers.map(n=> t = t.replace("*", n)).slice(-1)[0];
}

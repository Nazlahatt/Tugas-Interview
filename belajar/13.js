// f(5)
  for (let i = 5; i >= 1; i--) {
    let asteriskCharacter ="";
    for(let k = 5-i; k > 0; k--){
      asteriskCharacter += " ";
    }
    for (let j = 1; j <= i; j++) {
      asteriskCharacter += " *";
    }
    console.log(asteriskCharacter);
  }
  for (let i = 1; i <= 5; i++) {
    let asteriskCharacter = "";
    for(let k = 5-i; k > 0; k--){
      asteriskCharacter += " ";
    }
    for (let j = 1; j <= i; j++) {
      asteriskCharacter += " *";
    }
    
    console.log(asteriskCharacter);
  }

//f(3)
for (let i = 3; i >= 1; i--) {
  let asteriskCharacter ="";
  for(let k = 3-i; k > 0; k--){
    asteriskCharacter += " ";
  }
  for (let j = 1; j <= i; j++) {
    asteriskCharacter += " *";
  }
  console.log(asteriskCharacter);
}
for (let i = 1; i <= 3; i++) {
  let asteriskCharacter = "";
  for(let k = 3-i; k > 0; k--){
    asteriskCharacter += " ";
  }
  for (let j = 1; j <= i; j++) {
    asteriskCharacter += " *";
  }
  
  console.log(asteriskCharacter);
}
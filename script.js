const checkButton = document.getElementById("check-btn");
const inputValue = document.getElementById('text-input');

checkButton.addEventListener('click', event => {
    if(inputValue.value === 'input text here'){
        alert("please Enter Text!!")
    } else {
        if(inputValue.value.includes(' ')){
        let str = checkForSpaces(inputValue.value)
            checkForPalindrom(str);
        }
        checkForPalindrom(inputValue.value);
    }
});

const checkForPalindrom = (input) => {
    const textArray = input.split('');
    const revArray = [];
    while(textArray.length > 0){
        let endString = textArray.pop();
        revArray.push(endString);
    }
    let newWord =  revArray.join('');
    if (input === newWord){
        alert('YOU HAVE A PALENDROME!!!')
    }
}

const checkForSpaces = (input) => {
    const spaceArray = input.split('');
    let indexOfFirst = input.indexOf(' ');
    spaceArray.splice(indexOfFirst,1);
    let newSTR = spaceArray.join('');
   return newSTR;
}
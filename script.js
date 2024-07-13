const checkButton = document.getElementById("check-btn");
const inputValue = document.getElementById('text-input');
const resultSection = document.getElementById('result');
const re = new RegExp('\s')

checkButton.addEventListener('click', event => {
    if(inputValue.value === 'input text here'){
        alert("Please input a value")
    } else if (inputValue.value.includes(re)){
        let str = checkForSpaces(inputValue.value)
            checkForPalindrom(str);
        } else {
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
    if(input === newWord){

        const newHeader = document.createElement('h3');
        const newText = document.createTextNode(`${input} is a palindrome`);
        newHeader.appendChild(newText);
        resultSection.appendChild(newHeader);
    }else{ 
        const newHeader = document.createElement('h3');
        const newText = document.createTextNode(`${input} is not palindrome`);
        newHeader.appendChild(newText);
        resultSection.appendChild(newHeader);
    }
}

const checkForSpaces = (input) => {
    let i = 0;
    let newSTR;

    
    // while(i < input.length){
    // const spaceArray = input.split('');
    // let indexOfFirst = input.indexOf(' ');
    // spaceArray.splice(indexOfFirst,1);
    // newSTR = spaceArray.join('');
    // i++;
    // console.log(newSTR);
    // }
   return newSTR;

}
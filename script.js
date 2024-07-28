const checkButton = document.getElementById("check-btn");
const inputValue = document.getElementById('text-input');
const resultSection = document.getElementById('result');


checkButton.addEventListener('click', event => {
    if(inputValue.value === 'input text here'){
        alert("Please input a value")
    } else if (inputValue.value.split(/[^0-9a-zA-Z]/g).length - 1 > 0){
        let str = inputValue.value;
        str = str.replace(/[^0-9a-zA-Z]/g, '');
            checkForPalindrom(str);
        }else {
            checkForPalindrom(inputValue.value);
        }
    
});

const checkForPalindrom = (input) => {
   let lowerCaseText =  input.toLowerCase();
    const textArray = input.split('');
    textArray.forEach(function(item, index) { textArray[index] = item.toLowerCase()});
    const revArray = [];
    while(textArray.length > 0){
        let endString = textArray.pop();
        revArray.push(endString);
    }
    let newWord =  revArray.join('');
    if(lowerCaseText === newWord){
        let resultsID = document.getElementById('resultsID');
        if(resultsID != null){
            resultsID.innerHTML=`${inputValue.value} is a palindrome`
        } else{
             const newHeader = document.createElement('h3');
         newHeader.setAttribute('id','resultsID');
        const newText = document.createTextNode(`${inputValue.value} is a palindrome`);
        newHeader.appendChild(newText);
        resultSection.appendChild(newHeader);
         }
       }else{ 
        if(resultsID != null){
            resultsID.innerHTML = `${inputValue.value} is not palindrome`
        } else{
        const newHeader = document.createElement('h3');
        const newText = document.createTextNode(`${inputValue.value} is not palindrome`);
        newHeader.appendChild(newText);
        resultSection.appendChild(newHeader);
        }
    }
}

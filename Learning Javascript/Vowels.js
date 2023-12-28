function isVowel (sentence){
    let lowerCaseSentence = sentence.toLowerCase();
    let vowels = ["a","e","i","o","u"];
    let vowelCount =0;

    for(let i=0 ; i < lowerCaseSentence.length; i++){
        let currentChar = lowerCaseSentence[i];
        if(vowels.includes(currentChar)){
            vowelCount++;
        }
    }

    return vowelCount;
}


let x = (isVowel("I love to code in javascript"));

console.log(`Number of vowel in this sentence is ${x}`);





function markVowel() {
    // Get all the Elements
    const inputText = document.getElementById('inputText');
    const count = document.getElementById('count');
    const result = document.getElementById('result');

    // Check if input is empty
    if (inputText.value === "") {
        count.innerText = "Opps...!😬 You must write something."
        result.innerText = "";
    }else {
        
        //Regex for indentify the Vowels case-insensitive
        const vowelRegex = /[aeiou]/gi;
        //Count the number of Vowels
        const vowels = inputText.value.match(vowelRegex);
        //Replace the vowels with marked css
        const markedVowels = inputText.value.replace(vowelRegex, (v)=> {
            return `<span style="text-decoration: underline;">${v}</span>`;
        });
        
        inputText.value = "";
        result.innerHTML = markedVowels;
        let cnt = vowels?vowels.length:0;
        count.innerText = `Total Vowel: ${cnt}`;
    }
}
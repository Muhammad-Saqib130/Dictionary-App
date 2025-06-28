const input = document.querySelector('.dictionary .input');
const button = document.querySelector('.btn');
const word = document.querySelector('.result .word');
const means = document.querySelector('.result .meaning');
button.addEventListener('click', function(){
const inputWord = input.value;
axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`)
.then(function (response) {
  word.textContent = 'Word: ' + response.data[0].word;
  means.textContent = 'Meaning: ' + response.data[0].meanings[0].definitions[0].definition;
})
.catch(function (error) {
  word.textContent = 'Error!';
  means.textContent = 'Error!';
})
})
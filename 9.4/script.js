const resultNode = document.querySelector('.result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.submit');

btnNode.addEventListener('click', () => {
  const inputH =  document.querySelector('.input1').value;
  const inputW =  document.querySelector('.input2').value;
  if(inputH < 100 || inputH > 300 || inputW < 100 || inputW > 300) {
    resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
  } esle {
    fetch(`https://picsum.photos/${input1.value}/${input2.value},`)
    .then((response) => {
      
  }
}) 

function displayResult(apiData) {
  let cards = '';
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
      
  resultNode.innerHTML = cards;
}

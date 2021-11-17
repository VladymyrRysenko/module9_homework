const resultNode = document.querySelector('.result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.submit');

btnNode.addEventListener('click', () => {
  const inputH =  document.querySelector('.input1').value;
  const inputW =  document.querySelector('.input2').value;
  if(inputH < 100 || inputH > 300 || inputW < 100 || inputW > 300) {
    resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
  } else {
       fetch(`https://picsum.photos/${inputH}/${inputW}`)
      .then((response) => {
          let cards = '';
          const cardBlock = `
          <div class="card">
          <img src="${response.url}"
          class="card-image"
          />
          </div>
       `;
       cards = cards + cardBlock;
       resultNode.innerHTML = cards;
  })
    .catch(function() { console.log('error') }); 
  }
  })



 

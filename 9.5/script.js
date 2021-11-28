const resultNode = document.querySelector('.result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.btn');

		
btnNode.addEventListener('click', () => {
  const inputPage =  document.querySelector('.input1').value;
  const inputLimit =  document.querySelector('.input2').value;
  if(inputPage < 1 || inputPage > 10 || isNaN(+inputPage)) {
    resultNode.innerHTML = '«Номер страницы вне диапазона от 1 до 10';
  } else {
    if(inputLimit < 1 || inputLimit > 10 || isNaN(+inputLimit)){
       resultNode.innerHTML = '«Лимит вне диапазона от 1 до 10»'
       } else {
      if (((inputPage < 1 || inputPage > 10) && (inputLimit < 1 || inputLimit > 10)) || (isNaN(+inputPage) && isNaN(+inputLimit))) {
		resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else {
       fetch(`https://picsum.photos/v2/list?page=${inputPage}&limit=${inputLimit}`)
         .then((response) => {               
      const result = response.json();   
      return result;
      })
         .then((data) => {
         function displayResult(data) {
	        let cards = '';
	        data.forEach(function(item){
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
         
	//Вставляем контент в поле вывода данных
	resultNode.innerHTML = cards; // Результирующую строку cards записываем в поле innerHTML переменной resultNode
          localStorage.setItem("cards", cards); // Засываем cards в localStorage 
        }
        displayResult(data);
      });
  }
}
  }
});
          
//     .catch(function() { console.log('error') }); 

 
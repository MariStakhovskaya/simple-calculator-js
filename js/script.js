var operationButton = document.getElementsByClassName('operation-button');
var resultEl = document.getElementById('result')

const input1 = document.getElementById('number1');
const input2 = document.getElementById('number2');


function makeOperation(operationCode) {
	
	const number1 = Number(input1.value);
	const number2 = Number(input2.value);

	if (operationCode === "+"){
		var result = number1 + number2;
	} else if (operationCode === "-") {
		var result = number1 - number2;
	} else if(operationCode === "*") {
		var result = number1 * number2;
	} else if (operationCode === "/"){
			var result = number1 / number2;
		} else {
			console.log('Неизвестная операция')
		}
		resultEl.innerHTML = `<h3>${result}</h3>`
	
}

function onOperationButtonClick(eventObj){
	
	const clickedEl = eventObj.currentTarget;
	const operation = clickedEl.innerHTML;
makeOperation(operation);
}


for (let i =0; i < operationButton.length; i++){
operationButton[i].addEventListener('click', onOperationButtonClick)
}


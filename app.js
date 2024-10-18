const userName = document.getElementById('nameUser');
const data1 = document.getElementById('note1');
const data2 = document.getElementById('note2');
const data3 = document.getElementById('note3');
const calculateButton = document.getElementById('btn-calculate');
const btnPredict = document.getElementById('btn-predict');
const response = document.getElementById('response');

btnPredict.addEventListener('click', predictNote);
calculateButton.addEventListener('click', calculateNote); 

function calculateNote(event) {
    event.preventDefault(); 

    let user = userName.value;
    let note1 = Number(data1.value);
    let note2 = Number(data2.value);
    let note3 = Number(data3.value);

    let result = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4);

    if ((note1 >= 1 && note1 <= 5) && (note2 >= 1 && note2 <= 5) && (note3 >= 1 && note3 <= 5)) {
        if (result < 3.5) {
            response.style.color = 'black';
            response.textContent = `Sr ${user} perdió :( su nota es de: ${result}`; 
        } else if (result >= 3.5 && result <= 4.5) {
            response.style.color = 'orange';
            response.textContent = `Sr ${user} pasó, su nota es de: ${result}`; 
        } else {
            response.style.color = 'green';
            response.textContent = `Sr ${user}, excelente, su nota es de: ${result}`; 
        }
    } else {
        response.textContent = 'Ingrese notas válidas'; 
    }
}

function predictNote(event) {
    event.preventDefault();

    let user = userName.value;
    let note1 = Number(data1.value);
    let note2 = Number(data2.value);
    let notaMin = 3.5;

    let operation = (notaMin - (note1 * 0.3) - (note2 * 0.3)) / 0.4;
    data3.value = operation;
    alert(`Sr ${user}, la nota mínima debe ser de ${operation}`);
}

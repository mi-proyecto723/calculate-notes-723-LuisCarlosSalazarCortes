const username = document.getElementById("name");
const note1 = document.getElementById("nota1");
const note2 = document.getElementById("nota2");
const note3 = document.getElementById("nota3");
const calculateButton = document.getElementById("btn-calculate");
const response = document.getElementById("resultado");

calculateButton.addEventListener("click", calculateNote);

function calculateNote(event) {
    let user = username.value; 
    let grade1 = Number(note1.value);
    let grade2 = Number(note2.value); 
    let grade3 = Number(note3.value);
    
    let result = (grade1 * 0.3) + (grade2 * 0.3) + (grade3 * 0.4);
    
    response.textContent = "Sr. " + user + ", su nota es de: " + result.toFixed(2); 
    event.preventDefault();
}

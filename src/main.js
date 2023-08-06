const diceBtn = document.querySelector('#diceBtn')
const adviceText = document.querySelector('#advice')
const adviceId = document.querySelector("#adviceId");

getAdvice()

diceBtn.addEventListener('click', () => {
  getAdvice()

})

function getAdvice() {
  // Generar id aleatorio
  const id = Math.floor(Math.random() * 100) + 1;

  // Llamar API con then
  fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const adviceMsg = data.slip.advice;
      adviceText.innerText = adviceMsg;
      adviceId.innerText = data.slip.id
    })
    .catch(err => getAdvice())
}





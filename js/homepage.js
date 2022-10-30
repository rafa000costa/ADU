//OPÇÃO 1
const opcao1 = document.getElementById('opcao1');

opcao1.addEventListener('click', function onClick(event) {
  //change background color
  document.body.style.backgroundColor = '#2B3B89';

  //change text color
  document.body.style.color = 'white';
});

const btn_opcao1 = document.getElementById('opcao1');

btn_opcao1.addEventListener('click', function onClick(event) {
  //change background color
  event.target.style.backgroundColor = 'whitesmoke';
});

/*function myFunction() {
    var opcao1 = document.getElementById("opcao1");
    if (opcao1.style.display === "none") {
        opcao1.style.display = "block";
    } else {
        opcao1.style.display = "none";
    }
  }*/

//OPÇÃO 2
const opcao2 = document.getElementById('opcao2');

opcao2.addEventListener('click', function onClick(event) {
  //change background color
  document.body.style.backgroundColor = 'black';

  //change text color
  document.body.style.color = 'white';
});

const btn_opcao2 = document.getElementById('opcao2');

btn_opcao2.addEventListener('click', function onClick(event) {
  //change background color
  event.target.style.backgroundColor = 'whitesmoke';
});


//OPÇÃO 3
const opcao3 = document.getElementById('opcao3');

opcao3.addEventListener('click', function onClick(event) {
  //change background color
  document.body.style.backgroundColor = '#1F5855';

  //change text color
  document.body.style.color = 'white';
});


//OPÇÃO 4
const opcao4 = document.getElementById('opcao4');

opcao4.addEventListener('click', function onClick(event) {
  //change background color
  document.body.style.backgroundColor = '#80387B';

  //change text color
  document.body.style.color = 'white';
});


//OPÇÃO 5
const opcao5 = document.getElementById('opcao5');

opcao5.addEventListener('click', function onClick(event) {
  //change background color
  document.body.style.backgroundColor = '#713D39';

  //change text color
  document.body.style.color = 'white';
});
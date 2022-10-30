//OPÇÃO 1
const opcao1 = document.getElementById('opcao1');

opcao1.addEventListener('click', function onClick(event) {
  //change background color
  document.body.style.backgroundColor = '#F7DBC2';

  //change text color
  document.body.style.color = 'black';
});

//OPÇÃO 2
const opcao2 = document.getElementById('opcao2');

opcao2.addEventListener('click', function onClick(event) {
  //change background color
  document.body.style.backgroundColor = '#FAE38E';

  //change text color
  document.body.style.color = 'black';
});


//OPÇÃO 3
const opcao3 = document.getElementById('opcao3');

opcao3.addEventListener('click', function onClick(event) {
  //change background color
  document.body.style.backgroundColor = '#FFFCA5';

  //change text color
  document.body.style.color = 'black';
});


//OPÇÃO 4
const opcao4 = document.getElementById('opcao4');

opcao4.addEventListener('click', function onClick(event) {
  //change background color
  document.body.style.backgroundColor = '#C1A2DF';

  //change text color
  document.body.style.color = 'black';
});


//OPÇÃO 5
const opcao5 = document.getElementById('opcao5');

opcao5.addEventListener('click', function onClick(event) {
  //change background color
  document.body.style.backgroundColor = '#DFBBB7';

  //change text color
  document.body.style.color = 'black';
});

function myFunction1() {
    document.getElementById("opcao1").style.border = "2px solid black";
    document.getElementById("opcao2").style.border = "none";
    document.getElementById("opcao3").style.border = "none";
    document.getElementById("opcao4").style.border = "none";
    document.getElementById("opcao5").style.border = "none";
}

function myFunction2() {
    document.getElementById("opcao2").style.border = "2px solid black";
    document.getElementById("opcao1").style.border = "none";
    document.getElementById("opcao3").style.border = "none";
    document.getElementById("opcao4").style.border = "none";
    document.getElementById("opcao5").style.border = "none";
}

function myFunction3() {
    document.getElementById("opcao3").style.border = "2px solid black";
    document.getElementById("opcao1").style.border = "none";
    document.getElementById("opcao2").style.border = "none";
    document.getElementById("opcao4").style.border = "none";
    document.getElementById("opcao5").style.border = "none";
}

function myFunction4() {
    document.getElementById("opcao4").style.border = "2px solid black";
    document.getElementById("opcao1").style.border = "none";
    document.getElementById("opcao2").style.border = "none";
    document.getElementById("opcao3").style.border = "none";
    document.getElementById("opcao5").style.border = "none";
}

function myFunction5() {
    document.getElementById("opcao5").style.border = "2px solid black";
    document.getElementById("opcao1").style.border = "none";
    document.getElementById("opcao2").style.border = "none";
    document.getElementById("opcao3").style.border = "none";
    document.getElementById("opcao4").style.border = "none";
}
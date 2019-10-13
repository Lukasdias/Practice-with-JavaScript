var divElement = document.querySelector('#app');

var pElement = document.createElement('p');
var txtMsg = document.createTextNode('Insira sua idade');
pElement.appendChild(txtMsg);
divElement.appendChild(pElement);

var pElement2 = document.createElement('p');
var inptElement = document.createElement('input');
inptElement.setAttribute('class', 'input');
pElement2.appendChild(inptElement);
divElement.appendChild(pElement2);

var pElement3 = document.createElement('p');
var btnElement = document.createElement('button');
var btnTxt = document.createTextNode('resultado');
btnElement.appendChild(btnTxt);
pElement3.appendChild(btnElement);
divElement.appendChild(btnElement);

btnElement.setAttribute('onclick','resultado()');


function resultado(){
    checaIdade();
    
    checaIdade()
    .then(function(response){
        setTimeout(alert("Maior que 18"), 2);
    })
    .catch(function(error){
        setTimeout(alert("Menor que 18"), 2);

    });
}

function checaIdade(){
    return new Promise(function(resolve, reject){
        var idade = document.querySelector('.input').value;
        if(idade>= 18){
            resolve();
        }else{
            reject("Error");
        }
    });
    
}


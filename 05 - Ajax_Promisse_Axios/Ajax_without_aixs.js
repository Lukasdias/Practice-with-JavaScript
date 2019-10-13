/*
Ajaxa = requisiçao assícrona, também pode ser sícrona
Promisses = utilizada para decidir o que se fazer com sucesso ou falha das requsiçoes
*/
var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET', 'https://api.github.com/users/vinigam');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status == 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject("Erro na requisiçao");
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
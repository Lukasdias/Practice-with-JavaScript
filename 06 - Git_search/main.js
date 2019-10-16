function search(){
    var inptElement = document.querySelector('.input').value;
    var link = 'https://api.github.com/users/' + inptElement;
    axios.get(link)
        .then(function(response){
            var temp = JSON.stringify(response);
            let appTemp = document.querySelector('#app');
            let ULtemp= document.createElement('ul');
            var data;
            for( x of temp){
                if(x != '{' && x != '}' && x != ','){
                     data += x;
                     console.log(data);
                }else{
                    let LItemp = document.createElement('li');
                    let TXTtemp = document.createTextNode(data);
                    LItemp.appendChild(TXTtemp);
                    ULtemp.appendChild(LItemp);
                    appTemp.appendChild(ULtemp);
                    data = "";
                }
               
                
                
            }
            console.log(temp);
        })
        .catch(function(error){
            console.warn(error);
        });
};


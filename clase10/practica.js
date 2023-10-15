function laClaveSecreta(unaClave){
    for(let i=0; i<=unaClave.length; i++){
        let nuevaClave = [];
    
        if(unaClave[i]!='*'){
            nuevaClave = nuevaClave.unshift(unaClave[i]);
        }
    }
    nuevaClave.join();
    return nuevaClave;
    }
let clave = ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"];

console.log(laClaveSecreta(clave));
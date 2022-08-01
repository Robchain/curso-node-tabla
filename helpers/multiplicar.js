const fs=require('fs');
const crearArchivo = async(base = 5) =>{

    try {
        let salida="";

    for(let i=0;i<10;i++ ){
        salida +=`${base} x ${i}= ${i*base}\n`;
    } 
    console.log(salida);
    
    fs.writeFileSync('tablaa.txt', salida,);
    return "tabla guardado";
    

        
    } catch (erro) {
        throw erro;
    }
    

}
module.exports = {
    crearArchivo
}
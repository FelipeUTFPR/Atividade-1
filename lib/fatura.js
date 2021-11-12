const Utils = require('./util');
const util = new Utils();


class Fatura {


    criarFatura(codigo,valor,dataFatura,cliente){
        return (
        {
            codigo: codigo,
            valor: valor,
            dataFatura: dataFatura,
            cliente:{
                nome: cliente.nome,
                data: cliente.data,
                uf: cliente.uf
            }
        })
    }




            filtro(fatura){
                var faturas = []; 
    
                for(let i = 0; i < fatura.length; i++){

            
                        if(!(fatura[i].valor < 2000))
                        faturas.push(fatura[i])
                        
                    
              
            }
            return faturas;
            
            }


}

module.exports = Fatura;
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




    filtroMenor2000(fatura) {
        var faturas = [];

        for (let i = 0; i < fatura.length; i++) {


            if (!(fatura[i].valor < 2000))


                faturas.push(fatura[i])



        }
        return faturas;

    }

    filtroMaior2000menor2500(fatura) {
        var faturas = [];

        for (let i = 0; i < fatura.length; i++) {


            if (!(
                    fatura[i].valor > 2000 &&
                    fatura[i].valor < 3000 &&
                    util.interData(fatura[i].dataFatura) <= 30))
                    
                
                faturas.push(fatura[i])



        }
        return faturas;

    }

    filtroMaior2500Menor3000(fatura) {
        var faturas = [];

        for (let i = 0; i < fatura.length; i++) {


            if (!(
                    fatura[i].valor > 2500 &&
                    fatura[i].valor < 3000 &&
                    util.interData(fatura[i].cliente.dataInclusao) <= 60))
                    
                
                faturas.push(fatura[i])



        }
        return faturas;

    }

    filtroMaior4000(fatura) {
        var faturas = [];

        for (let i = 0; i < fatura.length; i++) {


            if (!(util.verificaUF(fatura[i].cliente.uf) &&
            fatura[i].valor > 4000
            )
            )


                faturas.push(fatura[i])



        }
        return faturas;

    }


}

module.exports = Fatura;
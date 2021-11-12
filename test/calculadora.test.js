const Fatura = require("../lib/fatura");

const f = new Fatura();

describe('Filtro', () => {
  test('Para Valores de Faturas menores do que 2000', () => {
    expect(
        f.filtro([{
            codigo: 1,
            valor: 2000,
            dataFatura: '2021-11-08',
            cliente: {
              nome: 'Felipe',
              dataInclusao: '2021-03-04',
              estado: 'SC'
            }
          },
          {
            codigo: 2,
            valor: 1500,
            dataFatura: '2021-11-10',
            cliente: {
              nome: 'João Paulo',
              dataInclusao: '2021-06-01',
              estado: 'SC'
            }
          },
          {
            codigo: 3,
            valor: 1500,
            dataFatura: '2021-11-08',
            cliente: {
              nome: 'Fernanda',
              dataInclusao: '2021-05-01',
              estado: 'SC'
            }
          }
        ])
      )
      .toEqual([{"cliente": {"dataInclusao": "2021-03-04", "estado": "SC", "nome": "Felipe"}, "codigo": 1, "dataFatura": "2021-11-08", "valor": 2000},]


      )
  })
})
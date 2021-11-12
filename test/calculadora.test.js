const Fatura = require("../lib/fatura");

const f = new Fatura();

describe('Filtro', () => {
  test('Para Valores de Faturas menores do que 2000', () => {
    expect(
        f.filtroMenor2000([{
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

  test('Para Valores de Faturas entre 2000 e 2500 e dif datafat 30 dias', () => {
    expect(
        f.filtroMaior2000menor2500([{
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
            valor: 2100,
            dataFatura: '2021-11-10',
            cliente: {
              nome: 'João Paulo',
              dataInclusao: '2021-06-01',
              estado: 'SC'
            }
          },
          {
            codigo: 3,
            valor: 2400,
            dataFatura: '2021-11-08',
            cliente: {
              nome: 'Fernanda',
              dataInclusao: '2021-05-01',
              estado: 'SC'
            }
          }
        ])
      )
      .toEqual([{"cliente": {"dataInclusao": "2021-03-04", "estado": "SC", "nome": "Felipe"}, "codigo": 1, "dataFatura": "2021-11-08", "valor": 2000}]


      )
  })
  test('Para Valores de Faturas entre 2500 e 3000 e dif clientein 60 dias', () => {
    expect(
        f.filtroMaior4000([{
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
            valor: 2100,
            dataFatura: '2021-11-10',
            cliente: {
              nome: 'João Paulo',
              dataInclusao: '2021-06-01',
              estado: 'SC'
            }
          },
          {
            codigo: 3,
            valor: 5000,
            dataFatura: '2021-11-08',
            cliente: {
              nome: 'Fernanda',
              dataInclusao: '2021-05-01',
              estado: 'SC'
            }
          }
        ])
      )
      .toEqual([{"cliente": {"dataInclusao": "2021-03-04", "estado": "SC", "nome": "Felipe"}, "codigo": 1, "dataFatura": "2021-11-08", "valor": 2000}, {"cliente": {"dataInclusao": "2021-05-01", "estado": "SC", "nome": "Fernanda"}, "codigo": 3, "dataFatura": "2021-11-08", "valor": 5000}]


      )
  })
})
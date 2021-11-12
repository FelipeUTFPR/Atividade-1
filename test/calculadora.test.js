const Fatura = require("../lib/fatura");

const f = new Fatura();

describe('Filtro', () => {
  test('Para Remover Valores de Faturas menores do que 2000', () => {
    expect(
        f.filtroMenor2000([{
            codigo: 1,
            valor: 2000,
            dataFatura: '2021-11-08',
            cliente: {
              nome: 'Felipe',
              dataInclusao: '2021-03-04',
              uf: 'SC'
            }
          },
          {
            codigo: 2,
            valor: 1500,
            dataFatura: '2021-11-10',
            cliente: {
              nome: 'João Paulo',
              dataInclusao: '2021-06-01',
              uf: 'SC'
            }
          },
          {
            codigo: 3,
            valor: 1500,
            dataFatura: '2021-11-08',
            cliente: {
              nome: 'Fernanda',
              dataInclusao: '2021-05-01',
              uf: 'SC'
            }
          }
        ])
      )
      .toEqual([{
          "cliente": {
            "dataInclusao": "2021-03-04",
            "uf": "SC",
            "nome": "Felipe"
          },
          "codigo": 1,
          "dataFatura": "2021-11-08",
          "valor": 2000
        }, ]


      )
  })

  test('Para Remover Valores de Faturas entre 2000 e 2500 e dif datafat 30 dias', () => {
    expect(
        f.filtroMaior2000menor2500([{
            codigo: 1,
            valor: 2000,
            dataFatura: '2021-11-08',
            cliente: {
              nome: 'Felipe',
              dataInclusao: '2021-03-04',
              uf: 'SC'
            }
          },
          {
            codigo: 2,
            valor: 2100,
            dataFatura: '2021-11-10',
            cliente: {
              nome: 'João Paulo',
              dataInclusao: '2021-06-01',
              uf: 'SC'
            }
          },
          {
            codigo: 3,
            valor: 2400,
            dataFatura: '2021-11-08',
            cliente: {
              nome: 'Fernanda',
              dataInclusao: '2021-05-01',
              uf: 'SC'
            }
          }
        ])
      )
      .toEqual([{
          "cliente": {
            "dataInclusao": "2021-03-04",
            "uf": "SC",
            "nome": "Felipe"
          },
          "codigo": 1,
          "dataFatura": "2021-11-08",
          "valor": 2000
        }]


      )
  })
  test('Para Remover Valores de Faturas entre 2500 e 3000 e dif clientein 60 dias', () => {
    expect(
        f.filtroMaior2500Menor3000([{
            codigo: 1,
            valor: 2000,
            dataFatura: '2021-11-08',
            cliente: {
              nome: 'Felipe',
              dataInclusao: '2021-03-04',
              uf: 'SC'
            }
          },
          {
            codigo: 2,
            valor: 2100,
            dataFatura: '2021-11-10',
            cliente: {
              nome: 'João Paulo',
              dataInclusao: '2021-06-01',
              uf: 'SC'
            }
          },
          {
            codigo: 3,
            valor: 5000,
            dataFatura: '2021-11-08',
            cliente: {
              nome: 'Fernanda',
              dataInclusao: '2021-05-01',
              uf: 'SC'
            }
          }
        ])
      )
      .toEqual([{
        "cliente": {
          "dataInclusao": "2021-03-04",
          "uf": "SC",
          "nome": "Felipe"
        },
        "codigo": 1,
        "dataFatura": "2021-11-08",
        "valor": 2000
      }, {
        "cliente": {
          "dataInclusao": "2021-06-01",
          "uf": "SC",
          "nome": "João Paulo"
        },
        "codigo": 2,
        "dataFatura": "2021-11-10",
        "valor": 2100
      }, {
        "cliente": {
          "dataInclusao": "2021-05-01",
          "uf": "SC",
          "nome": "Fernanda"
        },
        "codigo": 3,
        "dataFatura": "2021-11-08",
        "valor": 5000
      }])
  })

  test('Para Remover Valores de Faturas maiores do que 4000 e estados do sul', () => {
    expect(
        f.filtroMaior4000([{
            codigo: 1,
            valor: 3000,
            dataFatura: '2021-11-08',
            cliente: {
              nome: 'Felipe',
              dataInclusao: '2021-03-04',
              uf: 'SP'
            }
          },
          {
            codigo: 2,
            valor: 5000,
            dataFatura: '2021-11-10',
            cliente: {
              nome: 'João Paulo',
              dataInclusao: '2021-06-01',
              uf: 'SC'
            }
          },
          {
            codigo: 3,
            valor: 5000,
            dataFatura: '2021-11-08',
            cliente: {
              nome: 'Fernanda',
              dataInclusao: '2021-05-01',
              uf: 'SP'
            }
          }
        ])
      )
      .toEqual([{
          "cliente": {
            "dataInclusao": "2021-03-04",
            "nome": "Felipe",
            "uf": "SP"
          },
          "codigo": 1,
          "dataFatura": "2021-11-08",
          "valor": 3000
        }, {
          "cliente": {
            "dataInclusao": "2021-05-01",
            "nome": "Fernanda",
            "uf": "SP"
          },
          "codigo": 3,
          "dataFatura": "2021-11-08",
          "valor": 5000
        }]


      )
  })
})
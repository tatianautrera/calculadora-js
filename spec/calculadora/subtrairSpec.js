describe("Suite de testes de subtração",()=>{
    var Calculadora = require('../../src/js/calculadora');

    it("deve retornar 5 para 8 e 3",()=>{
        expect(Calculadora.subtrair(8,3)).toEqual(5)
    })

    it("deve retornar 5 para 8 e 3 em formato texto",()=>{
        expect(Calculadora.subtrair("8","3")).toEqual(5);
    })

    it("deve retornar 4 para 5.5 e 1.5",()=>{
        expect(Calculadora.subtrair(5.5,1.5)).toEqual(4)
        expect(Calculadora.subtrair("5.5","1.5")).toEqual(4)
    })

    it("deve retornar 0 para valor1 invalido",()=>{
        expect(Calculadora.subtrair(undefined,10)).toEqual(0);
    })
    it("deve retornar 0 para valor2 invalido",()=>{
        expect(Calculadora.subtrair(10, undefined)).toEqual(0);
    })
})
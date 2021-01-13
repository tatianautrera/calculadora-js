describe("Suite de testes de divis]ao",()=>{
    var Calculadora = require('../../src/js/calculadora');

    it("deve retornar 2 para 6 e 3",()=>{
        expect(Calculadora.dividir(6,3)).toEqual(2);
    })

    it("deve retornar 2 para 6 e 3 com letras",()=>{
        expect(Calculadora.dividir("6","3")).toEqual(2)
    })

    it("deve retornar 1.5 para 4.5 e 3",()=>{
        expect(Calculadora.dividir(4.5,3)).toEqual(1.5)
    })

    it("deve retornar a string error para divisão por zero",()=>{
        expect(Calculadora.dividir(5,0)).toEqual("Erro");
    })

    it("deve retornar o valor para valor 1 invalido",()=>{
        expect(Calculadora.dividir(undefined,10)).toEqual(0);
    })
    it("deve retornar o valor para valor 2 invalido",()=>{
        expect(Calculadora.dividir(10,undefined)).toEqual(0);
    })
})
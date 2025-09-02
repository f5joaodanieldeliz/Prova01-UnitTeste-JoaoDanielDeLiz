const  isUtilitarios  = require("../src/utilitarios");

const util = new isUtilitarios

test("Verifica se esta contando os caracter", async () => {
    expect(util.contarCaracteres("ola")).toStrictEqual(3);
  });

test("Verifica esta ivertendo", async () => {
    expect(util.inverterString("ola")).toStrictEqual("alo");
});

test("Verifica esta Ficando Maiusculas", async () => {
    expect(util.paraMaiusculas("a")).toStrictEqual("A");
});

test("Verifica esta Ficando Maiusculas", async () => {
    expect(util.paraMinusculas("A")).toStrictEqual("a");
});

test("Verifica Se a primeira letra é Maiuscula ", async () => {
    expect(util.primeiraLetraMaiuscula("A")).toStrictEqual("A");
});

test("Verifica se Soma", async () => {
    expect(util.somar("A", "A")).toStrictEqual("AA");
});

test("Verifica se Diminiu", async () => {
    expect(util.subtrair(2,1)).toStrictEqual(1);
});

test("Verifica se Multiplicando", async () => {
    expect(util.multiplicar(1,1)).toStrictEqual(1);
});

test("Verifica se Dividir", async () => {
    expect(util.dividir(1,1)).toStrictEqual(1);
});

test("Verifica se é par", async () => {
    expect(util.ehPar(1)).toBeFalsy();
});

test("Verifica Primeiro elemento", async () => {
    const t = util.ultimoElemento(["ar","terra"])
    expect(util.ultimoElemento(["ar","terra"])).toStrictEqual(t);
});

test("Verifica o tamanho Array", async () => {  
    expect(util.tamanhoArray(["ar","terra"])).toStrictEqual(2);
});

test("Verifica a  ordenar Array", async () => {
    expect(util.ordenarArray(["ar","terra"])).toEqual(["ar","terra"]);
});

test("Verifica se esta inverter Array", async () => {
    expect(util.inverterArray(["ar","terra"])).toEqual(["terra","ar"]);
});

test("Verifica se esta gerando NumeroAleatorio", async () => {
    expect(util.gerarNumeroAleatorio()).not.toBeNaN();;
});

test("Verifica se é numero", async () => {
    expect(util.ehNumero()).not.toBeNaN();;
});

test("Verifica se remove Espacos", async () => {
    expect(util.removerEspacos(" ")).toStrictEqual("");;
});

test("Verifica se esta repetindo Texto", async () => {
    expect(util.removerEspacos("a")).toStrictEqual("a");;
});

test("Verifica se esta juntando Array", async () => {
    expect(util.juntarArray(["a","b"])).toEqual("a,b");;
});

test("Verifica se esta contando Palavras", async () => {
    expect(util.contarPalavras("a bo")).toEqual(2);;
});

test("Verifica a media", async () => {
    expect(util.mediaArray([1,1])).toEqual(1);;
});

test("Verifica a remover Duplicados", async () => {
    expect(util.removerDuplicados([1,1])).toEqual([1]);;
});

test("Verifica se é palindromo ", async () => {
    expect(util.ehPalindromo("ao")).toBeFalsy();;
});

test("Verifica se é mesclar Objetos ", async () => {
    expect(util.mesclarObjetos({b: "a"},{a: "b"})).toEqual({b: "a", a: "b"});;
});


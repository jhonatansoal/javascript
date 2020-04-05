//Aqui tenho uma variavel que pode trazer dinamicamente cada hora um valor diferente no id
let url = "http://www.fazendoweb.com.br/api/v1/chamada/id/71";

//Aqui tenho uma variavel com o caminho para verificar se esse caminho existe dentro da outra variavel
let textoValidaV1 = "/api/v1/chamada/id/";

let textoValidarV2 = "/api/v2/chamada/id/";

// returno true 
console.log(url.includes(textoValidaV1));

// returno false porque aqui o conteudo da variavel é diferente 
console.log(url.includes(textoValidarV2));

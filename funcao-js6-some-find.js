/*
validar se um item em uma estrutura contem na outra estrutura 
*/

// Lista de permissao
const permitir =[
    {
        level: 1,
        code: 10,
    },
    {
        level: 2,
        code: 20,
    },
    {
        level: 3,
        code: 30,
    }
];

// Estrutura para ser validade 1
const validaPermissaoV1 = [
    {
        level: 2,
        code: 20
    },
    {
        level: 2,
        code: 12
    },
];

// Estrutura para ser validade 2
const validaPermissaoV2 = [
    {
        level: 8,
        code: 80
    },
    {
        level: 7,
        code: 70
    },
];

// testando versao da estrutura 1
let retorno1 = permitir.some(t => validaPermissaoV1.find(f => f.level === t.level && f.code === t.code));
console.log(retorno1)

// testando versao da estrutura 2
let retorno2 = permitir.some(t => validaPermissaoV2.find(f => f.level === t.level && f.code === t.code));
console.log(retorno2)
const nome = "Emilly";

const idade = 17;

const nomeCurso = "Engenharia Molecular";

let primeiraNota = 8;

let segundaNota = 10;

let terceiraNota = 8;

let quantidadeFaltas = 15;

let matriculado = true;
let totalAulas = 40;
let aprovado = false;

let media = ((primeiraNota + segundaNota + terceiraNota) / 3);
let frequencia = ((totalAulas - quantidadeFaltas) / totalAulas);

if (frequencia >= 0.75 && matriculado === true) {
    if (media >= 7) {
        aprovado = true;
    }
}

console.log("Nome:" + nome);
console.log("Idade:" + idade);
console.log("Nome do curso:" + nomeCurso);
console.log("Primeira nota:" + primeiraNota);
console.log("Segunda nota:" + segundaNota);
console.log("Terceira nota:" + terceiraNota);
console.log("A média é: " + media.toFixed(2));
console.log("Quantidade de faltas:" + quantidadeFaltas);
console.log("Frequência:" + (frequencia * 100).toFixed(2) + "%");
console.log("O aluno está aprovado?:" + (aprovado ? "Sim" : "Não"));
console.log("O aluno está matriculado?:" + (matriculado ? "Sim" : "Não"));

console.log("A média é:" + media.toFixed(2));




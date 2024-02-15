// Definindo o nome e a quantidade de experiência do herói
let nomeDoHeroi = "Itachi Uchiha";
let xpDoUchiha = 9000; // Itachi é brabo mesmo

// Estrutura de decisão para definir o nível do herói
let nivel;

if (xpDoUchiha < 1000) {
    nivel = "Ferro";
} else if (xpDoUchiha >= 1001 && xpDoUchiha <= 2000) {
    nivel = "Bronze";
} else if (xpDoUchiha >= 2001 && xpDoUchiha <= 5000) {
    nivel = "Prata";
} else if (xpDoUchiha >= 5001 && xpDoUchiha <= 7000) {
    nivel = "Ouro";
} else if (xpDoUchiha >= 7001 && xpDoUchiha <= 8000) {
    nivel = "Platina";
} else if (xpDoUchiha >= 8001 && xpDoUchiha <= 9000) {
    nivel = "Ascendente";
} else if (xpDoUchiha >= 9001 && xpDoUchiha <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibindo a mensagem com o nome do herói e seu nível
console.log("O Uchiha " + nomeDoHeroi + " está no nível " + nivel);





var nome = prompt("Como devo te chamar?");
var tentativa = 0;
var sorteio = parseInt(prompt(nome + " devo sortear um número entre 0 e quanto?"));
var numeroAleatorio = Math.floor(Math.random() * (sorteio + 1));

while (true) {
    var num = parseInt(prompt(nome + ", insira um número:"));
    tentativa += 1;

    if (num === numeroAleatorio) {
        if (tentativa === 1){
            alert("MEU DEUS, VOCÊ ACERTOU NA PRIMEIRA TENTATIVA!!");
        } else {
            alert("Você acertou em " + tentativa + " tentativas!");
        } break;
    }
        else
         if (numeroAleatorio > num){
            alert("O número secreto é maior!")
         } else {
            alert("O numéro secreto é menor")
         }
        }       
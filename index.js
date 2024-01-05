/*# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

//COMECANDO O DESAFIO



let nameHero = "Lord Lúdico" 
let xpLevel = 2345
let nivel = " "

if(xpLevel <= 1000){
        nivel = "Ferro"
} else if ( xpLevel >= 1001 && xpLevel <= 2000){
        nivel = "Bronze"
} else if ( xpLevel >= 2001 && xpLevel <= 5000){
        nivel= "Prata"
} else if ( xpLevel >= 5001 && xpLevel <=  7000){
        nivel = "Ouro"
} else if ( xpLevel >= 7001 && xpLevel <= 8000){
        nivel = "Platina"
} else if ( xpLevel >= 8001 && xpLevel <= 9000){
        nivel =  "Ascendente"
} else if ( xpLevel >= 9001 && xpLevel <= 10000){
        nivel = "Imortal"
} else if ( xpLevel =  10001 ){
         nivel = "Radiante"       
}
  console.log("O Herói de nome " + nameHero + " está no nível de " + nivel)





          


      
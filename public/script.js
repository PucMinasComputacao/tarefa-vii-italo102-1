// Função auxiliar: lê um número válido via prompt
function lerNumero(mensagem) {
  let valor;
  while (true) {
    let entrada = prompt(mensagem);
    if (entrada === null) {
      alert("Operação cancelada.");
      throw new Error("Usuário cancelou.");
    }
    valor = Number(entrada);
    if (!isNaN(valor) && entrada.trim() !== "") {
      break;
    }
    alert("Valor inválido! Digite apenas números.");
  }
  return valor;
}

// 1. Dados iniciais
let nome = prompt("Qual é o seu nome?");
if (nome === null || nome.trim() === "") nome = "Usuário";

let renda = lerNumero("Olá, " + nome + "! Qual é a sua renda mensal? (R$)");

let qtdRaw = lerNumero("Quantas despesas você vai informar? (mín. 1, máx. 5)");
let qtd;
if (qtdRaw < 1) {
  qtd = 1;
} else if (qtdRaw > 5) {
  qtd = 5;
} else {
  qtd = Math.floor(qtdRaw);
}

// 2. Lançamento de despesas com for
let totalDespesas = 0;
for (let i = 1; i <= qtd; i++) {
  let v = lerNumero("Despesa " + i + " de " + qtd + ": qual o valor? (R$)");
  totalDespesas += v;
}

// 3. Análise com if / else
let sobra = renda - totalDespesas;
let classificacao;
if (totalDespesas > renda) {
  classificacao = "Atenção: você gastou mais do que ganhou.";
} else {
  if (sobra >= renda * 0.30) {
    classificacao = "Ótimo: boa margem de sobra.";
  } else {
    classificacao = "Ok: dá para melhorar a sobra.";
  }
}

// 4. Saída — alert
let msg =
  "RESUMO DO ORÇAMENTO\n" +
  "Nome: " + nome + "\n" +
  "Renda: R$ " + renda.toFixed(2) + "\n" +
  "Despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
  "Sobra: R$ " + sobra.toFixed(2) + "\n" +
  classificacao;
alert(msg);

// 5. Saída — console.log
console.log("================================");
console.log("   RESUMO DO ORÇAMENTO PESSOAL  ");
console.log("================================");
console.log("Nome:     " + nome);
console.log("Renda:    R$ " + renda.toFixed(2));
console.log("Despesas: R$ " + totalDespesas.toFixed(2));
console.log("Sobra:    R$ " + sobra.toFixed(2));
console.log("--------------------------------");
console.log(classificacao);
console.log("================================");
function iniciar() {
  let nome = prompt("Digite seu nome:");
  let cosmo = prompt("Digite seu cosmo inicial:");

  let statusVida = "Vivo";

  // Decisão
  let sacrificio = confirm("Deseja sacrificar um sentido para dobrar o cosmo?");
  let decisao = sacrificio ? cosmo *= 2 : cosmo;
  alert(`Seu cosmo atual é: ${decisao}`);

  // Batalha nas 12 casas
  let dano = 10;
  cosmo -= dano;
  statusVida = cosmo > 0 ? "Vivo" : "Morto";

  // Validação
  let resultado = "";
  resultado = cosmo >= 100 && statusVida === "Vivo" ? `Parabéns, ${nome}! Você salvou Athena com ${cosmo} de cosmo restante!` : `Que pena, ${nome}, Você falhou na missão. Cosmo final: ${cosmo}`;
  
  document.getElementById("resultado").innerText = resultado;
}
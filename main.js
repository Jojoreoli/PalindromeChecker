const novaEntrada = document.querySelector('[data-botao]');

function verificaPalindromo(texto){
  // tratando e padronizando o texto
  // dentro do replace se usa uma regexp global case insensitive para procurar todos os caracteres que estejam FORA dos brackets, e substituir por espaço em branco
  // O resultado da regexp passa para caixa baixa
  let padroniza = texto.replace(/[^A-Z0-9]/gi, "").toLowerCase();

  // padronizando ao contrario para comparar
  // split separa a string (o parametro "texto" ja tratado) em um array. O espaço em branco é omitido por causa das '' ao chamar a func
  // Reverse() pega o array criado pelo split e inverte a ordem dos elementos
  // Join junta todos os elementos do array em uma string
  let verificaPalindromo = padroniza.split('').reverse().join('');

  if (padroniza === verificaPalindromo){
    return true;
  }
  else{
    return false;
  }
}

function criarPalindromo(event) {
  // pegando o valor do input
  event.preventDefault();
  const input = document.querySelector('[data-input]');
  const valor = input.value;

  // atribuindo a ul a uma const
  const lista = document.querySelector('[data-lista]');

  // criando uma li na const palindromo
  const palindromo = document.createElement('li');

  // fazendo a verificacao se é um palíndromo ou não, e adicionando a classe correta
  const verificaCorreto = verificaPalindromo(valor);
  if (verificaCorreto){
    palindromo.classList.add('lista__item--certo');
  }
  else {
    palindromo.classList.add('lista__item--errado');
  }

  // Inserindo o valor no li palindromo
  const conteudo = `<p>${valor}</p>`;
  palindromo.innerHTML = conteudo;

  // Inserindo o li na ul lista e limpando o input
  lista.appendChild(palindromo);
  input.value = "";
}

novaEntrada.addEventListener('click', criarPalindromo);

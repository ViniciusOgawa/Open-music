const ulGenero = document.getElementById("ul-genero");
const ulCard = document.getElementById("ul-card");

function listarGenero(database) {
  ulGenero.innerHTML = "";

  database.forEach((element) => {
    let li = criarLiGenero(element);

    ulGenero.appendChild(li);
  });
}

function criarLiGenero(genero) {
  const li = document.createElement("li");
  const button = document.createElement("button");

  button.classList.add("genero");
  button.dataset.genero = genero;

  button.innerText = genero;

  li.appendChild(button);

  return li;
}

function listarLiCard(database) {
  ulCard.innerHTML = "";

  database.forEach((element) => {
    let li = criarLiCard(element);

    ulCard.appendChild(li);
  });
}

function criarLiCard(produto) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const divBoxBandaAno = document.createElement("div");
  const divBoxValorBotao = document.createElement("div");
  const pNomeBanda = document.createElement("p");
  const pNomeMusica = document.createElement("p");
  const pValor = document.createElement("p");
  const pAno = document.createElement("p");
  const button = document.createElement("button");

  li.classList.add("li-card");
  img.classList.add("img-card");
  divBoxBandaAno.classList.add("box-banda-ano");
  pNomeMusica.classList.add("nome-musica");
  divBoxValorBotao.classList.add("box-valor-botao");

  pNomeBanda.innerText = produto.band;
  pAno.innerText = produto.year;
  pNomeMusica.innerText = produto.title;
  pValor.innerText = `R$ ${produto.price}`;
  button.innerText = "Comprar";
  img.src = produto.img;

  divBoxBandaAno.appendChild(pNomeBanda);
  divBoxBandaAno.appendChild(pAno);
  divBoxValorBotao.appendChild(pValor);
  divBoxValorBotao.appendChild(button);
  li.appendChild(img);
  li.appendChild(divBoxBandaAno);
  li.appendChild(pNomeMusica);
  li.appendChild(divBoxValorBotao);

  return li;
}

function filtrar() {
  const buttons = document.querySelectorAll("[data-genero]");
  const ulCard = document.getElementById("ul-card");

  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      ulCard.innerHTML = "";

      const genero = element.innerText;

      if (genero === "Todos") {
        listarLiCard(products);
      } else {
        const filtro = categories.findIndex((element) => {
          return element === genero;
        });

        const arrayFiltro = products.filter(
          (element) => filtro == element.category
        );

        arrayFiltro.forEach((element) => {
          let li = criarLiCard(element);

          ulCard.appendChild(li);
        });
      }
    });
  });
}

function filtrarValor() {
  const input = document.getElementById("input-range");
  const valor = document.getElementById("preco");

  input.addEventListener("input", () => {
    valor.innerText = `Até R$ ${input.value}`;

    ulCard.innerHTML = "";

    const arrayFiltro = products.filter(
      (element) => element.price <= input.value
    );

    arrayFiltro.forEach((element) => {
      let li = criarLiCard(element);

      ulCard.appendChild(li);
    });
  });
}

listarGenero(categories);

listarLiCard(products);

filtrar();

filtrarValor();

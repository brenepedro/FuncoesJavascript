document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("container");

  const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/agregados/1705/variaveis?view=OLAP&localidades=BR');

  const dados = await resposta.json();

  dados.forEach(function (inflacao) {

      const divBlocoinflacao = document.createElement('div'); // Document para criar uma div
      divBlocoinflacao.classList.add('bloco-inflacao');   //classe

      const Ulsubtitulo = document.createElement('ul');
      Ulsubtitulo.id = 'subtitulo';
      Ulsubtitulo.setAttribute = 'id';

      const lisSubtitulo = document.createElement('li');
      lisSubtitulo.textContent = `${inflacao.medida} - (${inflacao.unidade})`;


      Ulsubtitulo.appendChild(lisSubtitulo);

      divBlocoinflacao.appendChild(Ulsubtitulo);

      const resultados = inflacao.resultados;


      resultados.forEach(function (resultado) {
          const olResultado = document.createElement('ol');

          const series = resultado.series;

          series.forEach(function (serieGeral) {

              const serieData = serieGeral.serie;

              for (const anoMes in serieData) {

                  const liSerie = document.createElement('li');

                  liSerie.textContent = `${anoMes} - ${serieData[anoMes]}`;

                  olResultado.appendChild(liSerie);

              }
          });
          
          Ulsubtitulo.appendChild(olResultado);

      });

      conteudo.appendChild(divBlocoinflacao);





  });
}
)
document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  // Alterna visibilidade do menu de acessibilidade
  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

    const estaExpandido = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !estaExpandido);
  });

  // Controle de tamanho da fonte
  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  let tamanhoAtualFonte = 1;

  aumentaFonteBotao.addEventListener('click', function () {
    if (tamanhoAtualFonte < 2) {
      tamanhoAtualFonte += 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    }
  });

  diminuiFonteBotao.addEventListener('click', function () {
    if (tamanhoAtualFonte > 0.8) {
      tamanhoAtualFonte -= 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    }
  });

  // Alterna modo de alto contraste
  const alternaContraste = document.getElementById('alterna-contraste');
  alternaContraste.addEventListener('click', function () {
    document.body.classList.toggle('alto-contraste');
  });

  // ScrollReveal com animações suaves e clássicas
  const revealConfig = {
    delay: 400,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    reset: false
  };

  ScrollReveal().reveal('#inicio', revealConfig);
  ScrollReveal().reveal('#compositores', revealConfig);
  ScrollReveal().reveal('#galeria', revealConfig);
  ScrollReveal().reveal('#contato', revealConfig);
});

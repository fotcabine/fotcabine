import React, { useState } from 'react';
import './App.css'; // Estilos gerais

function App() {
  // Estados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [localEvento, setLocalEvento] = useState('');
  const [dataEvento, setDataEvento] = useState('');
  const [equipamento, setEquipamento] = useState('');
  const [tipoEvento, setTipoEvento] = useState('');
  const [numeroConvidados, setNumeroConvidados] = useState('');
  const [mensagem, setMensagem] = useState('');

const limparFormulario = () => {
  setNome("");
  setEmail("");
  setTelefone("");
  setLocalEvento("");
  setDataEvento("");
  setEquipamento("");
  setTipoEvento("");
  setNumeroConvidados("");
  setMensagem("");
};

  // Gera link do WhatsApp
  const gerarMensagemWhatsApp = () => {
    const mensagemFormatted =
      `*Mensagem*: ${mensagem}\n\n` +
      `*Nome*: ${nome}\n` +
      `*E-mail*: ${email}\n` +
      `*Telefone*: ${telefone}\n` +
      `*Local do Evento*: ${localEvento}\n` +
      `*Data do Evento*: ${dataEvento}\n` +
      `*Equipamento Desejado*: ${equipamento}\n` +
      `*Tipo de Evento*: ${tipoEvento}\n` +
      `*Número de Convidados*: ${numeroConvidados}`;

    const mensagemCodificada = encodeURIComponent(mensagemFormatted);
    return `https://wa.me/5521992801818?text=${mensagemCodificada}`;
  };

  // Gerar as imagens para a galeria (foto10, foto11, ..., foto65)
  const galeriaImages = [];
  for (let i = 10; i <= 65; i++) {
    galeriaImages.push(`/imagens/foto${i}.jpg`);
    
  }

  return (
    <React.Fragment>
      {/* Cabeçalho com Faixa Laranja */}
      <header className="header-container">
        <div className="header-bg-laranja">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo Centralizada */}
            <div className="logo-container">
              <img src="/imagens/logo.png" alt="Logo" /> className="logo" />
            </div>

            {/* Menu de Navegação - Centralizado */}
            <nav>
              <ul className="nav-list">
                <li><a href="#fotocabine" className="hover:text-white">A Fotcabine</a></li>
                <li><a href="#sobre" className="hover:text-white">Sobre Nós</a></li>
                <li><a href="#equipamentos" className="hover:text-white">Equipamentos</a></li>
                <li><a href="#galeria" className="hover:text-white">Galeria</a></li>
                <li><a href="#contato" className="hover:text-white">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Seção A Fotocabine */}
      <section id="fotocabine" className="py-20 bg-gray-100 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mb-6 text-laranja">A Fotcabine</h2>
          <p className="text-justify max-w-3xl mx-auto">
            Há 11 anos no mercado a Fotcabine teve o privilégio de estar presente nos momentos mais emocionantes como casamentos, formaturas, 15 anos e eventos corporativos de vários tipos. Temos orgulho em dizer que nunca deixamos de cumprir nossos contratos. Com equipamentos tradicionais como a CABINE DE FOTOS, sofisticados como o ESPELHO MÁGICO e como não poderia faltar os modernos como PLATAFORMA ou MOBILEBOOTH, estamos sempre criando recordações para uma vida toda, pois levamos para sua festa Mais que uma lembrança!
          </p>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-20 bg-preto text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mb-6 text-laranja">Sobre Nós</h2>
          <p className="text-justify max-w-3xl mx-auto">
            Somos a Família Teixeira: Felipe, Isis, Miguel, Nicolas e Vinicius.
            Quando começamos a empresa ainda éramos apenas 4, mas logo chegou o quinto integrante!!!
            Começamos com zero experiência no assunto e com o tempo fomos aprendendo tudo que podíamos e conseguimos sair de uma Cabine de Fotos para 8 equipamentos! E agora o legado está sendo passado, nossos filhos já estão executando eventos sozinhos e assim estamos até hoje. Nessa caminhada de 11 anos tivemos ajuda de muitos amigos para cumprir os compromissos, e somos muito gratos a eles e toda nossa família que sempre nos apoiou quando precisamos.
          </p>
        </div>
      </section>

      {/* Seção Equipamentos */}
      <section id="equipamentos" className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mb-6 text-laranja">Nossos Equipamentos</h2>
          <p className="text-justify max-w-3xl mx-auto mb-8">
            Contamos com uma variedade de equipamentos de alta qualidade para garantir que seu evento seja um sucesso! 
            Todos os nossos equipamentos são modernos, bem mantidos e prontos para capturar momentos inesquecíveis.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Exemplo de imagens dos equipamentos */}
            <div className="bg-gray-200 p-4">
              <img src="/imagens/equipamento1.jpg" alt="Equipamento 1" className="w-full h-auto object-cover" />
              <p className="mt-4">CABINE DE FOTOS</p>
            </div>
            <div className="bg-gray-200 p-4">
              <img src="/imagens/equipamento2.jpg" alt="Equipamento 2" className="w-full h-auto object-cover" />
              <p className="mt-4">TÓTEM RETRÔ</p>
            </div>
            <div className="bg-gray-200 p-4">
              <img src="/imagens/equipamento3.jpg" alt="Equipamento 3" className="w-full h-auto object-cover" />
              <p className="mt-4">PLATAFORMA 360°</p>
            </div>
            <div className="bg-gray-200 p-4">
              <img src="/imagens/equipamento4.jpg" alt="Equipamento 4" className="w-full h-auto object-cover" />
              <p className="mt-4">ESPELHO MÁGICO</p>
            </div>
            <div className="bg-gray-200 p-4">
              <img src="/imagens/equipamento5.jpg" alt="Equipamento 5" className="w-full h-auto object-cover" />
              <p className="mt-4">VÍDEOBOOK</p>
            </div>
            <div className="bg-gray-200 p-4">
              <img src="/imagens/equipamento6.jpg" alt="Equipamento 6" className="w-full h-auto object-cover" />
              <p className="mt-4">GUESTBOOK</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Galeria */}
      <section id="galeria" className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mb-6">Galeria</h2>
          <div className="grid grid-cols-8 gap-6">
            {/* Exibindo as imagens da galeria */}
            {galeriaImages.map((image, index) => (
              <div key={index} className="bg-blue-300 p-6">
                <img src={image} alt={`Foto ${index + 10}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-20 bg-white text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mb-6 text-laranja">Contato</h2>

          <form className="max-w-2xl mx-auto mt-8">
            {/* Nome + Email */}
            <div className="row mb-4">
              <div className="col">
                <label htmlFor="nome" className="block text-left">Nome</label>
                <input
                  type="text"
                  id="nome"
                  className="w-full p-2 mt-2 border border-gray-300 rounded"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="email" className="block text-left">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 mt-2 border border-gray-300 rounded"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Telefone + Local + Data */}
            <div className="row mb-4">
              <div className="col">
                <label htmlFor="telefone" className="block text-left">Telefone</label>
                <input
                  type="text"
                  id="telefone"
                  className="w-full p-2 mt-2 border border-gray-300 rounded"
                  placeholder="Seu telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="local_evento" className="block text-left">Local do evento</label>
                <input
                  type="text"
                  id="local_evento"
                  className="w-full p-2 mt-2 border border-gray-300 rounded"
                  placeholder="Local do evento"
                  value={localEvento}
                  onChange={(e) => setLocalEvento(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="data_evento" className="block text-left">Data do evento</label>
                <input
                  type="date"
                  id="data_evento"
                  className="w-full p-2 mt-2 border border-gray-300 rounded"
                  value={dataEvento}
                  onChange={(e) => setDataEvento(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Equipamento + Tipo de Evento + Convidados */}
            <div className="row mb-4">
              <div className="col">
                <label htmlFor="equipamento" className="block text-left">Equipamento Desejado</label>
                <select
                  id="equipamento"
                  className="w-full p-2 mt-2 border border-gray-300 rounded"
                  value={equipamento}
                  onChange={(e) => setEquipamento(e.target.options[e.target.selectedIndex].text)}
                  required
                >
                  <option value="">Selecione um equipamento</option>
                  <option value="cabine_fotos">Cabine de Fotos</option>
                  <option value="totem_retro">Tótem Retrô</option>
                  <option value="espelho_magico">Espelho Mágico</option>
                  <option value="plataforma_360">Plataforma 360</option>
                  <option value="videobook">VídeoBook</option>
                  <option value="mobilebooth">MobileBooth</option>
                </select>
              </div>

              <div className="col">
                <label htmlFor="tipo_evento" className="block text-left">Tipo de evento</label>
                <select
                  id="tipo_evento"
                  className="w-full p-2 mt-2 border border-gray-300 rounded"
                  value={tipoEvento}
                  onChange={(e) => setTipoEvento(e.target.options[e.target.selectedIndex].text)}
                  required
                >
                  <option value="">Selecione o tipo de evento</option>
                  <option value="casamento">Casamento</option>
                  <option value="15anos">15 anos</option>
                  <option value="formatura">Formatura</option>
                  <option value="corporativo">Corporativo</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div className="col">
                <label htmlFor="numero_convidados" className="block text-left">Número de convidados</label>
                <input
                  type="number"
                  id="numero_convidados"
                  className="w-full p-2 mt-2 border border-gray-300 rounded"
                  placeholder="Número de convidados"
                  value={numeroConvidados}
                  onChange={(e) => setNumeroConvidados(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Mensagem */}
            <div className="mb-4">
              <label htmlFor="mensagem" className="block text-left">Digite sua mensagem aqui</label>
              <textarea
                id="mensagem"
                className="w-full p-2 mt-2 border border-gray-300 rounded"
                placeholder="Sua mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              />
            </div>

  {/* Botão de envio */}
            <button
  type="button"
  onClick={() => {
    alert("Mensagem enviada, logo retornaremos o contato via WhatsApp!");
    window.open(gerarMensagemWhatsApp(), '_blank');
    limparFormulario();
  }}
  className="bg-laranja text-white px-6 py-2 rounded"
>
  Enviar
</button>
          </form>
        </div>
      </section>
       
      {/* Rodapé */}
<footer
  className="flex items-center"
  style={{ minHeight: '15px' }}  // altura menor
>
  <div
    className="container mx-auto flex justify-between items-center w-screen !max-w-none !px-0"
    style={{ maxWidth: 'none', paddingLeft: 0, paddingRight: 0, width: '100vw' }}
  >
    {/* Redes sociais à esquerda */}
    <div
      className="container mx-auto flex justify-between items-center w-screen !max-w-none !px-0 flex-nowrap gap-x-12 md:gap-x-20"
      style={{ maxWidth: 'none', paddingLeft: 0, paddingRight: 0, width: '100vw' }}
    >
      {/* Redes sociais à esquerda */}
      <div className="social-links flex items-center flex-1">
        <a
          href="https://www.facebook.com/fotcabine"
          className="mx-3 text-white hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square"></i> Facebook
        </a>
        <a
          href="https://www.instagram.com/fotcabine/"
          className="mx-3 text-white hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
        {/* Link do WhatsApp com a mensagem pré-definida */}
        <a
          href="https://wa.me/5521992801818?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21"
          className="mx-3 text-white hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>

      {/* Direitos autorais à direita */}
      <div className="copyright ml-auto text-right whitespace-nowrap pr-4 lg:pr-8">
        <p className="m-0 leading-tight">&copy; 2025 Fotocabine. Todos os direitos reservados.</p>
      </div>
    </div>
  </div>
</footer>


      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.me/5521992801818?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21"
        className="whatsapp-button"
        target="_blank" // Abre em uma nova aba
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </React.Fragment>
  );
}

export default App;
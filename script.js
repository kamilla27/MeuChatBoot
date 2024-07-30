// Função para criar uma nova mensagem
function createMessageElement(text, isUser) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${isUser ? 'user' : 'bot'}`;
    messageElement.innerHTML = text;
    return messageElement;
  }
  
  // Dicionário de respostas automatizadas
  const responses = {
    'oi': '<strong>Olá!</strong> Bem-vindo ao nosso chatbot. Como posso ajudá-lo hoje? Digite uma pergunta ou escolha uma das opções abaixo: <br> - Serviços<br> - Horario<br> - Preço<br> - Privacidade<br> - Contato<br> - Endereço<br> - Outros. 🗨️',
    'serviços': '<strong>Serviços:</strong> Oferecemos uma variedade de serviços, incluindo consultoria e suporte técnico. 🚀',
    'horario': '<strong>Horário:</strong> Estamos disponíveis das 9h às 18h, de segunda a sexta-feira. ⏰',
    'preço': '<strong>Preço:</strong> Nossos preços variam de acordo com o serviço. Entre em contato para uma cotação. 💰',
    'suporte': '<strong>Suporte:</strong> Nossa equipe de suporte está disponível 24/7. Entre em contato para assistência. 🛠️',
    'contato': '<strong>Contato:</strong> Você pode entrar em contato conosco pelo email kamilla.biologicas@gmail.com ou pelo telefone (27) 98118 7167. 📞',
    'endereço': '<strong>Endereço:</strong> Estamos localizados na Rua Exemplo, 123, São Paulo, SP. 🗺️',
    'desculpe': '<strong>Desculpe:</strong> Não entendi sua pergunta. Pode reformular? 🤔',
   'abertura': '<strong>Abertura:</strong> Nossa empresa foi fundada em 2020 e está em crescimento contínuo desde então. 🌟',
   'horário de atendimento': '<strong>Horário de Atendimento:</strong> Nosso horário de atendimento é das 9h às 18h, de segunda a sexta-feira. ⏳',
   'privacidade': '<strong>Privacidade:</strong> Sua privacidade é importante para nós. Confira nossa política de privacidade em www.exemplo.com/privacidade. 🔒',
   'termos de serviço': '<strong>Termos de Serviço:</strong> Para mais informações sobre nossos termos de serviço, acesse www.exemplo.com/termos. 📜',
   'funcionários': '<strong>Funcionários:</strong> Contamos com uma equipe altamente qualificada para atender suas necessidades. 👥',
   'investimentos': '<strong>Investimentos:</strong> Estamos sempre em busca de novas oportunidades de investimento. Entre em contato para mais informações. 📈',
   'produto': '<strong>Produto:</strong> Temos uma gama variada de produtos. Visite nosso site para explorar todas as opções. 🛒',
   'newsletter': '<strong>Newsletter:</strong> Inscreva-se em nossa newsletter para receber as últimas novidades e ofertas especiais. 📧',
   'promoção': '<strong>Promoção:</strong> Fique atento às nossas promoções especiais. Visite nossa página de ofertas para mais detalhes. 🎁',
   'feedback': '<strong>Feedback:</strong> Adoramos ouvir sua opinião! Por favor, envie seus comentários para feedback@exemplo.com. 💬',
   'horário de funcionamento': '<strong>Horário de Funcionamento:</strong> Estamos abertos das 9h às 18h,  de segunda a sexta-feira. 🕒',
   'suporte técnico': '<strong>Suporte Técnico:</strong> Oferecemos suporte técnico especializado para resolver qualquer problema. Entre em contato para assistência. 🔧',
   'carreira': '<strong>Carreira:</strong> Se você está interessado em trabalhar conosco, visite nossa página de carreiras em www.exemplo.com/carreiras. 💼',
   'empresa': '<strong>Empresa:</strong> Nossa empresa é líder no setor e está comprometida com a  excelência. Saiba mais em www.exemplo.com/sobre. 🌟',
   'blog': '<strong>Blog:</strong> Confira nosso blog para ler artigos interessantes e atualizações. Acesse www.exemplo.com/blog. 📝'

};

  // Função para processar e enviar uma mensagem
  function handleSendMessage() {
    const input = document.getElementById('messageInput');
    const messageText = input.value.trim();
  
    // Verificar se o campo de mensagem está vazio
    if (messageText === '') return;
  
    // Adicionar mensagem do usuário ao chat
    const userMessage = createMessageElement(messageText, true);
    document.getElementById('chatBox').appendChild(userMessage);
  
    // Limpar o campo de entrada
    input.value = '';
  
    // Gerar uma resposta automatizada do bot
    generateBotResponse(messageText);
  }
  
  // Função para gerar uma resposta do bot
  function generateBotResponse(userMessage) {
    let botResponse = '<strong>Desculpe:</strong> Não entendi sua pergunta. Pode reformular? 🤔'; // Resposta padrão
    
    // Verificar palavras-chave e definir resposta
    for (const key in responses) {
      if (userMessage.toLowerCase().includes(key)) {
        botResponse = responses[key];
        break;
      }
    }
  
    // Adicionar resposta do bot ao chat
    setTimeout(() => {
      const botMessage = createMessageElement(botResponse, false);
      document.getElementById('chatBox').appendChild(botMessage);
      // Rolagem automática para a última mensagem
      document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight;
    }, 1000); // Resposta do bot após 1 segundo
  }
  
  // Adicionar eventos para o botão de enviar e o Enter
  document.getElementById('sendButton').addEventListener('click', handleSendMessage);
  document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  });
  
  // Função para ajustar o tamanho do chat no carregamento da página
  function adjustChatHeight() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.height = window.innerHeight - document.querySelector('.chat-header').offsetHeight - document.querySelector('.input-box').offsetHeight + 'px';
  }
  
  // Ajustar o chat ao redimensionar a janela
  window.addEventListener('resize', adjustChatHeight);
  
  // Ajustar o chat no carregamento inicial da página
  window.addEventListener('load', adjustChatHeight);
  
  


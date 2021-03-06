/* globals console */

(function($) {
  'use strict';

  var schedules = [
    /* 0 - ? - */
    {
      speaker: '',
      title: '',
      description: '',
      aboutSpeaker: '',
      image: ['images/talks/a-confirmar.jpg']
    },

    /* 1 - Achilles Fróes - */
    {
      speaker: 'Achilles Fróes',
      title: 'Oficina de ASP.NET MVC',
      description: 'Apresentar os conceitos essenciais de desenvolvimento de aplicações web com ASP.NET MVC.<br/> <p class="text-center"><a class="btn btn-default btn-lg btn-success" href="#">Trazer notebook com Visual Studio 2013 Community, Sql Express</a></p>',
      aboutSpeaker: 'Apaixonado por desenvolvimento de software, desenvolve software para web desde 2003. Foi professor da pós graduação em Engenharia de Software com .Net no Instituto Infnet (RJ), já palestrou sobre .NET na UNIFACS, Faculdade Maurício de Nassau, Faculdade Dom Pedro II e Fundação Visconde de Cairú e nos eventos LinguÁgil 2015, Microsoft DevBrasil Open Day e Microsoft Students 2 Business, além de atuar como líder técnico e arquiteto de software e ser certificado Microsoft. Tem como objetivo tornar o seu caminho rumo ao desenvolvimento profissional de software para web mais fácil e agradável. :D',
      image: ['images/talks/achilles-froes.jpeg']
    },

    /* 2 - Marcio Albuquerque - */
    {
      speaker: 'Marcio Albuquerque',
      title: 'Novidades do PHP 7',
      description: 'Novidades do PHP 7.<br /><p class="text-center"><a class="btn btn-default btn-lg btn-success" href="#">Trazer notebook com PHP 7 com todas as extensões.</a></p>',
      aboutSpeaker: 'Trabalha como DevOps no SERPRO com sistemas de infra-estrutura interna da empresa. Curioso da TI, gosta de mexer um pouco com tudo! Tem como preferência e especialidade trabalhos com web: HTML5, CSS3, JS, PHP, etc. Atualmente estuda muito sobre o mundo mobile e PhoneGap/Cordova',
      image: ['images/talks/marcio-albuquerque.jpg']
    },

    /* 3 - Juliano Ribeiro - */
    {
      speaker: 'Juliano Ribeiro',
      title: 'KANBAN TRAINING',
      description: 'O Kanban vem sendo utilizado no mundo em diversos projetos para o desenvolvimento dos mais variados produtos, assim como para a otimização de processos organizacionais. Nesse treinamento você será apresentado ao processo de desenvolvimento Kanban e aos conceitos envolvidos na sua criação. Trabalharemos como criar o seu próprio kanban e aplicá-lo em diversos processos dentro da sua organização. Convidamos todos os profissionais que lidam com a área de desenvolvimento de software, direta ou indiretamente, para aprender os conceitos e entender a interação dentro de uma equipe de desenvolvedores que utiliza um sistema Kanban.',
      aboutSpeaker: 'Especialista em Orientação à objetos pelo CESUMAR, é Certified Scrum Professional pela Scrum Alliance, Learning 3.0 Facilitator pela Happy Melly e Certified Delphi Developer pela Embarcadero. Desenvolve software profissionalmente desde 1994. Possui projetos em diversas linguagens como Clipper, Delphi, Java, iOS e Android. Experiência em liderança de equipes de desenvolvimento tendo implementado práticas de XP e Scrum em diversas empresas. Trabalha como Team Member, Scrum Master e Agile Coach desde 2009. Leciona treinamentos de Scrum, Kanban e XP. Organiza e apoia edições do Agile Tour desde 2009. É palestrante recorrente nos principais eventos sobre agilidade no Brasil e no exterior. É o chairman da edição 2016 do Agile Brazil, a maior conferência sobre o assunto na América Latina. Na Objective Solutions atua como profissional sênior, em consultoria e especificação.',
      image: ['images/talks/juliano-ribeiro.jpg']
    },

    /* 4 - Maurício Vieira - */
    {
      speaker: 'Maurício Vieira',
      title: 'Construindo e documentando uma API REST usando Python e Django',
      description: 'Neste curso faremos uma API REST utilizando Django REST Framework e práticas da eXtreme Programming (test-driven development, pair programming, refactoring, e simple design).<br/><br/><p class="text-center"><a target="_blank" href="https://github.com/linguagil/2016-minicursos/blob/master/RequisitosMinicursoDjangoRestFramework.md" class="btn btn-default btn-lg btn-success">Requisitos</a></p>',
      aboutSpeaker: 'Engenheiro de Software full stack, trabalhou em empresas como o SERPRO, Thoughtworks e Dafiti, atualmente trabalha na Voxy, uma plataforma global de ensino de idiomas, e presta consultoria pela Omnicode Solutions. <br /> Maurício é um soteropolitano que migrou para São Paulo, mas continua atuando nas comunidades de Salvador ao participar da organização do LinguÁgil desde 2010, e do Rails Girls Salvador desde 2013. Ele gosta de linguagens de programação dinâmicas, possui experiência em diversas linguagens como Python, PHP, Ruby, Perl, e Lua.',
      image: ['images/talks/mauricio-vieira.jpg']
    },

    /* 5 - Morvana Bonin e Guilherme Motta - */
    {
      speaker: 'Morvana Bonin e Annelise Gripp',
      title: 'Práticas Jedi eXtreme Programming',
      description: 'Neste minicurso, colocaremos na prática algumas técnicas de eXtreme Programming. Será mão na massa, terá programação, apresentação de slides e dinamicas para exercitar alguns dos valores e praticas de XP. Durante o curso, os participantes serão dividos em duplas, grupos, e com um grande grupo.',
      aboutSpeaker: 'Morvana Bonin - Estudante de Análise e Desenvolvimeto de Sistemas no Senac, Analista de Desenvolvimento na empresa Kinghost, entusiasta e estudante de metodologias ágeis onde poẽm em prática na vida pessoal e no trabalho - <a href="https://br.linkedin.com/in/morvana-bonin-0271b215" target="_blank">linkedin</a>.<br /><br />Annelise Grip - Louca por tecnologia e amante do trabalho com pessoas, há 19 anos dedico meu tempo a Engenharia de Desenvolvimento de Software. Hoje, como consultora, meu trabalho consiste em expandir, compartilhar e aplicar meus conhecimentos, habilidades e experiências nas empresas. Entre as atividades desempenhadas, implanto projetos utilizando Metodologia Ágil (kanban, Scrum), Agile Coach (coaching aplicado a líderes e times) e Personal/Executive Coach (desenvolvimento de competências para alcançar resultados). Nos últimos 9 anos venho trabalhando com Projetos, Produtos e Pessoas, entregando software com rapidez, qualidade e satisfação, para o cliente e para equipe.',
      image: ['images/talks/morvana-bonin.jpg', 'images/talks/annelise-gripp.jpg']
    },
    /* 6 - Mila Orrico - */
    {
      speaker: 'Mila Orrico',
      title: 'O trabalho de FDP do PO: fatiar, descartar e priorizar!',
      description: 'É um desafio instigante manter o mindset alinhado ao que os stakeholders precisam e assegurar que os desenvolvedores entenderam a expectativa do cliente a cada Sprint, o que é prioridade, e o que é desnecessário. Em um time Scrum, PO (Product Owner) é a pessoa que define o produto de software. Fatiar, descartar e priorizar são suas principais tarefas, é sobre como elas podem ser realizadas que iremos conversar.',
      aboutSpeaker: 'Trabalha com Agilidade desde 2009, é desenvolvedora, empreendedora e atua principalmente como Product Owner e Coordenadora de Desenvolvimento. É CSM, CSPO e CSD, e contribui na organização do Agile Tour Salvador e do LinguÁgil. <a href="https://www.linkedin.com/in/milaorrico/" target="_blank">linkedin.com/milaorrico</a>.',
      image: ['images/talks/mila-orrico.jpg']
    },
    /* 7 Palestra Surpresa. - */
    {
      speaker: 'Organizadores do Evento',
      title: 'Palestra surpresa!',
      description: 'O conteúdo desta palestra é suspresa!',
      aboutSpeaker: 'Os organizadores do evento LinguÁgil são pessoas que tem paixão pela comunidade e por eventos.',
      image: ['images/talks/a-confirmar.jpg']

    },
    /* 8 - Lorena Caldas - */
    {
      speaker: 'Lorena Caldas',
      title: 'SBTM - Testes exploratórios guiados à sessão',
      description: 'Aprenda como deixar seus testes funcionais enxutos e independentes dos atrasos do projeto de software',
      aboutSpeaker: 'Meu nome é Lorena Caldas, trabalho com testes vai fazer 5 anos, tempo que pesquiso e proponho avanços para a área. Sou formada e pós-graduada em TI.  Possuo alguns trabalhos publicados na área de ES e já ministrei palestras neste campo. “Isto fica feliz em ser útil! (filme O Homem Bicentenário)”',
      image: ['images/talks/lorena-caldas.png']
    },
    /* 9 - Isaque Dias - */
    {
      speaker: 'Isaque Dias',
      title: 'Construindo aplicativos móveis com Ionic Framework',
      description: 'O Ionic Framework provou que é possível desenvolver aplicativos multiplataforma utilizando as tecnologias que já conhecemos; HTML, CSS e Javascript. Nessa apresentação, mostraremos o potencial desse incrível framework, entre outras ferramentas que tem permitido a criação de apps extraordinários.',
      aboutSpeaker: 'Empreendedor, desenvolvedor web, e amante das tecnologias mobile híbridas, Isaque Dias tem se dedicado à criação de soluções inovadoras, onde co-fundou a startup NaVibe (2014), e atualmente é Diretor de Produtono Clicou Partiu. Já ministrou cursos particulares e palestras sobre desenvolvimento de aplicativos móveis, web design e empreendedorismo.  É criador do grupo Ionic Brazil, que tem fomentado o desenvolvimento de apps através de cursos, palesras e encontros. Além disto, mantém um blog pessoal sobre desenvolvimeno web e empreendedorismo.',
      image: ['images/talks/isaque-dias.jpg']
    },
    /* 10 - Carlos Felippe Cardoso - */
    {
      speaker: 'Carlos Felippe Cardoso',
      title: 'DevOps é uma prática, cultura ou um cargo?',
      description: 'Um problema é recorrente em diversas empresas: A TI é a maior barreira para o o negócio poder colocar algo em produção. Para endereçar este problema, vamos discutir nesta palestra os formatos de solução que as empresas tem dado no que tange ao termo DevOps, mostrando a importância da cultura DevOps.',
      aboutSpeaker: 'Carlos Felippe Cardoso é um Agile Coach e trainer com bastante experiência prática, trabalhando com métodos ágeis desde 2004. Sua experiência inclui treinamentos e vivência em Scrum/Kanban, Continuous Delivery, desenvolvimento ágil, testes automatizados e práticas XP.  Já ministrou também diversos cursos e possui vasta experiência em linguagens de programação como Java, Python e C#. Já palestrou nos maiores eventos de agilidade brasileiros é instrutor do treinamento de CSD (Certified Scrum Developer). Além disso, é graduado e mestrando pela UFRJ, onde também atua como professor colaborador.',
      image: ['images/talks/carlos-felipe.jpg']
    },
    /* 11 - Osvaldo Matos Júnior (Tupy) - */
    {
      speaker: 'Osvaldo Matos Júnior (Tupy)',
      title: 'Programação Reactiva',
      description: 'React é uma biblioteca JavaScript lançada pelo Facebook e Instagram para construir aplicações que os dados mudam com o tempo. Com o React é possível criar componentes reutilizáveis para suas aplicações web, até mesmo extender para aplicações mobile usando React-native.',
      aboutSpeaker: 'Osvaldo é egenheiro e sócio do Jusbrasil, doutorando em Ciência da Computação (UFBA), mestre em Ciências da Computação (UFMG) e graduado em Engenharia de Computação (UEFS). Atualmente é líder técnico no desenvolvimento frontend do site onde atua com métodos ágeis.',
      image: ['images/talks/tupy.jpg']
    },
    /* 12 - Camille Nogueira - */
    {
      speaker: 'Camille Nogueira',
      title: 'Organização e Agilidade, como isso funciona?',
      description: 'Com a metodologia SCRUM, as cerimônias definem alguns procedimentos que auxiliam nos resultados das entregas, mas elas não dizem como fazer. A minha proposta é mostrar ao público como fazermos para organizar as tarefas entre o time para obtenção de resultados mais satisfatórios. Um trabalho organizado, com clareza para os envolvidos, gera um maior engajamento e motivação.',
      aboutSpeaker: 'Cientista da Computação, Mestranda em Computação Aplicada, MBA em Gestão de Projetos e Especialização em Gestão de TI. Atualmente atua como Professora universitária e Gerente de Projetos.',
      image: ['images/talks/camille-nogueira.jpg']
    },
    /* 13 - Osvaldo Matos Júnior (Tupy) - */
    {
      speaker: 'Paula Antunes',
      title: 'Como empreender tendo um emprego?',
      description: 'Temos desejo de mostrar as nossas ideias e construir coisas novas mas, como é possível desenvolver a minha startup ou explorar as minhas ideias se tenho que trabalhar, preciso cumprir as minhas metas e entregar as minhas atividades para o meu gerente? Parece um grande desafio mas, é simples! ',
      aboutSpeaker: 'Fundadora da SMINDER. Pós graduada em Segurança da Informação. E incentivadora das mulheres na tecnologia. ',
      image: ['images/talks/paula-antunes.jpg']
    },
    /* 14 - Rafael Miranda - */
    {
      speaker: 'Rafael Miranda',
      title: 'Dobro do Resultado na Metade do Tempo',
      description: 'O desperdício de tempo, dinheiro e capital intelectual pode ser fatal para organizações. Apesar disso, a maiora das empresas está queimando dinheiro, perdendo tempo e jogando fora conhecimento e oportunidades ao desenvolver software de forma errada. Veremos que é possível resolver estes problemas.',
      aboutSpeaker: 'CEO na HE:labs, com mais de 16 anos de experiência em TI. Formado em Ciência da Computação, cursou mestrado em Mecatrônica pela UFBA. Atuou na iniciativa privada e no serviço público, sendo responsável por projetos estruturadores de grande porte envolvendo times multi-disciplinares. É palestrante e consultor em Gestão Organizacional e Agile.',
      image: ['images/talks/rafael-miranda.png']
    },
    /* 15 - Samuel Cavalcante - */
    {
      speaker: 'Samuel Cavalcante',
      title: '"No estimate" do jeito errado',
      description: 'Sabe aquela sensação de estar trabalhando entregando e parecer que não entrega nada, pois é, foi o que aconteceu quando resolvemos parar de estimar. Quando resolvemos fazer isso acreditávamos na felicidade e caímos no “Extreme Go Horse”. Quero apresentar o que levou nossos times a chegar ao XGH e como saímos dele, sem estimar em pontos.',
      aboutSpeaker: 'Pai, Esposo, Scrum Master na DígithoBrasil, Professor Universitário, Curioso, Arduineiro e Engenheiro de Computação.',
      image: ['images/talks/samuel-cavalcante.jpg']
    },
    /* 16 - Juliano RIbeiro - */
    {
      speaker: 'Juliano Ribeiro',
      title: 'Controlefobia',
      description: 'Processos e equipes ágeis são caracterizados por terem poucas regras, poucas imposições e muita liberdade. Nesse contexto falar de controle acaba sendo quase um sacrilégio, um pecado passivo de uma dolorosa penitência. Mas esse termo é mal compreendido no universo ágil. O problema em si não é o controle, mas o que fazemos para obtê-lo: Se comprometemos os valores e princípios ágeis para ter controle isso faz dele um vilão. Mas agora se conseguimos ter controle mantendo os valores e princípios intactos ele se torna uma poderosa ferramenta para evolução e melhoria em processos agéis. Mas é possível ter controle e não comprometer nossos valores? Nessa palestra vamos demonstrar essa possibilidade e, principalmente, desfazer seu preconceito.',
      aboutSpeaker: 'Especialista em Orientação à objetos pelo CESUMAR, é Certified Scrum Professional pela Scrum Alliance, Learning 3.0 Facilitator pela Happy Melly e Certified Delphi Developer pela Embarcadero. Desenvolve software profissionalmente desde 1994. Possui projetos em diversas linguagens como Clipper, Delphi, Java, iOS e Android. Experiência em liderança de equipes de desenvolvimento tendo implementado práticas de XP e Scrum em diversas empresas. Trabalha como Team Member, Scrum Master e Agile Coach desde 2009. Leciona treinamentos de Scrum, Kanban e XP. Organiza e apoia edições do Agile Tour desde 2009. É palestrante recorrente nos principais eventos sobre agilidade no Brasil e no exterior. É o chairman da edição 2016 do Agile Brazil, a maior conferência sobre o assunto na América Latina. Na Objective Solutions atua como profissional sênior, em consultoria e especificação.',
      image: ['images/talks/juliano-ribeiro.jpg']
    },
    /* 17 - João Bosco - */
    {
      speaker: 'João Bosco',
      title: 'Futuro e tendências no desenvolvimento de software: Técnicas, Ferramentas e Plataformas.',
      description: 'A partir de uma analise de mercado, essa palestra irá abordar o cenário de adoção de novas tecnologias e tendências no desenvolvimento de software, passando por técnicas, ferramentas e plataformas inovadoras.',
      aboutSpeaker: 'João Bosco Seixas é consultor especialista em arquitetura de sistemas e trabalha com as principais plataformas de Cloud do mercado desde 2010. Acredita que somente através de inovação se pode garantir diferencial competitivo, por isso procura manter referências variadas de conhecimento, estudando assuntos diversos que convergem na criação de soluções inovadoras. <br />Tem prazer em atuar como transformador digital conduzindo equipes e empresas a novos estágios de desenvolvimento, permitindo que sejam competitivas e estejam a frente nas inovações dos seus mercados.<br/> <a href="https://br.linkedin.com/in/joaoboscoseixas" target="_blank">Linkedin</a>, <a href="https://twitter.com/joaoboscoseixas" target="_blank">Twitter</a>, <a href="https://www.facebook.com/joao.bosco.t.seixas" target="_blank">Facebook</a>',
      image: ['images/talks/joao-bosco.png']
    },
    /* 18 Adriana de Melo Fontes - */
    {
      speaker: 'Adriana de Melo Fontes',
      title: 'Quero ser um certificado Scrum! Porque ter e o que devo fazer para ter?',
      description: 'A metodologia Scrum vem sendo adotada por um número cada vez mais crescente de pessoas e organizações. Porém, muitos desconhecem a existência das certificações. Por isso, apresentarei as certificações (CSM, CSPO, CSP, CST e CSC) e as etapas para obtê-las.',
      aboutSpeaker: '<p>Adriana Fontes é mestranda em Ciência da Computação na Universidade Federal de Sergipe, possui MBA em Gerência de Projetos (FANESE), especializações em Gestão de Projetos de Software (FANESE) e Didática do Ensino Superior (Pio Décimo) e, cursou Bacharelado em Sistemas de Informação na Universidade Tiradentes. </p><p>Obteve as certificações CSP, CSPO e CSM pela Scrum Alliance e a Certified Lean Kanban pela LeanKanban Universit. </p><p>Profissionalmente, exerce as funções de Analista de Sistemas, Product Owner e Scrum Master em diversos projetos na Pio Décimo e na Trust Consultoria e Softwares.</p>',
      image: ['images/talks/adriana-fontes.jpg']
    },
    /* 19 Annelise Gripp - */
    {
      speaker: 'Annelise Gripp',
      title: 'Resiliência, a competência que nos leva a excelência',
      description: 'Agilidade e gente bambu: a resiliência apoiando a auto-organização dos times!',
      aboutSpeaker: 'Louca por tecnologia e amante do trabalho com pessoas, há 19 anos dedico meu tempo a Engenharia de Desenvolvimento de Software. Hoje, como consultora, meu trabalho consiste em expandir, compartilhar e aplicar meus conhecimentos, habilidades e experiências nas empresas. Entre as atividades desempenhadas, implanto projetos utilizando Metodologia Ágil (kanban, Scrum), Agile Coach (coaching aplicado a líderes e times) e Personal/Executive Coach (desenvolvimento de competências para alcançar resultados). Nos últimos 9 anos venho trabalhando com Projetos, Produtos e Pessoas, entregando software com rapidez, qualidade e satisfação, para o cliente e para equipe.',
      image: ['images/talks/annelise-gripp.jpg']
    },
    /* 20 - Ramon Mota - */
    {
      speaker: 'Ramon Mota',
      title: 'Computação Ubíqua, o que isso tem a ver com Android Wear.',
      description: 'Você sabe o que é Android Wear? Já imaginou poder ter todas suas informações no seu pulso, sem ter necessidade de tirar seu smartphone do bolso? Veremos nesta palestra o que é esse tal de Android Wear, desvelando este fascinante mundo da computação ubíqua.',
      aboutSpeaker: 'Desenvolvedor java, especialista e fã da Computação Ubíqua, atualmente aficionado pelo desenvolvimento para Smartwatches através  do  Android Wear. Participa da comunidade Google Developer Group (GDG) Salvador. Atua como Analista Java na Capgemini, e é forrozeiro nas horas livres.',
      image: ['images/talks/ramon-mota.png']
    },
    /* 21 - Francine Grando - */
    {
      speaker: 'Francine Grando',
      title: 'Empreendendo com Software Livre.',
      description: 'Esta palestra tem como objetivo, despertar o lado empreendedor do pessoal da área de T.I. Incentivando ao uso demasiado de softwares livres em sua nova jornada. Além de abordar temas como inovação e criatividade.',
      aboutSpeaker: 'Bacharel em Filosofia, Especialista em Análise de Usuários e Pós Graduada em Marketing Digital. Ganhou notoriedade internacional a partir do case de estudo em redes sociais chamado “O que queremos?”, mesma nomenclatura utilizada em sua página no Facebook que já foi visualizada e compartilhada por mais de 90 milhões de internautas.. Ficou na lista dos palestrantes mais requisitados do Brasil em 2013/2014. Já trabalhou na criação de identidade de comportamento de usuários de marcas como:Ministério da Saúde, Canais Globo Sat, Nextel, Claro,Cia Zafarri, Red Bull, entre outras.',
      image: ['images/talks/francine-grando.jpg']
    },
    /* 22 - Alex Kondera - */
    {
      speaker: 'Alex Kondera',
      title: 'Ferramentas gratuitas para Cross-browser Testing',
      description: 'Adaptando-se a web moderna, com ferramentas e recursos gratuitos para turbinar sua produtividade e compatibilizar seu código para todos os navegadores e sistemas operacionais.',
      aboutSpeaker: 'Engenheiro da Computação, Microsoft MVP. Com 10 anos de experiência na área de desenvolvimento web, e desde 2003 atua nos programas e comunidades da Microsoft. Fez parte do primeiro time de Estudantes Embaixadores da Microsoft em 2005, passando também pelo programa MSP (Microsoft Student Partners) como Lead e Mentor atuando em comunidades MSDN. Coordena a DevBrasil e é titulado como MID (Most Influential Developer).',
      image: ['images/talks/alex-kondera.png']
    },
    /* 23 - Otávio Santana - */
    {
      speaker: 'Otávio Santana',
      title: 'Programação funcional com Java 8',
      description: 'Cansado de ir em uma palestra de funcional com Java 8 e apenas ouvir sobre o Stream? Certamente uns dos recursos mais interessante que entrou na última versão do Java, o Java 8, foi o uso de lambda e recurso funcional, com isso, o Java além de ser multiplataforma é multiparadigma. Conheça um pouco as diferenças e as aplicações do conceito funcional dentro do Java 8, as novas APIs além dos novos padrões que nascem após essa versão. Tudo isso com uma visão prática com a IDE aberta quase todo o tempo.',
      aboutSpeaker: 'Um Desenvolvedor apaixonado pelo que faz. Praticante da filosofia ágil e do desenvolvimento poliglota, Auxilia diversos JUGs ao redor do mundo, um dos fomentadores do grupo LinguÁgil. Leva a sério o termo “Make the future Java” presente como membro do Java Expert Group em diversas especificações em todas as plataformas Java, incluindo o OpenJDK. Membro do comitê executivo do JCP, inclusive ganhando um outstanding member award e Java Champion pelos seus feitos. Contribuiu para diversos projetos Open Source também é membro da OSI e Apache commiter.',
      image: ['images/talks/otavio-santana.jpg']
    }
  ];

  function loadModalContent( key ) {
    var info = schedules[key];

    var $modal = $('#myModal');

    $modal.find('.speaker-images').html('');
    $(info.image).each(function(item, source){
      console.log(item);
      $modal.find('.speaker-images').append(
        $('<img/>')
        .addClass('img-circle img-responsive img-speaker center-block img-modal')
        .attr('width', 206)
        .attr('height', 206)
        .attr('src', source)
      );
    });

    if (info.image.length > 1) {
      $modal.find('.speaker-images img').addClass('pull-left')
        .attr('width', 150)
        .attr('height', 150);
    }

    $modal.find('.speaker-name').text(info.speaker);
    $modal.find('.speaker-title').text(info.title);
    $modal.find('.speaker-desc').html(info.description);
    $modal.find('.speaker-about').html(info.aboutSpeaker);

    $modal.modal({ keyboard: false }).show();
  }

  if( $('.open-modal')[0] ) {
    $('.open-modal').on('click', function(){
      loadModalContent( $(this).data('schedule-key'));
    });
  }

  $(window).load(function(){
    var tab = window.location.hash;
    if (tab !== '') {
      $('.nav-tabs').find('a[href="' + tab + '"]').trigger('click');
    }
  });

})(jQuery);

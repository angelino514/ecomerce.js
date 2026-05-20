/* =========================================
   CONTADOR GLOBAL DE IDS DOS PRODUTOS
   (garante IDs únicos automaticamente)
========================================= */

let index = 0


/* =========================================
   BASE DE DADOS PRINCIPAL DOS PRODUTOS
   (catálogo da loja)
========================================= */
const itensVendas = [
   {
      id: ++index,
      iten: "Calça social masculina",
      img: 'IMGS/image 1.png',
      imgs: ['IMGS/image 1.png', 'IMGS/image 2.png'],
      preco: 13780,
      categoria: "calças masculinas",
      itenDesc: "Calça social masculina elegante com corte moderno e tecido confortável, ideal para trabalho e eventos formais.",
      destaque: true,
      promocao: false,
      tamanho: ["30", "32", "34"],
      cores: ['Preta', 'Cinza']
   },

   {
      id: ++index,
      iten: "calças casual estilosa",
      img: 'IMGS/image 3.png',
      imgs: ['IMGS/image 3.png', 'IMGS/image 4.png', 'IMGS/image 5.png', 'IMGS/image 6.png', 'IMGS/image 7.png'],
      preco: 16500,
      categoria: "calças masculinas",
      itenDesc: "Calça moderna e funcional com bolsos laterais, desenvolvida para oferecer conforto, praticidade e estilo no dia a dia. Confeccionada com tecido resistente e de qualidade, possui corte ajustado que garante um bom caimento ao corpo. Os bolsos laterais acrescentam utilidade extra, permitindo transportar pequenos objetos com segurança sem perder a elegância. Ideal para looks casuais e urbanos, combinando facilmente com camisetas, camisas ou tênis..",
      destaque: true,
      promocao: false,
      tamanho: ["S", "M", "L"],
      cores: ['Branco', 'Azul', 'Verde', 'Sinzenta']
   },

   {
      id: ++index,
      iten: "Calças Burgor lion",
      img: 'IMGS/image8.png',
      imgs: ['IMGS/image8.png', 'IMGS/image9.png', 'IMGS/image10.png', 'IMGS/image11.png'],
      preco: 9800,
      categoria: "calças masculinas",
      itenDesc: "Camisa social masculina Calças “Burgor Lion” com design moderno e estilo urbano, criadas para oferecer conforto, resistência e personalidade no visual. Confeccionadas com tecido de alta qualidade, apresentam um corte atual que valoriza o corpo sem perder a liberdade de movimento. O detalhe “Lion” traz um toque marcante e exclusivo, ideal para quem gosta de roupas com identidade forte e estilo diferenciado. Perfeitas para looks casuais, streetwear e combinações com t-shirts ou ténis.",
      destaque: false,
      promocao: true,
      tamanho: ["M", "G", "GG"],
      cores: ['Preto']
   },

   {
      id: ++index,
      iten: "Conjunto masculino Burgor lion",
      img: 'IMGS/image13.png',
      imgs: ['IMGS/image13.png', 'IMGS/image14.png', 'IMGS/image15.png'],
      preco: 6200,
      categoria: "conjunto masculino",
      itenDesc: "Conjunto masculino “Burgor Lion” com estilo moderno e marcante, desenvolvido para homens que valorizam conforto e presença no visual. Produzido com tecido de alta qualidade, oferece leveza, resistência e um caimento perfeito no corpo. O design “Lion” traz um detalhe exclusivo que destaca a peça, transmitindo força e personalidade. Ideal para uso casual, saídas urbanas ou momentos de lazer, combinando facilmente com ténis e acessórios simples para um look completo e estiloso.",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M", "L"],
      cores: ['Verde', 'Preto', 'Azul']
   },

   {
      id: ++index,
      iten: "Conjunto masculino GO slim",
      img: 'IMGS/image16.png',
      imgs: ['IMGS/image16.png', 'IMGS/image17.png', 'IMGS/image18.png'],
      preco: 12500,
      categoria: "conjunto masculino",
      itenDesc: "Conjunto masculino “GO Slim” com design moderno e corte ajustado ao corpo, pensado para oferecer estilo, conforto e elegância no dia a dia. Confeccionado com tecido leve e de alta qualidade, garante boa respirabilidade e liberdade de movimento. O modelo slim valoriza a silhueta masculina, criando um visual mais sofisticado e urbano ao mesmo tempo. Ideal para ocasiões casuais, saídas com amigos ou até eventos informais, combinando facilmente com ténis ou sapatos casuais.",
      destaque: true,
      promocao: false,
      tamanho: ["S", "M", "XL", "2XL"],
      cores: ['Sinzento', 'Branco', 'Preto']
   },

   {
      id: ++index,
      iten: "Majuco casual para Homens",
      img: 'IMGS/image22.png',
      imgs: ['IMGS/image22.png', 'IMGS/image23.png', 'IMGS/image21.png', 'IMGS/image20.png'],
      preco: 8900,
      categoria: "casacos e moletons",
      itenDesc: "Majuco Casual para homens é um conjunto moderno e confortável, pensado para quem gosta de um estilo simples, elegante e versátil. Confeccionado com tecido leve e resistente, oferece um ótimo caimento e liberdade de movimentos para o dia a dia. O design casual permite combinações fáceis com ténis ou sapatos informais, sendo ideal para saídas, encontros ou momentos de lazer. Uma peça prática que equilibra conforto e estilo em qualquer ocasião",
      destaque: false,
      promocao: true,
      tamanho: ["S", "M", "L"],
      cores: ['Azul']
   },

   {
      id: ++index,
      iten: "T-shirt masculina Drobol gal",
      img: 'IMGS/image25.png',
      imgs: ['IMGS/image25.png', 'IMGS/image26.png', 'IMGS/image27.png'],
      preco: 4500,
      categoria: "camisas e t-shirt",
      itenDesc: "T-shirt masculina “Drobol Gal” com estilo moderno e urbano, criada para homens que gostam de um visual descontraído e cheio de personalidade. Confeccionada em tecido leve e confortável, garante boa respirabilidade e conforto durante todo o dia. O design “Drobol Gal” traz uma identidade marcante e atual, ideal para compor looks casuais e streetwear. Combina perfeitamente com jeans, calças cargo ou ténis, sendo uma peça versátil para várias ocasiões do dia a dia.",
      destaque: false,
      promocao: false,
      tamanho: ["M", "L", "XL"],
      cores: ['Sinzenta', 'Branca']
   },

   {
      id: ++index,
      iten: "Casaco estiloso ValMen",
      img: 'IMGS/image28.png',
      imgs: ['IMGS/image28.png', 'IMGS/image29.png', 'IMGS/image30.png'],
      preco: 5400,
      categoria: "casacos e moletons",
      itenDesc: "Casaco estiloso “Val Men” para homens, com design moderno e elegante pensado para destacar o visual em qualquer ocasião. Confeccionado com materiais de alta qualidade, oferece conforto, aquecimento leve e excelente durabilidade. O corte bem estruturado garante um caimento perfeito no corpo, transmitindo sofisticação e estilo ao mesmo tempo. Ideal para dias mais frescos, saídas casuais ou eventos informais, combina facilmente com jeans, calças sociais ou ténis, criando um look masculino completo e versátil.",
      destaque: true,
      promocao: false,
      tamanho: ["L", "XL", "2XL"],
      cores: ['Sinzento', 'Preto']
   },

   {
      id: ++index,
      iten: "camisa masculina elegante",
      img: 'IMGS/image31.png',
      imgs: ['IMGS/image31.png', 'IMGS/image32.png', 'IMGS/image33.png'],
      preco: 34500,
      categoria: "camisas e t-shirt",
      itenDesc: "Camisa masculina elegante, desenvolvida para oferecer um visual sofisticado e moderno em qualquer ocasião. Confeccionada com tecido de alta qualidade, proporciona conforto, leveza e um excelente caimento no corpo. O design clássico e refinado torna a peça ideal para eventos formais, ambiente de trabalho ou ocasiões especiais. Fácil de combinar com calças sociais ou jeans, garantindo sempre um estilo profissional e bem apresentado.",
      destaque: true,
      promocao: false,
      tamanho: ["S", "M", "XL"],
      cores: ['Castanha', 'Cinza']
   },

   {
      id: ++index,
      iten: "Calças Go Lion",
      img: 'IMGS/image34.png',
      imgs: ['IMGS/image34.png', 'IMGS/image35.png', 'IMGS/image36.png', 'IMGS/image37.png'],
      preco: 11800,
      categoria: "calças masculinas",
      itenDesc: "Calças “Go Lion” com estilo moderno e marcante, criadas para homens que gostam de um visual forte, urbano e cheio de personalidade. Confeccionadas com tecido resistente e confortável, oferecem ótimo caimento e liberdade de movimento no dia a dia. O design “Lion” traz detalhes exclusivos que destacam a peça, tornando-a ideal para looks casuais e streetwear. Perfeitas para combinar com t-shirts, casacos ou ténis, garantindo um estilo autêntico e atual em qualquer ocasião.",
      destaque: true,
      promocao: true,
      tamanho: ["S", "M", "L"],
      cores: ['Florido']
   },

   {
      id: ++index,
      iten: "Camisas estiloas para Homens",
      img: 'IMGS/image39.png',
      imgs: ['IMGS/image39.png', 'IMGS/image40.png'],
      preco: 21400,
      categoria: "camisas e t-shirt",
      itenDesc: "Camisas estilosas para homens, desenvolvidas com design moderno e elegante para quem deseja destacar o visual em qualquer ocasião. Confeccionadas com tecido de alta qualidade, oferecem conforto, leveza e excelente caimento no corpo. Disponíveis em diferentes estilos e cortes, vão desde opções casuais até modelos mais sofisticados. São peças versáteis, fáceis de combinar com calças jeans ou sociais, ideais para criar looks modernos, profissionais ou descontraídos com muito estilo.",
      destaque: false,
      promocao: false,
      tamanho: ["M", "XL"],
      cores: ['Branca', 'Castanha']
   },

   {
      id: ++index,
      iten: "conjunto masculino elegante",
      img: 'IMGS/image41.png',
      imgs: ['IMGS/image41.png', 'IMGS/image42.png'],
      preco: 18900,
      categoria: "conjunto masculino",
      itenDesc: "Conjunto masculino elegante, criado para homens que procuram um visual sofisticado, moderno e bem alinhado. Produzido com tecido de alta qualidade, oferece conforto, leveza e excelente caimento no corpo. O design combina peças harmoniosas que garantem um look completo e equilibrado, ideal para eventos formais, reuniões ou ocasiões especiais. Versátil e estiloso, pode ser combinado com sapatos sociais ou ténis mais discretos, mantendo sempre uma imagem elegante e profissional.",
      destaque: true,
      promocao: false,
      tamanho: ["S", "M", "L"],
      cores: ['Florido', 'Castanho']
   },

   {
      id: ++index,
      iten: "conjunto femenino Dorgan Ball",
      img: 'IMGS/image43.png',
      imgs: ['IMGS/image43.png', 'IMGS/image44.png', 'IMGS/image45.png'],
      preco: 6900,
      categoria: "conjunto femenino",
      itenDesc: "Conjunto feminino “Dorgan Ball” com estilo elegante e moderno, pensado para mulheres que gostam de um visual sofisticado e marcante. Confeccionado com tecido de alta qualidade, oferece conforto, leveza e um caimento perfeito no corpo. O design “Ball” traz um toque diferenciado e glamouroso, ideal para eventos, festas ou ocasiões especiais. É uma peça versátil que combina facilmente com saltos ou acessórios elegantes, criando um look feminino completo e cheio de personalidade.",
      destaque: false,
      promocao: true,
      tamanho: ["38", "40"],
      cores: ['Bege', 'Azul']
   },

   {
      id: ++index,
      iten: "Roupa casual feminino",
      img: 'IMGS/image46.png',
      imgs: ['IMGS/image46.png', 'IMGS/image47.png', 'IMGS/image48.png', 'IMGS/image46.png'],
      preco: 5800,
      categoria: "conjunto femenino",
      itenDesc: "Roupa casual feminina, desenvolvida para oferecer conforto, estilo e versatilidade no dia a dia. Confeccionada com tecidos leves e de alta qualidade, proporciona um ótimo caimento e liberdade de movimento. O design moderno permite criar looks simples, elegantes e descontraídos ao mesmo tempo. Ideal para passeios, trabalho ou momentos de lazer, pode ser facilmente combinada com ténis, sandálias ou acessórios variados, garantindo sempre um visual feminino prático e estiloso.",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M"],
      cores: ['Preto', 'Rosa']
   },

   {
      id: ++index,
      iten: "Blusas femeninas",
      img: 'IMGS/image49.png',
      imgs: ['IMGS/image49.png', 'IMGS/image50.png', 'IMGS/image51.png'],
      preco: 7200,
      categoria: "blusas femeninas",
      itenDesc: "Blusas femininas, criadas para oferecer conforto, leveza e estilo em qualquer ocasião. Confeccionadas com tecidos de alta qualidade, proporcionam um excelente caimento e sensação agradável ao vestir. Disponíveis em diferentes modelos, desde os mais casuais até os mais elegantes, permitem criar looks versáteis para o dia a dia, trabalho ou momentos especiais. São peças fáceis de combinar com saias, calças ou jeans, garantindo sempre um visual feminino moderno e sofisticado.",
      destaque: false,
      promocao: false,
      tamanho: ["M", "G", "GG"],
      cores: ['Azul', 'Branca']
   }
   ,
   {
      id: ++index,
      iten: "Conjunto femenino Blur Lion",
      img: 'IMGS/image52.png',
      imgs: ['IMGS/image52.png', 'IMGS/image53.png', 'IMGS/image54.png'],
      preco: 9500,
      categoria: "conjunto femenino",
      itenDesc: "Conjunto feminino “Blur Lion” com design moderno e sofisticado, desenvolvido para mulheres que gostam de unir conforto, elegância e personalidade no visual. Produzido com tecido de alta qualidade, oferece leveza, excelente caimento e liberdade de movimento. O estilo “Lion” acrescenta um toque marcante e exclusivo à peça, tornando-a ideal para ocasiões casuais, passeios ou eventos descontraídos. Combina facilmente com ténis, sandálias ou acessórios modernos, criando um look feminino estiloso e atual.",
      destaque: false,
      promocao: false,
      tamanho: ["M", "XL", "2XL"],
      cores: ['Rosa', 'Florido']
   }

   ,
   {
      id: ++index,
      iten: "Calça Wide Jeans",
      img: 'IMGS/image55.png',
      imgs: ['IMGS/image55.png', 'IMGS/image56.png', 'IMGS/image57.png', 'IMGS/image58.png'],
      preco: 22400,
      categoria: "calça femenino",
      itenDesc: "Calça Wide Jeans com estilo moderno e caimento amplo, perfeita para quem procura conforto e tendência em uma única peça. Confeccionada em jeans resistente e de alta qualidade, oferece liberdade de movimento e um visual urbano sofisticado. O modelo wide proporciona um ajuste solto e elegante, ideal para compor looks casuais, streetwear ou estilos mais fashionistas. Combina facilmente com t-shirts, cropped, camisas ou ténis, tornando-se uma peça versátil e indispensável no guarda-roupa.",
      destaque: false,
      promocao: false,
      tamanho: ["M", "XL", "2XL"],
      cores: ['Rosa', 'Florido']
   }

   ,
   {
      id: ++index,
      iten: "Calções femenino estiloso",
      img: 'IMGS/image60.png',
      imgs: ['IMGS/image60.png', 'IMGS/image59.png'],
      preco: 22400,
      categoria: "calções femenino",
      itenDesc: "Calções femininos estilosos, desenvolvidos para oferecer conforto, leveza e um visual moderno em qualquer ocasião. Confeccionados com tecido de alta qualidade, proporcionam excelente caimento e liberdade de movimento para o dia a dia. O design atual e versátil permite criar combinações elegantes e descontraídas ao mesmo tempo, sendo ideais para passeios, praia, viagens ou momentos de lazer. Fáceis de combinar com blusas, cropped ou sandálias, garantem um look feminino cheio de estilo e personalidade.",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M", "XL", "2XL"],
      cores: ['Castanho', 'Florido', 'Branco', 'Rosa', 'Vinho', 'Preto']
   }

   ,
   {
      id: ++index,
      iten: "Conjunto pijama femenino",
      img: 'IMGS/image62.png',
      imgs: ['IMGS/image62.png', 'IMGS/image61.png', 'IMGS/image63.png'],
      preco: 22400,
      categoria: "pijamas femenino",
      itenDesc: "Conjunto pijama feminino, desenvolvido para oferecer máximo conforto, suavidade e bem-estar durante o descanso. Confeccionado com tecido leve e respirável, proporciona uma sensação agradável na pele e liberdade de movimento durante o sono. O design moderno e delicado combina estilo e conforto, tornando-o ideal para noites tranquilas ou momentos de relaxamento em casa. Uma peça essencial para quem valoriza conforto sem abrir mão da elegância até mesmo na hora de dormir",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M", "XL", "2XL"],
      cores: ['Rosa', 'Vinho', 'Preto']
   }

   ,
   {
      id: ++index,
      iten: "vestidos femenino estiloso",
      img: 'IMGS/image64.png',
      imgs: ['IMGS/image64.png', 'IMGS/image65.png', 'IMGS/image66.png'],
      preco: 18900,
      categoria: "vestidos",
      itenDesc: "Vestido feminino estiloso, desenvolvido para mulheres que gostam de um visual moderno, elegante e cheio de personalidade. Confeccionado com tecido de alta qualidade, oferece conforto, leveza e um excelente caimento no corpo. O design sofisticado valoriza a silhueta feminina, tornando a peça ideal para diversas ocasiões, desde saídas casuais até eventos especiais. Versátil e fácil de combinar com sapatos e acessórios, garante sempre um look feminino atual, elegante e marcante.",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M", "XL", "2XL"],
      cores: ['Branco']
   }

   ,
   {
      id: ++index,
      iten: "conjunto femenino estiloso",
      img: 'IMGS/image67.png',
      imgs: ['IMGS/image67.png', 'IMGS/image68.png', 'IMGS/image69.png', 'IMGS/image70.png'],
      preco: 18900,
      categoria: "conjunto femenino",
      itenDesc: "Conjunto feminino estiloso, pensado para mulheres que valorizam um visual moderno, elegante e confortável ao mesmo tempo. Confeccionado com tecido de alta qualidade, oferece um ótimo caimento no corpo e liberdade de movimento. O design atual combina perfeitamente peças harmoniosas que criam um look completo e versátil. Ideal para passeios, eventos casuais ou momentos de lazer, podendo ser facilmente combinado com ténis, sandálias ou acessórios, garantindo sempre um estilo feminino sofisticado e cheio de personalidade.",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M", "XL", "2XL"],
      cores: ['Verde', 'Vinho', 'Sinzento', 'Castanho']
   }

   ,
   {
      id: ++index,
      iten: "Vestido apertado estiloso",
      img: 'IMGS/image71.png',
      imgs: ['IMGS/image71.png', 'IMGS/image72.png'],
      preco: 24400,
      categoria: "vestidos",
      itenDesc: "Vestido apertado estiloso, desenhado para valorizar a silhueta feminina com elegância e modernidade. Confeccionado com tecido de alta qualidade e elasticidade confortável, adapta-se perfeitamente ao corpo sem perder o conforto. O design ajustado realça as curvas de forma sofisticada, tornando a peça ideal para festas, eventos noturnos ou ocasiões especiais. Versátil e marcante, combina facilmente com saltos e acessórios elegantes, garantindo um visual feminino poderoso, moderno e cheio de atitude.",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M", "XL"],
      cores: ['Verde', 'Vinho', 'Preto', 'Castanho']
   }
]

export { itensVendas }



/* =========================================
   BANNERS DA PÁGINA INICIAL
   (slider / marketing)
========================================= */
const itensBanners = [

   { img: 'IMGS/banner1.png', texto: "Nosso compromisso é entregar o teu produto com segurança" }
   ,
   { img: 'IMGS/banner2.png', texto: "Faça compra com segurança aqui no EVAN" }
   ,
   { img: 'IMGS/banner3.png', texto: "Agora posso comprar tudo apartir do meu telemóvel" }
   ,
   { img: 'IMGS/banner4.png', texto: "Temos novidades para si a melhor preço" }
]

/* exporta banners */
export { itensBanners }
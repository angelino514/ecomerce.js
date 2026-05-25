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
      img: 'image 1.png',
      imgs: ['image 1.png', 'image 2.png'],
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
      img: 'image 3.png',
      imgs: ['image 3.png', 'image 4.png', 'image 5.png', 'image 6.png', 'image 7.png'],
      preco: 16500,
      categoria: "calças masculinas",
      itenDesc: "Calça moderna e funcional com bolsos laterais, desenvolvida para oferecer conforto, praticidade e estilo no dia a dia...",
      destaque: true,
      promocao: false,
      tamanho: ["S", "M", "L"],
      cores: ['Branco', 'Azul', 'Verde', 'Sinzenta']
   },

   {
      id: ++index,
      iten: "Calças Burgor lion",
      img: 'image8.png',
      imgs: ['image8.png', 'image9.png', 'image10.png', 'image11.png'],
      preco: 9800,
      categoria: "calças masculinas",
      itenDesc: "Camisa social masculina Calças “Burgor Lion” com design moderno e estilo urbano...",
      destaque: false,
      promocao: false,
      tamanho: ["M", "G", "GG"],
      cores: ['Preto']
   },

   {
      id: ++index,
      iten: "Conjunto masculino Burgor lion",
      img: 'image13.png',
      imgs: ['image13.png', 'image14.png', 'image15.png'],
      preco: 6200,
      categoria: "conjunto masculino",
      itenDesc: "Conjunto masculino “Burgor Lion” com estilo moderno e marcante...",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M", "L"],
      cores: ['Verde', 'Preto', 'Azul']
   },

   {
      id: ++index,
      iten: "Conjunto masculino GO slim",
      img: 'image16.png',
      imgs: ['image16.png', 'image17.png', 'image18.png'],
      preco: 12500,
      categoria: "conjunto masculino",
      itenDesc: "Conjunto masculino “GO Slim” com design moderno e corte ajustado ao corpo...",
      destaque: true,
      promocao: false,
      tamanho: ["S", "M", "XL", "2XL"],
      cores: ['Sinzento', 'Branco', 'Preto']
   },

   {
      id: ++index,
      iten: "Majuco casual para Homens",
      img: 'image22.png',
      imgs: ['image22.png', 'image23.png', 'image21.png', 'image20.png'],
      preco: 8900,
      categoria: "casacos e moletons",
      itenDesc: "Majuco Casual para homens é um conjunto moderno e confortável...",
      destaque: false,
      promocao: true,
      tamanho: ["S", "M", "L"],
      cores: ['Azul']
   },

   {
      id: ++index,
      iten: "T-shirt masculina Drobol gal",
      img: 'image25.png',
      imgs: ['image25.png', 'image26.png', 'image27.png'],
      preco: 4500,
      categoria: "camisas e t-shirt",
      itenDesc: "T-shirt masculina “Drobol Gal” com estilo moderno e urbano...",
      destaque: false,
      promocao: false,
      tamanho: ["M", "L", "XL"],
      cores: ['Sinzenta', 'Branca']
   },

   {
      id: ++index,
      iten: "Casaco estiloso ValMen",
      img: 'image28.png',
      imgs: ['image28.png', 'image29.png', 'image30.png'],
      preco: 5400,
      categoria: "casacos e moletons",
      itenDesc: "Casaco estiloso “Val Men” para homens...",
      destaque: true,
      promocao: false,
      tamanho: ["L", "XL", "2XL"],
      cores: ['Sinzento', 'Preto']
   },

   {
      id: ++index,
      iten: "camisa masculina elegante",
      img: 'image31.png',
      imgs: ['image31.png', 'image32.png', 'image33.png'],
      preco: 34500,
      categoria: "camisas e t-shirt",
      itenDesc: "Camisa masculina elegante, desenvolvida para oferecer um visual sofisticado...",
      destaque: true,
      promocao: false,
      tamanho: ["S", "M", "XL"],
      cores: ['Castanha', 'Cinza']
   },

   {
      id: ++index,
      iten: "Calças Go Lion",
      img: 'image34.png',
      imgs: ['image34.png', 'image35.png', 'image36.png', 'image37.png'],
      preco: 11800,
      categoria: "calças masculinas",
      itenDesc: "Calças “Go Lion” com estilo moderno e marcante...",
      destaque: true,
      promocao: true,
      tamanho: ["S", "M", "L"],
      cores: ['Florido']
   },

   {
      id: ++index,
      iten: "Camisas estiloas para Homens",
      img: 'image39.png',
      imgs: ['image39.png', 'image40.png'],
      preco: 21400,
      categoria: "camisas e t-shirt",
      itenDesc: "Camisas estilosas para homens...",
      destaque: false,
      promocao: false,
      tamanho: ["M", "XL"],
      cores: ['Branca', 'Castanha']
   },

   {
      id: ++index,
      iten: "conjunto masculino elegante",
      img: 'image41.png',
      imgs: ['image41.png', 'image42.png'],
      preco: 18900,
      categoria: "conjunto masculino",
      itenDesc: "Conjunto masculino elegante...",
      destaque: true,
      promocao: false,
      tamanho: ["S", "M", "L"],
      cores: ['Florido', 'Castanho']
   },

   {
      id: ++index,
      iten: "conjunto femenino Dorgan Ball",
      img: 'image43.png',
      imgs: ['image43.png', 'image44.png', 'image45.png'],
      preco: 6900,
      categoria: "conjunto femenino",
      itenDesc: "Conjunto feminino “Dorgan Ball”...",
      destaque: false,
      promocao: true,
      tamanho: ["38", "40"],
      cores: ['Bege', 'Azul']
   },

   {
      id: ++index,
      iten: "Roupa casual feminino",
      img: 'image46.png',
      imgs: ['image46.png', 'image47.png', 'image48.png', 'image46.png'],
      preco: 5800,
      categoria: "conjunto femenino",
      itenDesc: "Roupa casual feminina...",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M"],
      cores: ['Preto', 'Rosa']
   },

   {
      id: ++index,
      iten: "Blusas femeninas",
      img: 'image49.png',
      imgs: ['image49.png', 'image50.png', 'image51.png'],
      preco: 7200,
      categoria: "blusas femeninas",
      itenDesc: "Blusas femininas...",
      destaque: false,
      promocao: false,
      tamanho: ["M", "G", "GG"],
      cores: ['Azul', 'Branca']
   },

   {
      id: ++index,
      iten: "Conjunto femenino Blur Lion",
      img: 'image52.png',
      imgs: ['image52.png', 'image53.png', 'image54.png'],
      preco: 9500,
      categoria: "conjunto femenino",
      itenDesc: "Conjunto feminino “Blur Lion”...",
      destaque: false,
      promocao: false,
      tamanho: ["M", "XL", "2XL"],
      cores: ['Rosa', 'Florido']
   },

   {
      id: ++index,
      iten: "Calça Wide Jeans",
      img: 'image55.png',
      imgs: ['image55.png', 'image56.png', 'image57.png', 'image58.png'],
      preco: 22400,
      categoria: "calça femenino",
      itenDesc: "Calça Wide Jeans...",
      destaque: false,
      promocao: false,
      tamanho: ["M", "XL", "2XL"],
      cores: ['Rosa', 'Florido']
   },

   {
      id: ++index,
      iten: "Calções femenino estiloso",
      img: 'image60.png',
      imgs: ['image60.png', 'image59.png'],
      preco: 22400,
      categoria: "calções femenino",
      itenDesc: "Calções femininos estilosos...",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M", "XL", "2XL"],
      cores: ['Castanho', 'Florido', 'Branco', 'Rosa', 'Vinho', 'Preto']
   },

   {
      id: ++index,
      iten: "Conjunto pijama femenino",
      img: 'image62.png',
      imgs: ['image62.png', 'image61.png', 'image63.png'],
      preco: 22400,
      categoria: "pijamas femenino",
      itenDesc: "Conjunto pijama feminino...",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M", "XL", "2XL"],
      cores: ['Rosa', 'Vinho', 'Preto']
   },

   {
      id: ++index,
      iten: "vestidos femenino estiloso",
      img: 'image64.png',
      imgs: ['image64.png', 'image65.png', 'image66.png'],
      preco: 18900,
      categoria: "vestidos",
      itenDesc: "Vestido feminino estiloso...",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M", "XL", "2XL"],
      cores: ['Branco']
   },

   {
      id: ++index,
      iten: "conjunto femenino estiloso",
      img: 'image67.png',
      imgs: ['image67.png', 'image68.png', 'image69.png', 'image70.png'],
      preco: 18900,
      categoria: "conjunto femenino",
      itenDesc: "Conjunto feminino estiloso...",
      destaque: false,
      promocao: false,
      tamanho: ["S", "M", "XL", "2XL"],
      cores: ['Verde', 'Vinho', 'Sinzento', 'Castanho']
   },

   {
      id: ++index,
      iten: "Vestido apertado estiloso",
      img: 'image71.png',
      imgs: ['image71.png', 'image72.png'],
      preco: 24400,
      categoria: "vestidos",
      itenDesc: "Vestido apertado estiloso...",
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
const arrayRecetas = [
    {
      titulo: "Pastel de papa",
      ingredientes:
        "soja texturizada (1 taza), papas (1 1/2 kg), 1 cebolla, 1 puerro, 1 morrón, aceitunas, huevo",
      preparacion:
        "Pasar la soja texturizada a un bol y usar la sartén nuevamente para rehogar las cebollas con aceite y sal.La soja texturizada debe hidratarse antes de cocinarla. Ponerla en un bol y cubrirla con agua caliente. Luego colar y dejar que escurra bien.En una sartén calentar un poco de aceite de oliva a fuego medio y volcar la soja hidratada y escurrida. Revolver constantemente hasta que se haya dorado un poco.Agregar la soja texturizada, el caldo y la salsa de soja. Incorporar todos los condimentos. Revolver bien y agregar las aceitunas.Una vez frío, colocar el relleno en un recipiente con tapa y llevar a la heladera.Pelar las papas y hervirlas.	Cuando estén tiernas escurrir el agua y agregar un poco de aceite y el huevo batido. Pisar con pisapapas y armar el pastel de papa en un fuente para horno. Colocar una capa de puré de papas, el relleno por encima y luego otra capa de puré de papas. Llevar a horno fuerte, durante 15 a 20 minutos.",
      tiempo: 30,
      clave: ["soja texturizada", "papa"],
    },
    {
      titulo: "garbanzos con espinaca",
      ingredientes: "Garbanzos (400gr), espinaca (500gr), cebolla (1/2)",
      preparacion:
        "En una cazuela ponemos un chorrito de aceite y lo vamos a calentar a fuego muy suave. esté caliente, añadimos los dientes de ajo bien picados. Dejamos que se cocinen aquí arededor de unos 2 minutos.A continuación, agregamos la cebolla también bien picada y salpimentamos. Removemos todos los ingredientes y dejamos que se cocine unos 10 min a fuego suave. Hecho esto, agregamos las espinacas. Subimos la potencia del fuego y removemos con frecuencia. Cuando la espinaca haya reducido su tamaño, añadimos una cucharadita de pimentón y una pizca de comino molido. Mezclamos todo brevemente y cuando los garbanzos ya estén cocidos, los agregamos junto con el agua de la cocción a esta elaboración. Mezclamos nuevamente, rectificamos de sal, tapamos y dejamos que se cocine unos 20 minutos. Servimos",
      tiempo: 20,
      clave: ["garbanzos", "espinaca"],
    },
    {
      titulo: "berenjena napolitana",
      ingredientes:
        "berenjenas (2),salsa de tomate (200ml), queso parmesano (200gr), 1 puñadito de albahaca fresca",
      preparacion:
        "Lavamos y cortamos las berenjenas en rodajas de alrededor de unos 3cm de grosor. Echamos sal por ambas caras y las colocamos sobre un plato durante 15 minutos para que las berenjenas eliminen su amargor. Hecho esto, las secamos con papel absorbente. Continuamos con la elaboración de las berenjenas con tomate y queso.A continuación, agarramos una bandeja de horno y colocamos las berenjenas.",
      tiempo: 35,
      clave: ["berenjenas", "queso"],
    },
    {
      titulo:"Croquetas de arroz",
      ingredientes:"Arroz (lo que quieras), queso (el que mas te guste), la verdura que le quieras poner (yo le puse espinaca, pero es opcional, queso regianito",
      preparacion:"Hierve el arroz. Si podes hacerlo pasado mejor. Lo colás y le agregas queso cremoso o muzzarella mientras este caliente. Aparte rahogas cebollita cn aceite de oliva y la mezclas con el arroz y el queso. Podes agregarle lo que mas te guste. Yo probé con espinaca y choclo. Condimentas a gusto. Le agregue también semillas tostadas, todo a gusto. Armas bolitas o croquetas, lo que prefieras y las pasas por pan rallado. Al horno hasta que se doren y estan listas. También se puede frizar",
      tiempo:40,
      clave:["arroz","queso"],
    },
    {
      titulo:"Hummus de garbanzo",
      ingredientes:"Garbanzos, limón, aceite, tahini opcional",
      preparacion:"Yo suelo utilizar media lata de garbanzos pero es según la cantidad que quieras. Yo uso una taza grande tipo sopera y ahi pongo la media lata de garbanzos, medio diente de ajo, 2 dedos de aceite (el que mas te guste), un chorro de jugo de limón y aveces le agrego un chorrito de agua.Aquí podria incluirseel tahini, yo no le pongo. Luego mixear hasta que quede una pasta cremosa y refrigerar por lo menos 15 minutos. ",
      tiempo:10,
      clave:["garbanzo","limon"],
    },
    {
      titulo:"Milanesa de tofu",
      ingredientes:"tofu, pan rallado, huevo",
      preparacion:"Cortas el tofu en fetas finas y lo pones en huevo. Yo al huevo le agrego saborizante de gallina, ajo en polvo, albahaca, sal, pimienta. Pero todo es opcional y reemplazable. Las dejas un rato en huevo y luego las empanas. Yo compro pan rallado semillas que le da un toque. Al horno hasta que se doren. Acompañar con lo que prefieras",
      tiempo:10,
      clave:["tofu","pan rallado"],
    },
    {
      titulo:"Tarta de fruta",
      ingredientes:"1 manzana (funciona con pera y con kiwi también), 10 cucharadas de avena, 7 de jugo de naranja, ralladura de esa naranja, esencia de vainilla, 2 cucharadas de aceite, 1 cucharada de polvo para honear, 1 huevo, stevia ",
      preparacion:"Colocamos las 10 cucharadas de avena en un bowl y el polvo para hornear, mezclamos. Luego le agregamos el huevo, el jugo de naranja, la esencia de vainilla, la ralladura, stevia (o lo que prefieras para endulzar), el aceite y revolvemos hasta integrar. Reservamos. Cortamos las manzanas en filas láminas. Colocamos un sartén al fuego bajo con un chorrito de aceite. Una vez caliente le ponemos algo de azucar y cubrimos toda la base con manzanas. Arriba le tiramos la mezcla que teníamos reservada. Dejamos cocinar tapado durante 5/10 minutos más. Cuando este cocida la masa sin partes líquidas es que ya está lista para dar vuelta. Cocinar 10 minutos mas. Servir",
      tiempo:30,
      clave:["avena","huevo"],
    },
    {
      titulo:"Torta de manzana",
      ingredientes:"1 manzana (funciona con pera y con kiwi también), 10 cucharadas de avena, 7 de jugo de naranja, ralladura de esa naranja, esencia de vainilla, 2 cucharadas de aceite, 1 cucharada de polvo para honear, 1 huevo, stevia ",
      preparacion:"Colocamos las 10 cucharadas de avena en un bowl y el polvo para hornear, mezclamos. Luego le agregamos el huevo, el jugo de naranja, la esencia de vainilla, la ralladura, stevia (o lo que prefieras para endulzar), el aceite y revolvemos hasta integrar. Reservamos. Cortamos las manzanas en filas láminas. Colocamos un sartén al fuego bajo con un chorritode aceite. Una vez caliente le ponemos algo de azucar y cubrimos toda la base con manzanas. Arriba le tiramos la mezcla que teníamos reservada. Dejamos cocinar tapado durante 5/10 minutos más. Cuando este cocida la masa sin partes líquidas es que ya está lista para dar vuelta. Cocinar 10 minutos mas. Servir",
      tiempo:30,
      clave:["avena","huevo"],
    },
  ];
  
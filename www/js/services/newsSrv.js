angular.module('services', [])

.service('newsSrv', function($filter, $http) {

  var url = "http://74.207.253.57/hanga_test/api/public";
  var source = "techcrunch";
  var apikey = "e3358d99396e4a9f98e946797543fcdb";

  var newsUrl = 'http://74.207.253.57/hanga_test/api/public';

  // var news = [
  //   {
  //     title: "Así se verían las modelos más hermosas con el polémico traje de baño peludo",
  //     id: 1,
  //     date: "30 de junio de 2017",
  //     image: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/06/26142222/destacada-malla.png',
  //     abstract: "La malla enteriza está de moda, y en Estados Unidos causó furor el diseño llamado 'Sexy Chest One Piece Swimsuit' , con un estampado que replica el torso masculino. Cómo le quedaría a las mujeres más sensuales del mundo",
  //     content: 'En las redes sociales fue todo un éxito el lanzamiento del nuevo diseño de traje de baño con un estampado llamativo peludo llamado "Sexy Chest One Piece Swimsuit", que tiene un precio accesible de 60 dólares y que viene tres gamas de colores para los diferentes colores de piel.Expertos en photoshop realizaron una galería de cómo quedarían las modelos celebrities como Kendall Jenner, Emily Ratajkowski, Miranda Kerr, Adriana Lima, Gigi Hadid, entre otras elegidas luciendo la divertida malla enteriza.'
  //   },
  //   {
  //     title: 'Lionel Messi y Antonela Roccuzzo: la historia de amor de dos chicos que se amaban en silencio y él le escribía a ella "Vas a ser mi novia"',
  //     id: 2,
  //     date: "30 de junio de 2017",
  //     image: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/06/28192506/Antonella-Roccuzzo-kissing-Lionel-Messi1-1024x576.jpg',
  //     abstract: "Y así fue. Veinte años después, Lío (30) y Antonela (29) serán marido y mujer en la ciudad que vio nacer un romance que pudo con la distancia, el tiempo y la fama",
  //     content: "La historia, o por lo menos sus hechos clave, sucedió –y se contó– entre goles. Lionel Messi (Lionel Andrés Messi Cuccittini) tiene 9 años. Ha llegado al mundo el 24 de junio de 1987 en Rosario, a orillas del río gigante: el Paraná (¿vendrá de esas aguas y de esos vientos la fuerza de sus piernas?). La pregunta, o la idea, nacen de los asombrados ojos del grupo que se agolpa contra el alambrado para ver a ese chiquitín de las híper inferiores de Newell's y las racionales locuras –si el oxímoron fuera posible– que conjuga entre sus pequeñas piernas y la pelota…"
  //   },
  //   { title: 'Dubstep', id: 3 },
  //   { title: 'Indie', id: 4 },
  //   { title: 'Rap', id: 5 },
  //   { title: 'Cowbell', id: 6 }
  // ];
  return {
    findAll: function (params, __success, __error) {
      var newsUrl2 = newsUrl+  "?";
      if(params.q){
        newsUrl2 += "q="+params.q;
      }

      var req = {
        method: 'GET',
        url: newsUrl2,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      $http(req).then(__success, __error);
    },
    find: function (articleId) {
      return $filter('filter')(news, {
        id:articleId
      })[0];
    }
  }
});
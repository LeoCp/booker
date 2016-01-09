angular.module('starter.services', [])

.factory('Livros', function() {
  var livros = [
    {id:0, nome:"O codigo da inteligencia", autor:"Augusto Cury",paginas:190},
    {id:1, nome:"JavaScript Patterns", autor:"Stoyan Stefanov",paginas:300},
    {id:2,nome:"Eloquent Js", autor:"Marijn Haverbeke",paginas:290}
  ];

  return {
    getLivros: function() {
      return livros;
    },
    setLivro: function(livro) {
      livros.push(livro);
    },

    get: function(livroId) {
      for (var i = 0; i < livros.length; i++) {
        if (livros[i].id === parseInt(livroId)) {
          return livros[i];
        }
      }
      return null;
    }

  };

});

angular.module('starter.controllers', [])

.controller('CadastrarCtrl', function($scope, Livros, $ionicPopup) {

  $scope.addLivro = function(livro) {
    livro.id = Livros.getLivros().length;
    Livros.setLivro(livro);
    delete this.livro;

    var alertPopup = $ionicPopup.alert({
      title: 'Cadastrado com sucesso!'
    });
    alertPopup();
  };

})

.controller('HomeCtrl', function($scope, Livros) {

  $scope.livros = Livros.getLivros();

  $scope.btnCancelar = function (buscaLivro) {
   delete this.buscaLivro;
  };


})

.controller('livroDetailCtrl', function($scope, $stateParams, Livros) {
  $scope.livro = Livros.get($stateParams.livroId);
})

.controller('SobreCtrl', function($scope) {});

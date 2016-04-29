(function(){

	var sentimentComponent = {
		template: '<form ng-submit="$ctrl.search()"><input type="text" ng-model="$ctrl.text"><p>{{$ctrl.type}}</p><p>{{$ctrl.score}}</p><ul><li ng-repeat="keyword in $ctrl.keywords">{{keyword.word}} - Score: {{keyword.score}}</li></ul>',
		controller : sentimentComponentController
	};

	angular
		.module('sentiment')
		.component('sentimentComponent',sentimentComponent);

		function sentimentComponentController(sentimentAnalyzer){
			var sentiment 	   = this;
			sentiment.type 	   = null;
			sentiment.score    = null;
			sentiment.keywords = null;
			

			var search = function(){
				sentimentAnalyzer.get({'text':sentiment.text}).$promise.then(function(response){
					sentiment.type     = response.type;
					sentiment.score    = response.score;
					sentiment.keywords = response.keywords;
				});
			}

			sentiment.search   = search;
		}






})();
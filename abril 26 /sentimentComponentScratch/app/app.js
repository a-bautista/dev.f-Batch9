(function(){
	

	angular
		.module('sentiment',['ngResource'])
		.factory('sentimentAnalyzer',sentimentAnalyzer);

		sentimentAnalyzer.$inject = ['$resource'];

		function sentimentAnalyzer($resource){
			
			return $resource("https://twinword-sentiment-analysis.p.mashape.com/analyze/?text=:text",
                     {},
                     {
                        get: {
                            method: 'GET',
                            headers: { 'X-Mashape-Key': 'JY8hscS049mshlkMkFZgSnnwUJGip1oi2KrjsnUfgjhPBR4UOh' }
                            }

			});
		}
})();

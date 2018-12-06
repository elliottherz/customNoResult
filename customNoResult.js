prism.run([
	"$http",
    function($http){
		// directive name needs to be converted from kebab case to camel
		mod.directive('widgetNoResultNotifyHolder', function () {
			return {
				restrict: 'C',
				link: function (scope, el, attrs) {
					var p = $(el).parent();
					$(el).remove();
					//$(p).prepend('<img src="/resources/images/greenArrow.png" id="noResultsCustomization" />');
					$(p).prepend('<img src="https://cdn.dribbble.com/users/308895/screenshots/2598725/no-results.gif" />');
				}
			};
		});
	}
]);
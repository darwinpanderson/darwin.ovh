var app = angular.module("site",['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.when('/', 'home')
	$urlRouterProvider.otherwise("home")

	$stateProvider
	.state('home',{
		url: '/home',
		templateUrl: 'src/html/home.html'
	})
	.state('contact_info',{
		url: '/home',
		templateUrl: 'src/html/contact_info.html'
	})
})

app.controller('main',function($transitions, $state){
	var self = this
	self.navlinks = [
		{
			'name'	:'home',
			'icon'	:'fa-home',
			'label'	:'Home',
			'loc'	:'home'
		},{
			'name'	:'contact',
			'icon'	:'fa-address-card',
			'label'	:'Contact Info',
			'loc'	:'contact_info'
		}
	]

	self.route = function(loc){
		$state.go(loc)
		console.log(loc)
	}
})
var app = angular.module("site",['ui.router','ngAnimate']);
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.when('/', 'home')
	$urlRouterProvider.otherwise("home")

	$stateProvider
	.state('home',{
		url: '/home',
		templateUrl: 'src/html/home.html'
	})
	.state('contact',{
		url: '/contact',
		templateUrl: 'src/html/contact.html'
	})
	.state('projects',{
		url: '/projects',
		templateUrl: 'src/html/projects.html'
	})
	.state('resume',{
		url: '/resume',
		templateUrl: 'src/html/resume.html',
		onEnter: function($window) {
            $window.open('https://resume.darwin.ovh', '_blank');
        }
	})
})

app.controller('main',function($transitions, $state, $timeout){
	var self = this
	self.menushow = false
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
			'loc'	:'contact'
		},{
			'name'	:'projects',
			'icon'	:'fa-address-card',
			'label'	:'Projects',
			'loc'	:'projects'
		},{
			'name'	:'resume',
			'icon'	:'fa-file',
			'label'	:'Resume',
			'loc'	:'resume'
		}
	]
})
'use strict';

eventsApp.controller('EventController',
	function EventController($scope) {
		
		$scope.event = {
			name: 'Angular Learning',
			date: '09/12/2014',
			time: '10:30am',
			location: {
				address: 'Bangalore',
				city: 'Bangalore',
				state: 'Bangalore',
				zipcode: '560085'
			},
			imageURL: 'img/AatmTrisha.png',
			sessions: [
				{
					name: 'Javascript Basics',
					creatorName: 'Abishek ',
					duration: '1 hr',
					level: 'Intermediate and Advanced',
					abstract: 'In this session...'
				},
				{
					name: 'Python Basics',
					creatorName: 'Abhishek',
					duration: '30 min',
					level: 'Introductory',
					abstract: 'In this session...'
				},
				{
					name: 'JQuery',
					creatorName: 'Abhishek',
					duration: '2 hr',
					level: 'Intermediate',
					abstract: 'In this session...'
				}
			]
		}
	}

);
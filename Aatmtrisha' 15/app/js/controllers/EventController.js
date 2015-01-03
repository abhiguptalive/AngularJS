'use strict';

eventsApp.controller('EventController',
	function EventController($scope) {
		
		$scope.event = {
			name: "AatmTrisha'15",
			date: '13-14 February 2015',
			time: '8:30am',
			location: {
				address: 'PES University',
				city: 'Bangalore',
				state: 'Karnataka',
				zipcode: '560085'
			},
			imageURL: 'img/AatmTrisha.png',
			sessions: [
				{
					name: 'AT got Talent ',
					creatorName: ' Abhishek ',
					duration: '3 hr',
					level: 'Competition',
					abstract: 'In this session...'
				},
				{
					name: ' Pitch Please',
					creatorName: 'Abhishek',
					duration: '2 hr',
					level: 'Competition',
					abstract: 'In this session...'
				},
				{
					name: 'Paisa Vassool',
					creatorName: 'Abhishek',
					duration: '2 hr',
					level: 'Entertainment',
					abstract: 'In this session...'
				}
			]
		}
	}

);
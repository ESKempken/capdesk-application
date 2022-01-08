export default function () {
  return {
	featureGroups: [
		{
			title: 'Cap table management',
			features: [
				{
					title: 'Digital cap table',
					full: [ 1, 3 ],
					half: [],
				}, {
					title: 'Share certificates',
					full: [ 2, 3 ],
					half: [], 
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 2, 3 ],
					half: [],
				}, {
					title: 'Share class setup',
					full: [ 3 ],
					half: [ 2 ],
					label: 'No fully included ',
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 1, 2 ],
					half: [],
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 1, 2 ],
					half: [],
				}
			]
		}, {
			title: 'Lorem ipsum dolor',
			features: [
				{
					title: 'Digital cap table',
					full: [ 1, 3 ],
					half: [],
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 1, 2, 2 ],
					half: [],
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 2 ],
					half: [],
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 2, 3 ],
					half: [],
				},{
					title: 'Hire Ellis',
					full: [ 2 ],
					half: [ 1 ],
					label: 'Hi, im text',
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 1 ],
					half: [],
				}
			],
		}
	]
	,
    plans: [{
		planId: 1,
		title: 'Start',
		icon: 'grade',
		tailorPrice: false,				
		startPrice: {
			monthly: 50,
			employee: 4.80,
		},
		continuedPrice: {
			monthly: 60,
			employee: 6.00,
		},
		features: [
			'Lorem ipsum dolor',
			'Lorem ipsum dolor2',
			'Lorem ipsum dolor3',
			'Lorem ipsum dolor4',
			'Lorem ipsum dolor5',
		]
	},	{
		planId: 2,
		title: 'Grow',
		icon: 'lightbulb',
		tailorPrice: false,				
		startPrice: {
			monthly: 95,
			employee: 4.80,
		},
		continuedPrice: {
			monthly: 120,
			employee: 6.00,
		},
		features: [
			'Lorem ipsum dolor',
			'Lorem ipsum dolor2',
			'Lorem ipsum dolor3',
		]
	},
	{
		planId: 3,
		title: 'Start',
		icon: 'work',
		tailorPrice: true,
		features: [
			'Lorem ipsum dolor',
			'Lorem ipsum dolor2',
			'Lorem ipsum dolor3',
			'Lorem ipsum dolor4',
			'Lorem ipsum dolor5',
		]
	},]
  }
}

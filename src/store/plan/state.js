export default function () {
  return {
	featureGroups: [
		{
			title: 'Cap table management',
			features: [
				{
					title: 'Digital cap table',
					full: [ 1, 3 ],
				}, {
					title: 'Share certificates',
					full: [ 2, 3 ],
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 2, 3 ],
				}, {
					title: 'Share class setup',
					full: [ 3 ],
					half: [
						{ planId: 1,	label: 'Hi, im text', }
					],
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 1, 2 ],
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 1, 2 ],
				}
			]
		}, {
			title: 'Lorem ipsum dolor',
			features: [
				{
					title: 'Digital cap table',
					full: [ 1, 3 ],
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 1, 2, 2 ],
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 2 ],
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 2, 3 ],
				},{
					title: 'Hire Ellis',
					full: [ 1 ],
					half: [
						{ planId: 2,	label: 'Hi, im text', },
						{ planId: 3,	label: 'Hi', },
					],
				},{
					title: 'Lorem ipsum dolor sit amet',
					full: [ 1 ],
				}
			],
		}
	]
	,
    plans: [{
		planId: 1,
		title: 'Start',
		icon: '',
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
		icon: '',
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
		icon: '',
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

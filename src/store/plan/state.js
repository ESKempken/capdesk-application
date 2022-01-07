export default function () {
  return {
    plans: [{
		id: 0,
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
		id: 0,
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
		id: 0,
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

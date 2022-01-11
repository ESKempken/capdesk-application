
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
		{ path: 'audit', name:'audit', component: () => import('src/pages/TaskOne.vue') },
		{ path: 'pricing', name:'pricing', component: () => import('src/pages/TaskTwo.vue') },
		{ path: 'blog', name:'blog', component: () => import('src/pages/TaskThree.vue') },
    ]
  }
]

export default routes


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: '/clinic', component: () => import('pages/Clinic.vue') },
      { path: '/stock', component: () => import('pages/Stock.vue') },
      { path: '/calendar', component: () => import('pages/calendar.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

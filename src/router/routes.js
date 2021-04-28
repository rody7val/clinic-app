
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages') },
      { path: '/login', component: () => import('pages/auth/Login.vue') },
      {
        path: '/dash',
        meta: { requiresAuth: true },
        component: () => import('pages/Dashboard.vue')
      },
      {
        path: '/clinic',
        meta: { requiresAuth: true },
        component: () => import('pages/Clinic.vue')
      },
      {
        path: '/stock',
        meta: { requiresAuth: true },
        component: () => import('pages/Stock.vue')
      },
      {
        path: '/calendar',
        meta: { requiresAuth: true },
        component: () => import('pages/calendar.vue')
      },
      //auth
    ]
  },

  // but you can also remove it

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

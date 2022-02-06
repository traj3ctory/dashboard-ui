const router = [
  // make root route redirect to Dashboard,
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    component: () => import("../views/Dashboard.vue"),
    name: "Dashboard",
  },
];

export default router;
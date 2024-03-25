const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/NewIndex.vue"), name: "home" },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("layouts/DashBoardLayout.vue"),
    children: [
      {
        path: "/buy/dashboard",
        component: () => import("pages/DashboardPage.vue"),
        name: "dashboard",
      },
      {
        path: "/user/bills",
        component: () => import("pages/user/BillPaymentList.vue"),
        name: "user.bills",
      },
      {
        path: "/buy/electricity",
        component: () => import("pages/user/UtilityBills.vue"),
        name: "buy.electricity",
      },
      {
        path: "/buy/tv-subscription",
        component: () => import("pages/user/PackageSub.vue"),
        name: "buy.tvsubscription",
      },
      {
        path: "/buy/subscription",
        component: () => import("pages/user/ElectricitySubDetails.vue"),
        name: "buy.subDetails",
      },
      {
        path: "/buy/top-up",
        component: () => import("pages/user/TopUp.vue"),
        name: "user.top",
      },

      {
        path: "/buy/referrals",
        component: () => import("pages/BuyBill.vue"),
        name: "buy.referrals",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/login",
    component: () => import("pages/auth/LoginPage.vue"),
    name: "login",
  },
  {
    path: "/register",
    component: () => import("pages/auth/RegisterPage.vue"),
    name: "register",
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

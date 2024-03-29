import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Suppliers from "@/pages/Suppliers.vue";
import Products from "@/pages/Products.vue";
import Customers from "@/pages/Customers.vue";
import Login from "@/pages/Login.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      // {
      //   path: "/user",
      //   name: "User Profile",
      //   component: UserProfile
      // },
      {
        path: "/table",
        name: "Table List",
        component: TableList
      },
      {
        path: "/suppliers",
        name: "Suppliers",
        component: Suppliers
      },
      {
        path: "/products",
        name: "Products",
        component: Products
      },
      {
        path: "/customers",
        name: "Customers",
        component: Customers
      },
      // {
      //   path: "typography",
      //   name: "Typography",
      //   component: Typography
      // },
      // {
      //   path: "icons",
      //   name: "Icons",
      //   component: Icons
      // },
      // {
      //   path: "maps",
      //   name: "Maps",
      //   meta: {
      //     hideFooter: true
      //   },
      //   component: Maps
      // },
      // {
      //   path: "notifications",
      //   name: "Notifications",
      //   component: Notifications
      // },
      // {
      //   path: "upgrade",
      //   name: "Upgrade to PRO",
      //   component: UpgradeToPRO
      // }
    ]
  }
];

export default routes;

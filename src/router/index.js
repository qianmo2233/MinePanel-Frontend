import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import ServerMain from "@/views/Server/ServerMain";
import SettingMain from "@/views/Setting/SettingMain";
import ServerList from "@/views/Server/ServerList";
import AddServer from "@/views/Server/AddServer";
import ManagerMain from "@/views/Manager/ManagerMain";
import Dashboard from "@/views/Manager/Dashboard";
import Console from "@/views/Manager/Console";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/server',
  },
  {
    path: '/manager',
    name: 'Server Manager',
    component: ManagerMain,
    redirect: '/manager/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'console',
        name: 'Console',
        component: Console
      }
    ]
  },
  {
    path: '/server',
    name: 'Server',
    component: ServerMain,
    redirect: '/server/list',
    children: [
      {
        path: 'list',
        name: 'Server List',
        component: ServerList,
      },
      {
        path: 'add',
        name: 'Add Server',
        component: AddServer,
      },
    ]
  },
  {
    path: '/setting',
    name: 'Setting',
    component: SettingMain,
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router

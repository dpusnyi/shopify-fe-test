import angular from "angular";

// containers
import { AppLogin } from "./containers/login/login.component";
import { AppShop } from "./containers/shop/shop.component";
// components
// styles
import "./containers/login/login.scss";
import "./containers/shop/shop.scss";

const MODULE_NAME = "common";
const MODULE_IMPORTS = [];

export const CommonModule = angular
  .module(MODULE_NAME, MODULE_IMPORTS)
  .component(AppLogin.selector, AppLogin)
  .component(AppShop.selector, AppShop)
  .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
      .state(AppLogin.selector, {
        url: `/${AppLogin.selector}`,
        component: AppLogin.selector,
      })
      .state(AppShop.selector, {
        url: `/${AppShop.selector}`,
        component: AppShop.selector,
      });

    $locationProvider.hashPrefix("");
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/login");
  }).name;

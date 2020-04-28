export const AppShop = {
  selector: 'shop',
  template: require('./shop.html'),

  controller: class AppShop {
    constructor($scope) {
      'ngInject';
      this.myShop = window.localStorage.getItem('shop');
    }
    get orders() {
      return this.$orders;
    }
    set orders(orders) {
      this.$orders = orders;
    }
    get shop() {
      return this.$shop;
    }
    set shop(shop) {
      this.$shop = shop;
    }
    $onInit() {
      this.requestData();
    }
    $onChanges(changes) {
      console.log(changes);
    }
    requestData() {
      const accessToken = new URLSearchParams(location.search).get(
        'accessToken'
      );
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      const url = new URL('https://shopify-back-test.herokuapp.com/orders');
      // const url = new URL('http://localhost:8000/orders');
      url.search = new URLSearchParams({
        accessToken,
        shop: `${this.myShop}`,
      });

      fetch(url, requestOptions)
        .then((result) => result.json())
        .then((result) => {
          console.log('result', result);
          this.orders = result.orders;
          this.shop = result.shop;
        })
        .catch((error) => console.log('error', error));
    }
  },
  controllerAs: 'test',
  bindings: {
    $orders: '<',
    $shop: '<',
  },
};

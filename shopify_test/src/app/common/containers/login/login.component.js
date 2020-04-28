export const AppLogin = {
  selector: 'login',
  template: require('./login.html'),
  controller: class AppLogin {
    constructor() {
      'ngInject';
      this.shop = 'dpstore-1'
    }

    $onInit() {
    }

    logIn(){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      const url = new URL('https://shopify-back-test.herokuapp.com/shopify');
      // const url = new URL('http://localhost:8000/shopify');
      url.search = new URLSearchParams({
        shop: `${this.shop}.myshopify.com`,
      });
      window.localStorage.setItem('shop', this.shop);
      fetch(url, requestOptions)
        .then((result) => result.json())
        .then((result) => {
          console.log(result)
          window.location.href = result.oauthUrl
        })
        .catch((error) => console.log('error', error));
    };
  }
};

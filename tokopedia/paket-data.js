var Nightmare = require('nightmare')
// Setting the Nightmarejs, using Object
var nightmare = Nightmare({
  show: false,
  webPreferences: {
    images: false
  },
  gotoTimeout: 40000,
  executionTimeout: 30000
  // waitTimeout: 30000
});
function crawling() {
  var lol = []
  return new Promise((resolve, reject) => {
    nightmare
    .viewport(1800, 1000)
    .goto('https://www.tokopedia.com/')
    .wait('input[name="client_number"]')
    .wait(2000)
    .click('li#li-category-tab-2')
    .type('input[name="client_number"]', '0813')//telkomsel
    .wait(3000)
    .evaluate(() => {
      var arr = []
      var arr1 = Array.from(document.querySelectorAll('ul#ul_custom_recharge_product_id .dgw-dropdown__name')).map(e => e.innerHTML)
      var arr2 = Array.from(document.querySelectorAll('ul#ul_custom_recharge_product_id .dgw-dropdown__price')).map(e => e.innerHTML)
      for (var i = 0; i < arr1.length; i++) {
        arr.push(arr1[i], arr2[i])
      }
      return arr
    })
    .then(function(a) {
      lol.push(a)
    })
    .then(function() {
      return nightmare
      .type('input[name="client_number"]', '')
      .type('input[name="client_number"]', '0856')//indosat
      .evaluate(() => {
        var arr = []
        var arr1 = Array.from(document.querySelectorAll('ul#ul_custom_recharge_product_id .dgw-dropdown__name')).map(e => e.innerHTML)
        var arr2 = Array.from(document.querySelectorAll('ul#ul_custom_recharge_product_id .dgw-dropdown__price')).map(e => e.innerHTML)
        for (var i = 0; i < arr1.length; i++) {
          arr.push(arr1[i], arr2[i])
        }
        return arr
      })
      .then(function(a) {
        lol.push(a)
      })
      .then(function() {
        return nightmare
        .type('input[name="client_number"]', '')
        .type('input[name="client_number"]', '0896')//three
        .evaluate(() => {
          var arr = []
          var arr1 = Array.from(document.querySelectorAll('ul#ul_custom_recharge_product_id .dgw-dropdown__name')).map(e => e.innerHTML)
          var arr2 = Array.from(document.querySelectorAll('ul#ul_custom_recharge_product_id .dgw-dropdown__price')).map(e => e.innerHTML)
          for (var i = 0; i < arr1.length; i++) {
            arr.push(arr1[i], arr2[i])
          }
          return arr
        })
        .then(function(a) {
          lol.push(a)
        })
        .then(function() {
          return nightmare
          .type('input[name="client_number"]', '')
          .type('input[name="client_number"]', '0817')//xl
          .evaluate(() => {
            var arr = []
            var arr1 = Array.from(document.querySelectorAll('ul#ul_custom_recharge_product_id .dgw-dropdown__name')).map(e => e.innerHTML)
            var arr2 = Array.from(document.querySelectorAll('ul#ul_custom_recharge_product_id .dgw-dropdown__price')).map(e => e.innerHTML)
            for (var i = 0; i < arr1.length; i++) {
              arr.push(arr1[i], arr2[i])
            }
            return arr
          })
          .then(function(a) {
            lol.push(a)
          })
          .then(function() {
            return nightmare
            .type('input[name="client_number"]', '')
            .type('input[name="client_number"]', '0838')//axis
            .evaluate(() => {
              var arr = []
              var arr1 = Array.from(document.querySelectorAll('ul#ul_custom_recharge_product_id .dgw-dropdown__name')).map(e => e.innerHTML)
              var arr2 = Array.from(document.querySelectorAll('ul#ul_custom_recharge_product_id .dgw-dropdown__price')).map(e => e.innerHTML)
              for (var i = 0; i < arr1.length; i++) {
                arr.push(arr1[i], arr2[i])
              }
              return arr
            })
            .end()
          })
        })
      })
    })
    // .end()
    .then(function(b) {
      lol.push(b)
      // console.log(lol)
      resolve(lol)
    })
    .catch((error) => {
      nightmare.end()
      console.error('Search failed:', error);
      reject('Search failed:', error)
    })
  })
}

module.exports = crawling
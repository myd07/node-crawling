var Nightmare = require('nightmare')
// Setting the Nightmarejs, using Object
var nightmare = Nightmare({
  show: false, // turn it to true if you want to debug it by showing the visual flow
  webPreferences: {
    images: false
  },
  gotoTimeout: 40000,
  executionTimeout: 30000
  // waitTimeout: 10000
});
function crawling() {
  var lol = []
  console.log('tokopedia crawling begin')
  return new Promise((resolve, reject) => {
    nightmare
    .viewport(1800, 1000)
    .goto('https://www.tokopedia.com/')
    .wait('input[name="client_number"]')
    .wait(2000)
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
            .type('input[name="client_number"]', '9992')//bolt
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
              .type('input[name="client_number"]', '0889')//smart
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
    })
    // .end()
    // .halt()
    .then(function(b) {
      lol.push(b)
      // console.log(lol)
      resolve(lol)
    })
    .catch((error) => {
      // console.error('Search failed:', error);
      // crawling()
      reject(error)
    })
  })
}

module.exports = crawling
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
    .viewport(1200, 1000)
    .goto('https://m.sepulsa.com/pln_prepaid')
    .wait('input[name="plnprepaid_meter_number"]')
    .wait(2000)
    .type('input[name="plnprepaid_meter_number"]', '86028284064')
    .type('input[name="plnprepaid_phone_number"]', '08568928782')
    .click('div#prepaidPLN_920')
    .wait('div.cartTitle')
    .evaluate(() => {
      // var arr = []
      var arr1 = Array.from(document.querySelectorAll('div.cartTitle')).map(e => e.innerHTML)
      var arr2 = Array.from(document.querySelectorAll('li.cartItem>div.price')).map(e => e.innerHTML)
      var arr3 = arr1.concat(arr2)
      arr3.splice(1, 6)
      return arr3
    })
    .then(function(a) {
      lol.push(a)
    })
    .then(function() {
      return nightmare
      .wait(2000)
      .click('button.pLeft0')
      .wait('input[name="plnprepaid_meter_number"]')
      .wait(2000)
      .click('div#prepaidPLN_287')
      .wait('div.cartTitle')
      .evaluate(() => {
        var arr1 = Array.from(document.querySelectorAll('div.cartTitle')).map(e => e.innerHTML)
        var arr2 = Array.from(document.querySelectorAll('li.cartItem>div.price')).map(e => e.innerHTML)
        var arr3 = arr1.concat(arr2)
        arr3.splice(1, 6)
        return arr3
      })
      .then(function(a) {
        lol.push(a)
      })
      .then(function() {
        return nightmare
        .wait(2000)
        .click('button.pLeft0')
        .wait('input[name="plnprepaid_meter_number"]')
        .wait(2000)
        .click('div#prepaidPLN_286')
        .wait('div.cartTitle')
        .evaluate(() => {
          var arr1 = Array.from(document.querySelectorAll('div.cartTitle')).map(e => e.innerHTML)
          var arr2 = Array.from(document.querySelectorAll('li.cartItem>div.price')).map(e => e.innerHTML)
          var arr3 = arr1.concat(arr2)
          arr3.splice(1, 6)
          return arr3
        })
        .then(function(a) {
          lol.push(a)
        })
        .then(function() {
          return nightmare
          .wait(2000)
          .click('button.pLeft0')
          .wait('input[name="plnprepaid_meter_number"]')
          .wait(2000)
          .click('div#prepaidPLN_284')
          .wait('div.cartTitle')
          .evaluate(() => {
            var arr1 = Array.from(document.querySelectorAll('div.cartTitle')).map(e => e.innerHTML)
            var arr2 = Array.from(document.querySelectorAll('li.cartItem>div.price')).map(e => e.innerHTML)
            var arr3 = arr1.concat(arr2)
            arr3.splice(1, 6)
            return arr3
          })
          .then(function(a) {
            lol.push(a)
          })
          .then(function() {
            return nightmare
            .wait(2000)
            .click('button.pLeft0')
            .wait('input[name="plnprepaid_meter_number"]')
            .wait(2000)
            .click('div#prepaidPLN_283')
            .wait('div.cartTitle')
            .evaluate(() => {
              var arr1 = Array.from(document.querySelectorAll('div.cartTitle')).map(e => e.innerHTML)
              var arr2 = Array.from(document.querySelectorAll('li.cartItem>div.price')).map(e => e.innerHTML)
              var arr3 = arr1.concat(arr2)
              arr3.splice(1, 6)
              return arr3
            })
            .then(function(a) {
              lol.push(a)
            })
            .then(function() {
              return nightmare
              .wait(2000)
              .click('button.pLeft0')
              .wait('input[name="plnprepaid_meter_number"]')
              .wait(2000)
              .click('div#prepaidPLN_282')
              .wait('div.cartTitle')
              .evaluate(() => {
                var arr1 = Array.from(document.querySelectorAll('div.cartTitle')).map(e => e.innerHTML)
                var arr2 = Array.from(document.querySelectorAll('li.cartItem>div.price')).map(e => e.innerHTML)
                var arr3 = arr1.concat(arr2)
                arr3.splice(1, 6)
                return arr3
              })
              .end()
            })
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
      // console.error('Search failed:', error);
      reject(error)
    })
  })
}

module.exports = crawling
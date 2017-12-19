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
    .goto('https://m.sepulsa.com/paketdata')
    .wait('input[name="paketdata_phone_number"]')
    .wait(2000)
    .type('input[name="paketdata_phone_number"]', '0813')//telkomsel
    .wait(3000)
    .evaluate(() => {
      var arr = []
      var arr1 = Array.from(document.querySelectorAll('.productName')).map(e => e.innerHTML)
      var arr2 = Array.from(document.querySelectorAll('.textMerah>b')).map(e => e.innerHTML)
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
      .type('input[name="paketdata_phone_number"]', '')
      .type('input[name="paketdata_phone_number"]', '0856')//indosat
      .evaluate(() => {
        var arr = []
        var arr1 = Array.from(document.querySelectorAll('.productName')).map(e => e.innerHTML)
        var arr2 = Array.from(document.querySelectorAll('.textMerah>b')).map(e => e.innerHTML)
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
        .type('input[name="paketdata_phone_number"]', '')
        .type('input[name="paketdata_phone_number"]', '0896')//three
        .evaluate(() => {
          var arr = []
          var arr1 = Array.from(document.querySelectorAll('.productName')).map(e => e.innerHTML)
          var arr2 = Array.from(document.querySelectorAll('.textMerah>b')).map(e => e.innerHTML)
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
          .type('input[name="paketdata_phone_number"]', '')
          .type('input[name="paketdata_phone_number"]', '0817')//xl
          .evaluate(() => {
            var arr = []
            var arr1 = Array.from(document.querySelectorAll('.productName')).map(e => e.innerHTML)
            var arr2 = Array.from(document.querySelectorAll('.textMerah>b')).map(e => e.innerHTML)
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
            .type('input[name="paketdata_phone_number"]', '')
            .type('input[name="paketdata_phone_number"]', '0838')//axis
            .evaluate(() => {
              var arr = []
              var arr1 = Array.from(document.querySelectorAll('.productName')).map(e => e.innerHTML)
              var arr2 = Array.from(document.querySelectorAll('.textMerah>b')).map(e => e.innerHTML)
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
      // console.error('Search failed:', error);
      reject('error')
    })
  })
}

module.exports = crawling
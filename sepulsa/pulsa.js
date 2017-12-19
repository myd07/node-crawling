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
  console.log('sepulsa crawling begin')
  var lol = []
  return new Promise((resolve, reject) => {
    nightmare
    .viewport(1200, 1000)
    .goto('https://m.sepulsa.com/mobile_prepaid')
    .wait('input[name="phone_number"]')
    .wait(2000)
    .type('input[name="phone_number"]', '0813')//telkomsel
    .wait(3000)
    .evaluate(() => {
      var lel = Array.from(document.querySelectorAll('b')).map(e => e.innerHTML)
      return lel
    })
    .then(function(a) {
      lol.push(a)
    })
    .then(function() {
      return nightmare
      .type('input[name="phone_number"]', '')
      .type('input[name="phone_number"]', '0856')//indosat
      .evaluate(() => {
        var lel = Array.from(document.querySelectorAll('b')).map(e => e.innerHTML)
        return lel
      })
      .then(function(a) {
        lol.push(a)
      })
      .then(function() {
        return nightmare
        .type('input[name="phone_number"]', '')
        .type('input[name="phone_number"]', '0896')//three
        .evaluate(() => {
          var lel = Array.from(document.querySelectorAll('b')).map(e => e.innerHTML)
          return lel
        })
        .then(function(a) {
          lol.push(a)
        })
        .then(function() {
          return nightmare
          .type('input[name="phone_number"]', '')
          .type('input[name="phone_number"]', '0817')//xl
          .evaluate(() => {
            var lel = Array.from(document.querySelectorAll('b')).map(e => e.innerHTML)
            return lel
          })
          .then(function(a) {
            lol.push(a)
          })
          .then(function() {
            return nightmare
            .type('input[name="phone_number"]', '')
            .type('input[name="phone_number"]', '9992')//bolt
            .evaluate(() => {
              var lel = Array.from(document.querySelectorAll('b')).map(e => e.innerHTML)
              return lel
            })
            .then(function(a) {
              lol.push(a)
            })
            .then(function() {
              return nightmare
              .type('input[name="phone_number"]', '')
              .type('input[name="phone_number"]', '0889')//smart
              .evaluate(() => {
                var lel = Array.from(document.querySelectorAll('b')).map(e => e.innerHTML)
                return lel
              })
              .then(function(a) {
                lol.push(a)
              })
            })
            .then(function() {
              return nightmare
              .type('input[name="phone_number"]', '')
              .type('input[name="phone_number"]', '0838')//axis
              .evaluate(() => {
                var lel = Array.from(document.querySelectorAll('b')).map(e => e.innerHTML)
                return lel
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

// crawling()
// .then(x => console.log(x))
// .catch(y => console.log(y))
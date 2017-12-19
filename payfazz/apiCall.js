// var rp = require("request-promise-native")
// var cheerio = require("cheerio")
// var cheerioTable = require("cheerio-tableparser")
var fs = require('fs')
var readline = require('readline')
var axios = require("axios")
var payloadSender = require("../sheetSender.js")
var auth = require("../auth.js")

var api = 'https://api.payfazz.com/api/v1/recharge/operators/'
var sheet = 'payfazz'


// you can use setInterval() to loop the process per 24 hours = 86400000 ms


axios.get(api)
.then(x => {
    var type = x.data
    var result = [['operator', 'product_type', 'product_name', 'price']]
    for(var a in type) {
        var obj = type[a]
        obj.map(b => {
            var operator = b.operatorName
            var productType = ''
            if (b.operatorType == 'mobile') {
                var productType = 'pulsa'
            } else {
                var productType = b.operatorType
            }
            // Date format in case you need it someday
            // Date.prototype.yyyymmdd = function() {
            //   var mm = this.getMonth() + 1;
            //   var dd = this.getDate();

            //   return [this.getFullYear(),
            //   (mm>9 ? '' : '0') + mm,
            //   (dd>9 ? '' : '0') + dd
            //   ].join('');
            // };
            // var date = new Date();
            // var fixDate = date.yyyymmdd()
            b.plans.map(c => {
                var arr = []
                var description = c.description,
                    price = c.sellPrice;
                arr.push(operator, productType, description, price)
                result.push(arr)
            })
        })
    }
    // console.log(result)
    auth.authenticate()
    .then(auth=>{
        payloadSender(auth, result, sheet)
        console.log(auth)
    })
    .catch(y => {
        console.log('auth error')
        console.log(y)
    })
})
.catch(y => {
    console.log('Crawling Failed')
    console.log(y)
})
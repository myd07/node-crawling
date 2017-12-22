var pulsaCrawling = require("./pulsa.js")
var paketCrawling = require("./paket-data.js")
var listrikCrawling = require("./token-listrik.js")
var payloadSender = require("../sheetSender.js")
var auth = require("../auth.js")

var arr = []
var sheet = 'sepulsa'
var pulsa = [['Telkomsel','Pulsa'], ['Indosat', 'Pulsa'], ['Tri', 'Pulsa'], ['XL', 'Pulsa'], ['Bolt', 'Pulsa'], ['Smartfren', 'Pulsa'], ['Axis', 'Pulsa']]
var paket = [['Telkomsel','Paket Data'], ['Indosat', 'Paket Data'], ['Tri', 'Paket Data'], ['XL', 'Paket Data'], ['Axis', 'Paket Data']]
var listrik = [['PLN', 'Listrik']]

// you can use setInterval() to loop the process per 24 hours = 86400000 ms

function sepulsa() {
	pulsaCrawling()
	.then(x => {
		(function() {
			for (var i = 0; i < x.length; i++) {
				var a = x[i]
				var b = pulsa[i]
				//slice loop
				for(j=0; j < a.length; j+=2) {
				  var c = b.concat(a.slice(j, j + 2))
				  arr.push(c)
				}
			}
		})()
		// console.log(arr)
		paketCrawling()
		.then(x => {
			(function() {
				for (var i = 0; i < x.length; i++) {
					var a = x[i]
					var b = paket[i]
					//slice loop
					for(j=0; j < a.length; j+=2) {
					  var c = b.concat(a.slice(j, j + 2))
					  arr.push(c)
					}
				}
			})()

			listrikCrawling()
			.then(x => {
				(function() {
					for (var i = 0; i < x.length; i++) {
						var a = x[i]
						var b = listrik[0]
						var c = b.concat(a)
						arr.push(c)
					}
				})()

				auth.authenticate()
			    .then(auth=>{
			        payloadSender(auth, arr, sheet)
			        console.log(auth)
			    })
			    .catch(y => {
			        console.log('auth error')
			        console.log(y)
			    })

			})
			.catch(y => {
				console.log(y)
				// sepulsa()
			})
		})
		.catch(y => {
			console.log(y)
			// sepulsa()
		})
	})
	.catch(y => {
		console.log(y)
		// sepulsa()
	})
}

sepulsa()
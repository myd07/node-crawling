var pulsaCrawling = require("./pulsa.js")
var paketCrawling = require("./paket-data.js")
var payloadSender = require("../sheetSender.js")
var auth = require("../auth.js")

var arr = []
var sheet = 'tokopedia'
var pulsa = [['Telkomsel','Pulsa'], ['Indosat', 'Pulsa'], ['Tri', 'Pulsa'], ['XL', 'Pulsa'], ['Bolt', 'Pulsa'], ['Smartfren', 'Pulsa'], ['Axis', 'Pulsa']]
var paket = [['Telkomsel','Paket Data'], ['Indosat', 'Paket Data'], ['Tri', 'Paket Data'], ['XL', 'Paket Data'], ['Axis', 'Paket Data']]

// you can use setInterval() to loop the process per 24 hours = 86400000 ms

// made a change here

function tokopedia() {
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
			// tokopedia()
		})
	})
	.catch(y => {
		console.log(y)
		// tokopedia()
	})
}

tokopedia()
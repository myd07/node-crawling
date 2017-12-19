// var page = require('webpage').create()

// page.settings.loadImages = false

// page.open('https://www.tokopedia.com/pulsa/', function(status) {
//   console.log("Status: " + status)
//   if(status === "success") {
//   	console.log('tokopedia')
//   }
//   page.evaluate(function() {
//   	$('input[name="client_number"]').val = '0813'
//   })
//   console.log(page.content)
//   phantom.exit()
// })

var links = '';
var casper = require('casper').create({
	pageSettings: {
		loadImages: false
	},
	waitTimeout: 20000,
	userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120',
	viewportSize: {
		width: 1800,
		height: 1000
	}
})
console.log('hai')

// function getLinks() {
//     var links = document.querySelectorAll('h3.r a');
//     return Array.prototype.map.call(links, function(e) {
//         return e.getAttribute('href');
//     });
// }

function getLinks() {
    
	// $('input[name="mobileprepaid_telp"]').val('0813');
    // var a = $('input[name="mobileprepaid_telp"]')
	var lol = document.querySelectorAll('p.nominal');
	var lel = Array.prototype.map.call(lol, function(e) {
		return e.innerHTML
	})
	return lel
}

casper.start('https://www.sepulsa.com/', function() {
   // Wait for the page to be loaded
   this.waitForSelector("#pulsa-form");
   // this.capture('lol.png')
});

casper.then(function() {
   console.log('loaded')
   // search for 'casperjs' from google form
   // this.fill('form[action="/search"]', { q: 'casperjs' }, true);
   // links = this.evaluate(getLinks)
   this.sendKeys('input[name="mobileprepaid_telp"]', '0813')
});

casper.then(function() {
    // aggregate results for the 'casperjs' search
    // links = this.evaluate(getLinks);
    // console.log(links)
    // now search for 'phantomjs' by filling the form again
    // this.fill('form[action="/search"]', { q: 'phantomjs' }, true);
    links = this.evaluate(getLinks)
});

// casper.then(function() {
//     // aggregate results for the 'phantomjs' search
//     links = links.concat(this.evaluate(getLinks));
// });

casper.run(function() {
    // echo results in some pretty fashion
    // this.echo(links.length + ' links found:');
    this.echo(links).exit();
    // this.echo('done').exit();
});
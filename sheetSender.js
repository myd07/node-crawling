var gapis = require("googleapis")
var auth = require("./auth.js")

// function that used for sending the data array [[]] to google sheet
// take 3 parameters which are 
// auth = authentication result from auth.js
// payload = data array [[]] from each crawling process
// sheet = sheet name for writing to respective sheet
function appendData(auth, payload, sheet) {
  var sheets = gapis.sheets('v4');
  sheets.spreadsheets.values.clear({
    auth: auth,
    spreadsheetId: '1y-LmsgtjVWjOLImvjgy7yUXEZ_gSh7d4PAqEQUzRbFs',
    range: `${sheet}!A2:D1000` //Change Sheet1 if your worksheet's name is something else
  }, (err, response) => {
    if (err) {
      console.log('fail to clear:' + err)
    } else {
        console.log('Sheets Cleared')
        sheets.spreadsheets.values.append({
        auth: auth,
        spreadsheetId: '1y-LmsgtjVWjOLImvjgy7yUXEZ_gSh7d4PAqEQUzRbFs',
        range: `${sheet}!A2:D1000`, //Change Sheet1 if your worksheet's name is something else
        valueInputOption: "USER_ENTERED",
        resource: {
          values: payload
        }
      }, (err, response) => {
        if (err) {
          console.log('The API returned an error: ' + err);
          return;
        } else {
          console.log("Appended");
        }
      })
    }
  })
}
// console.log('lal')

module.exports = appendData
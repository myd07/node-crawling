Installation Process,
1. Download Node js version > 6.xx
2. Please make sure Node and NPM is properly installed by typing 'node --version' and 'npm --version' on Command Prompt (CMD)
3. Direct to the working directory using CMD using cd command ex: 'cd C:\Users\Yoga\Documents\Code\Node\crawling'
4. Install all necessary module using 'npm install'

Start The Server
1. Direct to the working directory using CMD using cd command ex: 'cd C:\Users\Yoga\Documents\Code\Node\crawling'
2. Still on the CMD, run the express server using 'node server.js'
3. Enjoy the crawling power

Using setInterval() to run the crawling script daily, example:
setInterval(function(){
   crawlingFunction()
}, 86400000)
Set this function on each file controler.

Run the server as background
a. the easiest way is to use nodejs package called PM2 (https://github.com/unitech/pm2 support mac, linux, and windows)
b. second way is to use systemd on linux
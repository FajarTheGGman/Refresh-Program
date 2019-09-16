var f = require("fs")
var rl = require("readline")
var sh = require("shelljs")
var js = require("jsome")
var style = require("chalk")

console.log(style.magenta("  | __/,|   (`      [Refresh Program]    "))
console.log(style.magenta("_.|o o  |_   ) )          [By]           "))
console.log(style.magenta("-(((---(((--------   [Fajar Firdaus]     \n"))

js([{
    "Coder" : "Fajar Firdaus",
    "Fb" : "Ace.of.spades729",
    "IG" : "fajar_firdaus_7",
    "YT" : "iTech7732"
}])

const q = rl.createInterface({
    input : process.stdin,
    output : process.stdout
})

var tanya = style.bgBlue("[Input File] >_ ")

q.question(tanya, (fs) => {
    sh.exec("node " + `${fs}`)
    f.watchFile(`${fs}`, (current, previous) => {
        console.log(style.green("[!] [Restaring sessions]"))
        sh.exec("node " + `${fs}`)
        console.log(style.red("\n[!] Type ctrl + c To Exit :)"))
    })
})
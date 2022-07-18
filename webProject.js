const webList = [
'https://sprightly-swan-047780.netlify.app',
'https://fascinating-bublanina-20c3b1.netlify.app/',
'https://pinghuskar.github.io/Bell-Music-Player/',
'https://fluffy-lebkuchen-3e03f8.netlify.app/',
'https://cosmic-kheer-25ca1c.netlify.app/',
'https://pinghuskar.github.io/simple-scoreboard',
'https://fantastic-biscochitos-6543f1.netlify.app/?phone=0857758787',
'https://pinghuskar.github.io/Kipchumba',
'https://pinghuskar.github.io/easy-search-app/',
'https://pinghuskar.github.io/Covid-Kalaland/',
'https://pinghuskar.github.io/health-record-app/',
'https://pinghuskar.github.io/html-form-template/',
'',
'',
]

for (var i=0;i<webList.length;i++) {
    if (webList[i] !== "") {
    document.getElementById('webProject').innerHTML += `<section data-background-iframe="${webList[i]}" data-background-interactive></section>`
    }
}
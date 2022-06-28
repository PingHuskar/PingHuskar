const myHobbies = ['Playing Chess', 'Reading Books', 'Watching Anime', 'Watching Movies']
const hrefHobbies = ['https://www.chess.com/member/pinghuskar','https://www.goodreads.com/user/show/23354440-chadin-chaipornpisuth','https://myanimelist.net/profile/PingHuskar','https://www.imdb.com/user/ur71926161']
const bgHobbies = ['https://cdn.hswstatic.com/gif/chess-4.jpg','https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280207_354374.jpg','https://i.kym-cdn.com/photos/images/facebook/001/101/046/227.jpg','https://pbi.uii.ac.id/wp-content/uploads/2022/03/Five-Reasons-Why-Watching-Movies-Is-Beneficial-to-Our-Personal-Development.jpg',]
for (var i=0;i<myHobbies.length;i++) {
    document.getElementById('hobbies').innerHTML += `<section data-background="${bgHobbies[i]}" data-transition="convex"><h1><a href="${hrefHobbies[i]}" target="_blank">${myHobbies[i]}</a></h1></section>`
}
const hobbies = [
    { name: "Playing Chess", href: "https://www.chess.com/member/pinghuskar", bg: "https://cdn.hswstatic.com/gif/chess-4.jpg" },
    { name: "Reading Books", href: "https://www.goodreads.com/user/show/23354440-chadin-chaipornpisuth", bg: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280207_354374.jpg" },
    { name: "Watching Anime", href: "https://myanimelist.net/profile/PingHuskar", bg: "https://i.kym-cdn.com/photos/images/facebook/001/101/046/227.jpg" },
    { name: "Watching Movies", href: "https://www.imdb.com/user/ur71926161", bg: "https://pbi.uii.ac.id/wp-content/uploads/2022/03/Five-Reasons-Why-Watching-Movies-Is-Beneficial-to-Our-Personal-Development.jpg" },
]

for (let hobby of hobbies) {
    document.getElementById('hobbies').innerHTML += `<section data-background="${hobby.bg}" data-transition="convex"><h1><a href="${hobby.href}" target="_blank">${hobby.name}</a></h1></section>`
}
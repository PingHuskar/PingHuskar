const me= {
    fname: "Chadin",
    lname: "Chaipornpisuth",
    fullName: function() {
        return this.fname + " " + this.lname;
    },
    th_fname:"ชฎิล",
    th_lname:"ชัยพรพิศุทธิ์",
    thfullName: function() {
        return this.th_fname + " " + this.th_lname;
    },
    role: "Data Analyst & Developer",
    dob:"07/16/1998",
    country:"Thailand",
    countrycode:"66",
    nationality:"Thai",
    language:"Thai, English",
    ISO: "THA",
    mail:"ping47024@gmail.com",
    exp:0,
    skills: "Regex, Python, Automation Anywhere",
    // address: "75 TRIPLE B APARTMENT ROOM 511 SOI SIRINDHORN1 SIRINDHORN ROAD BANG PHLAT DISTRICT BANGKOK 10700",
    phone: "0970243950"
};
var dob = new Date(me.dob);
  
//calculate month difference from current date in time
var month_diff = Date.now() - dob.getTime();
  
//convert the calculated difference in date format
var age_dt = new Date(month_diff);
  
//extract year from date
var year = age_dt.getUTCFullYear();
  
//now calculate the age of the user
var age = Math.abs(year - 1970);

//display the calculated age
// console.log(me.dob)
// console.log(month_diff)
// console.log(age_dt)
// console.log(year)
// console.log(age)
const th_num = '๐๑๒๓๔๕๖๗๘๙'
const roman_num = '0123456789'
function arnonNum(roNum) {
    str_roNum = roNum.toString()
    var th = ''
    for (var i = 0; i<str_roNum.length;i++) {
        // console.log(str_roNum[i])
        if (str_roNum[i] === '-') {
            th += '-'
        }
        else {
            th += th_num[roman_num.indexOf(str_roNum[i])]
        }
    }
    return th.replace(undefined,".")
}
// document.getElementById("age").innerHTML = age;
document.getElementById("mail").innerHTML = me.mail;
// document.getElementById("address").innerHTML = me.address;
// document.getElementById("role").innerHTML = me.role;
document.getElementById("phone").innerHTML = `(+${me.countrycode}) ${me.phone.slice(0,3)}-${me.phone.slice(3,6)}-${me.phone.slice(6,10)}`;
// document.getElementById("name").innerHTML = `${me.fname} ${me.lname}`;
document.getElementById('name').innerHTML = `${me.fullName()} (${age})<br>${me.thfullName()} (${arnonNum(age)})`
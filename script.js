function addNewWEField() {
    // console.log("adding");
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");
    var weOb = document.getElementById("we");
    var weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField() {
    // console.log("adding");
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    // newNode.classList.add("margin 4")
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");
    var aqOb = document.getElementById("aq");
    var aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
// generate cv
function generateCV() {
    var nameField = document.getElementById("nameField").value;
    var nameT1 = document.getElementById('nameT1');
    var nameT2 = document.getElementById('nameT2');
    if (nameT1 != null) {
        nameT1.innerHTML = nameField;
    }
    if (nameT2 != null) {
        nameT2.innerHTML = nameField;
    }
    // contact
    var contactT = document.getElementById("contactT");
    if (contactT != null) {
        contactT.innerHTML = document.getElementById("contactField").value;
    }
    // adress
    var adressT = document.getElementById("adressT");
    if (adressT != null) {
        adressT.innerHTML = document.getElementById("adressField").value;
    }
    //FBfield
    var fbT = document.getElementById("fbT");
    if (fbT != null) {
        fbT.innerHTML = document.getElementById("fbField").value;
    }
    //instagram
    var instaT = document.getElementById("instaT");
    if (instaT != null) {
        instaT.innerHTML = document.getElementById("instaField").value;
    }
    //linked-inn
    var linkedT = document.getElementById("linkedT");
    if (linkedT != null) {
        linkedT.innerHTML = document.getElementById("linkedField").value;
    }
    //email
    var emailT = document.getElementById("emailT");
    if (emailT != null) {
        emailT.innerHTML = document.getElementById("emailField").value;
    }
    //ObjectiveField
    var objectiveT = document.getElementById("objectiveT");
    if (objectiveT != null) {
        objectiveT.innerHTML = document.getElementById("objectiveField").value;
    }
    //work experience
    var wes = document.getElementsByClassName("weField");
    var str = "";
    for (var _i = 0, wes_1 = wes; _i < wes_1.length; _i++) {
        var e = wes_1[_i];
        str = str + "<li> ".concat(e.value, " </li>");
    }
    var weT = document.getElementById("weT");
    if (weT != null) {
        weT.innerHTML = str;
    }
    //acedmic qualification
    var aqs = document.getElementsByClassName("eqField");
    var str1 = "";
    for (var _a = 0, aqs_1 = aqs; _a < aqs_1.length; _a++) {
        var e = aqs_1[_a];
        str1 = str1 + "<li> ".concat(e.value, " </li>");
    }
    var aqT = document.getElementById("aqT");
    if (aqT != null) {
        aqT.innerHTML = str1;
    }
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-templete').style.display = 'block';
}
//Edit CV 
function editCV() {
    document.getElementById('cv-templete').style.display = 'none';
    document.getElementById('cv-form').style.display = 'block';
}

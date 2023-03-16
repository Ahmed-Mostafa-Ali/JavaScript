var li = document.querySelectorAll("li")
var all = document.querySelector(".all")
var array = [];
for (let i = 1; i <= 60; i++) {
    var x = "My Array Number " + i
    array.push(x)
    let p = document.createElement("p")
    p.classList.add(i)
    p.classList.add("ss")
    p.innerHTML += x
    all.append(p)
}
let sss = document.querySelectorAll(".ss");
for (let i = 0; i < 10; i++) {
    sss[i].style.display = "block"
}
for (let i = 0; i < li.length; i++) {
    li[i].onclick = function () {
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove("active")
        }
        li[i].classList.add("active")
        let ss = document.getElementsByClassName("ss");
        for (let j = 0; j < ss.length; j++) {
            ss[j].style.display = "none"
        }
        var lin = (i) * 10
        for (let s = lin; s < lin + 10; s++) {
            let m = document.getElementsByClassName(s + 1);
            for (let g = 0; g < m.length; g++) {
                m[g].style.display = "block"
                m[g].classList.add("sss")
            }
        }
    }
}
var reverseInput = document.getElementById("reverseInput")
var reverBtn = document.getElementById("reverse")
var reverP = document.getElementById("p")
reverBtn.onclick = function () {
    let x = reverseInput.value.trim()
    var str = x
    var strArray = str.split("")
    var reverArray = []
    for (var i = strArray.length - 1; i >= 0; i--) {
        reverArray.push(strArray[i])
    }
    var strRever = reverArray.join("")
    reverP.innerText = strRever
}
var plaindromsInput = document.getElementById("plaindromsInput")
var plaindromsButtom = document.getElementById("plaindromsButtom")
var plaindromsP = document.getElementById("plaindromsP")
plaindromsButtom.onclick = function () {
    plaindromsP.innerHTML = ""
    var plaindromsStr = plaindromsInput.value.trim()
    var plaindromsStrSplit = plaindromsStr.split("")
    var plaindromsStrArray = []
    if (plaindromsStr.includes(" ")) {
        var plaindromsStrArraySpece = [[], []]
        var plaindromsStrSplitSpace = plaindromsStr.split(" ")
        for (var i = 0; i < plaindromsStrSplitSpace.length; i++) {
            var plaindromsStrSplitSpece = plaindromsStrSplitSpace[i].split("")
            for (var t = plaindromsStrSplitSpece.length - 1; t >= 0; t--) {
                plaindromsStrArraySpece[i].push(plaindromsStrSplitSpece[t])
            }
            if (plaindromsStrSplitSpece.join("") == plaindromsStrArraySpece[i].join("")) {
                plaindromsP.innerHTML += plaindromsStrArraySpece[i].join("") + "<span>plaindroms Is Ok</span>"
            } else {
                plaindromsP.innerHTML += plaindromsStrArraySpece[i].join("") + "<span class='not'>plaindroms Is Not Ok </span>"
            }
        }
    } else {
        for (var i = plaindromsStrSplit.length - 1; i >= 0; i--) {
            plaindromsStrArray.push(plaindromsStrSplit[i])
        }
        var plaindromsStrRever = plaindromsStrArray.join("")
        if (plaindromsStr == plaindromsStrRever) {
            plaindromsP.innerHTML = plaindromsStrRever + "<span>plaindroms Is Ok</span>"
        } else {
            plaindromsP.innerHTML = plaindromsStrRever + "<span class='not'>plaindroms Is Not Ok </span>"
        }
    }
}

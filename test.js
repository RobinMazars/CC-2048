function create_box() {
    let frame = document.getElementById("frame");
    let j = 0;
    while (j < 16) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("id", "case_" + (j + 1).toString());
        frame.appendChild(box);
        j++;
    }
    console.log("END");
}
function init_box() {
    let id1 = Math.floor(Math.random() * 16 + 1);
    let id2 = Math.floor(Math.random() * 16 + 1);
    while (id1 == id2) {
        id2 = Math.floor(Math.random() * 15 + 1);
    }
    console.log(id1);
    console.log(id2);
    let box = document.getElementById("case_" + id1.toString());
    let sb = document.createElement("div");
    let p = document.createElement("p");
    sb.classList.add("s2");
    let newContent = document.createTextNode((2).toString());
    p.appendChild(newContent);
    sb.appendChild(p);
    box.appendChild(sb);
    box = document.getElementById("case_" + id2.toString());
    sb = document.createElement("div");
    p = document.createElement("p");
    sb.classList.add("s2");
    newContent = document.createTextNode((2).toString());
    sb.appendChild(newContent);
    p.appendChild(newContent);
    sb.appendChild(p);
    box.appendChild(sb);
}
create_box();
init_box();
//# sourceMappingURL=test.js.map
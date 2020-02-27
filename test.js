function create_box() {
    let frame = document.getElementById("frame");
    let j = 0;
    while (j < 16) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("id", "case_" + (j + 1).toString());
        var newContent = document.createTextNode((j + 1).toString());
        box.appendChild(newContent);
        frame.appendChild(box);
        j++;
    }
    console.log("END");
}
create_box();
//# sourceMappingURL=test.js.map
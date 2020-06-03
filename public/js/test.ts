function create_box() {
  let frame = document.getElementById("frame");
  let j = 0;
  while (j < 16) {
    let box = document.createElement("div")
    box.classList.add("box")
    box.setAttribute("id", "case_" + (j + 1).toString())
    frame.appendChild(box)
    j++
  }
  console.log("END");
}
function init_box() {
  let id1 = Math.floor(Math.random() * 16 + 1);
  let id2 = Math.floor(Math.random() * 16 + 1);
  while (id1 == id2) {
    id2 = Math.floor(Math.random() * 16 + 1)
  }
  console.log(id1)
  console.log(id2)
  let box = document.getElementById("case_" + id1.toString());
  let sb = document.createElement("div")
  let p = document.createElement("p")
  sb.classList.add("s2")
  sb.classList.add("sb")
  let newContent = document.createTextNode((2).toString())
  p.appendChild(newContent)
  sb.appendChild(p)
  box.appendChild(sb)

  let box2 = document.getElementById("case_" + id2.toString());
  let sb2 = document.createElement("div")
  let p2 = document.createElement("p")
  newContent = document.createTextNode((nbr_2_4()).toString())
  sb2.appendChild(newContent)
  sb2.classList.add("s" + sb2.innerHTML)
  sb2.classList.add("sb")
  p2.appendChild(newContent)
  sb2.appendChild(p2)
  box2.appendChild(sb2)
}

function nbr_2_4() {
  let nbr_rand = Math.random()
  if (nbr_rand > 0.5)
    return 4;
  else
    return 2;
}

create_box()
init_box()

// add_box() // remove
// add_box() // remove
// add_box() // remove


function check_exist(id) {
  let elems = document.getElementsByClassName("sb");
  for (let i = 0; i < elems.length; i++)
    if ("case_" + id == elems[i].parentElement.id)
      return (1);
  return (0);

}

function add_box() {
  let id1 = Math.floor(Math.random() * 16 + 1);
  // let id2 = Math.floor(Math.random() * 16 + 1);
  while (check_exist(id1)) {
    id1 = Math.floor(Math.random() * 16 + 1)
    console.log("random")
    if (document.getElementsByClassName("sb").length == 16)
      return
  }
  // console.log("add box " + id1)
  let box = document.getElementById("case_" + id1.toString());
  let sb = document.createElement("div")
  // console.log(box)
  let p = document.createElement("p")
  let newContent = document.createTextNode((nbr_2_4()).toString())
  p.appendChild(newContent)
  sb.classList.add("s" + p.innerHTML)
  sb.classList.add("sb")
  sb.appendChild(p)
  box.appendChild(sb)
}



function sort_right(elem1, elem2) {
  let id1 = elem1.parentNode.id
  // console.log(id)
  let nbr1 = id1.split("_")[1]
  // let x1 = Math.floor((nbr1 - 1) / 4);
  let y1 = ((nbr1 % 4) + 3) % 4;
  let id2 = elem2.parentNode.id
  let nbr2 = id2.split("_")[1]
  // let x2 = Math.floor((nbr2 - 1) / 4);
  let y2 = ((nbr2 % 4) + 3) % 4;
  return y2 >= y1
}

function sort_left(elem1, elem2) {
  let id1 = elem1.parentNode.id
  // console.log(id)
  let nbr1 = id1.split("_")[1]
  // let x1 = Math.floor((nbr1 - 1) / 4);
  let y1 = ((nbr1 % 4) + 3) % 4;
  let id2 = elem2.parentNode.id
  let nbr2 = id2.split("_")[1]
  // let x2 = Math.floor((nbr2 - 1) / 4);
  let y2 = ((nbr2 % 4) + 3) % 4;
  return y2 <= y1
}
function sort_up(elem1, elem2) {
  let id1 = elem1.parentNode.id
  // console.log(id)
  let nbr1 = id1.split("_")[1]
  let x1 = Math.floor((nbr1 - 1) / 4);
  // let y1 = ((nbr1 % 4) + 3) % 4;
  let id2 = elem2.parentNode.id
  let nbr2 = id2.split("_")[1]
  let x2 = Math.floor((nbr2 - 1) / 4);
  // let y2 = ((nbr2 % 4) + 3) % 4;
  return x2 <= x1
}
function sort_down(elem1, elem2) {
  let id1 = elem1.parentNode.id
  // console.log(id)
  let nbr1 = id1.split("_")[1]
  let x1 = Math.floor((nbr1 - 1) / 4);
  // let y1 = ((nbr1 % 4) + 3) % 4;
  let id2 = elem2.parentNode.id
  let nbr2 = id2.split("_")[1]
  let x2 = Math.floor((nbr2 - 1) / 4);
  // let y2 = ((nbr2 % 4) + 3) % 4;
  return x2 >= x1
}

function ft_push(dir) {
  let listBox = document.getElementsByClassName("sb")
  var arr = Array.prototype.slice.call(listBox)
  let decalx = 0
  let decaly = 0
  let max = -1
  let dir2 = "n"
  if (dir == "right") {
    arr.sort(sort_right)
    decaly = 1
    max = 3
    dir2 = "y"
  }
  else if (dir == "left") {
    arr.sort(sort_left)
    decaly = -1
    max = 0
    dir2 = "y"
  }
  else if (dir == "up") {
    arr.sort(sort_up)
    decalx = -1
    max = 0
    dir2 = "x"
  }
  else if (dir == "down") {
    arr.sort(sort_down)
    decalx = 1
    max = 3
    dir2 = "x"
  }
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let id = arr[i].parentNode.id
    let nbr = id.split("_")[1]
    let x = Math.floor((nbr - 1) / 4);
    let y = ((nbr % 4) + 3) % 4;
    let obj = arr[i]
    transfert(obj, x, y, x + decalx, y + decaly, max, dir2)
  }
  add_box();

}
function transfert(obj, ox: int, oy: int, dx: int, dy: int, max: int, dir) {
  // console.log(obj.className.split(" "))
  let cl = obj.className.split(" ")
  // console.log("cl")
  // console.log(cl)
  console.log("transfert")
  let nbr = ox * 4 + oy + 1
  let nbr2 = dx * 4 + dy + 1
  let dir2
  if (dir === "x") {
    dir2 = ox
  }
  else {
    dir2 = oy
  }
  let box = document.getElementById("case_" + nbr.toString());
  // console.log(box)
  if (dir2 != max && !check_exist(nbr2)) {
    let box2 = document.getElementById("case_" + nbr2.toString());
    // console.log(box2)
    let value = cl[0].substring(1, cl[0].length)
    // console.log("valeur " + value)
    let box = document.getElementById("case_" + nbr2);
    let sb = document.createElement("div")
    let p = document.createElement("p")
    let newContent = document.createTextNode(value.toString())
    p.appendChild(newContent)
    // console.log("length "obj.className.split(" ").length)
    len = cl.length
    for (let i = 0; i < len; i++) {
      sb.classList.add(cl[i])
    }
    sb.appendChild(p)
    box.appendChild(sb)
    obj.remove()
  }
  else {
    // console.log("au bout")
  }
  // console.log("end transfert")
}

$(document).on("keydown", function(e) {
  if (e.key == "ArrowRight")
    ft_push("right")
  if (e.key == "ArrowLeft")
    ft_push("left")
  if (e.key == "ArrowUp")
    ft_push("up")
  if (e.key == "ArrowDown")
    ft_push("down")
});

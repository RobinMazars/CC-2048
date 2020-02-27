function create_box()
{
  let frame = document.getElementById("frame");
  let j = 0;
  while(j < 16)
  {
    let box = document.createElement("div")
    box.classList.add("box")
    box.setAttribute("id", "case_"+(j+1).toString())
    frame.appendChild(box)
    j++
  }
  console.log("END");
}
function init_box()
{
  let i:number = 0;
  while (i < 2)
  {
    let id = Math.floor(Math.random() * 16);
    let box = document.getElementById("case_"+id.toString());
    let sb = document.createElement("div")
    sb.classList.add("s2")
    let newContent = document.createTextNode((2).toString())
    sb.appendChild(newContent)
    box.appendChild(sb)
    i++;
  }

}

create_box();
init_box()

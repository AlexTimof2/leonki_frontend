story = document.querySelector(".story2");

async function postData(url = 'http://127.0.0.1:8000/fanbook', data = {}) {
  const response = await fetch(url, {
    method: "GET", // GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors,cors, same-origin
  });
  const leonka = await response.json(); // parses JSON response into native JavaScript objects
  console.log(leonka)
    story.innerHTML = leonka[2].name;
    story.innerHTML = leonka[2].information;


}
postData()

async function all_products() {

  const response = await fetch("http://127.0.0.1:8000/fanbook", {
    method: "GET",
    mode: "cors",
  });
   res = await response.json();
  for (i of res){
    create_div = slct_main.appendChild(document.createElement('div'))
    image = create_div.appendChild(document.createElement('img')).src = i.img
    create_div2 = create_div.appendChild(document.createElement('dasdiv'))
    names = create_div2.appendChild(document.createElement('h2')).innerHTML = i.name
    desc = create_div2.appendChild(document.createElement('p')).innerHTML = i.description
  }
}
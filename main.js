const __API = "https://randomuser.me/api/";

const btn = document.querySelector("button");
const getData = async () => {
  const res = await fetch(__API);
  const data = await res.json();

  let obj = data.results[0];
  render(obj);
};

getData();

function render(obj) {
  console.log(obj);

  let img = document.querySelector(".imgg");
  img.src = `${obj.picture.large}`;

  let text = document.querySelector(".text");
  text.textContent = `${obj.name.title} ${obj.name.first} ${obj.name.last}`;

  let text2 = document.querySelector(".text2");
  text2.textContent = `Phone: ${obj.cell}`;

  let text3 = document.querySelector(".text3");
  text3.textContent = `Manzil: ${obj.location.state}`;

  let text4 = document.querySelector(".text4");
  text4.textContent = `Yosh: ${obj.dob.age}`;

  let text5 = document.querySelector(".text5");
  text5.textContent = `Email: ${obj.email}`;
}

btn.addEventListener("click", () => {
  getData();
});

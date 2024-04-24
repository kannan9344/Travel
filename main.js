const Data = [
  {
    name: "Thailand",
    video: "src/thailand.mp4",
    des: "The Phi Phi islands are an archipelago of 6 islands, with the 2 main islands being Phi Phi Don and Phi Phi Leh. Just a 45-minute speedboat trip or a 90-minute ferryboat ride from either Phuket or Krabi, these picture postcard islands are excellent tropical getaways in Southeast Asia.",
  },
  {
    name: "Maldives",
    video: "src/maldives.mp4",
    des: "They offer the ultimate desert island paradise with the most incredible crystal clear turquoise waters, soft white sandy beaches, shallow lagoons, endless sunshine and some of the best coral reefs left on the planet. All of this coupled with the most wonderful warm friendly people makes the Maldives heaven on earth.",
  },
  {
    name: "Bali",
    video: "src/bali.mp4",
    des: "Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast",
  },
  {
    name: "Palawan",
    video: "src/Palawan.mp4",
    des: "Palawan, officially the Province of Palawan, is an archipelagic province of the Philippines that is located in the region of Mimaropa. It is the largest province in the country in terms of total area of 14,649.73 km²",
  },
  {
    name: "Seychelles",
    video: "src/Seychelles.mp4",
    des: "The Seychelles is an archipelago of 115 islands in the Indian Ocean, off East Africa. It's home to numerous beaches, coral reefs and nature reserves, as well as rare animals such as giant Aldabra tortoises. Mahé, a hub for visiting the other islands, is home to capital Victoria.",
  },
];

const Backgroundvideo = document.querySelector("#videoId");
const Parent = document.querySelector(".content");
const Container = document.querySelector(".container");
const menu = document.querySelector(".fa-bars");
const ul = document.querySelector("header nav ul");
const Video = document.querySelector(".container .video");
const dots = document.querySelectorAll(".dot");
let count = 0;
menu.addEventListener("click", () => {
  ul.classList.toggle("active");
});
const putData = () => {
  let item = Data[count];
  Video.innerHTML = "";
  Video.innerHTML = `
  <video autoplay loop muted plays-inline class="myvideo">
  <source src="${item?.video}" type="video/mp4" id="videoId" />
</video>
  `;
  Parent.innerHTML = `
    <h1>${item?.name}</h1>
    <p>${item?.des}</p>
    <div class="btn">More</div>
  `;
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[count].classList.add("active");
};
putData();

function changeIndex(index) {
  count = index;
  putData();
}

setInterval(() => {
  if (count < Data.length - 1) {
    count++;
  } else {
    count = 0;
  }
  putData();
}, 5000);

const cardsContainerEl = document.getElementById("cards-container");

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    pic: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    pic: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    pic: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    pic: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    pic: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    pic: "barbara-ramos-graphic-designer.jpg",
  },
];

for (const member of team) {
  const cardHTML = `
<div class='col p-4'>
  <div class='card text-center'>
    <img class='card-img-top' src='../img/${member.pic}'>
    <div class='card-body>
      <h4 class='card-title'>${member.name}</h4>
      <p class='card-text'>
      ${member.role}</p>
    </div>
  </div>
</div>`;

  cardsContainerEl.innerHTML += cardHTML;
}

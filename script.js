// DATA
const navLinks = [
  { text: "Info", href: "#info" },
  { text: "Groups", href: "#groups" },
  { text: "Fans", href: "#fans" },
  { text: "Gallery", href: "#gallery" }
];

const kpopGroups = [
  { name: "BTS", image: "https://i.pinimg.com/736x/2b/1f/68/2b1f6898a087df1df06b9564ff097f53.jpg", link: "bts.html" },
  { name: "BLACKPINK", image: "https://i.pinimg.com/474x/fa/e5/80/fae5801d34e27dd9f5f259f760a5829a.jpg", link: "blackpink.html" },
  { name: "EXO", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3K0Oe8GUisw7_fEIitz4wxB-PQ0SeDXAJA&s", link: "exo.html" }
];

const galleryImages = [
  { src: "https://i.pinimg.com/736x/2b/1f/68/2b1f6898a087df1df06b9564ff097f53.jpg", alt: "BTS" },
  { src: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/117E5/production/_115635617_gettyimages-1207828603.jpg", alt: "BTS" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3K0Oe8GUisw7_fEIitz4wxB-PQ0SeDXAJA&s", alt: "EXO" },
  { src: "https://i.pinimg.com/474x/fa/e5/80/fae5801d34e27dd9f5f259f760a5829a.jpg", alt: "Blackpink" }
];

// CREATE HEADER
const body = document.body;

const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.textContent = "K-pop World";
header.appendChild(h1);

const nav = document.createElement('nav');
const ul = document.createElement('ul');
navLinks.forEach(link => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = link.href;
  a.textContent = link.text;
  li.appendChild(a);
  ul.appendChild(li);
});
nav.appendChild(ul);
header.appendChild(nav);
body.appendChild(header);

// CREATE MAIN
const main = document.createElement('main');

// INFO SECTION
const infoSection = document.createElement('section');
infoSection.id = "info";
const infoTitle = document.createElement('h2');
infoTitle.textContent = "K-pop: A Global Music Phenomenon";
const infoText = document.createElement('p');
infoText.textContent = "K-pop originated in South Korea and blends music, dance, fashion, and visuals.";
infoSection.appendChild(infoTitle);
infoSection.appendChild(infoText);
main.appendChild(infoSection);

// GROUPS SECTION
const groupsSection = document.createElement('section');
groupsSection.id = "groups";
const groupsTitle = document.createElement('h2');
groupsTitle.textContent = "Popular K-pop Groups";
groupsSection.appendChild(groupsTitle);

// CARDS CONTAINER
const cardsContainer = document.createElement('div');
cardsContainer.className = 'cards-container';

// ADD CARDS
kpopGroups.forEach(group => {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = group.image;
  img.alt = group.name;

  const title = document.createElement('h3');
  title.textContent = group.name;

  const link = document.createElement('a');
  link.href = group.link;
  link.textContent = "Learn More";

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(link);
  cardsContainer.appendChild(card);
});

groupsSection.appendChild(cardsContainer);
main.appendChild(groupsSection);

// FANS SECTION
const fansSection = document.createElement('section');
fansSection.id = "fans";
const fansTitle = document.createElement('h2');
fansTitle.textContent = "K-pop Fans";
const fansText = document.createElement('p');
fansText.textContent = "K-pop fans are known for their passion, loyalty, and global community.";
fansSection.appendChild(fansTitle);
fansSection.appendChild(fansText);
main.appendChild(fansSection);

// GALLERY SECTION
const gallerySection = document.createElement('section');
gallerySection.id = "gallery";

const searchContainer = document.createElement('div');
searchContainer.className = "search-container";
const searchInput = document.createElement('input');
searchInput.type = "text";
searchInput.id = "searchInput";
searchInput.placeholder = "Search for images...";
const searchButton = document.createElement('button');
searchButton.id = "searchButton";
searchButton.textContent = "Search";
searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchButton);
gallerySection.appendChild(searchContainer);

const galleryTitle = document.createElement('h2');
galleryTitle.textContent = "Gallery";
gallerySection.appendChild(galleryTitle);

const galleryDiv = document.createElement('div');
galleryDiv.className = "gallery";

galleryImages.forEach(imgData => {
  const img = document.createElement('img');
  img.src = imgData.src;
  img.alt = imgData.alt;
  galleryDiv.appendChild(img);
});

gallerySection.appendChild(galleryDiv);
main.appendChild(gallerySection);

// FAN FORM SECTION
const formSection = document.createElement('section');
const formTitle = document.createElement('h2');
formTitle.textContent = "Fan Registration Form";
formSection.appendChild(formTitle);

const form = document.createElement('form');

const nameLabel = document.createElement('label');
nameLabel.for = "name";
nameLabel.textContent = "Name:";
form.appendChild(nameLabel);
form.appendChild(document.createElement('br'));

const nameInput = document.createElement('input');
nameInput.type = "text";
nameInput.id = "name";
nameInput.name = "name";
nameInput.required = true;
form.appendChild(nameInput);
form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

const groupLabel = document.createElement('label');
groupLabel.for = "group";
groupLabel.textContent = "Favorite Group:";
form.appendChild(groupLabel);
form.appendChild(document.createElement('br'));

const groupInput = document.createElement('input');
groupInput.type = "text";
groupInput.id = "group";
groupInput.name = "group";
form.appendChild(groupInput);
form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

const submitBtn = document.createElement('button');
submitBtn.type = "submit";
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);

formSection.appendChild(form);
main.appendChild(formSection);

// APPEND MAIN TO BODY
body.appendChild(main);

// FOOTER
const footer = document.createElement('footer');
const footerText = document.createElement('p');
footerText.textContent = "© 2026 K-pop World";
footer.appendChild(footerText);
body.appendChild(footer);

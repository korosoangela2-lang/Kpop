document.addEventListener('DOMContentLoaded', function () {

  /* ===== VARIABLES AND OBJECTS ===== */
  let registeredFans = [];

  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const groupInput = document.getElementById('group');

  /* ===== CREATE MESSAGE ELEMENT (DOM) ===== */
  const message = document.createElement('p');
  message.style.marginTop = '10px';
  form.appendChild(message);

  /* ===== LOAD DATA FROM LOCAL STORAGE ===== */
  if (localStorage.getItem('fans')) {
    registeredFans = JSON.parse(localStorage.getItem('fans'));
  }

  /* ===== FUNCTION ===== */
  function saveFan(name, group) {
    const fan = {
      fanName: name,
      favoriteGroup: group
    };

    registeredFans.push(fan);
    localStorage.setItem('fans', JSON.stringify(registeredFans));
  }

  /* ===== FORM SUBMISSION ===== */
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const group = groupInput.value.trim();

    if (name === '') {
      message.textContent = 'Name is required.';
      message.style.color = 'red';
      return;
    }

    saveFan(name, group);

    if (group !== '') {
      message.textContent = 'Registration successful. Favorite group: ' + group + '.';
    } else {
      message.textContent = 'Registration successful.';
    }

    message.style.color = 'green';
    form.reset();
  });

  /* ===== LOOP THROUGH SAVED DATA ===== */
  console.log('Registered fans:');
  for (let i = 0; i < registeredFans.length; i++) {
    console.log(registeredFans[i].fanName + ' - ' + registeredFans[i].favoriteGroup);
  }

  /* ===== GALLERY INTERACTION ===== */
  const images = document.querySelectorAll('.gallery img');

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
      openImage(images[i].src);
    });
  }

  /* ===== FUNCTION WITH PARAMETER ===== */
  function openImage(src) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';

    const image = document.createElement('img');
    image.src = src;
    image.style.maxWidth = '80%';
    image.style.maxHeight = '80%';

    overlay.appendChild(image);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function () {
      document.body.removeChild(overlay);
    });
  }

});
console.log('Script loaded successfully.'); 
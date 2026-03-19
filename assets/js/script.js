const yearSpan = document.getElementById('year');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const products = [
  {
    name: 'Ramo Aurora',
    price: 'S/ 145.00',
    image: 'assets/img/producto-1.jpeg',
    description: 'Ramo elegante en tonos suaves con presentación premium.'
  },
  {
    name: 'Ramo Alessia',
    price: 'S/ 165.00',
    image: 'assets/img/producto-2.jpeg',
    description: 'Diseño romántico ideal para cumpleaños y aniversarios.'
  },
  {
    name: 'Ramo Bianca',
    price: 'S/ 135.00',
    image: 'assets/img/producto-3.jpeg',
    description: 'Bouquet delicado con estilo moderno y femenino.'
  },
  {
    name: 'Ramo Valentina',
    price: 'S/ 175.00',
    image: 'assets/img/producto-4.jpeg',
    description: 'Arreglo floral con presencia y acabado sofisticado.'
  },
  {
    name: 'Ramo Camelia',
    price: 'S/ 155.00',
    image: 'assets/img/producto-5.jpeg',
    description: 'Composición armoniosa para momentos especiales.'
  },
  {
    name: 'Ramo Isabella',
    price: 'S/ 185.00',
    image: 'assets/img/producto-6.jpeg',
    description: 'Ramo premium con envoltura cálida y elegante.'
  }
];

const whatsappNumber = '51915942702';
const productsGrid = document.getElementById('productsGrid');
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

function renderProducts() {
  if (!productsGrid) return;

  productsGrid.innerHTML = '';

  products.forEach((product) => {
    const message = encodeURIComponent(`Hola floreriaPiura, quiero consultar por ${product.name}`);

    const card = `
      <article class="bg-white rounded-[2rem] overflow-hidden shadow-soft group">
        <div class="overflow-hidden">
          <img
            src="${product.image}"
            alt="${product.name}"
            class="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-2">${product.name}</h3>
          <p class="text-moka font-semibold mb-3">${product.price}</p>
          <p class="text-cacao/75 text-sm mb-6">${product.description}</p>
          <a
            href="https://wa.me/${whatsappNumber}?text=${message}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex w-full justify-center bg-cacao text-white px-5 py-3 rounded-full font-semibold hover:bg-moka transition"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </article>
    `;

    productsGrid.innerHTML += card;
  });
}

function initMobileMenu() {
  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('show');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('show');
    });
  });
}

renderProducts();
initMobileMenu();
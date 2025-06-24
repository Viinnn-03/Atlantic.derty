// Data untuk grid item
const gridItems = [
  { title: 'Item 1', content: 'Konten untuk item pertama' },
  { title: 'Item 2', content: 'Konten untuk item kedua' },
  { title: 'Item 3', content: 'Konten untuk item ketiga' },
  { title: 'Item 4', content: 'Konten untuk item keempat' },
  { title: 'Item 5', content: 'Konten untuk item kelima' },
  { title: 'Item 6', content: 'Konten untuk item keenam' }
];

// State layout
let currentLayout = 'md'; // default pertama

// Fungsi untuk render grid
function renderGrid(layout) {
  const gridContainer = document.getElementById('grid-container');
  gridContainer.innerHTML = '';

  // Ubah class kolom berdasarkan layout
  const colClass = layout === 'md' ? 'col-md-4' : 'col-lg-6';

  gridItems.forEach((item, index) => {
    const col = document.createElement('div');
    col.className = `col-12 ${colClass} mb-4`; // tambahkan margin bawah agar rapi
    col.innerHTML = `
      <div class="grid-item">
        <h3>${item.title}</h3>
        <p>${item.content}</p>
        <small>Index: ${index + 1}</small>
      </div>
    `;
    gridContainer.appendChild(col);
  });
}

// Fungsi toggle layout saat tombol diklik
document.getElementById('change-layout').addEventListener('click', () => {
  currentLayout = currentLayout === 'md' ? 'lg' : 'md';
  renderGrid(currentLayout);
});

// Render pertama kali
document.addEventListener('DOMContentLoaded', () => {
  renderGrid(currentLayout);
});

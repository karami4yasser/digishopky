// Array of book data
const books = [
  {
    title: "Wild Wonders: A Challenging Animal Coloring Adventure for Kids and Adults",
    image: "https://m.media-amazon.com/images/I/618ZxpAxqpL._SL1028_.jpg",
    link: "https://www.amazon.com/dp/B0DN6K22B7"
  },
  {
    title: "Wild Nature : Animals Coloring Book for All Ages",
    image: "https://m.media-amazon.com/images/I/61pOjhY+nPL._SL1028_.jpg",
    link: "https://www.amazon.com/dp/B0DN6LW15H"
  },
  {
    title: "Bird Lover's Coloring Adventure for All Ages",
    image: "https://m.media-amazon.com/images/I/51yw6bBhqZL._SL1028_.jpg",
    link: "https://www.amazon.com/dp/B0DN6L5GVS"
  }
];

// Function to display books
function displayBooks() {
  const grid = document.getElementById('bookGrid');

  books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';

    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h2>${book.title}</h2>
      <button onclick="openLink('${book.link}')">Buy Now</button>
    `;

    grid.appendChild(card);
  });
}

// Function to open links in a new tab
function openLink(url) {
  window.open(url, '_blank');
}

// Run displayBooks on page load
document.addEventListener('DOMContentLoaded', displayBooks);

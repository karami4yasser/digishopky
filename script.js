// Array of book data
const books = [
  {
    title: "Wild Wonders: A Challenging Animal Coloring Adventure for Kids and Adults",
    image: "https://m.media-amazon.com/images/I/618ZxpAxqpL._SL1028_.jpg",
    link: "https://www.amazon.com/dp/B0DN6K22B7",
    category: "ColoringBooks"
  },
  {
    title: "Wild Nature : Animals Coloring Book for All Ages",
    image: "https://m.media-amazon.com/images/I/61pOjhY+nPL._SL1028_.jpg",
    link: "https://www.amazon.com/dp/B0DN6LW15H",
    category: "ColoringBooks"
  },
  {
    title: "Bird Lover's Coloring Adventure for All Ages",
    image: "https://m.media-amazon.com/images/I/51yw6bBhqZL._SL1028_.jpg",
    link: "https://www.amazon.com/dp/B0DN6L5GVS",
    category: "ColoringBooks"
  }

  ,
  {
    title: "Smart Kid, Wise Kid: Learning About Money with Max",
    image: "https://m.media-amazon.com/images/I/41BDmKFORoL._SL1293_.jpg",
    link: "https://www.amazon.com/dp/B0DMLLRZXZ",
    category: "eduKids"
  }
  ,
  {
    title: "Max's Money Adventure : Learning About Stocks and Investing",
    image: "https://m.media-amazon.com/images/I/41K6qIQowUL._SL1293_.jpg",
    link: "https://www.amazon.com/dp/B0DMMY9FRV",
    category: "eduKids"
  }
  ,
  {
    title: "Max’s Guide to Life Principles: Smart Choices for Success",
    image: "https://m.media-amazon.com/images/I/41GI5BpzMOL._SL1293_.jpg",
    link: "https://www.amazon.com/dp/B0DMPJT6VG",
    category: "eduKids"
  }
  ,
  {
    title: "The Smart Saver: A Kid’s Guide to Wise Money Choices",
    image: "https://m.media-amazon.com/images/I/410Owfl04mL._SL1293_.jpg",
    link: "https://www.amazon.com/dp/B0DMKSWDCR",
    category: "eduKids"
  }
  ,
  {
    title: "The Smart Saver: How Max Builds His Wealth",
    image: "https://m.media-amazon.com/images/I/4187LbBXeBL._SL1293_.jpg",
    link: "https://www.amazon.com/dp/B0DMNSKQLZ",
    category: "eduKids"
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


// Function to filter books based on selected category
function filterBooks() {
  updateHeaderContent()
  const category = document.getElementById('category').value;
  const filteredBooks = category === 'all' ? books : books.filter(book => book.category === category);

  // Clear the grid before rendering new books
  const grid = document.getElementById('bookGrid');
  grid.innerHTML = '';

  // Display the filtered books
  filteredBooks.forEach(book => {
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

// Function to update header content based on selected category
function updateHeaderContent() {
  const category = document.getElementById("category").value;
  const headerTitle = document.getElementById("header-title");
  const headerDescription = document.getElementById("header-description");
  const ctaLink = document.getElementById("cta-link");

  // Define content for each category
  const categoryContent = {
    all: {
      title: "Unleash Your Creativity with Our Coloring Books",
      description: "Relax, unwind, and explore your artistic side with our exclusive collection of Amazon KDP coloring books. Perfect for all ages!",
      linkText: "Start Coloring Now",
      linkUrl: "#books"
    },
    ColoringBooks: {
      title: "Color Your Imagination with Our Coloring Books",
      description: "Explore our diverse collection of coloring books for every age group. Perfect for de-stressing and unlocking creativity.",
      linkText: "Start Coloring Now",
      linkUrl: "#books"
    },
    eduKids: {
      title: "Fun and Educational Books for Kids",
      description: "Our educational books are designed to inspire and teach kids in an engaging way. From math to stories, there’s a book for every curious mind!",
      linkText: "Explore Educational Books",
      linkUrl: "#eduBooks"
    }
    // Add more categories as needed
  };

  // Update content based on selected category
  const content = categoryContent[category] || categoryContent['all'];
  headerTitle.textContent = content.title;
  headerDescription.textContent = content.description;
  ctaLink.textContent = content.linkText;
  ctaLink.setAttribute("href", content.linkUrl);
}



// Run displayBooks on page load
document.addEventListener('DOMContentLoaded', () => {
  displayBooks();
  // Initial filter call to show all books by default
  filterBooks();
});


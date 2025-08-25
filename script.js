const postsData = [
  { title: "🔥 10 JavaScript Tricks You Must Know", category: "Tech", description: "Boost your coding game with these secret JS hacks.", date: "2025-08-01", image: "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "🌄 Lost in Hunza: A Travel Story", category: "Travel", description: "Exploring the breathtaking beauty of the Hunza Valley.", date: "2025-07-20", image: "https://images.unsplash.com/photo-1633596518282-2c49184577fa?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "🍕 Street Food Adventures", category: "Food", description: "From spicy samosas to cheesy pizzas – a foodie’s paradise.", date: "2025-07-15", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80" },
  { title: "⚡ React vs Vanilla JS: The Ultimate Showdown", category: "Tech", description: "Which one should you choose for your next project?", date: "2025-06-30", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80" },
  { title: "🏔️ Hiking in the Clouds", category: "Travel", description: "Discover the most scenic hiking trails of 2025.", date: "2025-06-25", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" },
  { title: "🥘 The Secret to Perfect Biryani", category: "Food", description: "A mouth-watering recipe that never fails to impress.", date: "2025-06-15", image: "https://images.unsplash.com/photo-1697276063790-a68a966b12f7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "🎨 Mastering CSS Grid in 2025", category: "Tech", description: "Learn how to build powerful layouts with ease.", date: "2025-05-30", image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

let currentCategory = "All";
let currentPage = 1;
const postsPerPage = 4;

const grid = document.getElementById("postsGrid");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");

function renderPosts() {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = postsData.filter(post => {
    const matchesCategory = currentCategory === "All" || post.category === currentCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginated = filtered.slice(start, end);

  // Render cards
  grid.innerHTML = paginated.map(post => `
    <div class="card">
      <img src="${post.image}" alt="${post.title}">
      <div class="card-content">
        <h3>${post.title}</h3>
        <small>${post.date} | ${post.category}</small>
        <p>${post.description}</p>
      </div>
    </div>
  `).join("");

  // Pagination buttons
  const totalPages = Math.ceil(filtered.length / postsPerPage);
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `<button class="${i === currentPage ? "active" : ""}" onclick="goToPage(${i})">${i}</button>`;
  }
}

function filterCategory(cat) {
  currentCategory = cat;
  currentPage = 1;
  renderPosts();
}

function goToPage(page) {
  currentPage = page;
  renderPosts();
}

searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderPosts();
});

// Initial render
renderPosts();

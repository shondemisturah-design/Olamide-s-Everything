// ✅ Search Function - Works on All Pages
const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('input', function () {
        const products = document.querySelectorAll('.grid-item');
        const searchText = searchInput.value.toLowerCase();

        products.forEach(item => {
            const name = item.querySelector('h2').textContent.toLowerCase();
            item.style.display = name.includes(searchText) ? "block" : "none";
        });
    });
}

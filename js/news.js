document.addEventListener("DOMContentLoaded", function() {
    const gameButtons = document.querySelectorAll(".game-btn");
    const newsContent = document.getElementById("news-content");
    const homeButton = document.querySelector(".home-btn");

    // Dữ liệu tin tức cho từng game
    const gameNews = {
        "minecraft": `
            <div class="card">
            <span class="tag event">UPDATE</span>
            <span class="date">13/7/2024</span>
            <h3>Minecraft 1.21 Update Released!</h3>
            <p>New features include: Tricky Trials, new mobs, and more!</p>
            <button class="read-more">READ MORE</button>
        </div>
        <div class="card">
            <span class="tag update">UPDATE</span>
            <span class="date">14/12/2023</span>
            <h3>Minecraft 1.20.51 Patch Notes</h3>
            <p>Bug fixes and performance improvements.</p>
            <button class="read-more">READ MORE</button>
        </div>
        <div class="card">
            <span class="tag update">UPDATE</span>
            <span class="date">10/1/2025</span>
            <h3>Minecraft 1.19.4 Legacy Support</h3>
            <p>Final stability updates for the 1.19 version.</p>
            <button class="read-more">READ MORE</button>
        </div>`,

        "wuthering": `
            <div class="card">
                <span class="tag event">EVENT</span>
                <span class="date">2025.03.18</span>
                <h3>Wuthering Waves Beta Test Announced!</h3>
                <button class="read-more">READ MORE +</button>
            </div>
            <div class="card">
                <span class="tag update">UPDATE</span>
                <span class="date">14/12/2023</span>
                <h3>Minecraft 1.20.51 Patch Notes</h3>
                <p>Bug fixes and performance improvements.</p>
                <button class="read-more">READ MORE</button>
            </div>`,
        "genshin": `
            <div class="card">
                <span class="tag event">EVENT</span>
                <span class="date">2025.04.01</span>
                <h3>Genshin Impact 4.5 Special Program!</h3>
                <button class="read-more">READ MORE +</button>
            </div>`
            ,
        "arknights": `
            <div class="card">
                <span class="tag event">EVENT</span>
                <span class="date">2025.03.07</span>
                <h3>[ARKNIGHTS X DELICIOUS IN DUNGEON]</h3>
                <button class="read-more">READ MORE +</button>
            </div>`,
        "pubg": `
            <div class="card">
                <span class="tag event">EVENT</span>
                <span class="date">2025.02.20</span>
                <h3>PUBG Mobile - New Mode Release!</h3>
                <button class="read-more">READ MORE +</button>
            </div>`,
        "Other": `
            <div class="card">
                <span class="tag event">EVENT</span>
                <span class="date">2025.02.25</span>
                <h3>Free Fire - Grand Tournament Announced!</h3>
                <button class="read-more">READ MORE +</button>
            </div>`
    };

     // Hàm cập nhật tin tức theo game
     function updateNews(game) {
        newsContent.innerHTML = gameNews[game] || "<p>No news available.</p>";

        // Cập nhật trạng thái active của nút
        gameButtons.forEach(button => {
            button.classList.toggle("active", button.dataset.game === game);
        });
    }

    // Gán sự kiện click cho các nút game
    gameButtons.forEach(button => {
        button.addEventListener("click", function() {
            const selectedGame = this.dataset.game;
            updateNews(selectedGame);
        });
    });

    // Sự kiện khi bấm vào nút Trang chủ
    homeButton.addEventListener("click", function() {
        window.location.href = "index.html"; // Đổi thành đường dẫn thực tế của trang chủ
    });

    // Hiển thị tin tức mặc định
    updateNews("minecraft");
});
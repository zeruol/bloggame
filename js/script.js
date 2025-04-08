document.addEventListener('DOMContentLoaded', () => {
    // Xử lý menu dropdown
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Ngăn sự kiện lan ra ngoài

            const listItem = toggle.parentElement;
            const isActive = listItem.classList.contains('active');

            // Đóng tất cả dropdown trước khi mở dropdown mới
            document.querySelectorAll('.menu li.active').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
            });

            // Nếu chưa mở dropdown này thì mở nó
            if (!isActive) {
                listItem.classList.add('active');
                toggle.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Ẩn menu dropdown khi click ra ngoài
    document.addEventListener('click', event => {
        if (!event.target.closest('.dropdown')) {
            document.querySelectorAll('.menu li.active').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Xử lý hiển thị game
    const gameData = {
        'sinh-ton': {
            video: 'https://www.youtube.com/watch?v=MmB9b5njVbA',
            link: 'https://www.minecraft.net/en-us',
            description: 'Mô tả về Minecraft...',
            backgroundImage: 'images/minecraft-background-cfljc4haleghnajo.jpg'
        },
        'hanh-dong': {
            video: 'https://www.youtube.com/watch?v=vovkzbtYBC8',
            link: 'https://www.ubisoft.com/en-sg/',
            description: 'Mô tả về Wuthering Waves...',
            backgroundImage: '/images/8672297_Cover-ACS.webp'
        },
        'nhap-vai': {
            video: 'https://youtu.be/1bzWvyncQh8',
            link: 'https://eu.finalfantasyxiv.com/',
            description: 'Mô tả về Genshin Impact...',
            backgroundImage: '/images/Vvvbbsi3774hfiaoolfb_1920x1040.jpg'
        },
        'FPS-TPS': {
            video: 'https://www.youtube.com/watch?v=OHzUoFKPUB0',
            link: 'https://valorant.vnggames.com/vi-vn/',
            description: 'Mô tả về Arknights...',
            backgroundImage: '/images/valorant-game-ban-sung-chien-thuat-dau-tien-cua-riot-23-09-2020-3.jpg'
        },
        'chien-luoc': {
            video: 'https://www.youtube.com/watch?v=--xJQ5oNcCA',
            link: 'https://arknights.global/',
            description: 'Mô tả về Arknights...',
            backgroundImage: '/images/arknights-4k-waggbbwkw7f8w8dg.jpg'
        },
        'sports': {
            video: 'https://www.youtube.com/watch?v=5xy4n73WOMM',
            link: 'https://forza.net/horizon',
            description: 'Mô tả về Arknights...',
            backgroundImage: '/images/e3-2016-forza-horizon-3-le-hoi-than-gio-gioi-thieu-game-01.jpg'
        },
        'battle-royal': {
            video: 'https://youtu.be/h0s5X6pyhd0',
            link: 'https://www.pubg.com/vi/main',
            description: 'Mô tả về Arknights...',
            backgroundImage: '/images/pubg-mobile-game-image-4.jpg'
        }
    }; 

    // Lấy ID video từ URL YouTube
    function youtube_parser(url) {
        const regExp = /(?:youtube\.com\/.*[?&]v=|youtu\.be\/)([^#&?]{11})/;
        const match = url.match(regExp);
        return match ? match[1] : null;
    }

    const gameDetailsSection = document.getElementById('game-details');
    const gameVideoDiv = document.getElementById('game-video');
    const gameLinkDiv = document.getElementById('game-link');
    const gameDescriptionDiv = document.getElementById('game-description');

    function showGameDetails(game) {
        const data = gameData[game];
        if (!data) return;

        const videoId = youtube_parser(data.video);
        gameVideoDiv.innerHTML = videoId
    ? `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen onended="playNextGame()"></iframe>`
    : '<p>Không tìm thấy video.</p>';

    
        gameLinkDiv.innerHTML = `<a href="${data.link}" target="_blank">${game}</a>`;
        gameDescriptionDiv.textContent = data.description;
        gameDetailsSection.style.display = 'flex';

        document.body.style.background = `url('${data.backgroundImage}') no-repeat center center fixed`;
        document.body.style.backgroundSize = 'cover';
    }

    document.querySelectorAll('#game-thumbnails img').forEach(img => {
        img.addEventListener('click', () => showGameDetails(img.dataset.game));
    });

    showGameDetails('sinh-ton'); // Mặc định hiển thị Minecraft
    });
    document.querySelectorAll(".game-card").forEach(card => {
        card.addEventListener("click", () => {
            // Xóa trạng thái active khỏi tất cả các game-card khác
            document.querySelectorAll(".game-card").forEach(item => {
                item.classList.remove("active");
            });

            // Thêm class active vào game được click
            card.classList.add("active");
        });
});


document.querySelectorAll(".game-card").forEach(card => {
    card.addEventListener("click", () => {
        let img = card.querySelector("img");

        // Nếu ảnh đang phóng to, thì thu nhỏ lại
        if (img.classList.contains("active")) {
            img.classList.remove("active");
        } else {
            // Thu nhỏ tất cả ảnh trước khi phóng to cái mới
            document.querySelectorAll(".game-card img").forEach(item => {
                item.classList.remove("active");
            });
            img.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const username = localStorage.getItem("loggedInUser");

    if (username) {
        loginBtn.textContent = username;
        loginBtn.href = "#";

        // 👉 Click vào tên sẽ đăng xuất
        loginBtn.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "../index.html";
        });
    }
});
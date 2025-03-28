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
        'minecraft': {
            video: 'https://www.youtube.com/watch?v=MmB9b5njVbA',
            link: 'https://www.minecraft.net/en-us',
            description: 'Mô tả về Minecraft...',
            backgroundImage: 'images/minecraft-background-cfljc4haleghnajo.jpg'
        },
        'wuthering-waves': {
            video: 'https://www.youtube.com/watch?v=jT_dCQhT-ZI',
            link: 'https://wutheringwaves.kurogame.com/',
            description: 'Mô tả về Wuthering Waves...',
            backgroundImage: 'images/WutheringWaves_Game_Rover_Wallpaper-1.jpg'
        },
        'genshin-impact': {
            video: 'https://www.youtube.com/watch?v=VW7lkG8b74Q',
            link: 'https://genshin.hoyoverse.com/',
            description: 'Mô tả về Genshin Impact...',
            backgroundImage: 'images/thumb-1920-1099191.jpg'
        },
        'arknights': {
            video: 'https://www.youtube.com/watch?v=--xJQ5oNcCA',
            link: 'https://arknights.global/',
            description: 'Mô tả về Arknights...',
            backgroundImage: 'images/1034459.jpg'
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
            ? `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`
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

    showGameDetails('minecraft'); // Mặc định hiển thị Minecraft
});

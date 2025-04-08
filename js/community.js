// Danh sách bài viết mẫu theo từng game (có hình ảnh)
const gamePosts = {
    "LoL": [
        { title: "Cách leo rank nhanh trong LMHT", content: "Một số mẹo giúp bạn cải thiện kỹ năng leo rank.", link: "https://lienminh.garena.vn/", image: "images/lol.jpg" },
        { title: "Những tướng mạnh trong meta hiện tại", content: "Xem danh sách tướng mạnh nhất mùa này.", image: "images/meta.jpg" }
    ],
    "Dota2": [
        { title: "Tìm hiểu cách farm hiệu quả", content: "Cải thiện khả năng last hit và kiểm soát tài nguyên.", link: "https://www.dota2.com/", image: "images/dota2.jpg" },
        { title: "Chiến thuật combat 5v5", content: "Làm thế nào để thắng trong giao tranh tổng?", image: "images/combat.jpg" }
    ],
    "PUBG": [
        { title: "Hướng dẫn nhảy dù hợp lý", content: "Cách chọn vị trí nhảy dù để có lợi thế lớn nhất.", link: "https://www.pubg.com/", image: "images/pubg.jpg" },
        { title: "Những mẹo sinh tồn trong PUBG", content: "Học cách chơi an toàn nhưng hiệu quả.", image: "images/survival.jpg" }
    ],
    "FIFA": [
        { title: "Hướng dẫn xây dựng đội hình tối ưu", content: "Tìm hiểu về chiến thuật và cách bố trí cầu thủ.", link: "https://www.ea.com/fifa", image: "images/fifa.jpg" },
        { title: "Cách sút penalty chuẩn xác", content: "Tăng tỉ lệ sút penalty thành công!", image: "images/penalty.jpg" }
    ]
};

// Hàm hiển thị bài viết khi chọn game
function loadPosts() {
    const selectedGame = document.getElementById("gameCommunity").value;
    const postsContainer = document.getElementById("postsContainer");
    const postList = document.getElementById("postList");

    if (!selectedGame) {
        alert("Vui lòng chọn một cộng đồng game!");
        return;
    }

    // Xóa bài viết cũ
    postList.innerHTML = "";

    // Thêm bài viết mới từ danh sách
    gamePosts[selectedGame].forEach(post => createPost(post.title, post.content, post.image, post.link));

    // Hiển thị khu vực bài viết
    postsContainer.classList.remove("hidden");
}

// Hàm tạo bài viết mới
function createPost(title, content, image = null, link = null) {
    const postContainer = document.getElementById('postList');
    
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    let postHTML = `
        <div class="post-content">
            ${image ? `<img src="${image}" alt="${title}" class="post-image">` : ""}
            <div class="post-text">
                <h3>${title}</h3>
                <p>${content}</p>
                ${link ? `<p><a href="${link}" target="_blank">Xem chi tiết</a></p>` : ""}
                <div class='comments'></div>
                <input type='text' placeholder='Bình luận...' class='commentInput'>
                <button onclick='addComment(this)'>Gửi</button>
            </div>
        </div>
    `;

    postDiv.innerHTML = postHTML;
    postContainer.appendChild(postDiv);
}


    document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const imageInput = document.getElementById('postImage');
    let imageUrl = '';

    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        imageUrl = URL.createObjectURL(file);
    }

    if (title && content) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        postDiv.innerHTML = `
            <div class="post-content">
                <img src="${imageUrl}" class="post-image" onerror="this.style.display='none'">
                <div class="post-text">
                    <h3>${title}</h3>
                    <p>${content}</p>
                    <div class='comments'></div>
                    <input type='text' placeholder='Bình luận...' class='commentInput'>
                    <button onclick='addComment(this)'>Gửi</button>
                </div>
            </div>
        `;

        document.getElementById('posts').prepend(postDiv);
        document.getElementById('postForm').reset();
    }
});

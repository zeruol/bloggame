document.addEventListener("DOMContentLoaded", function() {
    const esportContent = document.getElementById("esport-content");
    const homeButton = document.querySelector(".home-btn");
    const backgroundOverlay = document.getElementById("background-overlay");
    const customDropdown = document.querySelector(".custom-dropdown");
    const dropdownHeader = document.querySelector(".dropdown-header");
    const dropdownList = document.querySelector(".dropdown-list");
    const dropdownOptions = document.querySelectorAll(".dropdown-option");
    const selectedOption = document.querySelector(".selected-option");

    // Hàm phân tích URL YouTube
    const youtubeParser = (url) => {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    };

    // Dữ liệu thông tin và background cho từng bộ môn Esport
    const esportInfo = {
        "lmht": {
            content: `
                <div class="card">
                    <iframe src="https://www.youtube.com/embed/${youtubeParser('https://www.youtube.com/watch?v=5qajKbvDZLA')}" frameborder="0" allowfullscreen></iframe>
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 26, 2025</span>
                    <h3>ONLIVE VCS: GIAI ĐOẠN VÒNG PLAY-OFF BẮT ĐẦU</h3>
                    <p>Tin tức mới nhất về giải ONLIVE VCS 2025 !</p>
                    <button class="read-more" onclick="window.open('https://lolesports.com/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/online-vcs-2025.jpg" alt="ONLIVE VCS 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">January 15, 2025</span>
                    <h3>ONLIVE CHÍNH THỨC LÀ NHÀ TÀI TRỢ CHO VCS 2025</h3>
                    <p>Vietnam Championship Series (VCS) là giải đấu Liên Minh Huyền Thoại (LMHT) hàng đầu, nơi quy tụ những đội tuyển xuất sắc nhất của nền Thể thao điện tử Việt Nam ...</p>
                    <button class="read-more" onclick="window.open('https://techbiz.vn/threads/giai-vo-dich-quoc-gia-lmht-vcs-mua-xuan-2025-chinh-thuc-khoi-tranh.2707/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/online-vcs-2025.jpg" alt="ONLIVE VCS 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">January 15, 2025</span>
                    <h3>ONLIVE CHÍNH THỨC LÀ NHÀ TÀI TRỢ CHO VCS 2025</h3>
                    <p>Vietnam Championship Series (VCS) là giải đấu Liên Minh Huyền Thoại (LMHT) hàng đầu, nơi quy tụ những đội tuyển xuất sắc nhất của nền Thể thao điện tử Việt Nam ...</p>
                    <button class="read-more" onclick="window.open('https://techbiz.vn/threads/giai-vo-dich-quoc-gia-lmht-vcs-mua-xuan-2025-chinh-thuc-khoi-tranh.2707/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/online-vcs-2025.jpg" alt="ONLIVE VCS 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">January 15, 2025</span>
                    <h3>ONLIVE CHÍNH THỨC LÀ NHÀ TÀI TRỢ CHO VCS 2025</h3>
                    <p>Vietnam Championship Series (VCS) là giải đấu Liên Minh Huyền Thoại (LMHT) hàng đầu, nơi quy tụ những đội tuyển xuất sắc nhất của nền Thể thao điện tử Việt Nam ...</p>
                    <button class="read-more" onclick="window.open('https://techbiz.vn/threads/giai-vo-dich-quoc-gia-lmht-vcs-mua-xuan-2025-chinh-thuc-khoi-tranh.2707/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/online-vcs-2025.jpg" alt="ONLIVE VCS 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">January 15, 2025</span>
                    <h3>ONLIVE CHÍNH THỨC LÀ NHÀ TÀI TRỢ CHO VCS 2025</h3>
                    <p>Vietnam Championship Series (VCS) là giải đấu Liên Minh Huyền Thoại (LMHT) hàng đầu, nơi quy tụ những đội tuyển xuất sắc nhất của nền Thể thao điện tử Việt Nam ...</p>
                    <button class="read-more" onclick="window.open('https://techbiz.vn/threads/giai-vo-dich-quoc-gia-lmht-vcs-mua-xuan-2025-chinh-thuc-khoi-tranh.2707/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/online-vcs-2025.jpg" alt="ONLIVE VCS 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">January 15, 2025</span>
                    <h3>ONLIVE CHÍNH THỨC LÀ NHÀ TÀI TRỢ CHO VCS 2025</h3>
                    <p>Vietnam Championship Series (VCS) là giải đấu Liên Minh Huyền Thoại (LMHT) hàng đầu, nơi quy tụ những đội tuyển xuất sắc nhất của nền Thể thao điện tử Việt Nam ...</p>
                    <button class="read-more" onclick="window.open('https://techbiz.vn/threads/giai-vo-dich-quoc-gia-lmht-vcs-mua-xuan-2025-chinh-thuc-khoi-tranh.2707/', '_blank')">READ MORE</button>
                </div>`,
            background: "url('/ESPORT/lmht.jpg')"
        },
        "aov": {
            content: `
                <div class="card">
                    <iframe src="https://www.youtube.com/embed/${youtubeParser('https://www.youtube.com/watch?v=ZHHd43EBAOo')}" frameborder="0" allowfullscreen></iframe>
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 20, 2025</span>
                    <h3>ABBEN ENERGY ĐẤU TRƯỜNG DANH VỌNG MÙA XUÂN 2025</h3>
                    <p>ABBEN ENERGY ĐẤU TRƯỜNG DANH VỌNG MÙA XUÂN 2025 chính thức khởi động.</p>
                    <button class="read-more" onclick="window.open('https://lienquan.garena.vn/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/KV_AOG_8K_FINAL_HERO_LAYERED-1-2048x1152.jpg" alt="ABBEN ENERGY">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 20, 2025</span>
                    <h3>ABBEN ENERGY ĐẤU TRƯỜNG DANH VỌNG MÙA XUÂN 2025</h3>
                    <p>Liên Quân Mobile đón chào hợp tác “khủng”, chính thức khởi tranh ABBEN Energy ĐTDV mùa Xuân 2025 từ ngày 22/02.</p>
                    <button class="read-more" onclick="window.open('https://lienquan.garena.vn/lien-quan-mobile-don-chao-hop-tac-khung-chinh-thuc-khoi-tranh-abben-energy-dtdv-mua-xuan-2025-tu-ngay-22-02/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/KV_AOG_8K_FINAL_HERO_LAYERED-1-2048x1152.jpg" alt="ABBEN ENERGY">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 20, 2025</span>
                    <h3>ABBEN ENERGY ĐẤU TRƯỜNG DANH VỌNG MÙA XUÂN 2025</h3>
                    <p>Liên Quân Mobile đón chào hợp tác “khủng”, chính thức khởi tranh ABBEN Energy ĐTDV mùa Xuân 2025 từ ngày 22/02.</p>
                    <button class="read-more" onclick="window.open('https://lienquan.garena.vn/lien-quan-mobile-don-chao-hop-tac-khung-chinh-thuc-khoi-tranh-abben-energy-dtdv-mua-xuan-2025-tu-ngay-22-02/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/KV_AOG_8K_FINAL_HERO_LAYERED-1-2048x1152.jpg" alt="ABBEN ENERGY">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 20, 2025</span>
                    <h3>ABBEN ENERGY ĐẤU TRƯỜNG DANH VỌNG MÙA XUÂN 2025</h3>
                    <p>Liên Quân Mobile đón chào hợp tác “khủng”, chính thức khởi tranh ABBEN Energy ĐTDV mùa Xuân 2025 từ ngày 22/02.</p>
                    <button class="read-more" onclick="window.open('https://lienquan.garena.vn/lien-quan-mobile-don-chao-hop-tac-khung-chinh-thuc-khoi-tranh-abben-energy-dtdv-mua-xuan-2025-tu-ngay-22-02/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/KV_AOG_8K_FINAL_HERO_LAYERED-1-2048x1152.jpg" alt="ABBEN ENERGY">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 20, 2025</span>
                    <h3>ABBEN ENERGY ĐẤU TRƯỜNG DANH VỌNG MÙA XUÂN 2025</h3>
                    <p>Liên Quân Mobile đón chào hợp tác “khủng”, chính thức khởi tranh ABBEN Energy ĐTDV mùa Xuân 2025 từ ngày 22/02.</p>
                    <button class="read-more" onclick="window.open('https://lienquan.garena.vn/lien-quan-mobile-don-chao-hop-tac-khung-chinh-thuc-khoi-tranh-abben-energy-dtdv-mua-xuan-2025-tu-ngay-22-02/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/KV_AOG_8K_FINAL_HERO_LAYERED-1-2048x1152.jpg" alt="ABBEN ENERGY">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 20, 2025</span>
                    <h3>ABBEN ENERGY ĐẤU TRƯỜNG DANH VỌNG MÙA XUÂN 2025</h3>
                    <p>Liên Quân Mobile đón chào hợp tác “khủng”, chính thức khởi tranh ABBEN Energy ĐTDV mùa Xuân 2025 từ ngày 22/02.</p>
                    <button class="read-more" onclick="window.open('https://lienquan.garena.vn/lien-quan-mobile-don-chao-hop-tac-khung-chinh-thuc-khoi-tranh-abben-energy-dtdv-mua-xuan-2025-tu-ngay-22-02/', '_blank')">READ MORE</button>
                </div>`,
            background: "url('/ESPORT/KV_AOG_8K_FINAL_HERO_LAYERED-1-2048x1152.jpg')"
        },
        "pubg": {
            content: `
                <div class="card">
                    <iframe src="https://www.youtube.com/embed/${youtubeParser('https://www.youtube.com/watch?v=CvMuGhRzJk0')}" frameborder="0" allowfullscreen></iframe>
                    <span class="tag event">ESPORT</span>
                    <span class="date">February 28, 2025</span>
                    <h3>PUBG - PGC 2024 Details</h3>
                    <p>Việt Nam vô địch PUBG Global Championship 2024.</p>
                    <button class="read-more" onclick="window.open('https://cellphones.com.vn/sforum/viet-nam-vo-dich-pubg-global-championship-2024', '_blank')">READ MORE</button>
                    <button class="read-more" onclick="window.open('https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/', '_blank')">STEAM</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/xGJxorQC.png" alt="PUBG Update">
                    <span class="tag update">UPDATE</span>
                    <span class="date">January 10, 2025</span>
                    <h3>PUBG - PGC 2025</h3>
                    <p>Đường đến PGC 2025: Cách tính điểm & Suất tham dự các giải đấu</p>
                    <button class="read-more" onclick="window.open('https://pubgesports.com/vi/news/8264', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/xGJxorQC.png" alt="PUBG Update">
                    <span class="tag update">UPDATE</span>
                    <span class="date">January 10, 2025</span>
                    <h3>PUBG - PGC 2025</h3>
                    <p>Đường đến PGC 2025: Cách tính điểm & Suất tham dự các giải đấu</p>
                    <button class="read-more" onclick="window.open('https://pubgesports.com/vi/news/8264', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/xGJxorQC.png" alt="PUBG Update">
                    <span class="tag update">UPDATE</span>
                    <span class="date">January 10, 2025</span>
                    <h3>PUBG - PGC 2025</h3>
                    <p>Đường đến PGC 2025: Cách tính điểm & Suất tham dự các giải đấu</p>
                    <button class="read-more" onclick="window.open('https://pubgesports.com/vi/news/8264', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/xGJxorQC.png" alt="PUBG Update">
                    <span class="tag update">UPDATE</span>
                    <span class="date">January 10, 2025</span>
                    <h3>PUBG - PGC 2025</h3>
                    <p>Đường đến PGC 2025: Cách tính điểm & Suất tham dự các giải đấu</p>
                    <button class="read-more" onclick="window.open('https://pubgesports.com/vi/news/8264', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/xGJxorQC.png" alt="PUBG Update">
                    <span class="tag update">UPDATE</span>
                    <span class="date">January 10, 2025</span>
                    <h3>PUBG - PGC 2025</h3>
                    <p>Đường đến PGC 2025: Cách tính điểm & Suất tham dự các giải đấu</p>
                    <button class="read-more" onclick="window.open('https://pubgesports.com/vi/news/8264', '_blank')">READ MORE</button>
                </div>`,
            background: "url('/ESPORT/pubg.png')"
        },
        "pubg-mobile": {
            content: `
                <div class="card">
                    <img src="/ESPORT/chrome_fc1tqrezpf-1-67bd2e7420af0.jpg" alt="PMPL_SEA2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 15, 2025</span>
                    <h3>PUBG Mobile - PMSL SEA 2025</h3>
                    <p>Tất tần tật về PMSL SEA Spring 2025</p>
                    <button class="read-more" onclick="window.open('https://thethao247.vn/400-tat-tan-tat-ve-pmsl-sea-spring-2025-d357839.html', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/chrome_fc1tqrezpf-1-67bd2e7420af0.jpg" alt="PMPL_SEA2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 15, 2025</span>
                    <h3>PUBG Mobile - PMSL SEA 2025</h3>
                    <p>Tất tần tật về PMSL SEA Spring 2025</p>
                    <button class="read-more" onclick="window.open('https://thethao247.vn/400-tat-tan-tat-ve-pmsl-sea-spring-2025-d357839.html', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/chrome_fc1tqrezpf-1-67bd2e7420af0.jpg" alt="PMPL_SEA2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 15, 2025</span>
                    <h3>PUBG Mobile - PMSL SEA 2025</h3>
                    <p>Tất tần tật về PMSL SEA Spring 2025</p>
                    <button class="read-more" onclick="window.open('https://thethao247.vn/400-tat-tan-tat-ve-pmsl-sea-spring-2025-d357839.html', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/chrome_fc1tqrezpf-1-67bd2e7420af0.jpg" alt="PMPL_SEA2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 15, 2025</span>
                    <h3>PUBG Mobile - PMSL SEA 2025</h3>
                    <p>Tất tần tật về PMSL SEA Spring 2025</p>
                    <button class="read-more" onclick="window.open('https://thethao247.vn/400-tat-tan-tat-ve-pmsl-sea-spring-2025-d357839.html', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/chrome_fc1tqrezpf-1-67bd2e7420af0.jpg" alt="PMPL_SEA2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 15, 2025</span>
                    <h3>PUBG Mobile - PMSL SEA 2025</h3>
                    <p>Tất tần tật về PMSL SEA Spring 2025</p>
                    <button class="read-more" onclick="window.open('https://thethao247.vn/400-tat-tan-tat-ve-pmsl-sea-spring-2025-d357839.html', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/chrome_fc1tqrezpf-1-67bd2e7420af0.jpg" alt="PMPL_SEA2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 15, 2025</span>
                    <h3>PUBG Mobile - PMSL SEA 2025</h3>
                    <p>Tất tần tật về PMSL SEA Spring 2025</p>
                    <button class="read-more" onclick="window.open('https://thethao247.vn/400-tat-tan-tat-ve-pmsl-sea-spring-2025-d357839.html', '_blank')">READ MORE</button>
                </div>`,
            background: "url('/ESPORT/pubg_mobile.jpg')"
        },
        "valorant": {
            content: `
                <div class="card">
                    <iframe src="https://www.youtube.com/embed/${youtubeParser('https://www.youtube.com/watch?v=Kr8WPq5CQHM')}" frameborder="0" allowfullscreen></iframe>
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 25, 2025</span>
                    <h3>Một vị trí trong cuộc chơi // VCT Pacific 2025 Stage 1 Trailer</h3>
                    <p>VCT Pacific 2025 Stage 1 chính thức khởi tranh!</p>
                    <button class="read-more" onclick="window.open('https://valorantesports.com/vi-VN/news/vct-pacific-2025-season-primer', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/9ac7bb4228423d3938d11b7f3425a236e1a75cb5-1920x1080.avif" alt="VCT Pacific 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 25, 2025</span>
                    <h3>GIỚI THIỆU MÙA GIẢI VCT PACIFIC 2025</h3>
                    <p>VCT Pacific 2025 Sẽ Khởi Tranh Ngay Sau Khi Bước Qua Năm Mới!</p>
                    <button class="read-more" onclick="window.open('https://playvalorant.com/en-us/esports/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/9ac7bb4228423d3938d11b7f3425a236e1a75cb5-1920x1080.avif" alt="VCT Pacific 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 25, 2025</span>
                    <h3>GIỚI THIỆU MÙA GIẢI VCT PACIFIC 2025</h3>
                    <p>VCT Pacific 2025 Sẽ Khởi Tranh Ngay Sau Khi Bước Qua Năm Mới!</p>
                    <button class="read-more" onclick="window.open('https://playvalorant.com/en-us/esports/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/9ac7bb4228423d3938d11b7f3425a236e1a75cb5-1920x1080.avif" alt="VCT Pacific 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 25, 2025</span>
                    <h3>GIỚI THIỆU MÙA GIẢI VCT PACIFIC 2025</h3>
                    <p>VCT Pacific 2025 Sẽ Khởi Tranh Ngay Sau Khi Bước Qua Năm Mới!</p>
                    <button class="read-more" onclick="window.open('https://playvalorant.com/en-us/esports/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/9ac7bb4228423d3938d11b7f3425a236e1a75cb5-1920x1080.avif" alt="VCT Pacific 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 25, 2025</span>
                    <h3>GIỚI THIỆU MÙA GIẢI VCT PACIFIC 2025</h3>
                    <p>VCT Pacific 2025 Sẽ Khởi Tranh Ngay Sau Khi Bước Qua Năm Mới!</p>
                    <button class="read-more" onclick="window.open('https://playvalorant.com/en-us/esports/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/9ac7bb4228423d3938d11b7f3425a236e1a75cb5-1920x1080.avif" alt="VCT Pacific 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 25, 2025</span>
                    <h3>GIỚI THIỆU MÙA GIẢI VCT PACIFIC 2025</h3>
                    <p>VCT Pacific 2025 Sẽ Khởi Tranh Ngay Sau Khi Bước Qua Năm Mới!</p>
                    <button class="read-more" onclick="window.open('https://playvalorant.com/en-us/esports/', '_blank')">READ MORE</button>
                </div>`,
            background: "url('/ESPORT/webp-df9f9669ecdb735a7ced6eb27fafd9ab.webp.webp')"
        },
        "csgo": {
            content: `
                <div class="card">
                    <iframe src="https://www.youtube.com/embed/${youtubeParser('https://www.youtube.com/watch?v=lJWRK6Bu-Dc')}" frameborder="0" allowfullscreen></iframe>
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 27, 2025</span>
                    <h3>BLAST Open: Lisbon 2025 - Pre-sale sign up is LIVE</h3>
                    <p>BLAST Open: Lisbon 2025 khởi tranh.</p>
                    <button class="read-more" onclick="window.open('https://www.counter-strike.net/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/bac22c26a87a8c108b017a134bf9cb738f713166-1920x1080.avif" alt="BLAST Open: Lisbon 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 27, 2025</span>
                    <h3>BLAST Open: Lisbon 2025</h3>
                    <p>Natus Vincere đối đầu Spirit tại tứ kết BLAST Open Spring 2025</p>
                    <button class="read-more" onclick="window.open('https://www.counter-strike.net/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/bac22c26a87a8c108b017a134bf9cb738f713166-1920x1080.avif" alt="BLAST Open: Lisbon 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 27, 2025</span>
                    <h3>BLAST Open: Lisbon 2025</h3>
                    <p>Natus Vincere đối đầu Spirit tại tứ kết BLAST Open Spring 2025</p>
                    <button class="read-more" onclick="window.open('https://www.counter-strike.net/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/bac22c26a87a8c108b017a134bf9cb738f713166-1920x1080.avif" alt="BLAST Open: Lisbon 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 27, 2025</span>
                    <h3>BLAST Open: Lisbon 2025</h3>
                    <p>Natus Vincere đối đầu Spirit tại tứ kết BLAST Open Spring 2025</p>
                    <button class="read-more" onclick="window.open('https://www.counter-strike.net/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/bac22c26a87a8c108b017a134bf9cb738f713166-1920x1080.avif" alt="BLAST Open: Lisbon 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 27, 2025</span>
                    <h3>BLAST Open: Lisbon 2025</h3>
                    <p>Natus Vincere đối đầu Spirit tại 
                    tứ kết BLAST Open Spring 2025</p>
                    <button class="read-more" onclick="window.open('https://www.counter-strike.net/', '_blank')">READ MORE</button>
                </div>
                <div class="card">
                    <img src="/ESPORT/bac22c26a87a8c108b017a134bf9cb738f713166-1920x1080.avif" alt="BLAST Open: Lisbon 2025">
                    <span class="tag event">ESPORT</span>
                    <span class="date">March 27, 2025</span>
                    <h3>BLAST Open: Lisbon 2025</h3>
                    <p>Natus Vincere đối đầu Spirit tại tứ kết BLAST Open Spring 2025</p>
                    <button class="read-more" onclick="window.open('https://www.counter-strike.net/', '_blank')">READ MORE</button>
                </div>`,
            background: "url('/ESPORT/cs-blast-open-lisbon-hed-968x544.jpg')"
        }
    };

    // Hàm cập nhật thông tin và background overlay theo bộ môn Esport
    function updateEsport(esport) {
        const data = esportInfo[esport];
        esportContent.innerHTML = data.content || "<p>No information available.</p>";
        backgroundOverlay.style.backgroundImage = data.background || "none";

        // Cập nhật background cho dropdown header
        dropdownHeader.style.backgroundImage = `url('${data.background}')`;
        dropdownHeader.style.backgroundSize = 'cover'; // Đảm bảo ảnh lấp đầy header
        dropdownHeader.style.backgroundPosition = 'center';
    }

    // Sự kiện click vào dropdown header (để mở/đóng dropdown)
    dropdownHeader.addEventListener("click", function() {
        customDropdown.classList.toggle("active");
    });

    // Sự kiện click vào một option
    dropdownOptions.forEach(option => {
        option.addEventListener("click", function() {
            const selectedEsport = this.dataset.value;
            selectedOption.textContent = this.textContent; // Cập nhật text
            updateEsport(selectedEsport);
            customDropdown.classList.remove("active"); // Đóng dropdown
        });
    });

    // Sự kiện click ra ngoài dropdown (để đóng dropdown)
    document.addEventListener("click", function(event) {
        if (!customDropdown.contains(event.target)) {
            customDropdown.classList.remove("active");
        }
    });

    // Sự kiện khi bấm vào nút Trang chủ
    homeButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });

    // Hiển thị thông tin mặc định
    updateEsport("lmht");
});


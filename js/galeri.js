// =========================================
// LOGIKA KHUSUS HALAMAN GALERI
// =========================================

// Cek apakah kita sedang di halaman Galeri (agar tidak error di halaman lain)
if (document.querySelector('.gallery-item')) {

    // --- 1. NATIVE JAVASCRIPT (Kode Asli Anda) ---
    const cards = document.querySelectorAll(".card");

    const tampilkanNama = (card) => {
        const text = card.querySelector("p");
        if (!text) return;

        // Jika card berisi IMG
        const img = card.querySelector("img");
        if (img) {
            text.textContent = img.alt;
            return;
        }

        // Jika card berisi VIDEO
        const source = card.querySelector("source");
        if (source) {
            const altVideo = source.getAttribute("alt") || "Video Produk";
            text.textContent = altVideo;
            return;
        }
    };

    const tambahHover = (card) => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("hover-aktif");
        });
        card.addEventListener("mouseleave", () => {
            card.classList.remove("hover-aktif");
        });
    };

    const initGaleri = () => {
        cards.forEach((card) => {
            card.addEventListener("click", () => tampilkanNama(card));
            tambahHover(card);
        });
    };

    // Jalankan fungsi
    initGaleri();


    // --- 2. JQUERY EVENTS (Filter, Zoom, Modal) ---
    $(document).ready(function () {

        // Event 1: Filter Kategori
        $(".filter-btn").click(function () {
            $(".filter-btn").removeClass("btn-dark").addClass("btn-outline-dark");
            $(this).removeClass("btn-outline-dark").addClass("btn-dark");

            const value = $(this).attr("data-filter");
            if (value == "all") {
                $(".gallery-item").show(500);
            } else {
                $(".gallery-item").not('[data-category="' + value + '"]').hide(500);
                $('.gallery-item[data-category="' + value + '"]').show(500);
            }
        });

        // Event 2: Zoom Gambar (Hover)
        $(".gallery-img").hover(
            function () { $(this).css({ "transform": "scale(1.1)", "transition": "0.5s" }); },
            function () { $(this).css("transform", "scale(1.0)"); }
        );

        // Event 3: Modal Popup
        $(".view-modal-btn").click(function (e) {
            e.stopPropagation(); // Mencegah bentrok dengan klik card JS Asli
            const imgSrc = $(this).closest(".card").find("img").attr("src");
            $("#modalImage").attr("src", imgSrc);
            $("#imageModal").modal("show");
        });

    });
}
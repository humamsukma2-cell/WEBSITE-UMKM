// --- HALAMAN PRODUK: INTERAKSI ---

// 1. Click pada Baris Tabel
$("#tabelHarga tbody tr").click(function () {
    $(this).toggleClass("table-warning");
});

// 2. Hover pada Gambar Produk 
$(".product-img").hover(
    function () {
        $(this).css({
            "transform": "scale(1.1)",
            "transition": "0.5s ease"
        });
    },
    function () {
        $(this).css("transform", "scale(1.0)");
    }
);

// 3. Click pada Tombol Kalkulasi (Animasi Hasil Muncul)
$(".btn-kalkulasi").click(function () {
    // Mencari kotak hasil terdekat (hasilUsiaBox atau hasilTotalBox) lalu Fade In
    $(this).closest(".card-body").find(".alert").hide().fadeIn(1000);
});
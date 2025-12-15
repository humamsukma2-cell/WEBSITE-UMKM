$(document).ready(function () {

    // --- 1. POPUP OTOMATIS (DELAY 3 DETIK) ---
    setTimeout(function () {
        $('#promoModal').modal('show');
    }, 3000);


    // --- 2. LOGIKA NAVBAR SCROLL ---
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#mainNav').addClass('navbar-scrolled');
            $('#mainNav').removeClass('navbar-dark');
            $('#mainNav').addClass('navbar-light');
        } else {
            $('#mainNav').removeClass('navbar-scrolled');
            $('#mainNav').removeClass('navbar-light');
            $('#mainNav').addClass('navbar-dark');
        }
    });

    // --- 3. ANIMASI JUDUL ---
    $("h1").hide().fadeIn(2500);

    // --- 4. HOVER GAMBAR ---
    $(".product-img-hover").hover(
        function () { $(this).css({ "transform": "scale(1.02)", "transition": "0.3s" }); },
        function () { $(this).css("transform", "scale(1.0)"); }
    );

    // --- 5. TOMBOL LIHAT DETAIL ---
    $(".btn-lihat-detail").click(function (e) {
        e.preventDefault();
        $("#detailModal").modal('show');
    });

});
// --- HALAMAN TENTANG: HOVER KARTU VALUES ---
$(".value-card").hover(
    function () {
        $(this).addClass("bg-light").css("cursor", "pointer");
    },
    function () {
        $(this).removeClass("bg-light");
    }
);

// --- HALAMAN TENTANG: KLIK FOTO FOUNDER ---
$("#founderImg").click(function () {
    $(this).toggleClass("border border-black border-5");
    alert("Halo! Terima kasih sudah mengunjungi MariCollection.");
});

// --- HALAMAN TENTANG: ANIMASI ANGKA (COUNTER) ---
// Cek apakah elemen .counter ada di halaman ini sebelum dijalankan
if ($('.counter').length) {
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}
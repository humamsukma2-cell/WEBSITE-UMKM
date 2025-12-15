// =========================================
// 5. LOGIKA HALAMAN KONTAK (kontak.html)
// =========================================
if ($("#FormKontak").length) {
    // Tab Switch Logic
    $("#sectionOrder").slideUp();
    $("#jenis").val("InfoOnly"); $("#ukuran").val("-"); $("#warna").val("-");

    $("#tanya-tab").click(function () {
        $("#sectionOrder").slideUp();
        $("#btnSubmit").text("Kirim Pesan");
        $("#jenis").val("InfoOnly"); $("#ukuran").val("-"); $("#warna").val("-");
    });

    $("#order-tab").click(function () {
        $("#sectionOrder").slideDown();
        $("#btnSubmit").text("Pesan Sekarang");
        $("#jenis").val(""); $("#ukuran").val(""); $("#warna").val("");
    });

    // Efek Input Focus
    $("input.form-control, textarea.form-control").focus(function () {
        $(this).css("box-shadow", "0 0 10px rgba(197, 160, 89, 0.5)").css("border-color", "#c5a059");
    }).blur(function () {
        $(this).css("box-shadow", "none").css("border-color", "#ced4da");
    });

    // Hover Button Animation
    $(".btn-animasi").hover(
        function () { $(this).css({ "transform": "scale(1.05)", "transition": "0.3s" }); },
        function () { $(this).css("transform", "scale(1.0)"); }
    );
}
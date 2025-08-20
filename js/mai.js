// js/mai.js
$(document).ready(function() {
    // ページ読み込み時にメニューを強制的に非表示にする
    // ブラウザのキャッシュが原因でメニューが開いたままになるのを防ぐ
    $("#js_drawer").hide();
    $("body").removeClass("is-fixed"); // スクロール防止クラスも削除
    $("#js_button-drawer").removeClass("is-checked"); // ボタンの状態も初期化

    // ハンバーガーボタンクリック時の処理
    $("#js_button-drawer").on("click", function() {
        $(this).toggleClass("is-checked"); // ボタンのアニメーション用
        $("#js_drawer").slideToggle();     // メニュー表示/非表示
        $("body").toggleClass("is-fixed"); // 背景スクロール防止
    });
});
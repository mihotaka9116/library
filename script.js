/**
 * 私の詩 - Digital Library
 * script.js
 */

// --- データの定義 (既存のまま) ---
const poems = [ /*省略*/ ];
const authors = [ /*省略*/ ];

// --- DOM要素の取得 (既存 + 新規) ---
const bookGrid = document.getElementById('bookGrid');
const authorList = document.getElementById('authorList');
const poemModal = document.getElementById('poemModal');
const modalBody = document.getElementById('modalBody');

// ★新規: スマホメニュー用の要素
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-nav a'); // メニュー内のリンク


// --- 本（Library）のレンダリング (既存のまま) ---
function renderBooks() { /*省略*/ }

// --- 作者（Authors）のレンダリング (既存のまま) ---
function renderAuthors() { /*省略*/ }

// --- モーダル制御ロジック (既存のまま) ---
function openPoemModal(poem) { /*省略*/ }

document.querySelector('.close-modal').onclick = () => { poemModal.style.display = 'none'; };
window.onclick = (event) => { if (event.target == poemModal) { poemModal.style.display = 'none'; } };

// --- お問い合わせフォームの送信シミュレーション (既存のまま) ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.onsubmit = (e) => {
        e.preventDefault();
        alert('メッセージを送信しました。ありがとうございます。');
        contactForm.reset();
    };
}


// --- ★新規: スマホメニュー制御ロジック ---

// メニューを開閉する関数
function toggleMenu() {
    menuToggle.classList.toggle('active'); // ハンバーガーのアニメーション
    mobileMenu.classList.toggle('active'); // メニュー本体の表示
    
    // メニューが開いている時はスクロールさせない
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// ボタンクリック時に実行
menuToggle.addEventListener('click', toggleMenu);

// メニュー内のリンクをクリックしたら、メニューを閉じてスクロールさせる
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});


// --- 初期化実行 (既存のまま) ---
window.onload = () => {
    renderBooks();
    renderAuthors();
    
    // アイコンの生成 (Lucide)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // アニメーションの開始 (AOS)
    if (typeof AOS !== 'undefined') {
        AOS.init({ 
            duration: 1000, 
            once: true,
            easing: 'ease-out-cubic'
        });
    }
};

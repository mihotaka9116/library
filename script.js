/**
 * 私の詩 - Digital Library
 * script.js
 */

// --- 1. データの定義 ---
const poems = [
    {
        id: '1',
        title: "叙情詩",
        author: "寺山修司",
        content: "なみだは、にんげんのつくることのできる一ばん小さな海です。",
        reflection: "悲しみもまた、自分の中にある広大な世界の一部なのだと気づかせてくれる言葉です。どんなに小さな涙も、自分という海の一部なのだと思うと、少しだけ救われる気がします。",
        category: "Poetry",
        coverColor: 'linear-gradient(135deg, #0a1128, #1c2541)'
    },
    {
        id: '2',
        title: "少女詩集",
        author: "寺山修司",
        content: "海の起源は、たった一しずくの女の子のなみだだったんだ。",
        reflection: "小さな感情が世界を創る。そんなロマンチックで切ない視点に惹かれます。寺山修司の描く「海」は、いつも優しくて残酷です。",
        category: "Anthology",
        coverColor: 'linear-gradient(135deg, #2d3436, #000000)'
    },
    {
        id: '3',
        title: "愛の詩",
        author: "室生犀星",
        content: "自分は愛のあるところを目ざして行くだろう\n悩まされ駆り立てられても\nやはりその永久を指して進むだらう\n愛と土とを踏むことはうれしい\n愛あるところに\n昨日のごとく正しく私は歩むだらう。",
        reflection: "愛に向かって真っ直ぐに歩もうとする強い意志を感じます。迷いや悩みがあっても、愛がある場所を信じて進む姿に勇気をもらえます。",
        category: "Classic",
        coverColor: 'linear-gradient(135deg, #7b241c, #4a235a)'
    },
    {
        id: '4',
        title: "時には母のない子のように",
        author: "寺山修司",
        content: "時には母のない子のように\nだまって海を見つめていたい\n\n時には母のない子のように\nひとりで旅に出てみたい\n\nだけど心はすぐかわる\n母のない子になったなら\nだれにも愛を話せない",
        reflection: "孤独と自由、そして愛への渇望が入り混じった切ない詩です。海を見つめる静かな時間の中に、人間の根源的な寂しさを感じます。",
        category: "Poetry",
        coverColor: 'linear-gradient(135deg, #2c3e50, #000000)'
    }
];

const authors = [
    {
        name: "寺山修司",
        bio: "歌人、劇作家、演出家。「言葉の魔術師」と呼ばれ、多岐にわたる分野で前衛的な表現を追求しました。虚構と現実の境界を揺さぶるような表現が特徴です。",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400",
        works: ["田園に死す", "書を捨てよ、町へ出よう", "誰か故郷を想はざる"]
    },
    {
        name: "室生犀星",
        bio: "詩人、小説家。抒情的な詩風で知られ、自然や故郷、そして人間への深い愛を、力強い言葉で綴りました。",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=400",
        works: ["抒情小曲集", "愛の詩集", "あにいうとおとうと"]
    }
];

// --- 2. メニュー制御関数 (定義を先に) ---
function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!menuToggle || !mobileMenu) return;

    // メニューを開閉する関数
    const toggleMenu = () => {
        const isOpen = mobileMenu.classList.contains('active');
        if (!isOpen) {
            menuToggle.classList.add('active');
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // ボタン自体のクリックイベント
    menuToggle.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation(); // イベントの伝播を止める
        toggleMenu();
    };

    // メニュー内のリンクをクリックした時に閉じる
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
        link.onclick = () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        };
    });
}

// --- 3. 本のレンダリング ---
function renderBooks() {
    const bookGrid = document.getElementById('bookGrid');
    if (!bookGrid) return;
    bookGrid.innerHTML = '';
    poems.forEach((poem, index) => {
        const book = document.createElement('div');
        book.className = 'book-item';
        book.setAttribute('data-aos', 'fade-up');
        book.setAttribute('data-aos-delay', index * 100);
        book.innerHTML = `
            <div class="book-inner">
                <div class="book-back">
                    <p style="line-height: 1.5; font-size: 0.75rem;">${poem.content.substring(0, 60).replace(/\n/g, ' ')}...</p>
                </div>
                <div class="book-cover" style="background: ${poem.coverColor}">
                    <span style="font-size: 10px; opacity: 0.6; margin-bottom: 10px;">${poem.category}</span>
                    <h3 style="text-align:center; font-size: 1.1rem; line-height: 1.3;">${poem.title}</h3>
                    <p style="margin-top:20px; font-size: 0.75rem; opacity: 0.7;">${poem.author}</p>
                </div>
            </div>
        `;
        book.onclick = () => openPoemModal(poem);
        bookGrid.appendChild(book);
    });
}

// --- 4. 作者のレンダリング ---
function renderAuthors() {
    const authorList = document.getElementById('authorList');
    if (!authorList) return;
    authorList.innerHTML = '';
    authors.forEach((author, index) => {
        const card = document.createElement('div');
        card.className = `author-card ${index % 2 !== 0 ? 'reverse' : ''}`;
        card.setAttribute('data-aos', index % 2 === 0 ? 'fade-right' : 'fade-left');
        card.innerHTML = `
            <img src="${author.image}" alt="${author.name}" class="author-img">
            <div class="author-info">
                <h3 style="font-size: 2rem; margin-bottom: 1rem;">${author.name}</h3>
                <p style="color: #64748b; margin-bottom: 1.5rem; line-height: 1.8;">${author.bio}</p>
                <div>
                    <p style="font-size: 0.75rem; font-weight: bold; color: #cbd5e1; margin-bottom: 0.8rem;">主な著書</p>
                    <div style="display:flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${author.works.map(w => `<span style="background: #f8fafc; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; border: 1px solid #f1f5f9;">${w}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        authorList.appendChild(card);
    });
}

// --- 5. モーダル制御 ---
function openPoemModal(poem) {
    const poemModal = document.getElementById('poemModal');
    const modalBody = document.getElementById('modalBody');
    if (!poemModal || !modalBody) return;

    modalBody.innerHTML = `
        <div style="flex: 1; background: ${poem.coverColor}; color: white; padding: 4rem; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
            <h2 style="font-size: 2.2rem; margin-bottom: 1rem;">${poem.title}</h2>
            <p style="font-style: italic; opacity: 0.8;">${poem.author}</p>
        </div>
        <div style="flex: 1.8; padding: 4rem; display: flex; flex-direction: column; justify-content: center; background: #fff;">
            <p style="white-space: pre-wrap; font-size: 1.3rem; line-height: 1.9; font-style: italic; color: #0a1128; font-family: 'Shippori Mincho', serif; margin-bottom: 3.5rem;">${poem.content}</p>
            <div style="border-top: 1px solid #f1f5f9;">
                <h4 style="font-size: 0.75rem; color: #94a3b8; margin: 2rem 0 1rem;">私の想い</h4>
                <p style="color: #64748b; line-height: 1.8; font-size: 0.95rem;">${poem.reflection}</p>
            </div>
        </div>
    `;
    poemModal.style.display = 'flex';
}

// モーダル閉じるイベントの登録
document.addEventListener('DOMContentLoaded', () => {
    const closeModal = document.querySelector('.close-modal');
    const poemModal = document.getElementById('poemModal');
    if (closeModal) closeModal.onclick = () => poemModal.style.display = 'none';
    window.onclick = (event) => { if (event.target == poemModal) poemModal.style.display = 'none'; };
});

// --- 6. 初期化 ---
window.onload = () => {
    initMenu(); // メニューを初期化
    renderBooks();
    renderAuthors();
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }
};

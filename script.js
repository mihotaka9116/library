/**
 * 私の詩 - Digital Library
 * script.js
 */

// --- 1. データの定義 (Poems & Authors) ---
// content と reflection を長いバージョンに復元しました。
const poems = [
    {
        id: '1',
        title: "叙情詩",
        author: "寺山修司",
        content: "なみだは、にんげんのつくることのできる一ばん小さな海です。\n\nきみがいなくなってから、\nぼくのなみだは、\nとまることをしらない。\n\nその小さな海に、\nぼくはひとり、\nおぼれそうになっている。",
        reflection: "悲しみもまた、自分の中にある広大な世界の一部なのだと気づかせてくれる言葉です。どんなに小さな涙も、自分という海の一部なのだと思うと、少しだけ救われる気がします。寺山修司の描く「涙」と「海」の対比は、孤独の深さと同時に、人間の存在の愛おしさを感じさせます。",
        category: "Poetry",
        coverColor: 'linear-gradient(135deg, #0a1128, #1c2541)'
    },
    {
        id: '2',
        title: "少女詩集",
        author: "寺山修司",
        content: "海の起源は、たった一しずくの女の子のなみだだったんだ。\n\nそれは、とても悲しい物語から始まった。\n\nでも、そのなみだが、\n多くの生命を育み、\n世界を青く染めた。\n\nだから、きみのなみだも、\nいつか、\n何かの始まりになるかもしれない。",
        reflection: "小さな感情が世界を創る。そんなロマンチックで切ない視点に惹かれます。寺山修司の描く「海」は、いつも優しくて残酷です。女の子の涙という、この上なく儚いものが、世界そのものの起源であるという逆説的な美しさに、心が震えます。",
        category: "Anthology",
        coverColor: 'linear-gradient(135deg, #2d3436, #000000)'
    },
    {
        id: '3',
        title: "愛の詩",
        author: "室生犀星",
        content: "自分は愛のあるところを目ざして行くだろう\n悩まされ駆り立てられても\nやはりその永久を指して進むだらう\n愛と土とを踏むことはうれしい\n愛あるところに\n昨日のごとく正しく私は歩むだらう。\n\nたとへそれは、\nとほく、はかない光であつても、\nぼくは、その光を信じて、\nあるきつづける。",
        reflection: "愛に向かって真っ直ぐに歩もうとする強い意志を感じます。迷いや悩みがあっても、愛がある場所を信じて進む姿に勇気をもらえます。「愛と土を踏む」という表現に、生への力強さと、大地に根ざした人間の営みへの深い愛情を感じます。",
        category: "Classic",
        coverColor: 'linear-gradient(135deg, #7b241c, #4a235a)'
    },
    {
        id: '4',
        title: "時には母のない子のように",
        author: "寺山修司",
        content: "時には母のない子のように\nだまって海を見つめていたい\n\n時には母のない子のように\nひとりで旅に出てみたい\n\nだけど心はすぐかわる\n母のない子になったなら\nだれにも愛を話せない\n\n海の向こうに、\nぼくの、\n本当の居場所が、\nあるのだろうか。",
        reflection: "孤独と自由、そして愛への渇望が入り混じった切ない詩です。海を見つめる静かな時間の中に、人間の根源的な寂しさと、それでも誰かを愛したいと願う心の揺らぎが美しく描かれています。孤独を受け入れることで得られる自由と、それと引き換えに失うかもしれない愛への恐怖が、見事に表現されています。",
        category: "Poetry",
        coverColor: 'linear-gradient(135deg, #2c3e50, #000000)'
    }
];

const authors = [
    {
        name: "寺山修司",
        bio: "歌人、劇作家、演出家です。「言葉の魔術師」と呼ばれ、多岐にわたる分野で前衛的な表現を追求しました。その言葉は今もなお、多くの人々の心に深く突き刺さっています。虚構と現実の境界を揺さぶるような表現が特徴です。",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400",
        works: ["田園に死す", "書を捨てよ、町へ出よう", "誰か故郷を想はざる"]
    },
    {
        name: "室生犀星",
        bio: "詩人、小説家です。抒情的な詩風で知られ、後に小説でも高い評価を得ました。自然や故郷、そして人間への深い愛を、平易ながらも力強い言葉で綴りました。その作品は時代を超えて多くの読者に愛され続けています。",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=400",
        works: ["抒情小曲集", "愛の詩集", "あにいうとおとうと"]
    }
];

// --- 2. DOM要素の取得 ---
const bookGrid = document.getElementById('bookGrid');
const authorList = document.getElementById('authorList');
const poemModal = document.getElementById('poemModal');
const modalBody = document.getElementById('modalBody');

// ★スマホメニュー用の要素
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-nav a');


// --- 3. 本（Library）のレンダリング ---
function renderBooks() {
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
                    <p style="margin-bottom:10px; color:#94a3b8; font-size: 0.6rem; font-family: sans-serif;">QUOTE</p>
                    <p style="line-height: 1.5; font-size: 0.75rem;">${poem.content.substring(0, 60).replace(/\n/g, ' ')}...</p>
                </div>
                <div class="book-cover" style="background: ${poem.coverColor}">
                    <span style="font-size: 10px; letter-spacing: 2px; opacity: 0.6; margin-bottom: 10px; font-family: sans-serif;">${poem.category}</span>
                    <h3 style="text-align:center; font-size: 1.1rem; padding: 0 10px; line-height: 1.3;">${poem.title}</h3>
                    <p style="margin-top:20px; font-size: 0.75rem; opacity: 0.7; font-style: italic;">${poem.author}</p>
                </div>
            </div>
        `;
        
        book.onclick = () => openPoemModal(poem);
        bookGrid.appendChild(book);
    });
}

// --- 4. 作者（Authors）のレンダリング ---
function renderAuthors() {
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
                    <p style="font-size: 0.75rem; font-weight: bold; color: #cbd5e1; margin-bottom: 0.8rem; letter-spacing: 1px;">主な著書</p>
                    <div style="display:flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${author.works.map(w => `<span style="background: #f8fafc; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; border: 1px solid #f1f5f9; color: #475569;">${w}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        authorList.appendChild(card);
    });
}

// --- 5. モーダル制御ロジック ---
function openPoemModal(poem) {
    // モーダル内の文字サイズや余白を、長い文章に合わせて微調整
    modalBody.innerHTML = `
        <div style="flex: 1; background: ${poem.coverColor}; color: white; padding: 4rem; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
            <span style="letter-spacing: 3px; font-size: 0.7rem; opacity: 0.5; margin-bottom: 1rem; font-family: sans-serif;">${poem.category}</span>
            <h2 style="font-size: 2.2rem; margin-bottom: 1rem; line-height: 1.2;">${poem.title}</h2>
            <p style="font-style: italic; opacity: 0.8; font-size: 0.9rem;">${poem.author}</p>
        </div>
        <div style="flex: 1.8; padding: 4rem; display: flex; flex-direction: column; justify-content: center; background: #fff;">
            <div style="margin-bottom: 3.5rem;">
                <p style="white-space: pre-wrap; font-size: 1.3rem; line-height: 1.9; font-style: italic; color: #0a1128; font-family: 'Shippori Mincho', serif;">${poem.content}</p>
            </div>
            <div style="border-top: 1px solid #f1f5f9; pt-2rem;">
                <h4 style="font-size: 0.75rem; color: #94a3b8; font-weight: bold; margin: 2.5rem 0 1rem 0; letter-spacing: 1px;">私の想い</h4>
                <p style="color: #64748b; line-height: 1.8; font-size: 0.95rem;">${poem.reflection}</p>
            </div>
        </div>
    `;
    poemModal.style.display = 'flex';
}

// モーダルを閉じる処理
document.querySelector('.close-modal').onclick = () => {
    poemModal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target == poemModal) {
        poemModal.style.display = 'none';
    }
};

// --- 6. スマホメニュー制御ロジック (修正版) ---

// メニューの状態を切り替える関数
function toggleMenu() {
    const isOpened = menuToggle.classList.contains('active');
    
    if (!isOpened) {
        // メニューを開く
        menuToggle.classList.add('active');
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // スクロール禁止
    } else {
        // メニューを閉じる
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // スクロール再開
    }
}

// ハンバーガーボタンをクリックした時
if (menuToggle) {
    menuToggle.onclick = (e) => {
        e.preventDefault();
        toggleMenu();
    };
}

// メニュー内の各リンクをクリックした時（自動で閉じる）
mobileMenuLinks.forEach(link => {
    link.onclick = () => {
        // リンク先へ飛ぶ前にメニューを閉じる
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    };
});


// --- 7. お問い合わせフォームの送信シミュレーション ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.onsubmit = (e) => {
        e.preventDefault();
        alert('メッセージを送信しました。ありがとうございます。');
        contactForm.reset();
    };
}

// --- 8. 初期化実行 ---
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

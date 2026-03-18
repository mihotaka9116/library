/**
 * 私の詩 - Digital Library
 * script.js
 */

// --- 1. データの定義 (Poems & Authors) ---
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
        reflection: "愛に向かって真っ直ぐに歩もうとする強い意志を感じます。迷いや悩みがあっても、愛がある場所を信じて進む姿に勇気をもらえます。「愛と土を踏む」という表現に、生への力強さを感じます。",
        category: "Classic",
        coverColor: 'linear-gradient(135deg, #7b241c, #4a235a)'
    },
    {
        id: '4',
        title: "時には母のない子のように",
        author: "寺山修司",
        content: "時には母のない子のように\nだまって海を見つめていたい\n時には母のない子のように\nひとりで旅に出てみたい\nだけど心はすぐかわる\n母のない子になったなら\nだれにも愛を話せない",
        reflection: "孤独と自由、そして愛への渇望が入り混じった切ない詩です。海を見つめる静かな時間の中に、人間の根源的な寂しさと、それでも誰かを愛したいと願う心の揺らぎが美しく描かれています。",
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
                    <p style="margin-bottom:10px; color:#94a3b8; font-size: 0.6rem;">QUOTE</p>
                    <p style="line-height: 1.4;">${poem.content.substring(0, 50)}...</p>
                </div>
                <div class="book-cover" style="background: ${poem.coverColor}">
                    <span style="font-size: 10px; letter-spacing: 2px; opacity: 0.6; margin-bottom: 10px;">${poem.category}</span>
                    <h3 style="text-align:center; font-size: 1rem; padding: 0 10px;">${poem.title}</h3>
                    <p style="margin-top:20px; font-size: 0.7rem; opacity: 0.6; font-style: italic;">${poem.author}</p>
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
    modalBody.innerHTML = `
        <div style="flex: 1; background: ${poem.coverColor}; color: white; padding: 4rem; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
            <span style="letter-spacing: 3px; font-size: 0.7rem; opacity: 0.5; margin-bottom: 1rem;">${poem.category}</span>
            <h2 style="font-size: 2rem; margin-bottom: 1rem;">${poem.title}</h2>
            <p style="font-style: italic; opacity: 0.7;">${poem.author}</p>
        </div>
        <div style="flex: 2; padding: 4rem; display: flex; flex-direction: column; justify-content: center;">
            <div style="margin-bottom: 3rem;">
                <p style="white-space: pre-wrap; font-size: 1.4rem; line-height: 2; font-style: italic; color: #0a1128;">"${poem.content}"</p>
            </div>
            <div style="border-top: 1px solid #f1f5f9;">
                <h4 style="font-size: 0.75rem; color: #94a3b8; font-weight: bold; margin: 2rem 0 1rem 0; letter-spacing: 1px;">私の想い</h4>
                <p style="color: #64748b; line-height: 1.8;">${poem.reflection}</p>
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

// --- 6. お問い合わせフォームの送信シミュレーション ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.onsubmit = (e) => {
        e.preventDefault();
        alert('メッセージを送信しました。ありがとうございます。');
        contactForm.reset();
    };
}

// --- 7. 初期化実行 ---
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

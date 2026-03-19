// --- Data ---
const poems = [
    {
        id: '1',
        title: "叙情詩",
        author: "寺山修司",
        content: "なみだは、にんげんのつくることのできる一ばん小さな海です。",
        reflection: "悲しみや孤独さえも、自分の中にある広大な世界の一部なのだと気づかせてくれる言葉です。どんなに小さな涙であっても、そこには無限の深さがあり、私たちは自分の海を泳いで生きていくのだと感じさせられます。",
        category: "Poetry",
        coverColor: 'linear-gradient(135deg, #0a1128, #1c2541)'
    },
    {
        id: '2',
        title: "少女詩集",
        author: "寺山修司",
        content: "海の起源は、たった一しずくの女の子のなみだだったんだ。",
        reflection: "個人の小さな感情が、やがて世界という大きな存在を創り出す。そんなロマンチックでありながら、どこか切なさを孕んだ視点に強く惹かれます。言葉が持つ魔法のような力を信じさせてくれる一節です。",
        category: "Anthology",
        coverColor: 'linear-gradient(135deg, #2d3436, #000000)'
    },
    {
        id: '3',
        title: "愛の詩",
        author: "室生犀星",
        content: "自分は愛のあるところを目ざして行くだろう\n悩まされ駆り立てられても\nやはりその永久を指して進むだらう\n愛と土とを踏むことはうれしい\n愛あるところに\n昨日のごとく正しく私は歩むだらう。",
        reflection: "どんなに困難な状況にあっても、愛に向かって真っ直ぐに歩もうとする人間の気高い意志を感じます。昨日の自分を肯定し、明日へと一歩を踏み出す勇気を、静かなリズムの中に込めた力強い詩だと思います。",
        category: "Classic",
        coverColor: 'linear-gradient(135deg, #7b241c, #4a235a)'
    },
    {
        id: '4',
        title: "時には母のない子のように",
        author: "寺山修司",
        content: "時には母のない子のように\nだまって海を見つめていたい\n\n時には母のない子のように\nひとりで旅に出てみたい\n\nだけど心はすぐかわる\n母のない子になったなら\nだれにも愛を話せない",
        reflection: "究極の孤独と、それゆえに得られる自由。しかしその自由の果てには、誰とも愛を分かち合えないという寂寥感が待っている。揺れ動く人間の心の機微が見事に表現されており、読むたびに胸が締め付けられます。",
        category: "Poetry",
        coverColor: 'linear-gradient(135deg, #2c3e50, #000000)'
    }
];
const authors = [
    {
        name: "寺山修司",
        bio: "歌人、劇作家、演出家。「言葉の魔術師」と呼ばれ、多岐にわたる分野で前衛的な表現を追求しました。",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400",
        works: ["田園に死す", "書を捨てよ、町へ出よう"]
    },
    {
        name: "室生犀星",
        bio: "詩人、小説家。抒情的な詩風で知られ、自然や故郷、そして人間への深い愛を綴りました。",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=400",
        works: ["抒情小曲集", "愛の詩集"]
    }
];

// --- Functions ---

function renderBooks() {
    const grid = document.getElementById('bookGrid');
    if (!grid) return;
    grid.innerHTML = poems.map((p, i) => `
        <div class="book-item" data-aos="fade-up" data-aos-delay="${i * 100}" onclick="openPoemModal('${p.id}')">
            <div class="book-inner">
                <div class="book-back">
                    <p>${p.content.substring(0, 40)}...</p>
                </div>
                <div class="book-cover" style="background: ${p.coverColor}">
                    <span style="font-size: 10px; opacity: 0.6; margin-bottom: 10px;">${p.category}</span>
                    <h3 style="text-align:center; font-size: 1.1rem;">${p.title}</h3>
                    <p style="margin-top:20px; font-size: 0.75rem; opacity: 0.7;">${p.author}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderAuthors() {
    const list = document.getElementById('authorList');
    if (!list) return;
    list.innerHTML = authors.map((a, i) => `
        <div class="author-card ${i % 2 !== 0 ? 'reverse' : ''}" data-aos="${i % 2 === 0 ? 'fade-right' : 'fade-left'}">
            <img src="${a.image}" alt="${a.name}" class="author-img">
            <div class="author-info">
                <h3 style="font-size: 2rem; margin-bottom: 1rem;">${a.name}</h3>
                <p style="color: #64748b; margin-bottom: 1.5rem; line-height: 1.8;">${a.bio}</p>
                <div style="display:flex; gap: 0.5rem; flex-wrap: wrap;">
                    ${a.works.map(w => `<span style="background: #f8fafc; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; border: 1px solid #f1f5f9;">${w}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

window.openPoemModal = function(id) {
    const poem = poems.find(p => p.id === id);
    const modal = document.getElementById('poemModal');
    const body = document.getElementById('modalBody');
    if (!poem || !modal || !body) return;

    body.innerHTML = `
        <div style="flex: 1; background: ${poem.coverColor}; color: white; padding: 4rem; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
            <h2 style="font-size: 2.2rem; margin-bottom: 1rem;">${poem.title}</h2>
            <p style="font-style: italic; opacity: 0.8;">${poem.author}</p>
        </div>
        <div style="flex: 1.8; padding: 4rem; display: flex; flex-direction: column; justify-content: center; background: #fff;">
            <p style="white-space: pre-wrap; font-size: 1.3rem; line-height: 1.9; font-style: italic; color: #0a1128; font-family: 'Shippori Mincho', serif; margin-bottom: 3.5rem;">${poem.content}</p>
            <div style="border-top: 1px solid #f1f5f9; padding-top: 2rem;">
                <h4 style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 1rem;">私の想い</h4>
                <p style="color: #64748b; line-height: 1.8;">${poem.reflection}</p>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
};

// --- 初期化 ---
document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
    renderAuthors();
    if (typeof AOS !== 'undefined') AOS.init({ duration: 1000, once: true });

    const close = document.querySelector('.close-modal');
    const modal = document.getElementById('poemModal');
    close?.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});

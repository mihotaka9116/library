const poems = [
    {
        id: '1',
        title: "叙情詩",
        author: "寺山修司",
        content: "なみだは、にんげんのつくることのできる一ばん小さな海です。",
        reflection: "悲しみもまた、自分の中にある広大な世界の一部なのだと気づかせてくれる言葉です。",
        category: "Poetry",
        coverColor: 'linear-gradient(135deg, #0a1128, #1c2541)'
    },
    {
        id: '2',
        title: "少女詩集",
        author: "寺山修司",
        content: "海の起源は、たった一しずくの女の子のなみだだったんだ。",
        reflection: "小さな感情が世界を創る。そんなロマンチックで切ない視点に惹かれます。",
        category: "Anthology",
        coverColor: 'linear-gradient(135deg, #2d3436, #000000)'
    },
    {
        id: '3',
        title: "愛の詩",
        author: "室生犀星",
        content: "愛あるところに\n昨日のごとく正しく私は歩むだらう。",
        reflection: "迷いがあっても、愛を信じて進む力強さに惹かれます。",
        category: "Classic",
        coverColor: 'linear-gradient(135deg, #7b241c, #4a235a)'
    },
    {
        id: '4',
        title: "時には母のない子のように",
        author: "寺山修司",
        content: "時には母のない子のように\nだまって海を見つめていたい",
        reflection: "孤独と自由、そして愛への渇望が入り混じった切ない詩です。",
        category: "Poetry",
        coverColor: 'linear-gradient(135deg, #2c3e50, #000000)'
    }
];

const authors = [
    {
        name: "寺山修司",
        bio: "歌人、劇作家、演出家。「言葉の魔術師」と呼ばれ、前衛的な表現を追求しました。",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400",
        works: ["田園に死す", "書を捨てよ、町へ出よう"]
    },
    {
        name: "室生犀星",
        bio: "詩人、小説家。抒情的な詩風で知られ、自然や人間への深い愛を綴りました。",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=400",
        works: ["抒情小曲集", "愛の詩集"]
    }
];

// UI Rendering
const bookGrid = document.getElementById('bookGrid');
const authorList = document.getElementById('authorList');

function render() {
    // Books
    poems.forEach((p, i) => {
        const el = document.createElement('div');
        el.className = 'book-item';
        el.setAttribute('data-aos', 'fade-up');
        el.setAttribute('data-aos-delay', i * 100);
        el.innerHTML = `
            <div class="book-inner">
                <div class="book-back"><p>${p.content.substring(0,40)}...</p></div>
                <div class="book-cover" style="background:${p.coverColor}">
                    <span style="font-size:10px; opacity:0.6; margin-bottom:10px;">${p.category}</span>
                    <h3 style="font-size:1rem; text-align:center;">${p.title}</h3>
                    <p style="font-size:0.7rem; margin-top:20px;">${p.author}</p>
                </div>
            </div>`;
        el.onclick = () => openModal(p);
        bookGrid.appendChild(el);
    });

    // Authors
    authors.forEach((a, i) => {
        const card = document.createElement('div');
        card.className = `author-card ${i % 2 !== 0 ? 'reverse' : ''}`;
        card.setAttribute('data-aos', 'fade-up');
        card.innerHTML = `
            <img src="${a.image}" alt="${a.name}" class="author-img">
            <div class="author-info">
                <h3 style="font-size:1.8rem; margin-bottom:1rem;">${a.name}</h3>
                <p style="color:#64748b; margin-bottom:1.5rem;">${a.bio}</p>
                <p style="font-size:0.7rem; font-weight:bold; color:#cbd5e1; margin-bottom:0.5rem;">主な著書</p>
                <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                    ${a.works.map(w => `<span style="background:#f8fafc; padding:4px 12px; border-radius:20px; font-size:0.7rem; border:1px solid #eee;">${w}</span>`).join('')}
                </div>
            </div>`;
        authorList.appendChild(card);
    });
}

// Modal
const modal = document.getElementById('poemModal');
const modalBody = document.getElementById('modalBody');
function openModal(p) {
    modalBody.innerHTML = `
        <div style="flex:1; background:${p.coverColor}; color:white; padding:3rem; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
            <h2>${p.title}</h2>
            <p>${p.author}</p>
        </div>
        <div style="flex:1.5; padding:3rem; display:flex; flex-direction:column; justify-content:center;">
            <p style="font-size:1.4rem; font-style:italic; margin-bottom:2rem;">"${p.content}"</p>
            <h4 style="font-size:0.7rem; color:#94a3b8; text-transform:uppercase; margin-bottom:1rem;">私の想い</h4>
            <p style="color:#64748b;">${p.reflection}</p>
        </div>`;
    modal.style.display = 'flex';
}
document.querySelector('.close-modal').onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; };

// Hamburger Menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
function toggleMenu() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}
menuToggle.onclick = toggleMenu;

// Init
window.onload = () => {
    render();
    AOS.init({ duration: 1000, once: true });
};

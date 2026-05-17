const rawUrls = [
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689282/Whistle_Podu_qekbq2.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689283/Verappa-MassTamilan.dev_gkekr1.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689282/Yennai-Maatrum-Kadhale_civmhi.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689281/Why_This_Kolaveri_Di_The_Soup_of_Love_gfdxoz.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689274/Vazhiyiraen_rq3mf3.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689273/Vennilavu_Saaral_qehzdl.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689273/Vaane_Vaane_cw0edy.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689273/Vandha-Edam-MassTamilan.dev_zokxe5.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689268/Vazhithunaiye_vxmkmc.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689264/Valayapatti-MassTamilan.fm_ibv07b.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689257/Vaenguzhalil_Ezhaindayadi_-_B_Ajaneesh_Loknath_vey9os.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689255/Varava-Varava_qxbemv.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689244/Thumbi-Thullal-MassTamilan.dev_dh3dxe.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689242/Tharangini-MassTamilan.dev_l15zjf.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689243/Thangame-Thangame-MassTamilan.dev_iutpmx.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689243/Theekkoluthi-MassTamilan.dev_emfcsa.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689242/Uyir-Urugudhey-MassTamilan.dev_rfmfvl.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689235/Uyirey_fz2wrl.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689227/Thangapoovey_n7wm2u.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689226/Sawadeeka_rnqi0h.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689219/Thalli-Pogathey_lbs4qq.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689204/Singari-MassTamilan.dev_cn0qa8.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689203/Thalapathy_Kacheri_kb1qhf.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689196/Sirukki-Vaasam_pbqxtj.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689196/Soorayaatam-MassTamilan.fm_nu10sr.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689186/Ponmagal-Vandaal-MassTamilan.fm_oue7np.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689186/Raavana-Mavandaa-MassTamilan.dev_gpss1a.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689179/Oru-Pere-Varalaaru-MassTamilan.dev_hycqau.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689170/Otha-Sollaala_gu6bmr.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689150/Naanum-Rowdy-Dhaan_ewe2wr.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689146/Maduraikku-MassTamilan.fm_i6hliv.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689138/Matta_m2zqud.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689072/Kaavaalaa-MassTamilan.dev_ogzq2q.mp3",
    "https://res.cloudinary.com/dgtdgt126/video/upload/q_auto/f_auto/v1778689062/Hukum---Thalaivar-Alappara-MassTamilan.dev_jhoiiu.mp3"
];

function formatTitle(url) {
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    let title = filename.replace(/\.[^/.]+$/, "");
    title = title.replace(/_[a-z0-9]{6}$/, "");
    title = title.replace(/-MassTamilan\.(dev|fm|so|org)/gi, "");
    title = title.replace(/[-_]/g, " ");
    return title.trim();
}

const songs = rawUrls.map(url => {
    return {
        title: formatTitle(url),
        artist: "Sync-Wave Artists",
        cover: "./assets/sync_wave.png",
        url: url
    };
});

// DOM Elements
const audio = document.getElementById('audio-element');
const songListContainer = document.getElementById('song-list');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const volumeBar = document.getElementById('volume-bar');
const volumeContainer = document.getElementById('volume-container');

const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');

// Main Player Visuals
const mainTitle = document.getElementById('main-title');
const mainArtist = document.getElementById('main-artist');
const mainArtwork = document.getElementById('main-artwork');

// Dock Visuals
const dockTitle = document.getElementById('dock-title');
const dockArtist = document.getElementById('dock-artist');
const dockCover = document.getElementById('dock-cover');
const totalSongsEl = document.getElementById('total-songs');

let currentSongIndex = 0;
let isPlaying = false;

// Initialize
function init() {
    totalSongsEl.textContent = `${songs.length} Tracks`;
    renderSongList();
    loadSong(songs[currentSongIndex]);
}

function renderSongList() {
    songListContainer.innerHTML = '';
    songs.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = 'song-item';
        item.dataset.index = index;
        
        item.innerHTML = `
            <img src="${song.cover}" alt="Cover" class="song-thumb">
            <div class="song-info">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <div class="song-action">
                <i class="fa-solid fa-play play-indicator"></i>
            </div>
        `;
        
        item.addEventListener('click', () => {
            if (currentSongIndex === index && isPlaying) {
                pauseSong();
            } else if (currentSongIndex === index && !isPlaying) {
                playSong();
            } else {
                currentSongIndex = index;
                loadSong(songs[currentSongIndex]);
                playSong();
            }
        });
        
        songListContainer.appendChild(item);
    });
}

function updateActiveRow() {
    document.querySelectorAll('.song-item').forEach(row => {
        row.classList.remove('active');
        const icon = row.querySelector('.play-indicator');
        
        if (parseInt(row.dataset.index) === currentSongIndex) {
            row.classList.add('active');
            if(isPlaying) {
                icon.className = 'fa-solid fa-pause play-indicator';
                mainArtwork.classList.add('playing');
            } else {
                icon.className = 'fa-solid fa-play play-indicator';
                mainArtwork.classList.remove('playing');
            }
        } else {
            icon.className = 'fa-solid fa-play play-indicator';
        }
    });
}

function loadSong(song) {
    audio.src = song.url;
    
    // Update Main UI
    mainTitle.textContent = song.title;
    mainArtist.textContent = song.artist;
    mainArtwork.src = song.cover;
    
    // Update Dock
    dockTitle.textContent = song.title;
    dockArtist.textContent = song.artist;
    dockCover.src = song.cover;
    
    updateActiveRow();
}

function playSong() {
    isPlaying = true;
    audio.play();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    updateActiveRow();
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    updateActiveRow();
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex > songs.length - 1) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
    playSong();
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (isNaN(duration)) return;
    
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    currentTimeEl.textContent = formatTime(currentTime);
    totalTimeEl.textContent = formatTime(duration);
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    audio.currentTime = (clickX / width) * duration;
}

function setVolume(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const volumePercent = (clickX / width);
    
    audio.volume = volumePercent;
    volumeBar.style.width = `${volumePercent * 100}%`;
}

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);
progressContainer.addEventListener('click', setProgress);
volumeContainer.addEventListener('click', setVolume);

// Initialization
init();

const MANILA_TZ = 'Asia/Manila';
const STORAGE = {
  verified: 'mou_verified_v2',
  firstVisit: 'mou_first_visit_v2',
  guestbook: 'mou_guestbook_v2',
  guestbookDate: 'mou_guestbook_date_v2',
  historyMax: 'mou_history_max_v2',
  completedOnce: 'mou_completed_once_v2'
};

const ROOMS = [
  { title: 'Our Beginning', subtitle: 'The watch, Instagram, and the least museum-worthy beginning.' },
  { title: 'The Early Days', subtitle: 'Gunita Kopi, coffee hunting, and the first quiet pieces of trust.' },
  { title: 'The Ordinary Collection', subtitle: 'Streets, banana bread, dragon fruit, back cracks, and comfort food.' },
  { title: 'Temporary Closures', subtitle: 'Multiple closure requests. Every single one denied.' },
  { title: 'The Bodega Sale Incident', subtitle: 'Two boyfriends. One outfit. One allegation of plagiarism.' },
  { title: 'Dates & Memories', subtitle: 'Cinema dates, photobooths, and moments worth keeping.' },
  { title: 'Baguio', subtitle: 'A first trip, a fight, a ghost mission, and one sentence that changed the collection.' },
  { title: 'The Numbers', subtitle: 'Two counters that keep growing.' },
  { title: 'Our Photos', subtitle: 'Six pieces from the current collection.' },
  { title: 'Reasons I Love You', subtitle: 'Ten catalog cards. Every one must be opened.' },
  { title: 'Boyfriend Quiz', subtitle: 'Credentials must be renewed on every visit.' },
  { title: 'Our Songs', subtitle: 'Songs that belong inside this collection.' },
  { title: 'Open When…', subtitle: 'Private envelopes for the days that need them.' },
  { title: 'A Letter for You', subtitle: 'Private correspondence from the curator.' },
  { title: 'The Future Collection', subtitle: 'Empty frames reserved for memories not made yet.' },
  { title: 'Secret Exhibit', subtitle: 'CLASSIFIED' },
  { title: 'Museum Guestbook', subtitle: 'One permanent note from the one visitor.' }
];

const REASONS = [
  'You make me laugh — even when I am trying very hard to stay annoyed with you.',
  'You always make sure I get home safely. My boyfriend, personal escort, and unpaid Transportation Department.',
  'You actually fix problems. While I am still processing the problem, you have already started looking for a solution.',
  'You are mature. Which is useful because one of us has to be.',
  'You are ridiculously clean. Everything has to be neat and tidy… except apparently your breath.',
  'Your breath smells. I said reasons I love you, not reasons you are perfect.',
  'You cook for me — especially sinigang and sisig. One of the strongest arguments for keeping this relationship.',
  'You make my coffee. At this point, this relationship is partly emotional dependence and partly caffeine dependence.',
  'You are horny. No further explanation required. You know what you did.',
  'But really, I love how you take care of me in all the little ways you probably do not even realize I notice.'
];

const QUIZ = [
  {
    q: 'What is my favorite snack that I always get near your place?',
    answers: ['ice candy'],
    wrong: 'Boyfriend privileges under review. You have literally seen me buy this near your place.'
  },
  {
    q: 'After I finish work, what do I always ask you to do — the thing you are apparently very good at, and whenever you hit the right spot I say, “Yan, babi”?',
    answers: ['massage', 'masahe'],
    wrong: 'Seriously? After all the “yan, babi” instructions I have given you?'
  },
  {
    q: 'What is my favorite ulam — the one you should know if you plan on keeping me fed and happy?',
    answers: ['caldereta', 'kaldereta'],
    wrong: 'And you call yourself my boyfriend? Please review the Jordan feeding manual.'
  },
  {
    q: 'What do you like most about me?',
    answers: ['*'],
    wrong: ''
  }
];

const OPEN_WHEN = {
  miss: {
    title: 'Open When You Miss Me',
    body: `Babi, remember Baguio?\n\nOur first trip together.\n\nThe weather was not exactly cooperating, and somehow we had not even survived our first hour before we were already fighting because I was being masungit and my temper decided to join the vacation too.\n\nVery romantic. Very Jorby.\n\nBut somehow, after all that, we still had such a good time.\n\nWe explored, ate, laughed, made memories, and spent our first real trip together just being us.\n\nAnd of course, while normal couples go to Baguio for the cold weather, food, and views…\n\nYou wanted to see a ghost at Diplomat Hotel.\n\nBecause apparently having me as your boyfriend was not scary enough.\n\nSo whenever you miss me, remember Baguio.\n\nNot because everything was perfect. It was not.\n\nRemember it because even after the bad mood, the arguments, the weather, and your unsuccessful attempt at finding a ghost, we still ended up having a trip worth remembering.\n\nAnd I would do it all over again with you.\n\nYes, even the first-hour fight.\n\nI miss you too, Babi.\n\nNow stop being dramatic. We will make more memories soon.`
  },
  mad: {
    title: 'Open When You’re Mad at Me',
    body: `Babi, if you opened this, I am assuming I did something annoying. Again.\n\nThere is a very good chance that while we were arguing, I started joking, doing something completely unrelated, or beginning a random side quest in the middle of the conversation.\n\nI know that can make it look like I am not listening or like I do not care.\n\nBut I need you to remember this: even when I act unbothered, I still care.\n\nSometimes I joke because I am trying to lighten the mood — even when my timing is terrible. It does not mean what you are feeling is unimportant to me.\n\nAnd I know you are usually the one who makes the first move to fix things. You are basically the Relationship Maintenance Department of Jorby.\n\nThank you for choosing to solve things with me instead of giving up on us.\n\nSo be mad. Tell me what I did. Make me listen properly.\n\nJust please remember that I would rather fix the problem with you than lose you because of it.\n\nAlso, any Temporary Closure Request is still subject to Jirby approval. Historical approval rate: zero percent.`
  },
  sleep: {
    title: 'Open When You Can’t Sleep',
    body: `Babi, if you cannot sleep, pretend I am beside you for a minute.\n\nImagine me working next to you and randomly asking for a kiss every few minutes until one kiss turns into a hug, and one hug turns into us cuddling instead of doing anything productive.\n\nThen imagine you moving away from my hair because, according to you, it smells.\n\nWhich is very brave criticism from a man whose breath has its own permanent museum exhibit.\n\nSomehow we still cuddle anyway.\n\nOur relationship has survived my smelly hair and your smelly breath. Insomnia does not stand a chance.\n\nClose your eyes, Babi. Think about one of those quiet moments when nothing important was happening — just us beside each other, comfortable enough to be annoying and affectionate at the same time.\n\nI hope you get some rest.\n\nAnd if not, you can always read this again until you get tired of me.`
  }
};

const MAIN_LETTER = `Who would have thought that one random meeting would turn into all of this?\n\nYou literally asked me if I wanted you to court me, and I said no. Then you forgot your watch, we had to meet halfway so I could give it back, and apparently I was already masungit to you. Honestly, what a beautiful beginning.\n\nThen came Instagram. I asked for yours, but of course, you had to tell me to give mine first. And somehow, after that, you became the person giving me updates about your day.\n\nAnd somewhere between your jokes, those updates, and that cute photo on your highlights that you suspiciously decided to delete, I started seeing you differently.\n\nYou made me laugh. You made me comfortable. But more than that, I saw how mature you were, and I realized how naturally we clicked.\n\nThen six months happened.\n\nSix months of getting to know each other. Dates. Watching Hoppers. Our first photobooth. Random moments. Arguments. Good days. Not-so-good days. And all the little things in between that slowly became ours.\n\nAnd then, Baguio.\n\nOf all the ways we could have made things official, of course we did it while we were fighting.\n\nYou wanted something romantic. You wanted me to randomly surprise you one day and finally tell you that we were official.\n\nInstead, you got:\n\n“Sige babi, tayo na.”\n\nVery romantic, Jordan. Amazing execution.\n\nBut looking back, maybe it did not need to be perfect.\n\nBecause what mattered was not how beautifully I said it.\n\nWhat mattered was that I meant it.\n\nI know our story did not begin in the most traditional way. And becoming official definitely did not happen the way either of us imagined.\n\nBut that is one of the things I love about us.\n\nOur story is ours.\n\nFrom January 25, 2026 — the day I met this funny guy who forgot his watch — to July 25, 2026 — the day I finally got to call that same guy my boyfriend.\n\nAnd now, every January 25, I want us to remember where everything began. Because before there was an anniversary, there was the day you unexpectedly walked into my life.\n\nThank you for staying through my sungit moments, for making me laugh, for being patient with me, and for becoming someone I can be completely myself with.\n\nIf you are reading this because you tapped that little NFC card, then congratulations — you successfully passed the Baguio test.\n\nAnd if it took you three attempts…\n\nWe need to talk.\n\nI love you, Babi.\n\nAnd out of all the random things that could have come from that first meeting, I am really glad it was us.`;

const FUTURE = [
  ['GOLDEN HOUR', 'One beach. Swimming, food, photos, probably annoying each other — then the sunset.', 'Arguments during the trip are permitted. Missing the sunset is not.'],
  ['JAPAN', 'Destination: Everywhere we can manage.', 'Companion: Non-negotiable.'],
  ['THE WHITE UNIFORM', 'Reserved for the day I get to see you doing what you worked so hard for.', 'Soon-to-be pharmacist.'],
  ['BEHIND THE COUNTER', 'The day I get to visit you at work and watch you become the pharmacist you worked toward.', ''],
  ["CURATOR'S COMMISSION", 'Upon receiving his first professional salary, Jirby is contractually obligated to treat Jordan.', "Terms were established without Jirby's knowledge or consent."],
  ['OUR CAR', 'Make: To be determined. Model: Also to be determined.', 'Passenger princess arrangements: Under negotiation.'],
  ['OUR DAYS OFF', 'Coffee, movies, food, staying home, getting lost somewhere — anything is fine.', 'As long as we are together.'],
  ['OUR DOGS', 'Breed: To be determined.', 'Number of spoiled children: Also to be determined.'],
  ['THE ORDINARY DAYS', 'Waking up beside you. Cooking together. Grocery shopping. Coming home to each other. Laundry. Cleaning. Dishes.', 'Nothing extraordinary. Just a home where we get to do the ordinary things together. Cleaning standards subject to Jirby’s approval.']
];

const SONGS = [
  { key: 'those-eyes', title: 'Those Eyes', artist: 'New West', src: './assets/audio/those-eyes.mp3', museum: true },
  { key: 'who-knows', title: 'Who Knows', artist: '', src: './assets/audio/who-knows.mp3' },
  { key: 'honeybee', title: 'Honeybee', artist: '', src: './assets/audio/honeybee.mp3' },
  { key: 'kabisado', title: 'Kabisado', artist: 'IV OF SPADES', src: './assets/audio/kabisado.mp3' }
];

const state = {
  view: 'boot',
  answerAttempts: 0,
  room: 0,
  visitedThisVisit: new Set(),
  reasonsOpened: new Set(),
  quizStep: 0,
  quizAnswer: '',
  quizFeedback: '',
  galleryIndex: 0,
  mainLetterOpened: false,
  secretRevealed: false,
  overlayLetter: null,
  drawer: false,
  map: false,
  toast: '',
  activeSong: null,
  musicUnlocked: false,
  musicMenu: false,
  backgroundSong: 'those-eyes',
  gateAnswer: '',
  nowPlayingToast: '',
  curatorTapCount: 0
};

const app = document.querySelector('#app');
const bgAudio = document.querySelector('#background-audio');
const songAudio = document.querySelector('#song-audio');
bgAudio.volume = 0.24;
songAudio.volume = 0.82;

function escapeHTML(str = '') {
  return str.replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}

function manilaParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: MANILA_TZ, year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', hourCycle:'h23' }).formatToParts(date);
  return Object.fromEntries(parts.map(p => [p.type, p.value]));
}

function museumIsOpen() {
  if (new URLSearchParams(location.search).has('preview')) return true;
  const p = manilaParts();
  return p.day === '25' || p.day === '26';
}

function formatStoredDate(iso) {
  if (!iso) return 'Not recorded yet';
  return new Intl.DateTimeFormat('en-US', { timeZone: MANILA_TZ, month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(iso));
}

function daysSince(dateString) {
  const start = new Date(`${dateString}T00:00:00+08:00`);
  const now = new Date();
  return Math.max(0, Math.floor((now - start) / 86400000));
}

function resetVisitState() {
  state.room = 0;
  state.visitedThisVisit = new Set();
  state.reasonsOpened = new Set();
  state.quizStep = 0;
  state.quizAnswer = '';
  state.quizFeedback = '';
  state.galleryIndex = 0;
  state.mainLetterOpened = false;
  state.secretRevealed = false;
  state.overlayLetter = null;
  state.activeSong = null;
  state.musicUnlocked = false;
  state.musicMenu = false;
  state.backgroundSong = 'those-eyes';
  songAudio.pause();
  songAudio.currentTime = 0;
}

function startBackground() {
  const selected = SONGS.find(song => song.key === state.backgroundSong) || SONGS[0];
  if (!bgAudio.src.endsWith(selected.src.replace('./',''))) bgAudio.src = selected.src;
  bgAudio.loop = true;
  bgAudio.currentTime = 0;
  bgAudio.play().catch(() => {});
}

function pauseBackground() { bgAudio.pause(); }
function resumeBackground() { bgAudio.play().catch(() => {}); }

songAudio.addEventListener('ended', () => {
  state.activeSong = null;
  resumeBackground();
  if (state.view === 'room') startRoomAmbience(state.room);
  if (state.view === 'room' && state.room === 11) render();
});
songAudio.addEventListener('pause', () => {
  if (!songAudio.ended && state.activeSong && state._manualSongPause) {
    state.activeSong = null;
    state._manualSongPause = false;
    resumeBackground();
    if (state.view === 'room') startRoomAmbience(state.room);
    render();
  }
});

function tone(type = 'chime') {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    const ctx = new Ctx();
    const gain = ctx.createGain();
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(type === 'paper' ? 0.018 : 0.045, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + (type === 'paper' ? .26 : .52));
    if (type === 'paper') {
      const buffer = ctx.createBuffer(1, ctx.sampleRate * .28, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass'; filter.frequency.value = 1500; filter.Q.value = .8;
      source.connect(filter).connect(gain); source.start();
    } else {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(type === 'success' ? 523.25 : 392, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(type === 'success' ? 659.25 : 523.25, ctx.currentTime + .34);
      osc.connect(gain); osc.start(); osc.stop(ctx.currentTime + .55);
    }
    setTimeout(() => ctx.close(), 900);
  } catch {}
}

function vibrate(pattern) { try { navigator.vibrate?.(pattern); } catch {} }

function showToast(msg) {
  state.toast = msg;
  render();
  clearTimeout(state._toastTimer);
  state._toastTimer = setTimeout(() => { state.toast = ''; render(); }, 2800);
}

function render() {
  if (!museumIsOpen()) {
    pauseBackground(); songAudio.pause();
    app.innerHTML = closedScreen();
    return;
  }
  if (state.view === 'boot') {
    state.view = localStorage.getItem(STORAGE.verified) ? 'returning' : 'invite';
  }

  const html = state.view === 'invite' ? inviteScreen()
    : state.view === 'verify' ? verifyScreen()
    : state.view === 'breakup' ? breakupScreen()
    : state.view === 'returning' ? returningScreen()
    : state.view === 'confirmed' ? confirmedScreen()
    : state.view === 'foyer' ? museumChrome(foyerScreen())
    : state.view === 'hall' ? museumChrome(hallScreen())
    : state.view === 'room' ? museumChrome(roomScreen())
    : state.view === 'final' ? museumChrome(finalScreen())
    : inviteScreen();

  app.innerHTML = html + (state.toast ? `<div class="toast">${escapeHTML(state.toast)}</div>` : '');
  bindEvents();
  if (state.view === 'room') { setupRoomObservers(); setupRoomPolish(); startRoomAmbience(state.room); } else { stopRoomAmbience(); }
}

function closedScreen() {
  return `<div class="shell"><section class="screen"><div class="screen-inner">
    <div class="kicker">PRIVATE COLLECTION</div>
    <h1>The museum is currently closed.</h1>
    <p>Some collections are worth waiting for.</p>
    <p class="wine">The museum reopens on the 25th.</p>
    <small>Curated by Jordan · For one visitor only.</small>
  </div></section></div>`;
}

function inviteScreen() {
  return `<div class="shell"><section class="screen"><div class="screen-inner">
    <div class="kicker">PRIVATE INVITATION</div>
    <h1>You’ve been invited to a private exhibition.</h1>
    <p>One collection. One visitor.</p>
    <button class="primary" data-action="to-verify">Enter Exhibition</button>
  </div></section></div>`;
}

function returningScreen() {
  return `<div class="shell"><section class="screen"><div class="screen-inner">
    <div class="kicker">MUSEUM OF US</div>
    <h1>Welcome back, Babi.</h1>
    <p>The museum remembers you.</p>
    <button class="primary" data-action="return-enter">Enter Exhibition</button>
  </div></section></div>`;
}

function verifyScreen() {
  const prompts = [
    '',
    'WOW. So you don’t love me anymore?',
    'Excuse me??? You have ONE chance left. Think carefully, boyfriend.'
  ];
  const feedback = prompts[state.answerAttempts] || '';
  return `<div class="shell"><section class="screen"><div class="screen-inner">
    <div class="kicker">PRIVATE EXHIBITION</div>
    <h1>Admission restricted to one very specific boyfriend.</h1>
    <p>Where were we when our story officially became “us”?</p>
    <input class="identity-input" id="gate-answer" autocomplete="off" autocapitalize="words" value="${escapeHTML(state.gateAnswer)}" placeholder="Your answer" />
    <button class="primary" data-action="verify">Verify Visitor</button>
    <div class="error-line"><small>${escapeHTML(feedback)}</small></div>
    <small>${3 - state.answerAttempts} attempt${3 - state.answerAttempts === 1 ? '' : 's'} remaining</small>
  </div></section></div>`;
}

function breakupScreen() {
  return `<div class="shell"><section class="screen"><div class="screen-inner">
    <div class="kicker">ADMISSION DENIED</div>
    <h1>That’s it. We’re breaking up.</h1>
    <p>You don’t even remember where our story became “us.”</p>
    <div class="breakup-panel">
      <h2>Relationship terminated.</h2>
      <p class="subtle">This decision may be appealed because the curator is dramatic, not cruel.</p>
      <button class="primary" data-action="appeal">Request Reconsideration</button>
    </div>
  </div></section></div>`;
}

function confirmedScreen() {
  return `<div class="shell"><section class="screen"><div class="screen-inner">
    <div class="kicker">IDENTITY CONFIRMED</div>
    <h1>Apparently, you do love me.</h1>
    <p class="serif" style="font-size:2rem;color:var(--wine)">Welcome, Babi.</p>
  </div></section></div>`;
}

function museumChrome(content) {
  return `<div class="shell">
    <header class="topbar">
      <button class="brand brand-button" data-action="curator-easter" aria-label="Museum of Us">MUSEUM OF US</button>
      <div class="top-actions">
        ${state.musicUnlocked ? `<div class="music-control-wrap"><button class="icon-button music-button ${state.musicMenu ? 'active' : ''}" aria-label="Choose museum music" data-action="toggle-music-menu">${musicIcon()}</button>${state.musicMenu ? musicMenu() : ''}</div>` : ''}
        <button class="icon-button" aria-label="Museum map" data-action="open-map">${mapIcon()}</button>
        <button class="icon-button" aria-label="Settings" data-action="open-settings">${gearIcon()}</button>
      </div>
    </header>
    ${content}
    ${state.nowPlayingToast ? `<div class="now-playing-toast"><span>NOW PLAYING</span><strong>${escapeHTML(state.nowPlayingToast)}</strong></div>` : ''}
    ${state.map ? mapOverlay() : ''}
    ${state.drawer ? settingsDrawer() : ''}
    ${state.overlayLetter ? letterOverlay() : ''}
  </div>`;
}

function foyerScreen() {
  return `<section class="foyer"><div class="foyer-inner">
    <div class="kicker">JORDAN × JIRBY · PERMANENT COLLECTION · EST. 2026</div>
    <h1>Museum of Us</h1>
    <div class="foyer-copy">
      <p>Welcome, Babi.</p>
      <p>This museum contains a carefully curated collection of questionable decisions, forgotten watches, photobooth strips, arguments, kisses, bad breath, smelly hair, random Instagram updates, and somehow… a love story.</p>
      <p>The exhibition began on <strong>January 25, 2026</strong>, when two people met without knowing they were about to become something more.</p>
      <p>Six months later, after several dates, countless memories, and one very poorly timed argument in Baguio, the collection officially became permanent.</p>
      <div class="foyer-quote">“Sige babi, tayo na.”</div>
      <p>Please explore responsibly.</p>
      <p>Some exhibits may cause excessive smiling, sudden nostalgia, or the realization that you are actually very lucky to have me.</p>
      <p><strong>Admission is free.</strong></p>
      <p><strong>Leaving me is not.</strong></p>
      <p class="serif" style="font-size:1.8rem;color:var(--wine)">Welcome to our story.</p>
    </div>
    <button class="primary" data-action="start-journey">Enter the Gallery</button>
    <button class="curator-signature" data-action="curator-easter" aria-label="Curated by Jordan">Curated by Jordan · For one visitor only.</button>
  </div></section>`;
}

const HALL_OBJECTS = [
  ['watch','The Watch He Forgot'], ['coffee','The Early Days'], ['street','The Ordinary Collection'],
  ['closed','Temporary Closures'], ['shirt','Bodega Sale'], ['strip','Dates & Memories'],
  ['mountain','Baguio'], ['numbers','The Numbers'], ['portrait','Our Photos'],
  ['cards','Reasons I Love You'], ['quiz','Boyfriend Quiz'], ['record','Our Songs'],
  ['envelopes','Open When…'], ['letter','A Letter for You'], ['future','Future Collection'],
  ['door','Secret Exhibit'], ['book','Museum Guestbook']
];

function hallScreen() {
  const completed = state.room;
  return `<section class="museum-hall-shell">
    <div class="hall-instructions"><div class="kicker">THE MAIN GALLERY</div><h2>Move through the collection.</h2><p>Drag the room left or right. Only the next exhibit opens when the one before it is complete.</p></div>
    <div class="museum-pan" data-museum-pan>
      <div class="museum-wall">
        <div class="sunwash"></div><div class="dust d1"></div><div class="dust d2"></div><div class="dust d3"></div>
        <div class="baseboard"></div>
        ${HALL_OBJECTS.map(([kind,title], idx) => {
          const status = idx < completed ? 'completed' : idx === completed ? 'unlocked' : 'locked';
          const room = ROOMS[idx];
          const label = idx > completed ? 'CLASSIFIED' : title;
          return `<button class="hall-object ${kind} ${status}" data-hall-room="${idx}" ${idx === completed ? '' : 'disabled'} style="--slot:${idx}">
            <span class="object-art"><i></i></span>
            <span class="object-label"><b>${String(idx+1).padStart(2,'0')}</b><strong>${escapeHTML(label)}</strong><small>${status === 'unlocked' ? 'ENTER EXHIBIT' : status === 'completed' ? 'ARCHIVED' : 'LOCKED'}</small></span>
          </button>`;
        }).join('')}
        <div class="gallery-bench" aria-hidden="true"><span></span></div>
        <div class="gallery-plant plant-a" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="gallery-plant plant-b" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="visitor-group visitors-a" aria-hidden="true">
          <span class="museum-person person-wine"><i></i></span>
          <span class="museum-person person-sage"><i></i></span>
          <span class="museum-person person-blue"><i></i></span>
        </div>
        <div class="visitor-group visitors-b" aria-hidden="true">
          <span class="museum-person person-ochre"><i></i></span>
          <span class="museum-person person-wine"><i></i></span>
        </div>
        <div class="visitor-group visitors-c" aria-hidden="true">
          <span class="museum-person person-blue"><i></i></span>
          <span class="museum-person person-sage"><i></i></span>
          <span class="museum-person person-ochre"><i></i></span>
          <span class="museum-person person-wine"><i></i></span>
        </div>
      </div>
    </div>
    <div class="hall-progress">${Math.min(completed, ROOMS.length)} / ${ROOMS.length} exhibits completed this visit</div>
  </section>`;
}

function setupHallPan() {
  const pan = document.querySelector('[data-museum-pan]');
  if (!pan) return;
  let down=false, startX=0, startLeft=0;
  pan.addEventListener('pointerdown', e => { if (e.target.closest('.hall-object.unlocked')) return; down=true; startX=e.clientX; startLeft=pan.scrollLeft; pan.setPointerCapture?.(e.pointerId); });
  pan.addEventListener('pointermove', e => { if (!down) return; pan.scrollLeft = startLeft - (e.clientX-startX); });
  const stop=()=>down=false; pan.addEventListener('pointerup', stop); pan.addEventListener('pointercancel', stop); pan.addEventListener('pointerleave', stop);
  const current = pan.querySelector('.hall-object.unlocked');
  // Keep the document's vertical position untouched. scrollIntoView() was causing
  // the sticky header to cover the gallery title on iOS Safari. Only pan horizontally.
  if (current) setTimeout(() => {
    const target = Math.max(0, current.offsetLeft - (pan.clientWidth - current.offsetWidth) / 2);
    pan.scrollTo({ left: target, behavior: 'smooth' });
  }, 120);
}

const ROOM_TAGS = [
  'ORIGIN ARCHIVE', 'CAFE ARCHIVE', 'EVERYDAY OBJECTS', 'CLOSURE RECORDS',
  'WARDROBE INCIDENT', 'DATE ARCHIVE', 'TRAVEL ARCHIVE', 'TIME ARCHIVE',
  'PRIVATE COLLECTION', 'CATALOG OF AFFECTION', 'INTERACTIVE ARCHIVE', 'LISTENING ROOM',
  'PRIVATE CORRESPONDENCE', 'SEALED ARCHIVE', 'FUTURE COLLECTION', 'CLASSIFIED', 'VISITOR ARCHIVE'
];

function roomPlaque(roomIndex) {
  const plaques = {
    5: ['DATE ARCHIVE', 'Cinema & Photobooth Collection'],
    6: ['TRAVEL ARCHIVE', 'Baguio · First Trip Collection'],
    11: ['LISTENING ROOM', 'Songs That Belong to Us'],
    12: ['PRIVATE CORRESPONDENCE', 'Open When Archive'],
    13: ['PRIVATE CORRESPONDENCE', 'Curator Letter'],
    14: ['FUTURE ARCHIVE', 'Reserved Collection']
  };
  const plaque = plaques[roomIndex];
  if (!plaque) return '';
  return `<div class="room-plaque"><span>${plaque[0]}</span><small>${plaque[1]}</small></div>`;
}

function roomScreen() {
  const r = ROOMS[state.room];
  const body = renderRoomBody(state.room);
  return `<main class="museum-main ambient-${state.room}" data-room="${state.room}"><div class="room-ambience" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="exhibit-head">
      <div class="exhibit-index"><span class="kicker">EXHIBIT ${String(state.room + 1).padStart(2, '0')} / ${ROOMS.length}</span></div>
      <div class="room-tag">${escapeHTML(ROOM_TAGS[state.room] || 'MUSEUM ARCHIVE')}</div>
      <h1>${escapeHTML(r.title)}</h1>
      <p class="lede">${escapeHTML(r.subtitle)}</p>
      ${roomPlaque(state.room)}
      <div class="micro-progress" aria-label="Exhibit progress">${ROOMS.map((_,idx)=>`<i class="${idx < state.room ? 'done' : idx === state.room ? 'current' : ''}"></i>`).join('')}</div>
    </div>
    ${body}
  </main>`;
}

function artifact(meta, title, body, extra = '') {
  return `<section class="artifact"><div class="artifact-meta">${meta}</div><h2 class="artifact-title">${title}</h2>${body}${extra}</section>`;
}

function doorHTML(canAdvance, label = '') {
  const nextRoom = ROOMS[state.room + 1];
  if (!nextRoom) return '';
  return `${!canAdvance ? `<div class="requirement-note">Complete this exhibit before the next room is revealed.</div>` : ''}
    <div class="next-sentinel" data-next-sentinel></div>
    <div class="next-door-wrap" data-next-door>
      ${canAdvance ? `<button class="next-door" data-action="next-room"><span>NEXT EXHIBIT</span><strong>${escapeHTML(label || nextRoom.title)}</strong></button>` : ''}
    </div>`;
}

function renderRoomBody(i) {
  switch (i) {
    case 0:
      return `${artifact('ARTIFACT NO. 001 · JANUARY 25, 2026', 'The Watch He Forgot', `<div class="artifact-vitrine watch-memory"><div class="watch-object"><span class="watch-face"></span><span class="watch-strap top"></span><span class="watch-strap bottom"></span></div><div class="glass-glint"></div></div><p>An ordinary watch responsible for an unnecessary second meeting on the very first day.</p>`, `<div class="curator-note"><small>Historical records indicate that Jordan was allegedly “masungit” during the return. The curator disputes this account.</small></div>`)}
      ${artifact('ARTIFACT NO. 002 · DIGITAL ARTIFACT', 'The Missing Highlight Photo', `<div class="artifact-vitrine highlight-memory"><div class="phone-memory"><div class="memory-portrait"><span></span><span></span></div><div class="story-ring"></div><div class="vanish-spark v1"></div><div class="vanish-spark v2"></div></div><div class="glass-glint"></div></div><p>Once displayed on Jirby’s Instagram highlights. Jordan thought he looked cute. Shortly afterward, the evidence mysteriously disappeared.</p><small>Current location: Unknown · Primary suspect: Jirby</small>`)}
      <section class="museum-card"><div class="artifact-meta">THE INSTAGRAM PHASE</div><p>Jordan asked for Jirby’s Instagram. Jirby refused to give his first and insisted Jordan hand over his instead. Somehow, Jirby then became the one constantly sending updates about his day.</p><p>Somewhere between the jokes, the random updates, and one suspiciously cute highlight photo that disappeared, Jordan realized this guy was funny, mature, and very easy to like.</p></section>
      ${doorHTML(true)}`;

    case 1:
      return `${artifact('FIRST DATE', 'Gunita Kopi', `<p>One of the first places where Jordan felt comfortable enough to open up about something deeply personal about his life.</p><p>The details stay private. The trust belongs in the museum.</p>`)}
      ${artifact('RECURRING FIELD STUDY', 'Coffee Hunting in Valenzuela', `<p>Looking around coffee shops together eventually made <strong>Cuppremo</strong> one of the go-to places.</p><p><strong>Jirby:</strong> usually something chocolate.<br><strong>Jordan:</strong> usually cookies.</p><small>Unofficial mission: inspect as many coffee shops as possible.</small>`)}
      ${doorHTML(true)}`;

    case 2:
      return `${artifact('ORDINARY MEMORY', 'Somewhere Near Your Street', `<p>Sometimes Jirby quietly shows up near Jordan’s street, waits for him, and occasionally arrives carrying banana bread or dragon fruit.</p><p>And whenever he passes the street on the way home or to school, he takes a picture and sends it.</p><div class="curator-note"><p>Sometimes love looks less like flowers and more like someone quietly waiting on your street with banana bread and dragon fruit.</p></div>`)}
      ${artifact('SERVICE DEPARTMENT', 'The Jorby Wellness Program', `<p>Boyfriend · Cook · Coffee Maker · Massage Therapist · Transportation Department · Problem Solver · Part-Time Back Cracker</p><small>Some services are requested. Others are apparently performed without prior authorization.</small>`)}
      ${artifact('COMFORT FOOD ARCHIVE', 'The Things We Keep Eating', `<p><strong>Shared:</strong> palabok and champorado.</p><p><strong>Jirby’s kitchen archive:</strong> sinigang and sisig.</p>`)}
      ${doorHTML(true)}`;

    case 3:
      return `<section class="reveal" style="min-height:70svh;display:grid;place-items:center;text-align:center">
        <div><div class="kicker">TEMPORARY CLOSURE REQUESTS · VARIOUS DATES · 2026</div><h2>Multiple requests to permanently close the Jorby Collection were submitted by Jordan.</h2><p>Jirby’s response:</p><blockquote>“No.”</blockquote><p><strong>All requests denied.</strong></p><small>The museum remains operational.</small></div>
      </section>${doorHTML(true)}`;

    case 4:
      return `${artifact('INCIDENT REPORT', 'The Bodega Sale Incident', `<p>Jordan and Jirby somehow ended up with the same clothing piece.</p><p>Jirby’s immediate conclusion: <strong>“Gaya-gaya.”</strong></p><div class="curator-note"><p>Two boyfriends. One outfit. One allegation of plagiarism.</p><small>Jirby maintains that Jordan copied him. The curator has found insufficient evidence to support this claim.</small></div>`)}${doorHTML(true)}`;

    case 5:
      return `${artifact('DATE ARCHIVE', 'Hoppers', `<div class="hoppers-date-art"><div class="hoppers-copy"><p>A cinema date that became special for the simplest reason: you were together.</p></div><div class="hoppers-stickers" aria-label="Hoppers movie stickers"><figure class="hoppers-sticker hoppers-sticker-a"><img src="./assets/photos/hoppers-sticker-1.jpeg" alt="Hoppers movie characters" /></figure><figure class="hoppers-sticker hoppers-sticker-b"><img src="./assets/photos/hoppers-sticker-2.jpeg" alt="Hoppers beaver character" /></figure></div></div>`)}
      ${artifact('ARTIFACT NO. 003', 'The First Photobooth', `<div class="artifact-vitrine strip-vitrine"><img class="life4cuts-strip" src="./assets/photos/life4cuts.jpeg" alt="Jordan and Jirby first Life4Cuts photobooth strip" /><div class="glass-glint"></div></div><p>Life4Cuts · Trinoma · February 28, 2026</p><p>The actual strip, preserved in the collection.</p>`)}
      ${doorHTML(true)}`;

    case 6:
      queueBaguioHaptic();
      return `<div class="baguio-room">
        <section class="baguio-photo-archive" aria-label="Baguio photo archive">
          <div class="baguio-photo-heading"><div class="kicker">BAGUIO ARCHIVED</div><p>Three pieces from our first trip together.</p></div>
          <div class="baguio-photo-grid">
            <figure class="baguio-photo-card baguio-photo-one"><img src="./assets/photos/baguio-1.jpeg" alt="Jordan and Jirby together in Baguio" loading="lazy" /><figcaption>01 · Baguio</figcaption></figure>
            <figure class="baguio-photo-card baguio-photo-two"><img src="./assets/photos/baguio-2.jpeg" alt="Jordan and Jirby among the pine trees in Baguio" loading="lazy" /><figcaption>02 · Baguio</figcaption></figure>
            <figure class="baguio-photo-card baguio-photo-three"><img src="./assets/photos/baguio-3.jpeg" alt="Jordan and Jirby at Camp John Hay in Baguio" loading="lazy" /><figcaption>03 · Baguio</figcaption></figure>
          </div>
        </section>
        <div class="baguio-build">
          <p>Baguio was your first trip together.</p>
          <p>The weather was not exactly cooperating, and somehow the first hour already included a fight because Jordan was being masungit and hot-headed.</p>
          <p>Very romantic timing.</p>
          <p>But you still explored, ate, laughed, made memories, and enjoyed traveling together.</p>
          <p>And because normal sightseeing apparently was not enough, Jirby also wanted to see a ghost at Diplomat Hotel.</p>
          <p>At Garlick, the argument that had been waiting six months finally happened: were you actually official or not?</p>
          <p>Jirby wanted a romantic, random confirmation someday.</p>
          <p>Jordan chose… a fight in Baguio.</p>
        </div>
        <section class="baguio-reveal"><div>
          <div class="baguio-line">“Sige babi,<br>tayo na.”</div>
          <div class="baguio-date"><div class="kicker" style="margin-top:34px">JULY 25, 2026</div><p>The Jorby Collection officially became permanent.</p></div>
        </div></section>
      </div>${doorHTML(true)}`;

    case 7:
      return `<section class="counters">
        <div class="counter"><strong>${daysSince('2026-01-25')}</strong><span>Days Since We Met</span><small>January 25, 2026</small></div>
        <div class="counter"><strong>${daysSince('2026-07-25')}</strong><span>Days Since We Became Us</span><small>July 25, 2026</small></div>
      </section>
      <div class="first-visit-record"><div class="kicker">MUSEUM HISTORY</div><h2>First Visit</h2><p>${escapeHTML(formatStoredDate(localStorage.getItem(STORAGE.firstVisit)))}</p></div>
      ${doorHTML(true)}`;

    case 8:
      return `${photoGallery()}${doorHTML(state.galleryIndex >= 6, 'Reasons I Love You')}`;

    case 9: {
      const all = state.reasonsOpened.size === REASONS.length;
      return `<div class="reason-grid">${REASONS.map((r, idx) => `<button class="reason-card ${state.reasonsOpened.has(idx) ? 'open' : ''}" data-reason="${idx}" ${state.reasonsOpened.has(idx) ? 'disabled' : ''}><small>REASON ${String(idx+1).padStart(2,'0')} / 10</small><span class="reason-copy">${state.reasonsOpened.has(idx) ? escapeHTML(r) : 'Tap to reveal.'}</span></button>`).join('')}</div>
      ${all ? `<p class="ego-note">Please do not let this exhibit increase your ego.</p>` : ''}
      ${doorHTML(all)}`;
    }

    case 10:
      return `${quizRoom()}${doorHTML(state.quizStep >= 4)}`;

    case 11:
      return `<div class="song-grid">
        ${songCard('who-knows','Who Knows','./assets/audio/who-knows.mp3')}
        ${songCard('honeybee','Honeybee','./assets/audio/honeybee.mp3')}
        ${songCard('kabisado','Kabisado','./assets/audio/kabisado.mp3')}
      </div><p class="subtle" style="text-align:center;margin-top:28px">When one of these plays, the museum soundtrack waits.</p>${doorHTML(true)}`;

    case 12:
      return `<div class="envelope-grid">
        ${envelope('miss','Open When You Miss Me')}
        ${envelope('mad','Open When You’re Mad at Me')}
        ${envelope('sleep','Open When You Can’t Sleep')}
      </div><p class="subtle" style="text-align:center;margin-top:30px">These envelopes are always available. Open any of them whenever you need them.</p>${doorHTML(true)}`;

    case 13:
      return `<button class="sealed-letter" data-action="open-main-letter"><span class="wax">J</span><span class="address"><strong>To my Babi</strong><small>From Jordan</small></span></button>
      ${state.mainLetterOpened ? `<div class="museum-card"><div class="kicker">ARCHIVE STATUS</div><p>This correspondence has been opened for this visit.</p></div>` : `<p class="subtle" style="text-align:center">Break the seal to continue.</p>`}
      ${doorHTML(state.mainLetterOpened)}`;

    case 14:
      return `<div class="future-grid">${FUTURE.map(([title, body, note], idx) => `<section class="future-piece future-${idx}"><div class="kicker">FUTURE ARTIFACT</div><h2>${escapeHTML(title)}</h2><div class="future-frame"><span class="future-ghost" aria-hidden="true"></span><em>RESERVED</em></div><p>${escapeHTML(body)}</p>${note ? `<small>${escapeHTML(note)}</small>` : ''}</section>`).join('')}</div>
      <section class="incomplete"><div class="kicker">COLLECTION STATUS</div><h2>This exhibition is incomplete.</h2><p>Not because anything is missing.</p><p>We are just not done making it yet.</p><div class="next-memory-frame"><span class="serif" style="font-size:2rem;color:var(--wine)">Our Next Memory</span></div><small>Jordan × Jirby · To be continued.</small></section>
      ${doorHTML(true, 'Classified')}`;

    case 15:
      return `${secretRoom()}${doorHTML(state.secretRevealed, 'Museum Guestbook')}`;

    case 16:
      return guestbookRoom();

    default:
      return '';
  }
}

function photoGallery() {
  const photos = [
    './assets/photos/photo-1.jpeg',
    './assets/photos/photo-2.jpeg',
    './assets/photos/photo-3.jpeg',
    './assets/photos/photo-4.jpeg',
    './assets/photos/photo-5.jpeg',
    './assets/photos/photo-6.png'
  ];
  const total = photos.length;
  const slides = photos.map((src, idx) => {
    const n = idx + 1;
    return `<section class="gallery-slide" data-gallery-slide="${idx}">
      <img src="${src}" alt="Museum photograph ${n}" draggable="false" data-palette-image />
      <div class="gallery-count"><span>${String(n).padStart(2,'0')} / ${String(total).padStart(2,'0')}</span><span>PRIVATE COLLECTION</span></div>
    </section>`;
  }).join('');
  return `<div class="gallery-shell" data-gallery-shell><div class="gallery-track" data-gallery-track>${slides}<section class="gallery-slide" data-gallery-slide="${total}"><div class="gallery-reserved"><div><div class="kicker">${String(total + 1).padStart(2,'0')} / ?</div><h2>Reserved for our next favorite photo.</h2></div></div><div class="gallery-count"><span>${String(total + 1).padStart(2,'0')} / ?</span><span>TO BE CONTINUED</span></div></section></div></div><div class="swipe-hint">Swipe manually through the collection</div>`;
}

function quizRoom() {
  if (state.quizStep >= 4) {
    return `<section class="certificate"><div class="kicker">FINAL RESULT</div><h2>4 / 4 — CERTIFIED BABI</h2><p>Boyfriend credentials successfully renewed.</p><small>The museum was slightly rigged in your favor.</small></section>`;
  }
  const q = QUIZ[state.quizStep];
  return `<section class="quiz-card">
    <div class="quiz-progress">${[0,1,2,3].map(i => `<i class="${i < state.quizStep ? 'done' : ''}"></i>`).join('')}</div>
    <div class="kicker">QUESTION ${state.quizStep + 1} / 4</div>
    <div class="quiz-prompt">${escapeHTML(q.q)}</div>
    <input class="quiz-input" id="quiz-answer" autocomplete="off" value="${escapeHTML(state.quizAnswer)}" placeholder="Type your answer" />
    <button class="primary" data-action="quiz-submit">Submit Answer</button>
    <div class="quiz-feedback"><small>${escapeHTML(state.quizFeedback)}</small></div>
  </section>`;
}

function songCard(key, title, src) {
  const selected = state.backgroundSong === key;
  return `<button class="song-card ${selected ? 'playing' : ''}" data-song="${key}" data-src="${src}"><div><strong>${escapeHTML(title)}</strong><span>${selected ? 'Current museum soundtrack' : 'Set as background music'}</span></div></button>`;
}

function musicMenu() {
  return `<div class="music-menu" role="dialog" aria-label="Museum soundtrack">
    <div class="music-menu-head"><span>MUSEUM SOUNDTRACK</span><small>Choose what plays while you explore.</small></div>
    <div class="music-menu-list">
      ${SONGS.map(song => `<button class="music-choice ${state.backgroundSong === song.key ? 'selected' : ''}" data-music-choice="${song.key}" data-src="${song.src}"><span><strong>${escapeHTML(song.title)}</strong>${song.artist ? `<small>${escapeHTML(song.artist)}</small>` : ''}</span><i>${state.backgroundSong === song.key ? 'PLAYING' : 'PLAY'}</i></button>`).join('')}
    </div>
  </div>`;
}

function envelope(key, title) {
  return `<button class="envelope" data-envelope="${key}"><span class="wax">J</span><strong>${escapeHTML(title)}</strong></button>`;
}

function secretRoom() {
  if (!state.secretRevealed) {
    return `<section class="secret-lock"><div><div class="kicker">CLASSIFIED · ONE VISITOR ONLY</div><h2>The curator left one room unexplained.</h2><p class="subtle">Some things are meant to be discovered, not introduced.</p><button class="hold-button" data-action="hold-secret"><span>Press and hold to open</span></button></div></section>`;
  }
  return `<section class="secret-reveal"><div class="secret-reveal-inner">
    <div class="kicker">PRIVATE ACQUISITION · NOT FOR PUBLIC DISPLAY</div>
    <p>There are memories in this museum because we already lived them.</p>
    <p>There are empty frames because I hope we get to fill them.</p>
    <p>But if I could keep one thing in the permanent collection, it would not be a photo, a trip, a date, or an artifact.</p>
    <blockquote>It would be us choosing each other, again and again.</blockquote>
    <p>On the good days. On the difficult ones. On the days when we are both masungit. On the days when nothing worth photographing happens.</p>
    <p class="serif" style="font-size:2rem;color:var(--wine)">I love you, Babi.</p>
    <div class="secret-status">Acquisition status: Permanent · Not for sale · Not for loan</div>
  </div></section>`;
}

function guestbookRoom() {
  const saved = localStorage.getItem(STORAGE.guestbook);
  if (saved) {
    return `<section class="permanent-entry"><div class="kicker">VISITOR ENTRY · PERMANENT COLLECTION</div><blockquote>“${escapeHTML(saved)}”</blockquote><p><strong>Jirby</strong><br><small>The One Visitor · ${escapeHTML(formatStoredDate(localStorage.getItem(STORAGE.guestbookDate)))}</small></p></section>
    <div class="next-sentinel" data-final-sentinel></div><div class="next-door-wrap" data-final-door><button class="next-door" data-action="finish-museum"><span>END OF EXHIBITION</span><strong>Close the collection</strong></button></div>`;
  }
  return `<section class="guestbook-card"><div class="kicker">LEAVE A NOTE BEFORE YOU GO</div><h2>Museum Guestbook</h2><p>One permanent entry. No edits. No second draft.</p><textarea id="guestbook-text" maxlength="800" placeholder="Write one note for the permanent collection…"></textarea><button class="primary" data-action="save-guestbook">Sign the Guestbook</button><small style="margin-top:16px">Automatically signed: Jirby · The One Visitor</small></section>`;
}

function finalScreen() {
  return `<section class="final-screen final-cinematic"><div class="final-light"></div><div class="final-copy"><h1>MUSEUM OF US</h1><p>Thank you for visiting, Babi.</p><button class="curator-signature final-curator" data-action="curator-easter" aria-label="Curated by Jordan">Curated by Jordan</button><small>For one visitor only.</small></div></section>`;
}

function letterOverlay() {
  const info = state.overlayLetter === 'main'
    ? { title: 'To my Babi', body: MAIN_LETTER, sign: '— Jordan' }
    : OPEN_WHEN[state.overlayLetter];
  return `<div class="overlay" data-action="overlay-bg"><article class="letter-panel" data-letter-panel><button class="close-letter" data-action="close-letter">CLOSE</button><div class="kicker">PRIVATE CORRESPONDENCE</div><h2>${escapeHTML(info.title)}</h2><p>${escapeHTML(info.body)}</p>${info.sign ? `<p class="serif" style="font-size:2rem">${escapeHTML(info.sign)}</p>` : ''}</article></div>`;
}

function mapOverlay() {
  const visited = state.visitedThisVisit;
  return `<section class="map-modal"><button class="map-close" data-action="close-map">CLOSE</button><div class="map-inner"><div class="kicker">EXHIBITION PLAN</div><h2>Museum Map</h2><p class="subtle">The route is chronological. The map remembers where you are, but it does not let you skip the journey.</p><div class="floorplan">${ROOMS.map((room, idx) => {
    const visible = idx <= state.room;
    const cls = idx === state.room ? 'current' : visited.has(idx) ? 'visited' : '';
    return `<div class="floor-room ${cls}"><span class="room-number">${String(idx+1).padStart(2,'0')}</span><strong>${visible ? escapeHTML(room.title) : 'CLASSIFIED'}</strong>${idx === state.room ? `<span class="you-here">You are here</span>` : ''}</div>`;
  }).join('')}</div><p class="map-progress">${visited.size} of ${ROOMS.length} exhibits explored this visit.</p></div></section>`;
}

function settingsDrawer() {
  const first = formatStoredDate(localStorage.getItem(STORAGE.firstVisit));
  const guest = localStorage.getItem(STORAGE.guestbook) ? 'Archived permanently on this device' : 'No entry yet';
  return `<div class="drawer-backdrop" data-action="drawer-bg"></div><aside class="drawer"><button class="drawer-close" data-action="close-settings">CLOSE</button><div class="kicker">MUSEUM INFORMATION</div><h2>Settings</h2>
    <div class="settings-row"><strong>Current visit</strong><small>${state.visitedThisVisit.size} of ${ROOMS.length} exhibits explored</small></div>
    <div class="settings-row"><strong>First visit</strong><small>${escapeHTML(first)}</small></div>
    <div class="settings-row"><strong>Guestbook</strong><small>${escapeHTML(guest)}</small></div>
    <button class="reset-danger" data-action="reset-museum">Reset Museum</button>
    <small style="margin-top:12px">Hidden administrative action. Use with emotional caution.</small>
  </aside>`;
}

function bindEvents() {
  document.querySelectorAll('[data-action]').forEach(el => {
    const action = el.dataset.action;
    if (action === 'to-verify') el.onclick = () => { state.view = 'verify'; render(); setTimeout(() => document.querySelector('#gate-answer')?.focus(), 20); };
    if (action === 'return-enter') el.onclick = () => { resetVisitState(); startBackground(); state.view = 'foyer'; render(); };
    if (action === 'verify') el.onclick = verifyGate;
    if (action === 'appeal') el.onclick = () => { state.answerAttempts = 0; state.gateAnswer = ''; state.view = 'verify'; render(); };
    if (action === 'start-journey') el.onclick = () => { resetVisitState(); state.view = 'hall'; state.room = 0; tone('chime'); render(); window.scrollTo(0,0); };
    if (action === 'next-room') el.onclick = nextRoom;
    if (action === 'open-map') el.onclick = () => { state.map = true; render(); };
    if (action === 'close-map') el.onclick = () => { state.map = false; render(); };
    if (action === 'open-settings') el.onclick = () => { state.drawer = true; state.musicMenu = false; render(); };
    if (action === 'toggle-music-menu') el.onclick = () => { state.musicMenu = !state.musicMenu; render(); };
    if (action === 'close-settings' || action === 'drawer-bg') el.onclick = () => { state.drawer = false; render(); };
    if (action === 'overlay-bg') el.onclick = (e) => { if (e.target === el) { state.overlayLetter = null; render(); } };
    if (action === 'close-letter') el.onclick = () => { state.overlayLetter = null; render(); };
    if (action === 'open-main-letter') el.onclick = () => { state.mainLetterOpened = true; state.overlayLetter = 'main'; tone('paper'); render(); };
    if (action === 'quiz-submit') el.onclick = submitQuiz;
    if (action === 'hold-secret') bindSecretHold(el);
    if (action === 'save-guestbook') el.onclick = saveGuestbook;
    if (action === 'finish-museum') el.onclick = finishMuseum;
    if (action === 'reset-museum') el.onclick = resetMuseum;
    if (action === 'curator-easter') el.onclick = curatorEasterEgg;
  });

  document.querySelectorAll('[data-hall-room]').forEach(btn => {
    btn.onclick = () => { const idx = Number(btn.dataset.hallRoom); if (idx !== state.room) return; state.view = 'room'; markVisited(idx); if (idx === 11) state.musicUnlocked = true; preloadRoomAssets(idx); preloadRoomAssets(idx + 1); tone('chime'); render(); window.scrollTo(0,0); };
  });
  setupHallPan();

  const gateInput = document.querySelector('#gate-answer');
  if (gateInput) {
    gateInput.oninput = e => state.gateAnswer = e.target.value;
    gateInput.onkeydown = e => { if (e.key === 'Enter') verifyGate(); };
  }

  const quizInput = document.querySelector('#quiz-answer');
  if (quizInput) {
    quizInput.oninput = e => { state.quizAnswer = e.target.value; state.quizFeedback = ''; };
    quizInput.onkeydown = e => { if (e.key === 'Enter') submitQuiz(); };
  }

  document.querySelectorAll('[data-reason]').forEach(btn => {
    btn.onclick = () => {
      const idx = Number(btn.dataset.reason);
      state.reasonsOpened.add(idx);
      tone('chime');
      if (state.reasonsOpened.size === REASONS.length) vibrate(18);
      render();
    };
  });

  document.querySelectorAll('[data-envelope]').forEach(btn => {
    btn.onclick = () => { state.overlayLetter = btn.dataset.envelope; tone('paper'); render(); };
  });

  document.querySelectorAll('[data-song]').forEach(btn => {
    btn.onclick = () => toggleSong(btn.dataset.song, btn.dataset.src);
  });

  document.querySelectorAll('[data-music-choice]').forEach(btn => {
    btn.onclick = () => selectBackgroundSong(btn.dataset.musicChoice, btn.dataset.src);
  });

  const track = document.querySelector('[data-gallery-track]');
  if (track) setupGallery(track);
}

function verifyGate() {
  const normalized = state.gateAnswer.trim().toLowerCase();
  if (normalized === 'baguio') {
    localStorage.setItem(STORAGE.verified, '1');
    if (!localStorage.getItem(STORAGE.firstVisit)) localStorage.setItem(STORAGE.firstVisit, new Date().toISOString());
    state.answerAttempts = 0;
    state.gateAnswer = '';
    state.view = 'confirmed';
    startBackground();
    tone('success'); vibrate([24, 30, 24]);
    render();
    clearTimeout(state._confirmTimer);
    state._confirmTimer = setTimeout(() => { state.view = 'foyer'; render(); }, 2200);
    return;
  }
  state.answerAttempts += 1;
  state.gateAnswer = '';
  if (state.answerAttempts >= 3) {
    state.view = 'breakup'; tone('chime');
  }
  render();
}

function markVisited(i) {
  state.visitedThisVisit.add(i);
  const history = Math.max(Number(localStorage.getItem(STORAGE.historyMax) || 0), i + 1);
  localStorage.setItem(STORAGE.historyMax, String(history));
}

function nextRoom() {
  if (state.room >= ROOMS.length - 1 || state._transitioning) return;
  preloadRoomAssets(state.room + 1);
  state._transitioning = true;
  const main = document.querySelector('.museum-main');
  if (main) main.classList.add('exhibit-exiting');
  tone('chime');
  setTimeout(() => {
    state.room += 1;
    state.overlayLetter = null;
    state.map = false;
    state.drawer = false;
    state.view = 'hall';
    state._transitioning = false;
    window.scrollTo({ top: 0, behavior: 'auto' });
    render();
  }, main ? 620 : 0);
}

function setupRoomObservers() {
  const sentinel = document.querySelector('[data-next-sentinel]');
  const door = document.querySelector('[data-next-door]');
  if (sentinel && door && door.querySelector('button')) {
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) door.classList.add('visible');
    }, { threshold: 0.1 });
    io.observe(sentinel);
  }
  const finalSentinel = document.querySelector('[data-final-sentinel]');
  const finalDoor = document.querySelector('[data-final-door]');
  if (finalSentinel && finalDoor) {
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) finalDoor.classList.add('visible');
    }, { threshold: 0.1 });
    io.observe(finalSentinel);
  }
}

function setupGallery(track) {
  const slides = [...track.querySelectorAll('[data-gallery-slide]')];
  let ticking = false;
  const update = () => {
    ticking = false;
    const idx = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
    if (idx !== state.galleryIndex) {
      state.galleryIndex = idx;
      if (idx >= 6) vibrate(15);
      updateGalleryTone(slides[idx]);
      if (idx >= 6) {
        setTimeout(() => {
          const door = document.querySelector('[data-next-door]');
          if (door && !door.querySelector('button')) {
            door.innerHTML = `<button class="next-door" data-action="next-room"><span>NEXT EXHIBIT</span><strong>Reasons I Love You</strong></button>`;
            door.querySelector('button').onclick = nextRoom;
          }
          if (door) door.classList.add('visible');
          document.querySelector('.requirement-note')?.remove();
        }, 250);
      }
    }
  };
  track.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  updateGalleryTone(slides[state.galleryIndex]);
}

function updateGalleryTone(slide) {
  const shell = document.querySelector('[data-gallery-shell]');
  const img = slide?.querySelector('img');
  if (!shell) return;
  if (!img) { shell.style.setProperty('--gallery-tone', '#eadcc8'); return; }
  const sample = () => {
    try {
      const canvas = document.createElement('canvas'); canvas.width = 16; canvas.height = 16;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, 16, 16);
      const data = ctx.getImageData(0, 0, 16, 16).data;
      let r=0,g=0,b=0,n=0;
      for (let i=0;i<data.length;i+=16) { r+=data[i]; g+=data[i+1]; b+=data[i+2]; n++; }
      r=Math.round((r/n)*.23 + 243*.77); g=Math.round((g/n)*.23 + 234*.77); b=Math.round((b/n)*.23 + 217*.77);
      shell.style.setProperty('--gallery-tone', `rgb(${r},${g},${b})`);
    } catch { shell.style.setProperty('--gallery-tone', '#eadcc8'); }
  };
  if (img.complete) sample(); else img.addEventListener('load', sample, { once: true });
}

function submitQuiz() {
  const value = (document.querySelector('#quiz-answer')?.value ?? state.quizAnswer).trim();
  if (!value) return;
  const q = QUIZ[state.quizStep];
  if (state.quizStep === 3) {
    state.quizFeedback = `Correct. But the real answer is obviously my cute face.`;
    state.quizStep = 4;
    state.quizAnswer = '';
    tone('success'); vibrate([18,20,18]);
    render();
    return;
  }
  const normalized = value.toLowerCase().replace(/\s+/g, ' ');
  const ok = q.answers.some(a => normalized === a.toLowerCase());
  if (ok) {
    state.quizStep += 1;
    state.quizAnswer = '';
    state.quizFeedback = '';
    tone('success');
    render();
    setTimeout(() => document.querySelector('#quiz-answer')?.focus(), 30);
  } else {
    state.quizFeedback = q.wrong;
    tone('chime');
    render();
  }
}

function selectBackgroundSong(key, src) {
  const selected = SONGS.find(song => song.key === key);
  if (!selected) return;
  state.backgroundSong = key;
  state.activeSong = null;
  state.musicMenu = false;
  state.nowPlayingToast = selected.artist ? `${selected.title} — ${selected.artist}` : selected.title;
  clearTimeout(state._nowPlayingTimer);
  state._nowPlayingTimer = setTimeout(() => { state.nowPlayingToast = ''; if (state.view !== 'boot') render(); }, 2600);
  songAudio.pause();
  songAudio.currentTime = 0;
  bgAudio.pause();
  bgAudio.src = src || selected.src;
  bgAudio.loop = true;
  bgAudio.currentTime = 0;
  bgAudio.play().catch(() => {});
  tone('chime');
  render();
}

function toggleSong(key, src) {
  selectBackgroundSong(key, src);
}

function bindSecretHold(el) {
  let timer = null;
  let completed = false;
  const start = (e) => {
    e.preventDefault();
    if (completed) return;
    el.classList.add('holding');
    vibrate(15);
    timer = setTimeout(() => {
      completed = true;
      state.secretRevealed = true;
      tone('success'); vibrate([30,45,30]);
      render();
    }, 2400);
  };
  const cancel = () => {
    clearTimeout(timer); timer = null;
    if (!completed) el.classList.remove('holding');
  };
  el.addEventListener('pointerdown', start);
  el.addEventListener('pointerup', cancel);
  el.addEventListener('pointercancel', cancel);
  el.addEventListener('pointerleave', cancel);
}

function saveGuestbook() {
  const text = document.querySelector('#guestbook-text')?.value.trim();
  if (!text) { showToast('The guestbook is waiting for a note.'); return; }
  localStorage.setItem(STORAGE.guestbook, text);
  localStorage.setItem(STORAGE.guestbookDate, new Date().toISOString());
  tone('paper'); vibrate(18);
  render();
}

function finishMuseum() {
  localStorage.setItem(STORAGE.completedOnce, '1');
  state.view = 'final';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

function resetMuseum() {
  const first = confirm('RESET THE MUSEUM?\n\nAre you sure? The curator will be emotionally devastated.');
  if (!first) return;
  const second = confirm('Destroy Our History?\n\nThis clears the remembered device, first visit, guestbook, and museum history stored in this browser.');
  if (!second) return;
  Object.values(STORAGE).forEach(k => localStorage.removeItem(k));
  pauseBackground(); songAudio.pause();
  state.view = 'invite';
  state.answerAttempts = 0;
  state.gateAnswer = '';
  resetVisitState();
  state.drawer = false;
  state.map = false;
  alert('Wow. You really pressed it.');
  render();
}

function queueBaguioHaptic() {
  clearTimeout(state._baguioHaptic);
  state._baguioHaptic = setTimeout(() => vibrate(24), 1500);
}


// --- Final museum polish: parallax, focus lighting, and quiet procedural ambience ---
let roomAudio = null;

function stopRoomAmbience() {
  if (!roomAudio) return;
  try {
    roomAudio.nodes.forEach(n => { try { n.stop?.(); } catch {} try { n.disconnect?.(); } catch {} });
    roomAudio.master?.disconnect?.();
  } catch {}
  roomAudio = null;
}

function startRoomAmbience(roomIndex) {
  stopRoomAmbience();
  if (state.activeSong) return;
  // Only rooms where atmosphere adds something. Other galleries stay intentionally quiet.
  const profiles = {
    1: ['cafe', 0.008], 2: ['street', 0.006], 5: ['projector', 0.005],
    6: ['wind', 0.007], 11: ['vinyl', 0.004], 12: ['paper', 0.004],
    13: ['paper', 0.0035], 14: ['home', 0.004], 15: ['secret', 0.005]
  };
  const profile = profiles[roomIndex];
  if (!profile) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const master = ctx.createGain();
    master.gain.value = profile[1];
    master.connect(ctx.destination);
    const nodes = [];
    const noise = (filterType, freq, q=0.7) => {
      const buffer = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i=0;i<data.length;i++) data[i] = (Math.random()*2-1) * (0.35 + Math.random()*0.15);
      const src = ctx.createBufferSource(); src.buffer = buffer; src.loop = true;
      const filter = ctx.createBiquadFilter(); filter.type = filterType; filter.frequency.value = freq; filter.Q.value = q;
      src.connect(filter).connect(master); src.start(); nodes.push(src, filter);
    };
    const osc = (type, freq, gainValue=0.08) => {
      const o=ctx.createOscillator(), g=ctx.createGain(); o.type=type; o.frequency.value=freq; g.gain.value=gainValue;
      o.connect(g).connect(master); o.start(); nodes.push(o,g); return o;
    };
    switch(profile[0]) {
      case 'cafe': noise('lowpass', 520); osc('sine', 78, .045); break;
      case 'street': noise('lowpass', 360); osc('sine', 52, .025); break;
      case 'projector': noise('bandpass', 1150, 1.2); osc('square', 24, .012); break;
      case 'wind': noise('bandpass', 620, .45); break;
      case 'vinyl': noise('highpass', 1800, .5); break;
      case 'paper': noise('highpass', 2500, .6); master.gain.value *= .62; break;
      case 'home': noise('lowpass', 260); master.gain.value *= .75; break;
      case 'secret': osc('sine', 46, .065); noise('lowpass', 170); break;
    }
    roomAudio = { ctx, master, nodes };
  } catch {}
}

function setupRoomPolish() {
  const main = document.querySelector('.museum-main');
  if (!main) return;
  const historyMax = Number(localStorage.getItem(STORAGE.historyMax) || 0);
  if (historyMax > state.room || localStorage.getItem(STORAGE.completedOnce)) main.classList.add('memory-glow');
  let raf = 0;
  const setParallax = (x, y) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      main.style.setProperty('--px', x.toFixed(3));
      main.style.setProperty('--py', y.toFixed(3));
    });
  };
  main.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') return;
    const r = main.getBoundingClientRect();
    setParallax(((e.clientX-r.left)/r.width-.5)*2, ((e.clientY-r.top)/Math.max(r.height,1)-.5)*2);
  }, {passive:true});
  main.addEventListener('pointerleave', () => setParallax(0,0), {passive:true});
  const onScroll = () => {
    const max = Math.max(document.documentElement.scrollHeight-innerHeight,1);
    const y = Math.max(-1,Math.min(1,(scrollY/max)*2-1));
    main.style.setProperty('--scroll-depth', y.toFixed(3));
  };
  addEventListener('scroll', onScroll, {passive:true, once:false});
  onScroll();

  const focusables = [...main.querySelectorAll('.artifact,.museum-card,.reveal,.baguio-room,.counter-installation,.gallery-shell,.reasons-grid,.quiz-shell,.songs-grid,.envelope-grid,.sealed-letter,.future-piece,.incomplete,.secret-lock,.secret-reveal,.guestbook')];
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('museum-focus', entry.isIntersecting && entry.intersectionRatio > .42)), {threshold:[.2,.42,.7], rootMargin:'-12% 0px -12%'});
    focusables.forEach(el => io.observe(el));
  }
}

function curatorEasterEgg() {
  state.curatorTapCount = (state.curatorTapCount || 0) + 1;
  clearTimeout(state._curatorTapTimer);
  state._curatorTapTimer = setTimeout(() => { state.curatorTapCount = 0; }, 1800);
  if (state.curatorTapCount >= 5) {
    state.curatorTapCount = 0;
    showToast('Curator note: still obsessed with the one visitor.');
    tone('chime');
    vibrate(12);
  }
}

function preloadRoomAssets(roomIndex) {
  if (roomIndex < 0 || roomIndex >= ROOMS.length) return;
  const imageSources = {
    5: ['./assets/photos/hoppers-sticker-1.jpeg','./assets/photos/hoppers-sticker-2.jpeg','./assets/photos/life4cuts.jpeg'],
    6: ['./assets/photos/baguio-1.jpeg','./assets/photos/baguio-2.jpeg','./assets/photos/baguio-3.jpeg'],
    8: ['./assets/photos/photo-1.jpeg','./assets/photos/photo-2.jpeg','./assets/photos/photo-3.jpeg','./assets/photos/photo-4.jpeg','./assets/photos/photo-5.jpeg','./assets/photos/photo-6.png']
  };
  (imageSources[roomIndex] || []).forEach(src => {
    const img = new Image();
    img.decoding = 'async';
    img.src = src;
  });
  if (roomIndex === 11) {
    SONGS.forEach(song => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'audio';
      link.href = song.src;
      document.head.appendChild(link);
    });
  }
}

function musicIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>`;
}

function mapIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6.5 8.2 4l7.6 2.5L21 4v13.5L15.8 20l-7.6-2.5L3 20V6.5Z"/><path d="M8.2 4v13.5M15.8 6.5V20"/></svg>`;
}
function gearIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.1a1.7 1.7 0 0 0 1.1 1.6 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.3.35.52.7.6 1.1h1v4h-1a1.7 1.7 0 0 0-.6.9Z"/></svg>`;
}

render();
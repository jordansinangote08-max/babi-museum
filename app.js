/* =========================================================
   MUSEUM OF US
   A private exhibition. Curated by Jordan, for one visitor.

   Architecture
     1. Collection ...... content (rooms, labels, letters)
     2. State ........... a single plain object
     3. Instruments ..... audio, haptics, dates, escaping
     4. Views ........... pure functions returning HTML strings
     5. Renderer ........ morphs the DOM instead of replacing it
     6. Installations ... observers, parallax, room ambience
     7. Actions ......... one delegated listener for the whole museum
   ========================================================= */

const MANILA_TZ = 'Asia/Manila';
const MET_ON = '2026-01-25';
const OFFICIAL_ON = '2026-07-25';

const STORAGE = {
  verified: 'mou_verified_v2',
  firstVisit: 'mou_first_visit_v2',
  guestbook: 'mou_guestbook_v2',
  guestbookDate: 'mou_guestbook_date_v2',
  historyMax: 'mou_history_max_v2',
  visits: 'mou_visits_v3'
};

/* ---------- 1. Collection ---------- */

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

/* Each hall object: [css kind, plaque title, gallery wing] */
const HALL_OBJECTS = [
  ['watch', 'The Watch He Forgot', 'WEST WING'],
  ['coffee', 'The Early Days', 'WEST WING'],
  ['street', 'The Ordinary Collection', 'WEST WING'],
  ['closed', 'Temporary Closures', 'WEST WING'],
  ['shirt', 'Bodega Sale', 'WEST WING'],
  ['strip', 'Dates & Memories', 'CENTRAL HALL'],
  ['mountain', 'Baguio', 'CENTRAL HALL'],
  ['numbers', 'The Numbers', 'CENTRAL HALL'],
  ['portrait', 'Our Photos', 'CENTRAL HALL'],
  ['cards', 'Reasons I Love You', 'CENTRAL HALL'],
  ['quiz', 'Boyfriend Quiz', 'EAST WING'],
  ['record', 'Our Songs', 'EAST WING'],
  ['envelopes', 'Open When…', 'EAST WING'],
  ['letter', 'A Letter for You', 'EAST WING'],
  ['future', 'Future Collection', 'EAST WING'],
  ['door', 'Secret Exhibit', 'LOWER LEVEL'],
  ['book', 'Museum Guestbook', 'LOWER LEVEL']
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

/* Museum wall labels: the didactic panel beside each piece.
   accession · title · date · medium · credit line */
const WALL_LABELS = {
  watch: {
    acc: '2026.01.25.a',
    title: 'The Watch He Forgot',
    date: 'January 25, 2026',
    medium: 'One wristwatch; one entirely unnecessary second meeting.',
    credit: 'Collection of Jordan & Jirby. Acquired by accident.'
  },
  highlight: {
    acc: '2026.02.b',
    title: 'The Missing Highlight Photo',
    date: 'Date unrecorded',
    medium: 'Digital photograph, since withdrawn from public display.',
    credit: 'Formerly Instagram Highlights. Deaccessioned without notice.'
  },
  gunita: {
    acc: '2026.03.c',
    title: 'Gunita Kopi',
    date: 'Early 2026',
    medium: 'One table, two coffees, and something personal said out loud for the first time.',
    credit: 'Contents of the conversation withheld at the curator’s request.'
  },
  cuppremo: {
    acc: '2026.03.d',
    title: 'Coffee Hunting, Valenzuela',
    date: 'Ongoing',
    medium: 'Field study. Chocolate for one, cookies for the other.',
    credit: 'Research continues indefinitely.'
  },
  street: {
    acc: '2026.04.e',
    title: 'Somewhere Near Your Street',
    date: 'Recurring',
    medium: 'Banana bread, dragon fruit, and one person quietly waiting.',
    credit: 'Gift of the artist, delivered on foot.'
  },
  wellness: {
    acc: '2026.04.f',
    title: 'The Jorby Wellness Program',
    date: 'Continuous operation',
    medium: 'Labour, performed with and without prior authorization.',
    credit: 'On permanent loan. Terms non-negotiable.'
  },
  comfort: {
    acc: '2026.04.g',
    title: 'The Things We Keep Eating',
    date: 'Recurring',
    medium: 'Palabok, champorado, sinigang, sisig.',
    credit: 'Kitchen archive of Jirby.'
  },
  bodega: {
    acc: '2026.05.h',
    title: 'The Bodega Sale Incident',
    date: '2026',
    medium: 'One garment, worn by two parties. Disputed provenance.',
    credit: 'Under review. The curator has found insufficient evidence.'
  },
  hoppers: {
    acc: '2026.06.i',
    title: 'Hoppers',
    date: '2026',
    medium: 'One cinema, two seats, no particular occasion.',
    credit: 'Admission stubs not retained.'
  },
  strip: {
    acc: '2026.02.28',
    title: 'The First Photobooth',
    date: 'February 28, 2026',
    medium: 'Life4Cuts photographic strip. Original, unretouched.',
    credit: 'Life4Cuts, Trinoma. The actual strip, preserved.'
  },
  baguio: {
    acc: '2026.07.25',
    title: 'Baguio',
    date: 'July 25, 2026',
    medium: 'Pine, fog, one unresolved argument, and four words.',
    credit: 'The piece around which this collection is organised.'
  }
};

const SONGS = [
  { key: 'those-eyes', title: 'Those Eyes', artist: 'New West', src: './assets/audio/those-eyes.mp3' },
  { key: 'who-knows', title: 'Who Knows', artist: '', src: './assets/audio/who-knows.mp3' },
  { key: 'honeybee', title: 'Honeybee', artist: '', src: './assets/audio/honeybee.mp3' },
  { key: 'kabisado', title: 'Kabisado', artist: 'IV OF SPADES', src: './assets/audio/kabisado.mp3' }
];

/* Photographs in Our Photos. Responsive derivatives live in assets/photos/opt. */
const GALLERY = [
  { base: 'photo-1', widths: [640, 1000, 1200], ratio: '2 / 3' },
  { base: 'photo-2', widths: [640, 1000, 1152], ratio: '3 / 4' },
  { base: 'photo-3', widths: [640, 1000, 1152], ratio: '3 / 4' },
  { base: 'photo-4', widths: [640, 1000, 1400], ratio: '3 / 4' },
  { base: 'photo-5', widths: [640, 1000, 1400], ratio: '3 / 4' },
  { base: 'photo-6', widths: [640, 1000, 1400], ratio: '4 / 5' }
];

/* ---------- 2. State ---------- */

const state = {
  view: 'boot',
  answerAttempts: 0,
  gateAnswer: '',
  room: 0,
  visited: new Set(),
  reasonsOpened: new Set(),
  quizStep: 0,
  quizAnswer: '',
  quizFeedback: '',
  galleryIndex: 0,
  galleryTone: '',
  doorVisible: false,
  mainLetterOpened: false,
  secretRevealed: false,
  overlayLetter: null,
  drawer: false,
  map: false,
  ticket: false,
  toast: '',
  musicUnlocked: false,
  musicMenu: false,
  backgroundSong: 'those-eyes',
  serial: '0000'
};

function resetVisitState() {
  state.room = 0;
  state.visited = new Set();
  state.reasonsOpened = new Set();
  state.quizStep = 0;
  state.quizAnswer = '';
  state.quizFeedback = '';
  state.galleryIndex = 0;
  state.galleryTone = '';
  state.doorVisible = false;
  state.mainLetterOpened = false;
  state.secretRevealed = false;
  state.overlayLetter = null;
  state.musicUnlocked = false;
  state.musicMenu = false;
  state.ticket = false;
  state.backgroundSong = 'those-eyes';
}

/* ---------- 3. Instruments ---------- */

const app = document.querySelector('#app');
const bgAudio = document.querySelector('#background-audio');
bgAudio.volume = 0.24;

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

function escapeHTML(str = '') {
  return str.replace(/[&<>'"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch]));
}

/* One AudioContext for the whole museum. Creating one per sound exhausts the
   browser's limit (Safari caps at ~4) and leaks memory on every render. */
let audioCtx = null;
function ctx() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
  return audioCtx;
}

function tone(type = 'chime') {
  const c = ctx();
  if (!c) return;
  const gain = c.createGain();
  gain.connect(c.destination);
  const peak = type === 'paper' ? 0.018 : type === 'stamp' ? 0.05 : 0.045;
  const tail = type === 'paper' ? 0.26 : type === 'stamp' ? 0.2 : 0.52;
  gain.gain.setValueAtTime(0.0001, c.currentTime);
  gain.gain.exponentialRampToValueAtTime(peak, c.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + tail);

  if (type === 'paper' || type === 'stamp') {
    const len = Math.floor(c.sampleRate * (type === 'stamp' ? 0.2 : 0.28));
    const buffer = c.createBuffer(1, len, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const source = c.createBufferSource();
    source.buffer = buffer;
    const filter = c.createBiquadFilter();
    filter.type = type === 'stamp' ? 'lowpass' : 'bandpass';
    filter.frequency.value = type === 'stamp' ? 420 : 1500;
    filter.Q.value = 0.8;
    source.connect(filter).connect(gain);
    source.start();
    source.stop(c.currentTime + tail + 0.05);
  } else {
    const osc = c.createOscillator();
    osc.type = 'sine';
    const from = type === 'success' ? 523.25 : 392;
    const to = type === 'success' ? 659.25 : 523.25;
    osc.frequency.setValueAtTime(from, c.currentTime);
    osc.frequency.exponentialRampToValueAtTime(to, c.currentTime + 0.34);
    osc.connect(gain);
    osc.start();
    osc.stop(c.currentTime + 0.55);
    osc.onended = () => gain.disconnect();
  }
}

function vibrate(pattern) {
  try { navigator.vibrate?.(pattern); } catch {}
}

function startBackground() {
  const song = SONGS.find(s => s.key === state.backgroundSong) || SONGS[0];
  if (!bgAudio.currentSrc.endsWith(song.src.slice(1))) bgAudio.src = song.src;
  bgAudio.loop = true;
  bgAudio.play().catch(() => {});
}
function pauseBackground() { bgAudio.pause(); }

/* ---------- Dates ---------- */

function manilaParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: MANILA_TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23'
  }).formatToParts(date);
  return Object.fromEntries(parts.map(p => [p.type, p.value]));
}

function museumIsOpen() {
  if (new URLSearchParams(location.search).has('preview')) return true;
  const p = manilaParts();
  return p.day === '25' || p.day === '26';
}

function formatStoredDate(iso) {
  if (!iso) return 'Not recorded yet';
  return new Intl.DateTimeFormat('en-US', {
    timeZone: MANILA_TZ, month: 'long', day: 'numeric', year: 'numeric'
  }).format(new Date(iso));
}

function daysSince(dateString) {
  const start = new Date(`${dateString}T00:00:00+08:00`);
  return Math.max(0, Math.floor((Date.now() - start) / 86400000));
}

/* Admission serial: stable for a given visit, printed on the ticket. */
function issueTicket() {
  const count = Number(localStorage.getItem(STORAGE.visits) || 0) + 1;
  localStorage.setItem(STORAGE.visits, String(count));
  const p = manilaParts();
  state.serial = `${p.year.slice(2)}${p.month}${p.day}-${String(count).padStart(3, '0')}`;
}

let toastTimer = 0;
function showToast(msg) {
  state.toast = msg;
  render();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { state.toast = ''; render(); }, 2800);
}

/* ---------- 5. Renderer ----------
   The museum re-renders on every interaction. Replacing app.innerHTML each time
   destroyed and rebuilt every node — images reloaded and flashed, the gallery
   lost its scroll position, observers and listeners were re-created and leaked.
   Instead we build the next tree off-screen and morph the live DOM into it, so
   only what actually changed is touched. */

const scratch = document.createElement('div');

function morphAttributes(live, next) {
  const liveAttrs = live.attributes;
  for (let i = liveAttrs.length - 1; i >= 0; i--) {
    const name = liveAttrs[i].name;
    if (!next.hasAttribute(name)) live.removeAttribute(name);
  }
  for (const { name, value } of next.attributes) {
    if (live.getAttribute(name) !== value) live.setAttribute(name, value);
  }
  // Never yank the text out from under someone who is typing.
  const tag = live.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA') {
    if (live !== document.activeElement) {
      const value = next.getAttribute('value') ?? next.value ?? '';
      if (live.value !== value) live.value = value;
    }
  }
}

function morphNode(live, next) {
  if (live.nodeType === Node.TEXT_NODE) {
    if (live.nodeValue !== next.nodeValue) live.nodeValue = next.nodeValue;
    return;
  }
  morphAttributes(live, next);
  morphChildren(live, next);
}

function morphChildren(live, next) {
  const liveKids = Array.from(live.childNodes);
  const nextKids = Array.from(next.childNodes);
  const len = Math.max(liveKids.length, nextKids.length);
  for (let i = 0; i < len; i++) {
    const a = liveKids[i];
    const b = nextKids[i];
    if (!b) { a.remove(); continue; }
    if (!a) { live.appendChild(b); continue; }
    if (a.nodeType !== b.nodeType || a.nodeName !== b.nodeName) { a.replaceWith(b); continue; }
    morphNode(a, b);
  }
}

function patch(html) {
  scratch.innerHTML = html;
  morphChildren(app, scratch);
  scratch.textContent = '';
}

let renderQueued = false;
function render() {
  if (renderQueued) return;
  renderQueued = true;
  requestAnimationFrame(() => {
    renderQueued = false;
    draw();
  });
}

function drawNow() { renderQueued = false; draw(); }

function draw() {
  if (!museumIsOpen()) {
    pauseBackground();
    patch(closedScreen());
    return;
  }
  if (state.view === 'boot') {
    state.view = localStorage.getItem(STORAGE.verified) ? 'returning' : 'invite';
  }

  const screens = {
    invite: inviteScreen,
    verify: verifyScreen,
    breakup: breakupScreen,
    returning: returningScreen,
    confirmed: confirmedScreen
  };
  const chrome = { foyer: foyerScreen, hall: hallScreen, room: roomScreen, final: finalScreen };

  const html = screens[state.view]
    ? `<div class="shell">${screens[state.view]()}</div>`
    : chrome[state.view]
      ? museumChrome(chrome[state.view]())
      : `<div class="shell">${inviteScreen()}</div>`;

  patch(html + (state.toast ? `<div class="toast" role="status">${escapeHTML(state.toast)}</div>` : ''));

  if (state.view === 'room') mountRoom();
  else unmountRoom();
}

/* ---------- 4. Views ---------- */

function screen(kicker, body) {
  return `<section class="screen"><div class="screen-inner">
    <div class="kicker">${kicker}</div>${body}
  </div></section>`;
}

function closedScreen() {
  return `<div class="shell">${screen('PRIVATE COLLECTION', `
    <h1>The museum is currently closed.</h1>
    <p>Some collections are worth waiting for.</p>
    <p class="wine">The museum reopens on the 25th.</p>
    <small>Curated by Jordan · For one visitor only.</small>`)}</div>`;
}

function inviteScreen() {
  return screen('PRIVATE INVITATION', `
    <h1>You’ve been invited to a private exhibition.</h1>
    <p>One collection. One visitor.</p>
    <button class="primary" data-action="to-verify">Enter Exhibition</button>`);
}

function returningScreen() {
  return screen('MUSEUM OF US', `
    <h1>Welcome back, Babi.</h1>
    <p>The museum remembers you.</p>
    <button class="primary" data-action="return-enter">Enter Exhibition</button>`);
}

function verifyScreen() {
  const prompts = ['', 'WOW. So you don’t love me anymore?', 'Excuse me??? You have ONE chance left. Think carefully, boyfriend.'];
  const left = 3 - state.answerAttempts;
  return screen('PRIVATE EXHIBITION', `
    <h1>Admission restricted to one very specific boyfriend.</h1>
    <p>Where were we when our story officially became “us”?</p>
    <label class="visually-hidden" for="gate-answer">Where were we when our story officially became “us”?</label>
    <input class="identity-input" id="gate-answer" autocomplete="off" autocapitalize="words"
      value="${escapeHTML(state.gateAnswer)}" placeholder="Your answer" />
    <button class="primary" data-action="verify">Verify Visitor</button>
    <div class="error-line"><small>${escapeHTML(prompts[state.answerAttempts] || '')}</small></div>
    <small>${left} attempt${left === 1 ? '' : 's'} remaining</small>`);
}

function breakupScreen() {
  return screen('ADMISSION DENIED', `
    <h1>That’s it. We’re breaking up.</h1>
    <p>You don’t even remember where our story became “us.”</p>
    <div class="breakup-panel">
      <h2>Relationship terminated.</h2>
      <p class="subtle">This decision may be appealed because the curator is dramatic, not cruel.</p>
      <button class="primary" data-action="appeal">Request Reconsideration</button>
    </div>`);
}

function confirmedScreen() {
  return screen('IDENTITY CONFIRMED', `
    <h1>Apparently, you do love me.</h1>
    <p class="serif welcome-line">Welcome, Babi.</p>`);
}

function museumChrome(content) {
  const stamps = state.visited.size;
  return `<div class="shell">
    <header class="topbar">
      <div class="brand">MUSEUM OF US</div>
      <div class="top-actions">
        ${state.view !== 'foyer' ? `<button class="stub-button" data-action="open-ticket" aria-label="Your admission ticket">
          <span class="stub-serial">№ ${escapeHTML(state.serial.split('-')[1] || state.serial)}</span>
          <span class="stub-count">${stamps}<i>/${ROOMS.length}</i></span>
        </button>` : ''}
        ${state.musicUnlocked ? `<div class="music-control-wrap">
          <button class="icon-button music-button${state.musicMenu ? ' active' : ''}" aria-label="Choose museum music"
            aria-expanded="${state.musicMenu}" data-action="toggle-music-menu">${musicIcon()}</button>
          ${state.musicMenu ? musicMenu() : ''}
        </div>` : ''}
        <button class="icon-button" aria-label="Museum map" data-action="open-map">${mapIcon()}</button>
        <button class="icon-button" aria-label="Settings" data-action="open-settings">${gearIcon()}</button>
      </div>
    </header>
    ${content}
    ${state.map ? mapOverlay() : ''}
    ${state.ticket ? ticketOverlay() : ''}
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
      <p class="serif welcome-line">Welcome to our story.</p>
    </div>
    ${admissionTicket(true)}
    <button class="primary" data-action="start-journey">Enter the Gallery</button>
    <small class="foyer-sign">Curated by Jordan · For one visitor only.</small>
  </div></section>`;
}

/* The admission ticket. One stamp per exhibit, pressed as you go. */
function admissionTicket(intro = false) {
  const stamps = ROOMS.map((room, i) => {
    const done = state.visited.has(i);
    return `<i class="stamp${done ? ' stamped' : ''}" title="${escapeHTML(room.title)}">${done ? String(i + 1).padStart(2, '0') : ''}</i>`;
  }).join('');
  return `<figure class="ticket${intro ? ' ticket-intro' : ''}">
    <div class="ticket-main">
      <div class="kicker">ADMIT ONE</div>
      <strong>Museum of Us</strong>
      <small>Permanent Collection · ${ROOMS.length} exhibits</small>
      <div class="ticket-rule"></div>
      <div class="ticket-stamps">${stamps}</div>
    </div>
    <div class="ticket-stub">
      <span class="ticket-serial">№ ${escapeHTML(state.serial)}</span>
      <span class="ticket-visitor">JIRBY</span>
      <span class="ticket-role">THE ONE VISITOR</span>
    </div>
  </figure>`;
}

function ticketOverlay() {
  const stamped = state.visited.size;
  return `<div class="overlay" data-action="ticket-bg">
    <div class="ticket-panel">
      <button class="close-letter" data-action="close-ticket">CLOSE</button>
      <div class="kicker">ADMISSION</div>
      <h2>Your Ticket</h2>
      ${admissionTicket()}
      <p class="subtle ticket-note">${stamped === ROOMS.length
        ? 'Every exhibit stamped. The curator is impressed and slightly emotional.'
        : `${stamped} of ${ROOMS.length} exhibits stamped. The rest are still waiting for you.`}</p>
    </div>
  </div>`;
}

/* Responsive picture. Serves WebP first, optimised JPEG as fallback, and
   always reserves the box so nothing shifts as the image arrives. */
function picture({ base, widths, ratio, alt, sizes, cls = '', eager = false }) {
  const srcset = ext => widths.map(w => `./assets/photos/opt/${base}-${w}.${ext} ${w}w`).join(', ');
  const fallback = `./assets/photos/opt/${base}-${widths[widths.length - 1]}.jpg`;
  return `<picture class="${cls}">
    <source type="image/webp" srcset="${srcset('webp')}" sizes="${sizes}">
    <img src="${fallback}" srcset="${srcset('jpg')}" sizes="${sizes}" alt="${escapeHTML(alt)}"
      style="aspect-ratio:${ratio}" loading="${eager ? 'eager' : 'lazy'}"
      decoding="async" draggable="false">
  </picture>`;
}

function hallScreen() {
  const completed = state.room;
  const objects = HALL_OBJECTS.map(([kind, title], idx) => {
    const status = idx < completed ? 'completed' : idx === completed ? 'unlocked' : 'locked';
    const label = idx > completed ? 'CLASSIFIED' : title;
    const sub = status === 'unlocked' ? 'ENTER EXHIBIT' : status === 'completed' ? 'ARCHIVED' : 'LOCKED';
    /* --tier staggers the hang like a salon wall. It is computed here because
       calc() has no modulo operator: `var(--slot) % 3` is invalid and silently
       dropped the whole declaration. */
    return `<button class="hall-object ${kind} ${status}" data-hall-room="${idx}" style="--slot:${idx};--tier:${idx % 3}"
      ${idx === completed ? `aria-label="Enter exhibit ${idx + 1}, ${escapeHTML(title)}"` : 'disabled'}>
      <span class="object-art" aria-hidden="true"><i></i></span>
      <span class="object-label">
        <b>${String(idx + 1).padStart(2, '0')}</b>
        <strong>${escapeHTML(label)}</strong>
        <small>${sub}</small>
      </span>
    </button>`;
  }).join('');

  /* Wing signage sits on the wall itself, so it pans with the room. */
  const wings = [...new Set(HALL_OBJECTS.map(o => o[2]))].map(name => {
    const first = HALL_OBJECTS.findIndex(o => o[2] === name);
    return `<span class="wing-sign" style="--slot:${first}" aria-hidden="true">${name}</span>`;
  }).join('');

  return `<section class="museum-hall-shell">
    <div class="hall-instructions">
      <div class="kicker">THE MAIN GALLERY</div>
      <h2>Move through the collection.</h2>
      <p>Drag the room left or right. Only the next exhibit opens when the one before it is complete.</p>
    </div>
    <div class="museum-pan" data-museum-pan>
      <div class="museum-wall" style="--current:${completed}">
        <div class="sunwash" aria-hidden="true"></div>
        <div class="motes" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
        <div class="spotlight" aria-hidden="true"></div>
        <div class="baseboard" aria-hidden="true"></div>
        ${wings}
        ${objects}
        <div class="gallery-bench" aria-hidden="true"></div>
        <div class="gallery-plant plant-a" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="gallery-plant plant-b" aria-hidden="true"><i></i><i></i><i></i></div>
        ${visitorGroup('a', ['wine', 'sage', 'blue'])}
        ${visitorGroup('b', ['ochre', 'wine'])}
        ${visitorGroup('c', ['blue', 'sage', 'ochre', 'wine'])}
      </div>
    </div>
    <div class="hall-progress">${Math.min(completed, ROOMS.length)} / ${ROOMS.length} exhibits completed this visit</div>
  </section>`;
}

function visitorGroup(id, people) {
  return `<div class="visitor-group visitors-${id}" aria-hidden="true">${
    people.map(c => `<span class="museum-person person-${c}"><i></i></span>`).join('')
  }</div>`;
}

function roomScreen() {
  const r = ROOMS[state.room];
  return `<main class="museum-main ambient-${state.room}" data-room="${state.room}">
    <div class="room-ambience" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="exhibit-head">
      <div class="exhibit-index"><span class="kicker">EXHIBIT ${String(state.room + 1).padStart(2, '0')} / ${ROOMS.length}</span></div>
      <h1>${escapeHTML(r.title)}</h1>
      <p class="lede">${escapeHTML(r.subtitle)}</p>
    </div>
    ${renderRoomBody(state.room)}
  </main>`;
}

/* A museum wall label — the small printed panel beside the piece. */
function wallLabel(key) {
  const l = WALL_LABELS[key];
  if (!l) return '';
  return `<div class="wall-label">
    <span class="wall-acc">${escapeHTML(l.acc)}</span>
    <strong>${escapeHTML(l.title)}</strong>
    <em>${escapeHTML(l.date)}</em>
    <span class="wall-medium">${escapeHTML(l.medium)}</span>
    <span class="wall-credit">${escapeHTML(l.credit)}</span>
  </div>`;
}

function artifact(meta, title, body, extra = '', labelKey = '') {
  return `<section class="artifact">
    <div class="artifact-meta">${meta}</div>
    <h2 class="artifact-title">${title}</h2>
    ${body}${extra}${wallLabel(labelKey)}
  </section>`;
}

function doorHTML(canAdvance, label = '') {
  const nextRoom = ROOMS[state.room + 1];
  if (!nextRoom) return '';
  return `${canAdvance ? '' : '<div class="requirement-note">Complete this exhibit before the next room is revealed.</div>'}
    <div class="next-sentinel" data-next-sentinel></div>
    <div class="next-door-wrap${state.doorVisible ? ' visible' : ''}" data-next-door>
      ${canAdvance ? `<button class="next-door" data-action="next-room">
        <span>NEXT EXHIBIT</span><strong>${escapeHTML(label || nextRoom.title)}</strong>
      </button>` : ''}
    </div>`;
}

function renderRoomBody(i) {
  switch (i) {
    case 0:
      return `
      ${artifact('ARTIFACT NO. 001 · JANUARY 25, 2026', 'The Watch He Forgot',
        `<div class="artifact-vitrine watch-memory">
          <div class="watch-object" aria-hidden="true"><span class="watch-face"></span><span class="watch-strap top"></span><span class="watch-strap bottom"></span></div>
          <div class="glass-glint" aria-hidden="true"></div>
        </div>
        <p class="drop">An ordinary watch responsible for an unnecessary second meeting on the very first day.</p>`,
        `<div class="curator-note"><small>Historical records indicate that Jordan was allegedly “masungit” during the return. The curator disputes this account.</small></div>`,
        'watch')}
      ${artifact('ARTIFACT NO. 002 · DIGITAL ARTIFACT', 'The Missing Highlight Photo',
        `<div class="artifact-vitrine highlight-memory">
          <div class="phone-memory" aria-hidden="true">
            <div class="memory-portrait"><span></span><span></span></div>
            <div class="story-ring"></div><div class="vanish-spark v1"></div><div class="vanish-spark v2"></div>
          </div>
          <div class="glass-glint" aria-hidden="true"></div>
        </div>
        <p>Once displayed on Jirby’s Instagram highlights. Jordan thought he looked cute. Shortly afterward, the evidence mysteriously disappeared.</p>
        <small>Current location: Unknown · Primary suspect: Jirby</small>`, '', 'highlight')}
      <section class="museum-card">
        <div class="artifact-meta">THE INSTAGRAM PHASE</div>
        <p>Jordan asked for Jirby’s Instagram. Jirby refused to give his first and insisted Jordan hand over his instead. Somehow, Jirby then became the one constantly sending updates about his day.</p>
        <p>Somewhere between the jokes, the random updates, and one suspiciously cute highlight photo that disappeared, Jordan realized this guy was funny, mature, and very easy to like.</p>
      </section>
      ${doorHTML(true)}`;

    case 1:
      return `
      ${artifact('FIRST DATE', 'Gunita Kopi',
        `<p class="drop">One of the first places where Jordan felt comfortable enough to open up about something deeply personal about his life.</p>
        <p>The details stay private. The trust belongs in the museum.</p>`, '', 'gunita')}
      ${artifact('RECURRING FIELD STUDY', 'Coffee Hunting in Valenzuela',
        `<p>Looking around coffee shops together eventually made <strong>Cuppremo</strong> one of the go-to places.</p>
        <p><strong>Jirby:</strong> usually something chocolate.<br><strong>Jordan:</strong> usually cookies.</p>
        <small>Unofficial mission: inspect as many coffee shops as possible.</small>`, '', 'cuppremo')}
      ${doorHTML(true)}`;

    case 2:
      return `
      ${artifact('ORDINARY MEMORY', 'Somewhere Near Your Street',
        `<p class="drop">Sometimes Jirby quietly shows up near Jordan’s street, waits for him, and occasionally arrives carrying banana bread or dragon fruit.</p>
        <p>And whenever he passes the street on the way home or to school, he takes a picture and sends it.</p>
        <div class="curator-note"><p>Sometimes love looks less like flowers and more like someone quietly waiting on your street with banana bread and dragon fruit.</p></div>`,
        '', 'street')}
      ${artifact('SERVICE DEPARTMENT', 'The Jorby Wellness Program',
        `<p>Boyfriend · Cook · Coffee Maker · Massage Therapist · Transportation Department · Problem Solver · Part-Time Back Cracker</p>
        <small>Some services are requested. Others are apparently performed without prior authorization.</small>`, '', 'wellness')}
      ${artifact('COMFORT FOOD ARCHIVE', 'The Things We Keep Eating',
        `<p><strong>Shared:</strong> palabok and champorado.</p>
        <p><strong>Jirby’s kitchen archive:</strong> sinigang and sisig.</p>`, '', 'comfort')}
      ${doorHTML(true)}`;

    case 3:
      return `<section class="reveal closure-reveal"><div>
        <div class="kicker">TEMPORARY CLOSURE REQUESTS · VARIOUS DATES · 2026</div>
        <h2>Multiple requests to permanently close the Jorby Collection were submitted by Jordan.</h2>
        <p>Jirby’s response:</p>
        <blockquote>“No.”</blockquote>
        <p><strong>All requests denied.</strong></p>
        <div class="denied-stamp" aria-hidden="true"><span>DENIED</span></div>
        <small>The museum remains operational.</small>
      </div></section>${doorHTML(true)}`;

    case 4:
      return `${artifact('INCIDENT REPORT', 'The Bodega Sale Incident',
        `<p class="drop">Jordan and Jirby somehow ended up with the same clothing piece.</p>
        <p>Jirby’s immediate conclusion: <strong>“Gaya-gaya.”</strong></p>
        <div class="curator-note">
          <p>Two boyfriends. One outfit. One allegation of plagiarism.</p>
          <small>Jirby maintains that Jordan copied him. The curator has found insufficient evidence to support this claim.</small>
        </div>`, '', 'bodega')}${doorHTML(true)}`;

    case 5:
      return `
      ${artifact('DATE ARCHIVE', 'Hoppers',
        `<div class="hoppers-date-art">
          <div class="hoppers-copy"><p>A cinema date that became special for the simplest reason: you were together.</p></div>
          <div class="hoppers-stickers" aria-label="Hoppers movie stickers">
            <figure class="hoppers-sticker hoppers-sticker-a">${picture({ base: 'hoppers-sticker-1', widths: [400], ratio: '701 / 437', alt: 'Hoppers movie characters', sizes: '(max-width:700px) 40vw, 190px' })}</figure>
            <figure class="hoppers-sticker hoppers-sticker-b">${picture({ base: 'hoppers-sticker-2', widths: [400], ratio: '701 / 437', alt: 'Hoppers beaver character', sizes: '(max-width:700px) 32vw, 155px' })}</figure>
          </div>
        </div>`, '', 'hoppers')}
      ${artifact('ARTIFACT NO. 003', 'The First Photobooth',
        `<div class="artifact-vitrine strip-vitrine">
          ${picture({ base: 'life4cuts', widths: [480, 854], ratio: '854 / 1280', alt: 'Jordan and Jirby first Life4Cuts photobooth strip', sizes: '(max-width:700px) 70vw, 420px', cls: 'life4cuts-strip' })}
          <div class="glass-glint" aria-hidden="true"></div>
        </div>
        <p>Life4Cuts · Trinoma · February 28, 2026</p>
        <p>The actual strip, preserved in the collection.</p>`, '', 'strip')}
      ${doorHTML(true)}`;

    case 6:
      return `<div class="baguio-room">
        <section class="baguio-photo-archive" aria-label="Baguio photo archive">
          <div class="baguio-photo-heading">
            <div class="kicker">BAGUIO ARCHIVED</div>
            <p>Three pieces from our first trip together.</p>
          </div>
          <div class="baguio-photo-grid">
            ${[['baguio-1', 'Jordan and Jirby together in Baguio'],
               ['baguio-2', 'Jordan and Jirby among the pine trees in Baguio'],
               ['baguio-3', 'Jordan and Jirby at Camp John Hay in Baguio']]
              .map(([base, alt], n) => `<figure class="baguio-photo-card baguio-photo-${n + 1}">
                ${picture({ base, widths: [480, 900], ratio: '3 / 4', alt, sizes: '(max-width:700px) 76vw, 30vw' })}
                <figcaption>0${n + 1} · Baguio</figcaption>
              </figure>`).join('')}
          </div>
        </section>
        <div class="baguio-build">
          <p class="drop">Baguio was your first trip together.</p>
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
          <div class="baguio-date">
            <div class="kicker">JULY 25, 2026</div>
            <p>The Jorby Collection officially became permanent.</p>
          </div>
        </div></section>
        ${wallLabel('baguio')}
      </div>${doorHTML(true)}`;

    case 7:
      return `<section class="counters">
        <div class="counter"><strong>${daysSince(MET_ON)}</strong><span>Days Since We Met</span><small>January 25, 2026</small></div>
        <div class="counter"><strong>${daysSince(OFFICIAL_ON)}</strong><span>Days Since We Became Us</span><small>July 25, 2026</small></div>
      </section>
      <div class="first-visit-record">
        <div class="kicker">MUSEUM HISTORY</div>
        <h2>First Visit</h2>
        <p>${escapeHTML(formatStoredDate(localStorage.getItem(STORAGE.firstVisit)))}</p>
      </div>
      ${doorHTML(true)}`;

    case 8:
      return `${photoGallery()}${doorHTML(state.galleryIndex >= GALLERY.length, 'Reasons I Love You')}`;

    case 9: {
      const all = state.reasonsOpened.size === REASONS.length;
      return `<div class="reason-grid">${REASONS.map((r, idx) => {
        const open = state.reasonsOpened.has(idx);
        return `<button class="reason-card${open ? ' open' : ''}" data-reason="${idx}" ${open ? 'disabled' : ''}>
          <small>REASON ${String(idx + 1).padStart(2, '0')} / 10</small>
          <span class="reason-copy">${open ? escapeHTML(r) : 'Tap to reveal.'}</span>
        </button>`;
      }).join('')}</div>
      ${all ? '<p class="ego-note">Please do not let this exhibit increase your ego.</p>' : ''}
      ${doorHTML(all)}`;
    }

    case 10:
      return `${quizRoom()}${doorHTML(state.quizStep >= 4)}`;

    case 11:
      return `<div class="song-grid">
        ${SONGS.filter(s => s.key !== 'those-eyes').map(s => songCard(s)).join('')}
      </div>
      <p class="subtle room-footnote">Choosing a record changes the museum soundtrack. It keeps playing as you walk.</p>
      ${doorHTML(true)}`;

    case 12:
      return `<div class="envelope-grid">
        ${Object.entries(OPEN_WHEN).map(([key, l]) => `<button class="envelope" data-envelope="${key}">
          <span class="wax" aria-hidden="true">J</span><strong>${escapeHTML(l.title)}</strong>
        </button>`).join('')}
      </div>
      <p class="subtle room-footnote">These envelopes are always available. Open any of them whenever you need them.</p>
      ${doorHTML(true)}`;

    case 13:
      return `<button class="sealed-letter" data-action="open-main-letter">
        <span class="wax" aria-hidden="true">J</span>
        <span class="address"><strong>To my Babi</strong><small>From Jordan</small></span>
      </button>
      ${state.mainLetterOpened
        ? '<div class="museum-card"><div class="kicker">ARCHIVE STATUS</div><p>This correspondence has been opened for this visit.</p></div>'
        : '<p class="subtle room-footnote">Break the seal to continue.</p>'}
      ${doorHTML(state.mainLetterOpened)}`;

    case 14:
      return `<div class="future-grid">${FUTURE.map(([title, body, note], idx) => `
        <section class="future-piece future-${idx}">
          <div class="kicker">FUTURE ARTIFACT</div>
          <h2>${escapeHTML(title)}</h2>
          <div class="future-frame"><span class="future-ghost" aria-hidden="true"></span><em>RESERVED</em></div>
          <p>${escapeHTML(body)}</p>${note ? `<small>${escapeHTML(note)}</small>` : ''}
        </section>`).join('')}</div>
      <section class="incomplete">
        <div class="kicker">COLLECTION STATUS</div>
        <h2>This exhibition is incomplete.</h2>
        <p>Not because anything is missing.</p>
        <p>We are just not done making it yet.</p>
        <div class="next-memory-frame"><span class="serif">Our Next Memory</span></div>
        <small>Jordan × Jirby · To be continued.</small>
      </section>
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
  const total = GALLERY.length;
  const slides = GALLERY.map((photo, idx) => `
    <section class="gallery-slide" data-gallery-slide="${idx}">
      ${picture({ ...photo, alt: `Museum photograph ${idx + 1}`, sizes: '(max-width:700px) 92vw, 650px',
                  /* the current slide and the next one; the rest stay lazy */
                  eager: idx <= state.galleryIndex + 1 })}
      <div class="gallery-count">
        <span>${String(idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</span>
        <span>PRIVATE COLLECTION</span>
      </div>
    </section>`).join('');

  return `<div class="gallery-shell" data-gallery-shell${state.galleryTone ? ` style="--gallery-tone:${state.galleryTone}"` : ''}>
    <div class="gallery-track" data-gallery-track>
      ${slides}
      <section class="gallery-slide" data-gallery-slide="${total}">
        <div class="gallery-reserved"><div>
          <div class="kicker">${String(total + 1).padStart(2, '0')} / ?</div>
          <h2>Reserved for our next favorite photo.</h2>
        </div></div>
        <div class="gallery-count"><span>${String(total + 1).padStart(2, '0')} / ?</span><span>TO BE CONTINUED</span></div>
      </section>
    </div>
    <div class="gallery-progress" aria-hidden="true">${
      Array.from({ length: total + 1 }, (_, i) => `<i class="${i <= state.galleryIndex ? 'seen' : ''}"></i>`).join('')
    }</div>
  </div>
  <div class="swipe-hint">Swipe manually through the collection</div>`;
}

function quizRoom() {
  if (state.quizStep >= 4) {
    return `<section class="certificate">
      <div class="kicker">FINAL RESULT</div>
      <h2>4 / 4 — CERTIFIED BABI</h2>
      <p>Boyfriend credentials successfully renewed.</p>
      <small>The museum was slightly rigged in your favor.</small>
    </section>`;
  }
  const q = QUIZ[state.quizStep];
  return `<section class="quiz-card">
    <div class="quiz-progress" aria-hidden="true">${[0, 1, 2, 3].map(i => `<i class="${i < state.quizStep ? 'done' : ''}"></i>`).join('')}</div>
    <div class="kicker">QUESTION ${state.quizStep + 1} / 4</div>
    <label class="quiz-prompt" for="quiz-answer">${escapeHTML(q.q)}</label>
    <input class="quiz-input" id="quiz-answer" autocomplete="off" value="${escapeHTML(state.quizAnswer)}" placeholder="Type your answer" />
    <button class="primary" data-action="quiz-submit">Submit Answer</button>
    <div class="quiz-feedback" role="status"><small>${escapeHTML(state.quizFeedback)}</small></div>
  </section>`;
}

function songCard(song) {
  const selected = state.backgroundSong === song.key;
  return `<button class="song-card${selected ? ' playing' : ''}" data-song="${song.key}" aria-pressed="${selected}">
    <span class="record" aria-hidden="true"></span>
    <span class="song-meta">
      <strong>${escapeHTML(song.title)}</strong>
      <span>${selected ? 'Now playing in the museum' : 'Set as background music'}</span>
    </span>
  </button>`;
}

function musicMenu() {
  return `<div class="music-menu" role="dialog" aria-label="Museum soundtrack">
    <div class="music-menu-head"><span>MUSEUM SOUNDTRACK</span><small>Choose what plays while you explore.</small></div>
    <div class="music-menu-list">${SONGS.map(song => `
      <button class="music-choice${state.backgroundSong === song.key ? ' selected' : ''}" data-music-choice="${song.key}">
        <span><strong>${escapeHTML(song.title)}</strong>${song.artist ? `<small>${escapeHTML(song.artist)}</small>` : ''}</span>
        <i>${state.backgroundSong === song.key ? 'PLAYING' : 'PLAY'}</i>
      </button>`).join('')}</div>
  </div>`;
}

function secretRoom() {
  if (!state.secretRevealed) {
    return `<section class="secret-lock"><div>
      <div class="kicker">CLASSIFIED · ONE VISITOR ONLY</div>
      <h2>The curator left one room unexplained.</h2>
      <p class="subtle">Some things are meant to be discovered, not introduced.</p>
      <button class="hold-button" data-action="hold-secret"><span>Press and hold to open</span></button>
    </div></section>`;
  }
  return `<section class="secret-reveal"><div class="secret-reveal-inner">
    <div class="kicker">PRIVATE ACQUISITION · NOT FOR PUBLIC DISPLAY</div>
    <p>There are memories in this museum because we already lived them.</p>
    <p>There are empty frames because I hope we get to fill them.</p>
    <p>But if I could keep one thing in the permanent collection, it would not be a photo, a trip, a date, or an artifact.</p>
    <blockquote>It would be us choosing each other, again and again.</blockquote>
    <p>On the good days. On the difficult ones. On the days when we are both masungit. On the days when nothing worth photographing happens.</p>
    <p class="serif welcome-line">I love you, Babi.</p>
    <div class="secret-status">Acquisition status: Permanent · Not for sale · Not for loan</div>
  </div></section>`;
}

function guestbookRoom() {
  const saved = localStorage.getItem(STORAGE.guestbook);
  if (saved) {
    return `<section class="permanent-entry">
      <div class="kicker">VISITOR ENTRY · PERMANENT COLLECTION</div>
      <blockquote>“${escapeHTML(saved)}”</blockquote>
      <p><strong>Jirby</strong><br><small>The One Visitor · ${escapeHTML(formatStoredDate(localStorage.getItem(STORAGE.guestbookDate)))}</small></p>
    </section>
    <div class="next-sentinel" data-next-sentinel></div>
    <div class="next-door-wrap${state.doorVisible ? ' visible' : ''}" data-next-door>
      <button class="next-door" data-action="finish-museum"><span>END OF EXHIBITION</span><strong>Close the collection</strong></button>
    </div>`;
  }
  return `<section class="guestbook-card">
    <div class="kicker">LEAVE A NOTE BEFORE YOU GO</div>
    <h2>Museum Guestbook</h2>
    <p>One permanent entry. No edits. No second draft.</p>
    <label class="visually-hidden" for="guestbook-text">Your guestbook note</label>
    <textarea id="guestbook-text" maxlength="800" placeholder="Write one note for the permanent collection…"></textarea>
    <button class="primary" data-action="save-guestbook">Sign the Guestbook</button>
    <small class="guestbook-sign">Automatically signed: Jirby · The One Visitor</small>
  </section>`;
}

function finalScreen() {
  return `<section class="final-screen"><div>
    <h1>MUSEUM OF US</h1>
    <p>Thank you for visiting, Babi.</p>
    ${admissionTicket()}
    <b>Curated by Jordan</b>
    <small>For one visitor only.</small>
  </div></section>`;
}

function letterOverlay() {
  const info = state.overlayLetter === 'main'
    ? { title: 'To my Babi', body: MAIN_LETTER, sign: '— Jordan' }
    : OPEN_WHEN[state.overlayLetter];
  return `<div class="overlay" data-action="overlay-bg">
    <article class="letter-panel" data-letter-panel>
      <button class="close-letter" data-action="close-letter">CLOSE</button>
      <div class="kicker">PRIVATE CORRESPONDENCE</div>
      <h2>${escapeHTML(info.title)}</h2>
      <p>${escapeHTML(info.body)}</p>
      ${info.sign ? `<p class="serif letter-sign">${escapeHTML(info.sign)}</p>` : ''}
    </article>
  </div>`;
}

function mapOverlay() {
  return `<section class="map-modal">
    <button class="map-close" data-action="close-map">CLOSE</button>
    <div class="map-inner">
      <div class="kicker">EXHIBITION PLAN</div>
      <h2>Museum Map</h2>
      <p class="subtle">The route is chronological. The map remembers where you are, but it does not let you skip the journey.</p>
      <div class="floorplan">${ROOMS.map((room, idx) => {
        const visible = idx <= state.room;
        const cls = idx === state.room ? 'current' : state.visited.has(idx) ? 'visited' : '';
        return `<div class="floor-room ${cls}">
          <span class="room-number">${String(idx + 1).padStart(2, '0')}</span>
          <strong>${visible ? escapeHTML(room.title) : 'CLASSIFIED'}</strong>
          ${idx === state.room ? '<span class="you-here">You are here</span>' : ''}
        </div>`;
      }).join('')}</div>
      <p class="map-progress">${state.visited.size} of ${ROOMS.length} exhibits explored this visit.</p>
    </div>
  </section>`;
}

function settingsDrawer() {
  const first = formatStoredDate(localStorage.getItem(STORAGE.firstVisit));
  const guest = localStorage.getItem(STORAGE.guestbook) ? 'Archived permanently on this device' : 'No entry yet';
  return `<div class="drawer-backdrop" data-action="drawer-bg"></div>
  <aside class="drawer">
    <button class="drawer-close" data-action="close-settings">CLOSE</button>
    <div class="kicker">MUSEUM INFORMATION</div>
    <h2>Settings</h2>
    <div class="settings-row"><strong>Admission</strong><small>Ticket № ${escapeHTML(state.serial)}</small></div>
    <div class="settings-row"><strong>Current visit</strong><small>${state.visited.size} of ${ROOMS.length} exhibits explored</small></div>
    <div class="settings-row"><strong>First visit</strong><small>${escapeHTML(first)}</small></div>
    <div class="settings-row"><strong>Guestbook</strong><small>${escapeHTML(guest)}</small></div>
    <button class="reset-danger" data-action="reset-museum">Reset Museum</button>
    <small class="drawer-warning">Hidden administrative action. Use with emotional caution.</small>
  </aside>`;
}

function musicIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>`;
}
function mapIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 6.5 8.2 4l7.6 2.5L21 4v13.5L15.8 20l-7.6-2.5L3 20V6.5Z"/><path d="M8.2 4v13.5M15.8 6.5V20"/></svg>`;
}
function gearIcon() {
  /* Generated geometrically (8 teeth, exact symmetry) — the previous
     hand-written path rendered as a lumpy blob. */
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M10.24 2.97A9.2 9.2 0 0 1 13.76 2.97L13.32 5.23A6.9 6.9 0 0 1 15.86 6.28L17.14 4.37A9.2 9.2 0 0 1 19.63 6.86L17.72 8.14A6.9 6.9 0 0 1 18.77 10.68L21.03 10.24A9.2 9.2 0 0 1 21.03 13.76L18.77 13.32A6.9 6.9 0 0 1 17.72 15.86L19.63 17.14A9.2 9.2 0 0 1 17.14 19.63L15.86 17.72A6.9 6.9 0 0 1 13.32 18.77L13.76 21.03A9.2 9.2 0 0 1 10.24 21.03L10.68 18.77A6.9 6.9 0 0 1 8.14 17.72L6.86 19.63A9.2 9.2 0 0 1 4.37 17.14L6.28 15.86A6.9 6.9 0 0 1 5.23 13.32L2.97 13.76A9.2 9.2 0 0 1 2.97 10.24L5.23 10.68A6.9 6.9 0 0 1 6.28 8.14L4.37 6.86A9.2 9.2 0 0 1 6.86 4.37L8.14 6.28A6.9 6.9 0 0 1 10.68 5.23Z"/><circle cx="12" cy="12" r="3.1"/></svg>`;
}

/* ---------- 6. Installations ----------
   Everything here owns its own teardown. The previous build created observers,
   scroll listeners and AudioContexts on every render and never released them. */

let mountedRoom = -1;
let doorObserver = null;
let focusObserver = null;
let currentMain = null;
const bound = new WeakSet();

function mountRoom() {
  currentMain = document.querySelector('.museum-main');
  setupDoorObservers();
  setupPan();
  setupGallery();
  if (mountedRoom !== state.room) {
    mountedRoom = state.room;
    state.doorVisible = false;
    setupFocusLighting();
    startRoomAmbience(state.room);
    if (state.room === 6) queueBaguioHaptic();
  }
}

function unmountRoom() {
  currentMain = null;
  if (mountedRoom !== -1) {
    mountedRoom = -1;
    stopRoomAmbience();
    focusObserver?.disconnect();
    focusObserver = null;
  }
  doorObserver?.disconnect();
  doorObserver = null;
  setupPan();
  setupGallery();
}

/* The door reveal is state, not a class poked onto the node: a re-render
   rebuilds the markup from state, so anything set imperatively would be lost. */
function setupDoorObservers() {
  doorObserver?.disconnect();
  doorObserver = null;
  if (state.doorVisible) return;
  const sentinel = document.querySelector('[data-next-sentinel]');
  const door = document.querySelector('[data-next-door]');
  if (!sentinel || !door || !door.querySelector('button')) return;
  doorObserver = new IntersectionObserver(entries => {
    if (!entries.some(e => e.isIntersecting)) return;
    doorObserver.disconnect();
    doorObserver = null;
    state.doorVisible = true;
    render();
  }, { threshold: 0.1 });
  doorObserver.observe(sentinel);
}

const FOCUSABLE = '.artifact,.museum-card,.reveal,.baguio-room,.counters,.gallery-shell,.reason-grid,.quiz-card,.song-grid,.envelope-grid,.sealed-letter,.future-piece,.incomplete,.secret-lock,.secret-reveal,.guestbook-card,.permanent-entry';

function setupFocusLighting() {
  focusObserver?.disconnect();
  focusObserver = null;
  if (!currentMain || reduceMotion.matches) return;
  focusObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      entry.target.classList.toggle('museum-focus', entry.isIntersecting && entry.intersectionRatio > 0.42);
    }
  }, { threshold: [0.2, 0.42, 0.7], rootMargin: '-12% 0px -12%' });
  currentMain.querySelectorAll(FOCUSABLE).forEach(el => focusObserver.observe(el));
}

/* Quiet procedural room tone, sharing the museum's single AudioContext. */
const AMBIENCE = {
  1: ['cafe', 0.008], 2: ['street', 0.006], 5: ['projector', 0.005],
  6: ['wind', 0.007], 11: ['vinyl', 0.004], 12: ['paper', 0.004],
  13: ['paper', 0.0035], 14: ['home', 0.004], 15: ['secret', 0.005]
};
let ambience = null;

function stopRoomAmbience() {
  if (!ambience) return;
  for (const node of ambience.nodes) {
    try { node.stop?.(); } catch {}
    try { node.disconnect(); } catch {}
  }
  try { ambience.master.disconnect(); } catch {}
  ambience = null;
}

function startRoomAmbience(roomIndex) {
  stopRoomAmbience();
  const profile = AMBIENCE[roomIndex];
  if (!profile) return;
  const c = ctx();
  if (!c) return;
  const [kind, level] = profile;
  const master = c.createGain();
  master.gain.value = level;
  master.connect(c.destination);
  const nodes = [];

  const noise = (filterType, freq, q = 0.7) => {
    const buffer = c.createBuffer(1, c.sampleRate * 3, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (0.35 + Math.random() * 0.15);
    const src = c.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    const filter = c.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.value = freq;
    filter.Q.value = q;
    src.connect(filter).connect(master);
    src.start();
    nodes.push(src, filter);
  };
  const osc = (type, freq, gainValue = 0.08) => {
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.value = gainValue;
    o.connect(g).connect(master);
    o.start();
    nodes.push(o, g);
  };

  switch (kind) {
    case 'cafe': noise('lowpass', 520); osc('sine', 78, 0.045); break;
    case 'street': noise('lowpass', 360); osc('sine', 52, 0.025); break;
    case 'projector': noise('bandpass', 1150, 1.2); osc('square', 24, 0.012); break;
    case 'wind': noise('bandpass', 620, 0.45); break;
    case 'vinyl': noise('highpass', 1800, 0.5); break;
    case 'paper': master.gain.value *= 0.62; noise('highpass', 2500, 0.6); break;
    case 'home': master.gain.value *= 0.75; noise('lowpass', 260); break;
    case 'secret': osc('sine', 46, 0.065); noise('lowpass', 170); break;
  }
  ambience = { master, nodes };
}

let baguioTimer = 0;
function queueBaguioHaptic() {
  clearTimeout(baguioTimer);
  baguioTimer = setTimeout(() => vibrate(24), 1500);
}

/* Parallax and scroll depth. Listeners are attached once, for the life of the
   page, and simply read whichever room is currently mounted. */
let parallaxFrame = 0;
/* Written to the document element, not to .museum-main: the renderer rebuilds
   that node's attributes from the template, which would wipe an inline style. */
const rootStyle = document.documentElement.style;
function setParallax(x, y) {
  cancelAnimationFrame(parallaxFrame);
  parallaxFrame = requestAnimationFrame(() => {
    rootStyle.setProperty('--px', x.toFixed(3));
    rootStyle.setProperty('--py', y.toFixed(3));
  });
}

function initAmbientMotion() {
  if (reduceMotion.matches) return;
  addEventListener('pointermove', e => {
    if (e.pointerType === 'touch' || !currentMain) return;
    const r = currentMain.getBoundingClientRect();
    setParallax(((e.clientX - r.left) / r.width - 0.5) * 2, ((e.clientY - r.top) / Math.max(r.height, 1) - 0.5) * 2);
  }, { passive: true });

  let scrollFrame = 0;
  addEventListener('scroll', () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      const max = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
      const depth = Math.max(-1, Math.min(1, (scrollY / max) * 2 - 1));
      rootStyle.setProperty('--scroll-depth', depth.toFixed(3));
    });
  }, { passive: true });
}

/* Drag-to-pan for the main gallery wall. */
function setupPan() {
  const pan = document.querySelector('[data-museum-pan]');
  if (!pan || bound.has(pan)) return;
  bound.add(pan);
  const current = pan.querySelector('.hall-object.unlocked');
  if (current) requestAnimationFrame(() => {
    const target = Math.max(0, current.offsetLeft - (pan.clientWidth - current.offsetWidth) / 2);
    pan.scrollTo({ left: target, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
  });
}

function startPan(pan, event) {
  let lastX = event.clientX;
  const move = e => { pan.scrollLeft -= e.clientX - lastX; lastX = e.clientX; };
  const stop = () => {
    removeEventListener('pointermove', move);
    removeEventListener('pointerup', stop);
    removeEventListener('pointercancel', stop);
    pan.classList.remove('panning');
  };
  pan.classList.add('panning');
  addEventListener('pointermove', move, { passive: true });
  addEventListener('pointerup', stop);
  addEventListener('pointercancel', stop);
}

/* The room takes its light from the photograph on the wall: a 16x16 downsample
   of the visible slide, mixed heavily toward paper so it only ever tints. */
function sampleTone(slide) {
  const img = slide?.querySelector('img');
  if (!img) return;
  // Slides beyond the first are lazy: wait for the decode rather than giving up,
  // otherwise every photograph after the first keeps the previous one's light.
  if (!img.complete || !img.naturalWidth) {
    img.addEventListener('load', () => sampleTone(slide), { once: true });
    return;
  }
  try {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 16;
    const c2d = canvas.getContext('2d', { willReadFrequently: true });
    c2d.drawImage(img, 0, 0, 16, 16);
    const data = c2d.getImageData(0, 0, 16, 16).data;
    let r = 0, g = 0, b = 0, n = 0;
    for (let i = 0; i < data.length; i += 16) { r += data[i]; g += data[i + 1]; b += data[i + 2]; n++; }
    const mix = (v, paper) => Math.round((v / n) * 0.23 + paper * 0.77);
    const tone = `rgb(${mix(r, 243)},${mix(g, 234)},${mix(b, 217)})`;
    if (tone !== state.galleryTone) { state.galleryTone = tone; render(); }
  } catch { /* a tainted or undecoded image simply keeps the default tone */ }
}

/* Gallery: report the current slide so the door can unlock declaratively. */
function setupGallery() {
  const track = document.querySelector('[data-gallery-track]');
  if (!track || bound.has(track)) return;
  bound.add(track);
  let ticking = false;
  track.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const idx = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
      if (idx === state.galleryIndex) return;
      const reachedEnd = idx >= GALLERY.length && state.galleryIndex < GALLERY.length;
      state.galleryIndex = idx;
      if (reachedEnd) { vibrate(15); tone('chime'); }
      const slide = track.querySelector(`[data-gallery-slide="${idx}"]`);
      if (slide?.querySelector('img')) sampleTone(slide); else state.galleryTone = '';
      render();
    });
  }, { passive: true });

  const first = track.querySelector('[data-gallery-slide="0"]');
  const firstImg = first?.querySelector('img');
  if (firstImg) {
    if (firstImg.complete) sampleTone(first);
    else firstImg.addEventListener('load', () => sampleTone(first), { once: true });
  }
}

/* ---------- 7. Actions ----------
   One click listener for the whole museum. The old build re-attached an onclick
   to every button on every render; here nothing is ever rebound. */

const ACTIONS = {
  'to-verify'() {
    state.view = 'verify';
    drawNow();
    document.querySelector('#gate-answer')?.focus();
  },
  'return-enter'() {
    resetVisitState();
    issueTicket();
    startBackground();
    state.view = 'foyer';
    render();
  },
  verify: verifyGate,
  appeal() {
    state.answerAttempts = 0;
    state.gateAnswer = '';
    state.view = 'verify';
    render();
  },
  'start-journey'() {
    state.view = 'hall';
    state.room = 0;
    tone('chime');
    render();
    scrollTo(0, 0);
  },
  'next-room': nextRoom,
  'open-map'() { state.map = true; render(); },
  'close-map'() { state.map = false; render(); },
  'open-ticket'() { state.ticket = true; tone('paper'); render(); },
  'close-ticket'() { state.ticket = false; render(); },
  'ticket-bg'(el, e) { if (e.target === el) { state.ticket = false; render(); } },
  'open-settings'() { state.drawer = true; state.musicMenu = false; render(); },
  'close-settings'() { state.drawer = false; render(); },
  'drawer-bg'() { state.drawer = false; render(); },
  'toggle-music-menu'() { state.musicMenu = !state.musicMenu; render(); },
  'overlay-bg'(el, e) { if (e.target === el) { state.overlayLetter = null; render(); } },
  'close-letter'() { state.overlayLetter = null; render(); },
  'open-main-letter'() {
    state.mainLetterOpened = true;
    state.overlayLetter = 'main';
    tone('paper');
    render();
  },
  'quiz-submit': submitQuiz,
  'save-guestbook': saveGuestbook,
  'finish-museum': finishMuseum,
  'reset-museum': resetMuseum
};

app.addEventListener('click', e => {
  const actionEl = e.target.closest('[data-action]');
  if (actionEl) {
    const fn = ACTIONS[actionEl.dataset.action];
    if (fn) { fn(actionEl, e); return; }
  }

  const hall = e.target.closest('[data-hall-room]');
  if (hall && !hall.disabled) {
    const idx = Number(hall.dataset.hallRoom);
    if (idx !== state.room) return;
    enterRoom(idx);
    return;
  }

  const reason = e.target.closest('[data-reason]');
  if (reason && !reason.disabled) {
    state.reasonsOpened.add(Number(reason.dataset.reason));
    tone('chime');
    if (state.reasonsOpened.size === REASONS.length) vibrate(18);
    render();
    return;
  }

  const envelope = e.target.closest('[data-envelope]');
  if (envelope) {
    state.overlayLetter = envelope.dataset.envelope;
    tone('paper');
    render();
    return;
  }

  const song = e.target.closest('[data-song]');
  if (song) { selectBackgroundSong(song.dataset.song); return; }

  const choice = e.target.closest('[data-music-choice]');
  if (choice) { selectBackgroundSong(choice.dataset.musicChoice); state.musicMenu = false; }
});

app.addEventListener('input', e => {
  if (e.target.id === 'gate-answer') state.gateAnswer = e.target.value;
  if (e.target.id === 'quiz-answer') {
    state.quizAnswer = e.target.value;
    if (state.quizFeedback) { state.quizFeedback = ''; render(); }
  }
});

app.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  if (e.target.id === 'gate-answer') { e.preventDefault(); verifyGate(); }
  if (e.target.id === 'quiz-answer') { e.preventDefault(); submitQuiz(); }
});

app.addEventListener('pointerdown', e => {
  const pan = e.target.closest('[data-museum-pan]');
  if (pan && !e.target.closest('.hall-object:not([disabled])')) startPan(pan, e);

  const hold = e.target.closest('[data-action="hold-secret"]');
  if (hold) startSecretHold(hold, e);
});

addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (state.overlayLetter) state.overlayLetter = null;
  else if (state.ticket) state.ticket = false;
  else if (state.map) state.map = false;
  else if (state.drawer) state.drawer = false;
  else if (state.musicMenu) state.musicMenu = false;
  else return;
  render();
});

/* ---------- Behaviour ---------- */

function enterRoom(idx) {
  state.view = 'room';
  markVisited(idx);
  if (idx === 11) state.musicUnlocked = true;
  tone('chime');
  render();
  scrollTo(0, 0);
}

function verifyGate() {
  if (state.gateAnswer.trim().toLowerCase() === 'baguio') {
    localStorage.setItem(STORAGE.verified, '1');
    if (!localStorage.getItem(STORAGE.firstVisit)) localStorage.setItem(STORAGE.firstVisit, new Date().toISOString());
    state.answerAttempts = 0;
    state.gateAnswer = '';
    state.view = 'confirmed';
    resetVisitState();
    issueTicket();
    startBackground();
    tone('success');
    vibrate([24, 30, 24]);
    render();
    setTimeout(() => { state.view = 'foyer'; render(); }, 2200);
    return;
  }
  state.answerAttempts += 1;
  state.gateAnswer = '';
  if (state.answerAttempts >= 3) { state.view = 'breakup'; tone('chime'); }
  render();
}

function markVisited(i) {
  const fresh = !state.visited.has(i);
  state.visited.add(i);
  if (fresh) tone('stamp');
  const history = Math.max(Number(localStorage.getItem(STORAGE.historyMax) || 0), i + 1);
  localStorage.setItem(STORAGE.historyMax, String(history));
}

let transitioning = false;
function nextRoom() {
  if (state.room >= ROOMS.length - 1 || transitioning) return;
  transitioning = true;
  const main = document.querySelector('.museum-main');
  const wait = main && !reduceMotion.matches ? 520 : 0;
  main?.classList.add('exhibit-exiting');
  tone('chime');
  setTimeout(() => {
    state.room += 1;
    state.doorVisible = false;
    state.overlayLetter = null;
    state.map = false;
    state.drawer = false;
    state.ticket = false;
    state.view = 'hall';
    transitioning = false;
    scrollTo(0, 0);
    drawNow();
  }, wait);
}

function submitQuiz() {
  const value = (document.querySelector('#quiz-answer')?.value ?? state.quizAnswer).trim();
  if (!value) return;

  if (state.quizStep === 3) {
    state.quizFeedback = 'Correct. But the real answer is obviously my cute face.';
    state.quizStep = 4;
    state.quizAnswer = '';
    tone('success');
    vibrate([18, 20, 18]);
    render();
    return;
  }

  const q = QUIZ[state.quizStep];
  const normalized = value.toLowerCase().replace(/\s+/g, ' ');
  if (q.answers.some(a => normalized === a)) {
    state.quizStep += 1;
    state.quizAnswer = '';
    state.quizFeedback = '';
    tone('success');
    drawNow();
    document.querySelector('#quiz-answer')?.focus();
  } else {
    state.quizFeedback = q.wrong;
    tone('chime');
    render();
  }
}

function selectBackgroundSong(key) {
  const song = SONGS.find(s => s.key === key);
  if (!song) return;
  state.backgroundSong = key;
  bgAudio.src = song.src;
  bgAudio.loop = true;
  bgAudio.play().catch(() => {});
  tone('chime');
  render();
}

function startSecretHold(el, event) {
  if (el.dataset.done) return;
  event.preventDefault();
  el.classList.add('holding');
  vibrate(15);
  const timer = setTimeout(() => {
    el.dataset.done = '1';
    state.secretRevealed = true;
    tone('success');
    vibrate([30, 45, 30]);
    cancel();
    render();
  }, 2400);
  function cancel() {
    clearTimeout(timer);
    if (!el.dataset.done) el.classList.remove('holding');
    removeEventListener('pointerup', cancel);
    removeEventListener('pointercancel', cancel);
  }
  addEventListener('pointerup', cancel);
  addEventListener('pointercancel', cancel);
}

function saveGuestbook() {
  const text = document.querySelector('#guestbook-text')?.value.trim();
  if (!text) { showToast('The guestbook is waiting for a note.'); return; }
  localStorage.setItem(STORAGE.guestbook, text);
  localStorage.setItem(STORAGE.guestbookDate, new Date().toISOString());
  tone('paper');
  vibrate(18);
  render();
}

function finishMuseum() {
  state.view = 'final';
  scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

function resetMuseum() {
  if (!confirm('RESET THE MUSEUM?\n\nAre you sure? The curator will be emotionally devastated.')) return;
  if (!confirm('Destroy Our History?\n\nThis clears the remembered device, first visit, guestbook, and museum history stored in this browser.')) return;
  Object.values(STORAGE).forEach(k => localStorage.removeItem(k));
  pauseBackground();
  stopRoomAmbience();
  resetVisitState();
  state.view = 'invite';
  state.answerAttempts = 0;
  state.gateAnswer = '';
  state.serial = '0000';
  state.drawer = false;
  state.map = false;
  alert('Wow. You really pressed it.');
  render();
}

/* ---------- Open the doors ---------- */

reduceMotion.addEventListener('change', () => {
  if (reduceMotion.matches) {
    focusObserver?.disconnect();
    focusObserver = null;
  } else if (state.view === 'room') {
    setupFocusLighting();
  }
});

initAmbientMotion();
drawNow();

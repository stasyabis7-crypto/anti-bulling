const storyContent = {
  children: [
    {
      title: 'Я подросток, и мне<br>плохо в классе',
      text: 'Куда обратиться, как попросить помощи,<br>что сказать взрослым',
      primary: 'Посмотреть мультик',
      showSecondary: true,
      image: './assets main page/img 1 card.png',
      imageAlt: '',
      article: [
        'Если в классе постоянно тревожно, не хочется идти в школу, одноклассники смеются, обзывают или намеренно исключают из компании — это не просто «шутки». Твои чувства важны, и ты не обязан справляться с этим один.',
        'Постарайся рассказать взрослому, которому доверяешь: родителю, учителю, школьному психологу или тренеру. Можно начать с простой фразы: «Мне плохо в классе, и мне нужна помощь». Если говорить вслух трудно, напиши сообщение и приведи конкретные примеры.',
        'Сохраняй сообщения и скриншоты, записывай даты и описания ситуаций. Это поможет взрослым понять, что происходит, и быстрее остановить травлю. Не отвечай агрессией и не оставайся один на один с теми, кто тебя обижает.'
      ]
    },
    {
      title: 'Я вижу, что травят<br>другого',
      text: 'Что может сделать свидетель',
      primary: 'Читать подробнее',
      showSecondary: false,
      image: './assets main page/img 2 card.png',
      imageAlt: '',
      article: [
        'Когда травят другого, молчание окружающих может восприниматься как поддержка обидчиков. Но вмешиваться в одиночку и рисковать собой не нужно.',
        'Если это безопасно, покажи тому, кого обижают, что он не один: позови его с собой, напиши после случившегося или спокойно скажи, что происходящее не смешно. Не пересылай обидные фото и сообщения и не ставь реакции под ними.',
        'Расскажи взрослому, которому доверяешь, что именно произошло, где и кто был рядом. Это не ябедничество, а способ остановить ситуацию и защитить человека.'
      ]
    }
  ],
  adults: [
    {
      title: 'Моего ребёнка<br>травят в школе',
      text: 'Как заметить травлю и правильно<br>поддержать ребёнка',
      primary: 'Читать подробнее',
      showSecondary: false,
      image: './assets main page/adult-card-choice.png',
      imageAlt: 'Положительная, нейтральная и отрицательная реакции',
      article: [
        'О травле могут говорить резкое нежелание идти в школу, частые боли без ясной причины, потерянные вещи, нарушения сна и внезапная замкнутость. Один признак ещё ничего не доказывает, но устойчивые изменения требуют внимания.',
        'Начните разговор спокойно: «Я вижу, что тебе непросто. Я рядом и готов выслушать». Не обвиняйте ребёнка, не требуйте немедленно дать отпор и не обещайте сохранить всё в тайне — объясните, что будете действовать вместе с ним.',
        'Зафиксируйте эпизоды травли и обратитесь к классному руководителю и администрации школы с просьбой составить конкретный план безопасности. Регулярно уточняйте у ребёнка, стало ли ему спокойнее.'
      ]
    },
    {
      title: 'Мой ребёнок травит<br>другого',
      text: 'Как поговорить без обвинений<br>и остановить агрессию',
      primary: 'Читать подробнее',
      showSecondary: false,
      image: './assets main page/adult-card-aggressor.png',
      imageAlt: 'Один ребёнок толкает другого',
      article: [
        'Если ребёнок травит другого, важно остановить действия, но не навешивать на него ярлык. Спокойно и прямо скажите: «Так поступать нельзя. Давай разберёмся, что произошло».',
        'Сначала выслушайте ребёнка, затем помогите увидеть последствия для другого человека. Обсудите конкретные способы исправить ситуацию: прекратить обидные сообщения, удалить публикации, вернуть вещи и принести искренние извинения без давления на пострадавшего.',
        'Договоритесь со школой об общих правилах и наблюдении за ситуацией. Если агрессия повторяется или ребёнку трудно управлять эмоциями, стоит обратиться к детскому психологу.'
      ]
    }
  ]
};

const answerContent = [
  {
    title: 'Что делать, если моего ребёнка травят?',
    image: './assets main page/answer-question.png',
    article: [
      'Сначала дайте ребёнку понять, что верите ему и не считаете произошедшее его виной. Выслушайте без допроса и поблагодарите за доверие: рассказать о травле бывает очень трудно.',
      'Запишите конкретные эпизоды, даты и имена участников, сохраните переписку и скриншоты. Обратитесь к классному руководителю и администрации школы письменно, попросив обозначить меры безопасности и сроки обратной связи.',
      'Не устраивайте самостоятельную встречу с обидчиком и не требуйте от ребёнка «дать сдачи». Важно регулярно проверять, прекратилась ли травля, и при необходимости подключить школьного или независимого психолога.'
    ]
  },
  {
    title: 'Как поддержать близкого?',
    image: './assets main page/answer-support.png',
    article: [
      'Поддержка начинается не с советов, а с внимательного разговора. Скажите: «Я рядом», «Я тебе верю» и «Ты не виноват». Дайте человеку самому выбрать, сколько он готов рассказать сейчас.',
      'Спросите, какая помощь нужна: просто выслушать, пойти вместе к взрослому, сохранить доказательства или найти специалиста. Не распространяйте подробности без согласия человека, если его безопасности ничто не угрожает.',
      'Оставайтесь на связи и возвращайтесь к разговору позже. Если есть угроза здоровью, жизни или сильное эмоциональное ухудшение, помощь взрослого или специалиста нужна как можно скорее.'
    ]
  },
  {
    title: 'Как научить ребёнка защищать границы?',
    image: './assets main page/answer-boundaries.png',
    article: [
      'Объясните ребёнку, что личные границы — это право не соглашаться на неприятные слова, прикосновения и действия. Его «нет» важно, даже если другой человек называет происходящее шуткой.',
      'Потренируйте короткие спокойные фразы: «Мне так не нравится», «Остановись», «Я не разрешаю брать мои вещи». Разыграйте дома несколько ситуаций, чтобы эти слова было легче использовать в нужный момент.',
      'Защита границ не означает, что ребёнок должен справляться один. Научите его уходить из опасной ситуации и обращаться к взрослому, который действительно готов вмешаться и помочь.'
    ]
  }
];

const parentCards = [
  ['Ребёнок стал просить оставить его дома. Это всегда признак травли?', 'Не всегда. Спокойно спросите, что изменилось, и обратите внимание на повторяемость: тревогу перед школой, нарушения сна, потерянные вещи и резкое снижение настроения.'],
  ['Стоит ли сразу звонить родителям обидчика?', 'Сначала обеспечьте безопасность ребёнка и зафиксируйте факты. Самостоятельный конфликт взрослых может усилить травлю — лучше действовать через школу и согласованный план.'],
  ['Что сказать ребёнку, когда он впервые рассказал о травле?', 'Поблагодарите за доверие, скажите, что верите ему и что он не виноват. Спросите, какой помощи он хочет прямо сейчас.'],
  ['Нужно ли учить ребёнка давать сдачи?', 'Физический ответ может усилить опасность и сделать пострадавшего виноватым в глазах школы. Лучше тренировать уверенные фразы, выход из ситуации и обращение к взрослым.'],
  ['Как отличить конфликт от травли?', 'В конфликте силы обычно равны и стороны могут остановиться. Травля повторяется, силы неравны, а одному из участников трудно защитить себя.'],
  ['Можно ли обещать ребёнку никому не рассказывать?', 'Не обещайте полной тайны. Объясните, что будете обсуждать каждый следующий шаг и подключите только тех взрослых, которые нужны для безопасности.'],
  ['Что делать со скриншотами и сообщениями?', 'Сохраните их вместе с датами и ссылками. Не распространяйте дальше: используйте материалы только для обращения в школу или к специалистам.'],
  ['Как разговаривать со школой?', 'Опишите конкретные факты без ярлыков, подайте обращение письменно и попросите план действий, ответственных и дату повторной встречи.'],
  ['Ребёнок просит не вмешиваться. Что делать?', 'Признайте его страх и обсудите безопасный вариант вмешательства. Если есть угроза здоровью, взрослые обязаны действовать, сохраняя ребёнку максимум контроля.'],
  ['Как понять, что ситуация улучшилась?', 'Недостаточно одного разговора. Регулярно спрашивайте ребёнка о самочувствии, проверяйте прекращение эпизодов и выполнение договорённостей школой.'],
  ['Что делать, если мой ребёнок оказался агрессором?', 'Остановите действия без унижения и ярлыков. Разберите последствия, договоритесь о восстановительных шагах и выясните, какая поддержка нужна самому ребёнку.'],
  ['Нужно ли требовать публичных извинений?', 'Принуждение может повторно травмировать пострадавшего. Извинение должно быть добровольным, конкретным и сопровождаться реальным прекращением действий.'],
  ['Когда нужен психолог?', 'Если тревога, агрессия, изоляция или нарушения сна сохраняются, мешают учёбе и обычной жизни, лучше обратиться к детскому психологу.'],
  ['Как поддержать свидетеля травли?', 'Скажите, что сообщить взрослому — не ябедничество. Помогите выбрать безопасный способ поддержать пострадавшего, не вступая в опасное противостояние.'],
  ['Что важнее всего после разговора?', 'Не оставлять ребёнка одного с проблемой: согласовать ближайший шаг, назвать взрослого для связи и вернуться к теме в оговорённое время.']
].map(([title, answer]) => ({ audience: 'parents', type: 'question', title, prompt: 'Как бы вы ответили?', answer }));

const childCards = [
  ['Одноклассники создали чат без тебя и смеются, когда ты спрашиваешь о нём.', 'Скажи об этом взрослому, которому доверяешь, и сохрани сообщения. Исключение и насмешки могут быть частью травли, и справляться одному не нужно.'],
  ['Тебя регулярно называют обидным прозвищем, хотя ты просил остановиться.', 'Спокойно скажи: «Мне это не нравится. Остановитесь», уйди к безопасным людям и расскажи взрослому о повторяющихся эпизодах.'],
  ['Ты увидел, как у другого ребёнка отбирают вещи.', 'Не рискуй собой. Позови взрослого, запомни детали и после ситуации покажи ребёнку, что он не один.'],
  ['В классе пересылают неприятную фотографию одноклассника.', 'Не пересылай и не ставь реакции. Сделай скриншот для доказательства, сообщи взрослому и поддержи человека, которого обсуждают.'],
  ['Друг просит никому не говорить, что его толкают после уроков.', 'Скажи, что переживаешь за него и хочешь помочь. При угрозе безопасности важно вместе обратиться к надёжному взрослому.'],
  ['Тебя провоцируют на драку перед другими.', 'Не доказывай смелость дракой. Отойди в безопасное место, позови взрослого и расскажи, кто и когда тебя провоцировал.'],
  ['Учитель не заметил насмешки, а класс говорит, что это шутка.', 'Твои чувства важны. Расскажи учителю после урока или другому взрослому и объясни, что это повторяется и тебе неприятно.'],
  ['Тебе угрожают, если ты расскажешь взрослым.', 'Угрозы — причина обратиться за помощью как можно скорее. Не оставайся один и сохрани доказательства, если это безопасно.'],
  ['Ты случайно посмеялся вместе со всеми и теперь жалеешь.', 'Можно исправить ситуацию: не поддерживать насмешки дальше, извиниться без оправданий и предложить человеку поддержку.'],
  ['Кто-то постоянно прячет твои вещи.', 'Запиши случаи, попроси взрослого помочь и не ищи вещи в одиночку там, где может быть опасно.'],
  ['Тебя исключают из команд и совместных заданий.', 'Расскажи учителю конкретно, как часто это происходит. Попроси помочь организовать безопасное участие в общей работе.'],
  ['Друг стал молчаливым и избегает школы.', 'Спроси без давления, всё ли в порядке, предложи пойти к взрослому вместе и не обещай хранить опасные ситуации в тайне.'],
  ['Обидчик написал, что всё было просто шуткой.', 'Шутка перестаёт быть шуткой, когда человеку больно и просьбу остановиться игнорируют. Сохрани сообщение и обратись к взрослому.'],
  ['Ты боишься, что после жалобы станет хуже.', 'Расскажи о страхе взрослому и попроси заранее составить план безопасности: к кому идти, где находиться на переменах и как сообщать о новых случаях.'],
  ['Взрослый сказал: «Не обращай внимания».', 'Попробуй обратиться к другому взрослому и сказать прямо: «Это повторяется, мне небезопасно, и мне нужна помощь».']
].map(([title, answer]) => ({ audience: 'children', type: 'situation', title, prompt: 'Что ты сделаешь?', answer }));

const dialogueCards = [
  'Что помогает тебе чувствовать себя в безопасности в школе?', 'По каким признакам мы понимаем, что шутка стала обидной?', 'К кому из взрослых тебе проще всего обратиться и почему?', 'Как я могу поддержать тебя, не принимая решения за тебя?', 'Что можно сказать человеку, которого обижают?', 'Какие правила общения должны быть в семейном чате?', 'Что мешает детям рассказывать взрослым о травле?', 'Как выглядит хорошее извинение?', 'Что для тебя означает уважать чужие границы?', 'Как поступить, если друг просит хранить опасный секрет?', 'Какие слова взрослого действительно успокаивают?', 'Что можно сделать свидетелю, не подвергая себя риску?', 'Как понять, что помощь взрослых сработала?', 'Что мы можем заранее придумать на случай сложной ситуации?', 'Как поддерживать друг друга после неприятного дня?'
].map((title) => ({ audience: 'mixed', type: 'dialogue', title, prompt: 'По очереди поделитесь своим мнением.', answer: null }));

const trainerCards = [...parentCards, ...childCards, ...dialogueCards];

const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroDots = [...document.querySelectorAll('.pager button')];
const heroPager = document.querySelector('.pager');
const heroCarousel = document.querySelector('.hero-carousel');
let activeHeroSlide = 0;
let heroTimer;

const showHeroSlide = (index) => {
  activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
  heroDots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === activeHeroSlide));
  heroPager.setAttribute('aria-label', `Слайд ${activeHeroSlide + 1} из 3`);
  heroCarousel.scrollTo({ left: activeHeroSlide * heroCarousel.clientWidth, behavior: 'smooth' });
};

const startHeroCarousel = () => {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => showHeroSlide(activeHeroSlide + 1), 4000);
};

heroDots.forEach((dot, index) => dot.addEventListener('click', () => {
  showHeroSlide(index);
  startHeroCarousel();
}));
heroCarousel.addEventListener('scroll', () => {
  const index = Math.round(heroCarousel.scrollLeft / heroCarousel.clientWidth);
  if (index !== activeHeroSlide) {
    activeHeroSlide = index;
    heroDots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === activeHeroSlide));
    heroPager.setAttribute('aria-label', `Слайд ${activeHeroSlide + 1} из 3`);
  }
}, { passive: true });
heroCarousel.addEventListener('pointerdown', () => window.clearInterval(heroTimer));
heroCarousel.addEventListener('pointerup', startHeroCarousel);
heroCarousel.addEventListener('pointercancel', startHeroCarousel);
heroCarousel.addEventListener('pointerenter', () => window.clearInterval(heroTimer));
heroCarousel.addEventListener('pointerleave', startHeroCarousel);
startHeroCarousel();

let currentAudience = 'children';

document.querySelectorAll('.situations .tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const audience = tab.dataset.audience;
    currentAudience = audience;
    document.querySelectorAll('.situations .tab').forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });

    document.querySelectorAll('.story').forEach((story, index) => {
      const content = storyContent[audience][index];
      story.querySelector('.subtitle').innerHTML = content.title;
      story.querySelector('.body').innerHTML = content.text;
      story.querySelector('.button--dark').textContent = content.primary;
      const secondaryButton = story.querySelector('.button--light');
      if (secondaryButton) secondaryButton.hidden = !content.showSecondary;
      const storyImage = story.querySelector('img');
      storyImage.src = content.image;
      storyImage.alt = content.imageAlt;
    });
  });
});

const backdrop = document.querySelector('.sheet-backdrop');
const sheetTitle = document.querySelector('.sheet-title');
const sheetContent = document.querySelector('.sheet-content');
const sheetActions = document.querySelector('.sheet-actions');
const closeSheet = () => {
  backdrop.hidden = true;
  document.body.classList.remove('sheet-open');
};

const openSheet = (title, content, showAction = false) => {
  sheetTitle.textContent = title;
  sheetContent.innerHTML = content;
  sheetActions.hidden = !showAction;
  backdrop.hidden = false;
  document.body.classList.add('sheet-open');
  document.querySelector('.sheet-close').focus();
};

const plainTitle = (title) => title.replace(/<br>/g, ' ');
const articleMarkup = (story) => `
  <div class="article-copy">${story.article.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
  <p class="article-help">Если ситуация продолжается или нужна поддержка, обратитесь к специалистам — помощь можно получить конфиденциально.</p>
`;

const openArticle = (story) => openSheet(plainTitle(story.title), articleMarkup(story), true);

const fullscreenMovie = document.querySelector('.fullscreen-movie');
const openFullscreenMovie = () => {
  fullscreenMovie.hidden = false;
  document.body.classList.add('movie-open');
  document.querySelector('.fullscreen-movie__close').focus();
};
const closeFullscreenMovie = () => {
  fullscreenMovie.hidden = true;
  document.body.classList.remove('movie-open');
};

document.querySelectorAll('.story').forEach((story, index) => {
  story.addEventListener('click', (event) => {
    const button = event.target.closest('.button');
    if (!button) return;
    const content = storyContent[currentAudience][index];
    if (button.classList.contains('story-read') || content.primary === 'Читать подробнее') openArticle(content);
    if (button.classList.contains('story-primary') && content.primary === 'Посмотреть мультик') openFullscreenMovie();
  });
});

document.querySelector('.fullscreen-movie__close').addEventListener('click', closeFullscreenMovie);

document.querySelectorAll('.answers .answer').forEach((card) => {
  card.addEventListener('click', () => openArticle(answerContent[Number(card.dataset.answerIndex)]));
});

document.querySelectorAll('.why-card').forEach((card) => {
  card.addEventListener('click', () => {
    openSheet('Источник данных', `<p>${card.dataset.source}</p>`);
  });
});

const mainPage = document.querySelector('.page');
const materialsPage = document.querySelector('.materials-page');
const materialsList = document.querySelector('.materials-list');
const moviesPage = document.querySelector('.movies-page');
const moviesList = document.querySelector('.movies-list');
const trainerPage = document.querySelector('.trainer-page');
let materialsReturnSelector = '.situations';
let moviesReturnSelector = '.cartoons';

const updateSecondaryHeaders = () => {
  document.querySelectorAll('.materials-header').forEach((header) => {
    const pageTitle = header.parentElement.querySelector('.secondary-page-title');
    if (!pageTitle || header.parentElement.hidden) return;
    header.classList.toggle('show-title', pageTitle.getBoundingClientRect().bottom <= header.getBoundingClientRect().bottom);
  });
};

const renderMaterials = (audience) => {
  const situationCards = storyContent[audience].map((story, index) => `
    <article class="story materials-story" data-material-index="${index}" data-material-audience="${audience}">
      <img src="${story.image}" alt="${story.imageAlt}">
      <h2 class="subtitle">${story.title}</h2>
      <p class="body">${story.text}</p>
      <button class="button button--dark material-read" type="button">Читать подробнее</button>
    </article>
  `).join('');
  const answerCards = audience === 'adults' ? `
    <section class="materials-extra">
      <h2 class="subtitle">Ответы на вопросы взрослых</h2>
      <div class="materials-answer-list">
        ${answerContent.map((answer, index) => `
          <button class="answer materials-answer" type="button" data-material-answer="${index}">
            <img src="${answer.image}" alt="">
            <b>${answer.title}</b>
            <img class="answer-arrow" src="./assets main page/arrow-right.svg" alt="">
          </button>
        `).join('')}
      </div>
    </section>
  ` : '';
  materialsList.innerHTML = situationCards + answerCards;
};

function showMainPage(restorePosition = true) {
  materialsPage.hidden = true;
  moviesPage.hidden = true;
  trainerPage.hidden = true;
  mainPage.hidden = false;
  if (restorePosition) document.querySelector(materialsReturnSelector).scrollIntoView({ block: 'start' });
}

const openMaterialsPage = (audience, returnSelector) => {
  materialsReturnSelector = returnSelector;
  mainPage.hidden = true;
  moviesPage.hidden = true;
  trainerPage.hidden = true;
  materialsPage.hidden = false;
  renderMaterials(audience);
  document.querySelectorAll('.materials-tabs .tab').forEach((tab) => {
    const selected = tab.dataset.materialsAudience === audience;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
  window.scrollTo({ top: 0 });
  window.requestAnimationFrame(updateSecondaryHeaders);
};

document.querySelector('.situations-all').addEventListener('click', () => openMaterialsPage(currentAudience, '.situations'));
document.querySelector('.answers-more').addEventListener('click', () => openMaterialsPage('adults', '.answers'));
document.querySelector('.hero-materials-button').addEventListener('click', () => openMaterialsPage('children', '.hero'));

const openMoviesPage = (returnSelector) => {
  moviesReturnSelector = returnSelector;
  moviesList.replaceChildren(...[...document.querySelectorAll('.scroller .movie')].map((movie) => movie.cloneNode(true)));
  mainPage.hidden = true;
  materialsPage.hidden = true;
  trainerPage.hidden = true;
  moviesPage.hidden = false;
  window.scrollTo({ top: 0 });
  window.requestAnimationFrame(updateSecondaryHeaders);
};

document.querySelector('.cartoons-all').addEventListener('click', () => openMoviesPage('.cartoons'));
document.querySelector('.hero-movies-button').addEventListener('click', () => openMoviesPage('.hero'));

document.querySelector('.movies-back').addEventListener('click', () => {
  showMainPage(false);
  document.querySelector(moviesReturnSelector).scrollIntoView({ block: 'start' });
});

const trainerSetup = document.querySelector('.trainer-setup');
const trainerGame = document.querySelector('.trainer-game');
const trainerSuccess = document.querySelector('.trainer-success');
const exitDialog = document.querySelector('.exit-dialog');
const trainerState = { role: 'parent', count: 10, customCount: false, cards: [], index: 0, flipped: false, returnSelector: '.trainer' };

const setChip = (group, value) => {
  group.querySelectorAll('.trainer-chip').forEach((chip) => chip.classList.toggle('active', chip.dataset.value === value));
};

document.querySelectorAll('.trainer-chips').forEach((group) => {
  group.addEventListener('click', (event) => {
    const chip = event.target.closest('.trainer-chip');
    if (!chip) return;
    document.querySelector('.trainer-common input').checked = false;
    setChip(group, chip.dataset.value);
    if (group.dataset.setting === 'role') {
      trainerState.role = chip.dataset.value;
      const isParent = trainerState.role === 'parent';
      document.querySelector('.role-hint').textContent = isParent ? 'Проверьте себя и подготовьтесь к разговору с ребёнком' : 'Разыграйте ситуации и потренируйтесь просить о помощи';
    }
  });
});

document.querySelector('.trainer-common input').addEventListener('change', (event) => {
  setChip(document.querySelector('[data-setting="role"]'), trainerState.role);
});

document.querySelectorAll('[data-type-info]').forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.target.closest('.trainer-type-choice')) {
      const shuffleEnabled = document.querySelector('.trainer-shuffle:not(.trainer-common) input').checked;
      if (!shuffleEnabled) {
        document.querySelectorAll('.trainer-type').forEach((typeButton) => typeButton.classList.remove('active'));
        button.classList.add('active');
        return;
      }
      const activeTypes = document.querySelectorAll('.trainer-type.active');
      if (button.classList.contains('active') && activeTypes.length === 1) return;
      button.classList.toggle('active');
      return;
    }
    if (!event.target.closest('.trainer-type-help')) return;
    const info = {
      question: ['Вопрос', 'Проверьте знания о травле и выберите безопасный способ поддержки. После ответа карточка покажет рекомендацию психолога.'],
      situation: ['Ситуация', 'Представьте конкретный случай и решите, как поступить. Затем сравните свой вариант с безопасной стратегией.'],
      dialogue: ['Диалог', 'Тема без единственно правильного ответа. Обсудите её по очереди и постарайтесь услышать друг друга.']
    }[button.dataset.typeInfo];
    openSheet(info[0], `<p>${info[1]}</p>`);
  });
});

document.querySelector('.trainer-shuffle:not(.trainer-common) input').addEventListener('change', (event) => {
  const typeButtons = [...document.querySelectorAll('.trainer-type')];
  typeButtons.forEach((button, index) => button.classList.toggle('active', event.target.checked || index === 0));
});

const setTrainerCount = (value, custom = false) => {
  trainerState.count = Math.max(1, Math.min(45, Number(value) || 10));
  trainerState.customCount = custom;
  document.querySelector('.trainer-count>span').textContent = trainerState.count;
};

document.querySelector('.trainer-count').addEventListener('click', () => {
  openSheet('Количество карт', `
    <div class="count-options">
      ${[5, 10, 15, 20].map((value) => `<label><input type="radio" name="card-count" value="${value}" ${!trainerState.customCount && trainerState.count === value ? 'checked' : ''}><span>${value} карт</span></label>`).join('')}
      <label class="custom-count"><input type="radio" name="card-count" value="custom" ${trainerState.customCount ? 'checked' : ''}><span>Своё количество</span></label>
      <div class="custom-count-row"><input type="number" min="1" max="45" value="${trainerState.count}" aria-label="Своё количество карт"><button class="button button--dark apply-count" type="button">Готово</button></div>
    </div>
  `);
});

sheetContent.addEventListener('change', (event) => {
  if (event.target.name !== 'card-count' || event.target.value === 'custom') return;
  setTrainerCount(event.target.value, false);
  closeSheet();
});
sheetContent.addEventListener('input', (event) => {
  if (!event.target.closest('.custom-count-row')) return;
  const customOption = sheetContent.querySelector('input[name="card-count"][value="custom"]');
  if (customOption) customOption.checked = true;
});
sheetContent.addEventListener('click', (event) => {
  if (!event.target.closest('.apply-count')) return;
  setTrainerCount(sheetContent.querySelector('.custom-count-row input').value, true);
  closeSheet();
});

const shuffled = (items) => {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
};

const buildDeck = () => {
  const useCommonDeck = document.querySelector('.trainer-common input').checked;
  let pool = useCommonDeck ? [...trainerCards] : trainerState.role === 'parent' ? [...parentCards, ...dialogueCards] : [...childCards, ...dialogueCards];
  const selectedTypes = [...document.querySelectorAll('.trainer-type.active')].map((button) => button.dataset.typeInfo);
  pool = pool.filter((card) => selectedTypes.includes(card.type));
  if (!pool.length) {
    openSheet('Нет подходящих карточек', 'В выбранной колоде нет карточек этого типа. Выберите другой тип или включите общую колоду.');
    return false;
  }
  if (document.querySelector('.trainer-shuffle:not(.trainer-common) input').checked) pool = shuffled(pool);
  trainerState.cards = pool.slice(0, Math.min(trainerState.count, pool.length));
  trainerState.index = 0;
  trainerState.flipped = false;
  return true;
};

const typeLabels = { question: 'Вопрос', situation: 'Ситуация', dialogue: 'Диалог' };
const audienceLabels = { parents: 'для родителей', children: 'для ребёнка', mixed: 'для всех' };
const renderGameCard = () => {
  const card = trainerState.cards[trainerState.index];
  const gameCard = document.querySelector('.game-card');
  const isDenseCard = Math.max(card.title.length, (card.answer || '').length) > 165;
  gameCard.className = `game-card game-card--${card.type}${isDenseCard ? ' game-card--dense' : ''}`;
  document.querySelector('.game-card__front .game-card__tag').textContent = `${typeLabels[card.type]} ${audienceLabels[card.audience]}`;
  document.querySelector('.game-card__front .game-card__title').textContent = card.title;
  document.querySelector('.game-card__prompt').textContent = card.prompt;
  document.querySelector('.game-card__answer').textContent = card.answer || '';
  document.querySelector('.trainer-progress-text').textContent = `${trainerState.index + 1} из ${trainerState.cards.length}`;
  document.querySelector('.trainer-progress i').style.width = `${((trainerState.index + 1) / trainerState.cards.length) * 100}%`;
  document.querySelectorAll('.game-flip').forEach((button) => { button.hidden = card.type === 'dialogue'; });
  document.querySelector('.game-action').textContent = trainerState.index === trainerState.cards.length - 1 ? 'Завершить' : 'Дальше';
  document.querySelector('.trainer-success-close').hidden = trainerState.index === 0;
  trainerState.flipped = false;
};

const showTrainerState = (state) => {
  trainerPage.dataset.view = state;
  trainerSetup.hidden = state !== 'setup';
  trainerGame.hidden = state !== 'game';
  trainerSuccess.hidden = state !== 'success';
  trainerSetup.setAttribute('aria-hidden', state !== 'setup');
  trainerGame.setAttribute('aria-hidden', state !== 'game');
  trainerSuccess.setAttribute('aria-hidden', state !== 'success');
  document.querySelector('.trainer-success-close').hidden = state !== 'success';
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    updateSecondaryHeaders();
  });
};

const openTrainerPage = (returnSelector) => {
  trainerState.returnSelector = returnSelector;
  mainPage.hidden = true;
  materialsPage.hidden = true;
  moviesPage.hidden = true;
  trainerPage.hidden = false;
  showTrainerState('setup');
};

document.querySelector('.trainer-start').addEventListener('click', () => {
  if (!buildDeck()) return;
  showTrainerState('game');
  renderGameCard();
});

document.querySelector('.game-action').addEventListener('click', () => {
  if (trainerState.index < trainerState.cards.length - 1) {
    trainerState.index += 1;
    renderGameCard();
  } else {
    showTrainerState('success');
  }
});

document.querySelector('.game-flip--answer').addEventListener('click', () => {
  trainerState.flipped = true;
  document.querySelector('.game-card').classList.add('is-flipped');
});
document.querySelector('.game-flip--question').addEventListener('click', () => {
  trainerState.flipped = false;
  document.querySelector('.game-card').classList.remove('is-flipped');
});

document.querySelector('.trainer-back').addEventListener('click', () => {
  if (!trainerGame.hidden) {
    if (trainerState.index > 0) {
      trainerState.index -= 1;
      renderGameCard();
    } else {
      showTrainerState('setup');
    }
  } else {
    showMainPage(false);
    document.querySelector(trainerState.returnSelector).scrollIntoView({ block: 'start' });
  }
});

document.querySelector('.exit-cancel').addEventListener('click', () => {
  exitDialog.hidden = true;
  document.body.classList.remove('sheet-open');
});
document.querySelector('.exit-confirm').addEventListener('click', () => {
  exitDialog.hidden = true;
  document.body.classList.remove('sheet-open');
  showMainPage(false);
  document.querySelector(trainerState.returnSelector).scrollIntoView({ block: 'start' });
});

document.querySelector('.trainer-again').addEventListener('click', () => showTrainerState('setup'));
document.querySelector('.trainer-success-close').addEventListener('click', () => {
  if (!trainerGame.hidden) {
    exitDialog.hidden = false;
    document.body.classList.add('sheet-open');
  } else {
    showMainPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
document.querySelectorAll('.trainer-button,.hero-trainer-button').forEach((button) => button.addEventListener('click', () => openTrainerPage(button.classList.contains('hero-trainer-button') ? '.hero' : '.trainer')));

document.querySelector('[data-success-link="materials"]').addEventListener('click', () => openMaterialsPage('adults', '.trainer'));
document.querySelector('[data-success-link="movies"]').addEventListener('click', () => openMoviesPage('.trainer'));

window.addEventListener('scroll', updateSecondaryHeaders, { passive: true });
window.addEventListener('resize', updateSecondaryHeaders);

document.querySelector('.materials-back').addEventListener('click', () => showMainPage());

document.querySelectorAll('.materials-tabs .tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const audience = tab.dataset.materialsAudience;
    document.querySelectorAll('.materials-tabs .tab').forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    renderMaterials(audience);
  });
});

materialsList.addEventListener('click', (event) => {
  const answerCard = event.target.closest('[data-material-answer]');
  if (answerCard) {
    openArticle(answerContent[Number(answerCard.dataset.materialAnswer)]);
    return;
  }
  const button = event.target.closest('.material-read');
  if (!button) return;
  const card = button.closest('.materials-story');
  openArticle(storyContent[card.dataset.materialAudience][Number(card.dataset.materialIndex)]);
});

document.querySelector('.sheet-close').addEventListener('click', closeSheet);
backdrop.addEventListener('click', (event) => {
  if (event.target === backdrop) closeSheet();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !backdrop.hidden) closeSheet();
  if (event.key === 'Escape' && !fullscreenMovie.hidden) closeFullscreenMovie();
});

const scroller = document.querySelector('.scroller');
const counter = document.querySelector('.movie-counter');
const updateMovieCounter = () => {
  const movie = scroller.querySelector('.movie');
  const step = movie.offsetWidth + parseFloat(getComputedStyle(scroller).gap || 0);
  const index = Math.min(2, Math.max(0, Math.round(scroller.scrollLeft / step)));
  counter.textContent = `${index + 1} из 3`;
};
scroller.addEventListener('scroll', updateMovieCounter, { passive: true });
window.addEventListener('resize', updateMovieCounter);

const foundationData = {
  shalash: {
    name: 'Шалаш', logo: './assets main page/shalash.png', photo: './assets main page/help-center.png', site: 'https://shalash.academy',
    description: 'Благотворительный фонд «Шалаш» с 2019 года помогает детям и подросткам с трудным поведением — через бесплатные курсы для детей и системную работу со школами. Фонд разрабатывает и внедряет педагогические методики работы с проблемами поведения, а также проводит групповые занятия по развитию социальных навыков для детей 7–17 лет. Команда фонда помогает предотвращать негативные последствия трудного поведения, развивая у детей критическое мышление, коммуникативные способности и навыки сотрудничества. С 2025 года «Шалаш» работает с государственными школами Калужской области в рамках программы поддержки педагогических коллективов в работе с трудным поведением.',
    legal: 'Благотворительный фонд «Шалаш»', inn: '9721081683', ogrn: '1197700008000',
    good: 'В феврале фонд «Шалаш» поделился новостями о бесплатной онлайн-конференции для родителей, поддержке детей и подростков с трудным поведением, поиске редактора коммуникаций и создании обложек для телефона. Фонд также опубликовал отчет за первую половину 2025 года и продолжил выкладывать зимние открытки. Благотворительный фонд «Шалаш» продолжает свою миссию, помогая детям 7–17 лет справляться с трудностями поведения через современные методики и системную работу с государственными школами, чтобы каждый подросток мог раскрыть свой потенциал.'
  },
  upsala: {
    name: 'Упсала-Цирк', logo: './assets main page/upsala.png', photo: './assets main page/mult 1.png', site: 'https://upsalacircus.ru',
    description: '«Упсала-Цирк» — независимый культурный и социальный проект из Санкт-Петербурга. Артисты здесь — подростки из групп социального риска и с особыми потребностями, все они через цирк могут реализовать таланты, изменить свой жизненный сценарий и стать успешными. С сентября по июнь около 120 подростков ежедневно занимаются в цирке бесплатно, за 25 лет работы создано более 30 постановок, включая 6 инклюзивных, которые посмотрели больше 50 000 зрителей. Спектакли цирка ежегодно участвуют в фестивалях и получают награды. Каждый спектакль меняет не только мир артистов, но и мир, в котором нам всем предстоит жить. Упсала-Цирк сам ищет средства на свои пятилетние программы для подростков, поэтому во многом работает благодаря частным пожертвованиям.',
    legal: 'Автономная некоммерческая организация социально-культурных услуг «Упсала-Цирк»', inn: '7811154195', ogrn: '1087800004434',
    good: 'В течение февраля фонд «Упсала-Цирк» провел ряд мероприятий и собрал пожертвования для поддержки проектов. Результатом сотрудничества с арт-лабораторией и дизайн мастерской «ЭТО» стала открытка, которая стала лотом в сборе на спектакль «Цирк Фибоначчи». Проект предусматривает участие людей с ментальными особенностями и направлен на создание инклюзивной среды. Фонд также запустил рубрику #здесьбылцирк, где артисты спектакля прячут билеты в различных районах города. «Упсала-Цирк» продолжает свою миссию, ежедневно доказывая, что цирковое искусство способно менять жизненные сценарии подростков из групп социального риска и с особыми потребностями.'
  }
};
const foundationPages = [...document.querySelectorAll('.app-subpage')];
const foundationPage = document.querySelector('.foundation-page');
const donationPage = document.querySelector('.donation-page');
const pickerPage = document.querySelector('.foundation-picker');
const pageHistory = [];
let selectedFoundation = 'shalash';
let pendingFoundation = 'shalash';
let activeFoundation = 'shalash';
let lastPickerClick = null;
const hideAllAppPages = () => { mainPage.hidden = true; materialsPage.hidden = true; moviesPage.hidden = true; trainerPage.hidden = true; foundationPages.forEach((page) => { page.hidden = true; }); };
const showAppPage = (page, push = true) => { if (push) pageHistory.push([...document.querySelectorAll('main')].find((item) => !item.hidden) || mainPage); hideAllAppPages(); page.hidden = false; window.scrollTo(0, 0); };
const goBackApp = () => { const previous = pageHistory.pop() || mainPage; hideAllAppPages(); previous.hidden = false; if (previous === mainPage) document.querySelector('.foundations').scrollIntoView({ block: 'start' }); else window.scrollTo(0, 0); };
const fundCardMarkup = (key, arrow = true) => { const fund = key === '1221' ? { name: 'Фонд 1221', logo: './assets main page/1221.png' } : foundationData[key]; const text = key === 'shalash' ? 'Помогает детям и подросткам с трудным поведением' : key === 'upsala' ? 'Социальный цирк для подростков' : 'Не участвует в Знаке добра'; return `<img src="${fund.logo}" alt=""><span><b>${fund.name}</b><small>${text}</small></span><i>${arrow ? '›' : ''}</i>`; };
const renderFoundation = (key, tab = 'about') => { activeFoundation = key; const fund = foundationData[key]; foundationPage.querySelector('.app-navbar b').textContent = tab === 'about' ? 'О фонде' : 'Добрые дела фонда'; document.querySelector('.foundation-detail').innerHTML = `<div class="fund-verified"><img src="./assets main page/Verify.svg" alt="">Проверенный фонд</div><h1>${fund.name}</h1><div class="fund-tabs"><button class="${tab === 'about' ? 'active' : ''}" data-fund-tab="about">О фонде</button><button class="${tab === 'good' ? 'active' : ''}" data-fund-tab="good">Добрые дела фонда</button></div>${tab === 'about' ? `<div class="fund-hero"><img src="${fund.photo}" alt=""><span class="fund-hero-logo"><img src="${fund.logo}" alt=""></span></div><div class="fund-copy"><p>${fund.description}</p><p><b>Сайт фонда:</b> <a href="${fund.site}" target="_blank" rel="noopener noreferrer">${fund.site.replace('https://','')}</a></p><h2>Юридическая информация</h2><div class="fund-legal"><p><span>Полное юридическое название фонда:</span> ${fund.legal}</p><p><span>ИНН:</span> ${fund.inn}</p><p><span>ОГРН:</span> ${fund.ogrn}</p></div></div>` : `<div class="good-filters"><div class="good-filter"><b>Год</b><div>2026</div></div><div class="good-filter"><b>Месяц</b><div>Февраль</div></div></div><div class="fund-copy"><p>${fund.good}</p></div>`}`; };
const openFoundation = (key) => { renderFoundation(key); showAppPage(foundationPage); };
const renderDonationFund = () => { document.querySelector('.donation-fund-card').innerHTML = fundCardMarkup(selectedFoundation); };
const openDonation = (key = selectedFoundation) => { selectedFoundation = key; renderDonationFund(); showAppPage(donationPage); };
document.querySelectorAll('[data-foundation]').forEach((card) => card.addEventListener('click', () => openFoundation(card.dataset.foundation)));
document.querySelector('.foundations-help').addEventListener('click', () => openDonation(Math.random() < .5 ? 'shalash' : 'upsala'));
document.querySelector('.foundation-detail').addEventListener('click', (event) => { const tab = event.target.closest('[data-fund-tab]'); if (tab) renderFoundation(activeFoundation, tab.dataset.fundTab); });
document.querySelector('.donation-open').addEventListener('click', () => openDonation(activeFoundation));
document.querySelector('.donation-fund-card').addEventListener('click', () => openFoundation(selectedFoundation));
document.querySelector('.change-foundation').addEventListener('click', () => { pendingFoundation = selectedFoundation; lastPickerClick = null; document.querySelector('.picker-list').innerHTML = ['shalash','upsala','1221'].map((key) => `<button class="fund-mini-card ${key === pendingFoundation ? 'selected' : ''} ${key === '1221' ? 'disabled' : ''}" type="button" data-pick-fund="${key}" ${key === '1221' ? 'disabled' : ''}>${fundCardMarkup(key)}</button>`).join(''); showAppPage(pickerPage); });
document.querySelector('.picker-list').addEventListener('click', (event) => { const card = event.target.closest('[data-pick-fund]:not([disabled])'); if (!card) return; if (lastPickerClick === card.dataset.pickFund) { openFoundation(card.dataset.pickFund); return; } document.querySelectorAll('[data-pick-fund]').forEach((item) => item.classList.remove('selected')); card.classList.add('selected'); pendingFoundation = card.dataset.pickFund; lastPickerClick = card.dataset.pickFund; });
document.querySelector('.picker-confirm').addEventListener('click', () => { selectedFoundation = pendingFoundation; renderDonationFund(); goBackApp(); });
document.querySelectorAll('.app-back').forEach((button) => button.addEventListener('click', goBackApp));
document.querySelectorAll('.donation-period button,.donation-amounts button').forEach((button) => button.addEventListener('click', () => { button.parentElement.querySelectorAll('button').forEach((item) => item.classList.remove('active')); button.classList.add('active'); }));

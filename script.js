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

document.querySelectorAll('.story').forEach((story, index) => {
  story.addEventListener('click', (event) => {
    const button = event.target.closest('.button');
    if (!button) return;
    const content = storyContent[currentAudience][index];
    if (button.classList.contains('story-read') || content.primary === 'Читать подробнее') openArticle(content);
  });
});

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
let materialsReturnSelector = '.situations';

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
  mainPage.hidden = false;
  if (restorePosition) document.querySelector(materialsReturnSelector).scrollIntoView({ block: 'start' });
}

const openMaterialsPage = (audience, returnSelector) => {
  materialsReturnSelector = returnSelector;
  mainPage.hidden = true;
  moviesPage.hidden = true;
  materialsPage.hidden = false;
  renderMaterials(audience);
  document.querySelectorAll('.materials-tabs .tab').forEach((tab) => {
    const selected = tab.dataset.materialsAudience === audience;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
  window.scrollTo({ top: 0 });
};

document.querySelector('.situations-all').addEventListener('click', () => openMaterialsPage(currentAudience, '.situations'));
document.querySelector('.answers-more').addEventListener('click', () => openMaterialsPage('adults', '.answers'));
document.querySelector('.hero-materials-button').addEventListener('click', () => openMaterialsPage('children', '.hero'));

document.querySelector('.cartoons-all').addEventListener('click', () => {
  moviesList.replaceChildren(...[...document.querySelectorAll('.scroller .movie')].map((movie) => movie.cloneNode(true)));
  mainPage.hidden = true;
  materialsPage.hidden = true;
  moviesPage.hidden = false;
  window.scrollTo({ top: 0 });
});

document.querySelector('.movies-back').addEventListener('click', () => {
  showMainPage(false);
  document.querySelector('.cartoons').scrollIntoView({ block: 'start' });
});

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

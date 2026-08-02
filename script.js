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
const closeSheet = () => {
  backdrop.hidden = true;
  document.body.classList.remove('sheet-open');
};

const openSheet = (title, content) => {
  sheetTitle.textContent = title;
  sheetContent.innerHTML = content;
  backdrop.hidden = false;
  document.body.classList.add('sheet-open');
  document.querySelector('.sheet-close').focus();
};

const plainTitle = (title) => title.replace(/<br>/g, ' ');
const articleMarkup = (story) => `
  <div class="article-copy">${story.article.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
  <p class="article-help">Если ситуация продолжается или нужна поддержка, обратитесь к специалистам — помощь можно получить конфиденциально.</p>
  <button class="button button--dark article-help-button" type="button">Обратиться за помощью</button>
`;

const openArticle = (story) => openSheet(plainTitle(story.title), articleMarkup(story));

document.querySelectorAll('.story').forEach((story, index) => {
  story.addEventListener('click', (event) => {
    const button = event.target.closest('.button');
    if (!button) return;
    const content = storyContent[currentAudience][index];
    if (button.classList.contains('story-read') || content.primary === 'Читать подробнее') openArticle(content);
  });
});

document.querySelectorAll('.why-card').forEach((card) => {
  card.addEventListener('click', () => {
    openSheet('Источник данных', `<p>${card.dataset.source}</p>`);
  });
});

sheetContent.addEventListener('click', (event) => {
  if (!event.target.closest('.article-help-button')) return;
  closeSheet();
  showMainPage(false);
  document.querySelector('.help').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const mainPage = document.querySelector('.page');
const materialsPage = document.querySelector('.materials-page');
const materialsList = document.querySelector('.materials-list');

const renderMaterials = (audience) => {
  materialsList.innerHTML = storyContent[audience].map((story, index) => `
    <article class="story materials-story" data-material-index="${index}" data-material-audience="${audience}">
      <img src="${story.image}" alt="${story.imageAlt}">
      <h2 class="subtitle">${story.title}</h2>
      <p class="body">${story.text}</p>
      <button class="button button--dark material-read" type="button">Читать подробнее</button>
    </article>
  `).join('');
};

function showMainPage(restorePosition = true) {
  materialsPage.hidden = true;
  mainPage.hidden = false;
  if (restorePosition) document.querySelector('.situations').scrollIntoView({ block: 'start' });
}

document.querySelector('.situations-all').addEventListener('click', () => {
  mainPage.hidden = true;
  materialsPage.hidden = false;
  renderMaterials(currentAudience);
  document.querySelectorAll('.materials-tabs .tab').forEach((tab) => {
    const selected = tab.dataset.materialsAudience === currentAudience;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
  window.scrollTo({ top: 0 });
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

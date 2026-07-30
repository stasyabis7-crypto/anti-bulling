const storyContent = {
  children: [
    {
      title: 'Я подросток, и мне<br>плохо в классе',
      text: 'Куда обратиться, как попросить помощи,<br>что сказать взрослым',
      primary: 'Посмотреть мультик'
    },
    {
      title: 'Я вижу, что травят<br>другого',
      text: 'Что может сделать свидетель',
      primary: 'Читать подробнее'
    }
  ],
  adults: [
    {
      title: 'Моего ребёнка<br>травят в школе',
      text: 'Как заметить травлю и правильно<br>поддержать ребёнка',
      primary: 'Читать подробнее'
    },
    {
      title: 'Мой ребёнок травит<br>другого',
      text: 'Как поговорить без обвинений<br>и остановить агрессию',
      primary: 'Читать подробнее'
    }
  ]
};

const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroDots = [...document.querySelectorAll('.pager button')];
const heroPager = document.querySelector('.pager');
let activeHeroSlide = 0;
let heroTimer;

const showHeroSlide = (index) => {
  activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === activeHeroSlide));
  heroDots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === activeHeroSlide));
  heroPager.setAttribute('aria-label', `Слайд ${activeHeroSlide + 1} из 3`);
};

const startHeroCarousel = () => {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => showHeroSlide(activeHeroSlide + 1), 4000);
};

heroDots.forEach((dot, index) => dot.addEventListener('click', () => {
  showHeroSlide(index);
  startHeroCarousel();
}));
document.querySelector('.hero-carousel').addEventListener('pointerenter', () => window.clearInterval(heroTimer));
document.querySelector('.hero-carousel').addEventListener('pointerleave', startHeroCarousel);
startHeroCarousel();

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const audience = tab.dataset.audience;
    document.querySelectorAll('.tab').forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });

    document.querySelectorAll('.story').forEach((story, index) => {
      const content = storyContent[audience][index];
      story.querySelector('.subtitle').innerHTML = content.title;
      story.querySelector('.body').innerHTML = content.text;
      story.querySelector('.button--dark').textContent = content.primary;
    });
  });
});

const backdrop = document.querySelector('.sheet-backdrop');
const sheetText = document.querySelector('.sheet-text');
const closeSheet = () => {
  backdrop.hidden = true;
  document.body.classList.remove('sheet-open');
};

document.querySelectorAll('.why-card').forEach((card) => {
  card.addEventListener('click', () => {
    sheetText.textContent = card.dataset.source;
    backdrop.hidden = false;
    document.body.classList.add('sheet-open');
    document.querySelector('.sheet-close').focus();
  });
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

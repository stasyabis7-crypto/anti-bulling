const storyContent = {
  children: [
    {
      title: 'Я подросток, и мне<br>плохо в классе',
      text: 'Куда обратиться, как попросить помощи,<br>что сказать взрослым',
      primary: 'Посмотреть мультик',
      showSecondary: true,
      image: './assets main page/img 1 card.png',
      imageAlt: ''
    },
    {
      title: 'Я вижу, что травят<br>другого',
      text: 'Что может сделать свидетель',
      primary: 'Читать подробнее',
      showSecondary: false,
      image: './assets main page/img 2 card.png',
      imageAlt: ''
    }
  ],
  adults: [
    {
      title: 'Моего ребёнка<br>травят в школе',
      text: 'Как заметить травлю и правильно<br>поддержать ребёнка',
      primary: 'Читать подробнее',
      showSecondary: false,
      image: './assets main page/adult-card-choice.png',
      imageAlt: 'Положительная, нейтральная и отрицательная реакции'
    },
    {
      title: 'Мой ребёнок травит<br>другого',
      text: 'Как поговорить без обвинений<br>и остановить агрессию',
      primary: 'Читать подробнее',
      showSecondary: false,
      image: './assets main page/adult-card-aggressor.png',
      imageAlt: 'Один ребёнок толкает другого'
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
      const secondaryButton = story.querySelector('.button--light');
      if (secondaryButton) secondaryButton.hidden = !content.showSecondary;
      const storyImage = story.querySelector('img');
      storyImage.src = content.image;
      storyImage.alt = content.imageAlt;
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

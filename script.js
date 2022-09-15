const ham = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.nav-menu');
const x = document.querySelector('.slide-in');

x.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
ham.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  navbar.classList.remove('active');
}));

const reset = () => {
  if (window.innerWidth > 768) {
    navbar.style.display = 'none';
  }
};
window.addEventListener('resize', reset);
const data = [
  {
    id: 1,
    pic: './images/kilnam.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Yochai Benkler',
    designation: ' Banker with over 37years banking experience',
    history: 'He is an experienced banker , entrepreneur, CEO Be Money WiseR.',
  },
  {
    id: 2,
    pic: './images/yochai.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Kilnam Chor',
    designation: 'Banking Officer with over 30years of experience',
    history: 'He is an experienced banking officer , entrepreneur, and a farmer. ',
  },
  {
    id: 3,
    pic: './images/sohyeong.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'SohYeong Noh',
    designation: 'Credit Officer with more than 20 years of experience',
    history: 'She is a credit officer who has given out loans to over 100 commercial business people',
  },
  {
    id: 4,
    pic: './images/julia.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Julia Leda',
    designation: 'Bank manager with over 25years experience',
    history: 'She is a bank manager of centenary group with lots of financial knowledge',
  },
  {
    id: 5,
    pic: './images/lila.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Stephanie',
    designation: 'Financial Literacy Trainer with 15years experience',
    history: 'She is a financial literacy trainer working with BMW and she has changed many peoples financial lives.',
  },
  {
    id: 6,
    pic: './images/reagan.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Reagan Storch',
    designation: 'Experienced Accountant with over 15 years experience',
    history: 'He is an accountant, auditor and the founder of Villet Accontants Ltd.',
  },
];
const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('class', 'featured-speakers');
speakerContainer.setAttribute('id', 'speakers');
data.forEach((speakerPara) => {
  const speakerSection = document.createElement('div');
  speakerSection.setAttribute('class', 'speaker-section');
  speakerSection.setAttribute('id', 'each-speaker');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'speaker-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-image');
  image.setAttribute('src', speakerPara.pic);
  image.setAttribute('alt', speakerPara.altText);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'speaker-details');
  contentSection.setAttribute('id', 'about-speaker');

  const speakerName = document.createElement('h2');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speakerPara.nameOfSpeaker;
  contentSection.appendChild(speakerName);

  const speakerDesignation = document.createElement('p');
  speakerDesignation.setAttribute('class', 'speaker-designation');
  speakerDesignation.textContent = speakerPara.designation;
  contentSection.appendChild(speakerDesignation);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '.........';
  contentSection.appendChild(dotText);

  const speakerHistory = document.createElement('p');
  speakerHistory.setAttribute('class', 'speaker-history');
  speakerHistory.textContent = speakerPara.history;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const body = document.querySelector('body');
const partners = document.getElementById('partners');
body.insertBefore(speakerContainer, partners);
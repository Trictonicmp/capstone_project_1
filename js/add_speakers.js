const speakers = [
  {
    name: 'Yochai Benkler',
    position: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro vitae laborum libero voluptas, aut exercitationem eum animi ',
    imgURL: 'images/static/speaker_01.png',
    profileURL: 'YochaiBenkler.com',
  },
  {
    name: 'Kilnam Chon',
    position: '',
    description: 'dolor sit amet consectetur adipisicing elit. Magnam porro vitae laborum libero voluptas, aut exercitationem eum animi ',
    imgURL: 'images/static/speaker_02.png',
    profileURL: 'Kilnamchon.com',
  },
  {
    name: 'SohYeong Noh',
    position: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'adipisicing elit. Magnam porro vitae laborum libero voluptas, aut exercitationem eum animi ',
    imgURL: 'images/static/speaker_03.png',
    profileURL: 'sohyeong.com',
  },
  {
    name: 'Julia Leda',
    position: 'President of Young Pirates of Europe',
    description: 'Lorem ipsum dolor. Magnam porro vitae laborum libero voluptas, aut exercitationem eum animi ',
    imgURL: 'images/static/speaker_04.png',
    profileURL: 'julia.com',
  },
  {
    name: 'Lila Tretikov',
    position: 'Executive Director of Wikimedia Foundation',
    description: 'Magnam porro vitae laborum libero voluptas, aut exercitationem eum animi ',
    imgURL: 'images/static/speaker_05.png',
    profileURL: 'tretikov.com',
  },
  {
    name: 'Ryan Merkley',
    position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description: 'Lorem ipsum dolor sit amet , aut exercitationem eum animi ',
    imgURL: 'images/static/speaker_06.png',
    profileURL: 'ryanmerkley.com',
  },
];

function createSpeaker(speaker) {
  const speakerCard = document.createElement('li');
  speakerCard.classList.add('speaker-card');
  const speakerImg = document.createElement('img');
  speakerImg.src = speaker.imgURL;
  speakerImg.alt = speaker.name;
  speakerCard.appendChild(speakerImg);
  const speakerInfo = document.createElement('div');
  speakerInfo.classList.add('card-info');
  const speakerTitleContainer = document.createElement('h3');
  const anchor = document.createElement('a');
  anchor.href = speaker.profileURL;
  anchor.innerText = speaker.name;
  speakerTitleContainer.appendChild(anchor);
  speakerInfo.appendChild(speakerTitleContainer);
  const speakerPosition = document.createElement('h4');
  speakerPosition.innerText = speaker.position;
  speakerInfo.appendChild(speakerPosition);
  const cardLine = document.createElement('span');
  cardLine.classList.add('card-title-line');
  speakerInfo.appendChild(cardLine);
  const speakerDescription = document.createElement('p');
  speakerDescription.innerText = speaker.description;
  speakerInfo.appendChild(speakerDescription);
  speakerCard.appendChild(speakerInfo);

  return speakerCard;
}

function addSpeakers() {
  const speakersContainer = document.getElementById('speakers-container');
  for (let i = 0; i < speakers.length; i += 1) {
    speakersContainer.appendChild(createSpeaker(speakers[i]));
  }
}

addSpeakers();
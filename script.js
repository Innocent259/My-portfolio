const div = document.createElement('div');
div.className = 'new-container';
div.innerHTML = `
<div class="new-element-container" >
    <span class="button-and-list">
        <a href="#" class="button-img"> 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#979493"/>
            </svg>
        </a>
        <ul class="ul-items">
            <li>
                <a id='portButton' href="#portfolio">Portfolio</a>
                <hr class="new-line-1">
            </li>
            <li>
                <a id='aboutButton' href="#about">About</a>
                <hr class="new-line-1">
            </li>
            <li>
                <a id='contacttButton' href="#contact">Contact</a>
                <hr class="new-line-1">
            </li>   
        </ul>
    </span>
</div>
`;
const menu = document.querySelector('.nav-menu');

function handleClick() {
  document.body.appendChild(div);
  document.body.style.overflow = 'hidden';
}
document.querySelector('body').addEventListener('click',
  (e) => {
    const anchor = e.target.closest('a');
    if (anchor !== null) {
      div.parentNode.removeChild(div);
      document.body.style.overflow = 'scroll';
    }
  },
  false);

const removeItems = div.querySelector('.button-img');

function removeChild() {
  div.parentNode.removeChild(div);
  document.body.style.overflow = 'scroll';
}

menu.addEventListener('click', handleClick);

removeItems.addEventListener('click', removeChild);

// Popup

const data = [
  {
    title: 'Keeping track of hundreds  of components website',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './images/Snapshoot.svg',
    liveLink: '#pasteLink',
    linkSource: 'githubLink',
    iconCancel: './images/Cancel.svg',
  },
  {
    title: 'To-do List',
    description: "This a simple application of todo list, through this App you can add tasks you want to do remove them and edit them. The better thing is that you can mark all completed tasks and remove all of them ",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    featureImg: './images/todo.png',
    liveLink: '#https://innocent259.github.io/To-Do-list/',
    linkSource: 'https://github.com/Innocent259/To-Do-list',
    iconCancel: './images/Cancel.svg',
  },
  {
    title: 'Keeping track of hundreds  of components website',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './images/Snapshoot.svg',
    liveLink: '#pasteLink',
    linkSource: 'githubLink',
    iconCancel: './images/Cancel.svg',
  },
  {
    title: 'Keeping track of hundreds  of components website',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './images/Snapshoot.svg',
    liveLink: '#pasteLink',
    linkSource: 'githubLink',
    iconCancel: './images/Cancel.svg',
  },
  {
    title: 'Keeping track of hundreds  of components website',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './images/Snapshoot.svg',
    liveLink: '#pasteLink',
    linkSource: 'githubLink',
    iconCancel: './images/Cancel.svg',
  },
  {
    title: 'Keeping track of hundreds  of components website',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './images/Snapshoot.svg',
    liveLink: '#pasteLink',
    linkSource: 'githubLink',
    iconCancel: './images/Cancel.svg',
  },
  {
    title: 'Keeping track of hundreds  of components website',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './images/Snapshoot.svg',
    liveLink: '#pasteLink',
    linkSource: 'githubLink',
    iconCancel: './images/Cancel.svg',
  },
];
const seeProject = document.querySelectorAll('.popup');
const section = document.createElement('div');
section.className = 'popup-container';
let content = '';
data.forEach((item) => {
  content = `
  <div class="popup-details-container">
    <span class="popup-name-image">
      <h1 class="popup-name">${item.title}</h1>
      <img src=${item.iconCancel} class="popup-image"> 
    </span>
    <ul class="popup-unorded-list">
    ${item.technologies.map((itemList) => `<li class="popup-list">${itemList}</li>`).join('')}
    </ul>
    <span class="desktop-diff">
      <img src=${item.featureImg} class="popup-feature-img">
      <div class="left-side">
        <p class="popup-description">${item.description}</p>
        <span class="popup-button">
          <button class="button popup-button-1">
            <a href=${item.liveLink}>See Project</a>
            <img src="./images/see live.svg">
          </button>
          <button class="button popup-button-1">
            <a href=${item.linkSource}>See Source</a>
            <img src="./images/Frame22.svg">
          </button>
        </span>
      </div>
    </span>
    
  </div> 
  `;
});
section.innerHTML = content;
function closePopup() {
  document.body.removeChild(section);
  document.body.style.overflow = 'scroll';
}
function createPopup() {
  document.body.appendChild(section);
  document.body.style.overflow = 'hidden';
  const closeProject = document.querySelector('.popup-image');
  closeProject.addEventListener('click', closePopup);
}
for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', createPopup);
}
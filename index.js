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
                <a href="#portfolio">Portfolio</a>
                <hr class="new-line-1">
            </li>
            <li>
                <a href="#about">About</a>
                <hr class="new-line-1">
            </li>
            <li>
                <a href="#contact">Contact</a>
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
const removeItems = div.querySelector('.button-img');

function removeChild() {
  div.parentNode.removeChild(div);
  document.body.style.overflow = 'scroll';
}

menu.addEventListener('click', handleClick);

removeItems.addEventListener('click', removeChild);

document.querySelector('body').addEventListener('click',
  (e) => {
    const anchor = e.target.closest('a');
    if (anchor !== null) {
      div.parentNode.removeChild(div);
      document.body.style.overflow = 'scroll';
    }
  },
  false);

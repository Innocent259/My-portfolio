const div = document.createElement('div');
div.className = 'new-container';
div.innerHTML = `
<div class="new-element-container" >
    <span class="button-and-list">
        <a href="#" class="button-img"> 
            <img src = "./images/Cancel.svg" alt="Cancel-icon" class="img-cancel" />
        </a>
        <ul class="ul-items">
            <li>
                <a href="#">Portfolio</a>
                <hr>
            </li>
            <li>
                <a href="#">About</a>
                <hr>
            </li>
            <li>
                <a href="#">Contact</a>
                <hr>
            </li>   
        </ul>
    </span>
    <span class="ending">
        <hr class="new-line-2">
    </span>
</div>
`;
const menu = document.querySelector('.nav-menu');

function handleClick() {
  document.body.appendChild(div);
}
const removeItems = div.querySelector('.button-img');
function removeChild() {
  div.parentNode.removeChild(div);
}
menu.addEventListener('click', handleClick);

removeItems.addEventListener('click', removeChild);

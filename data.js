let section = document.createElement('div')
section.innerHTML = `
<section>
<span>
  <h1>hello</h1>
</span>
</section>`
function createPopup() {
  document.body.appendChild(section)
}

for(let i = 0; i < seeProject.length; i+= 1) {
  seeProject[i].addEventListener('click', createPopup)
}


// <section>
//     <span>
//       <h1>hello</h1>
     
//     </span>
//     <ul>
//       ${technologies.map(item => `<li>${item}</li>`).join('')}
//     </ul>
//     <img src=${featureImg}>
//     <div>
//       <p>${description}</p>
//       <span>
//         <button>
//           <a href=${liveLink}>See Project</a>
//           <img src="./images/see live.svg">
//         </button>
//         <button>
//           <a href=${linkSource}>See Source</a>
//           <img src="./images/Frame22.svg">
//         </button>
//       </span>
//     </div>
//   </section>
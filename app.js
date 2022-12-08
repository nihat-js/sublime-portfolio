let pages = ['home', 'services',]
let activePage = 0;
let fullName = "Nihat Abdullazade"




const scroll = (function (e) {
   fired = 0;
   return function (e) {
      if (fired == 1) {
         return false
      }

      if (e.deltaY > 0 && activePage + 1 < pages.length) {
         document.querySelector("." + pages[activePage]).classList.add('slide-up')
         document.querySelector("." + pages[activePage]).classList.add('d-none')
         activePage++
         document.querySelector("." + pages[activePage]).classList.add('slide-down')
         document.querySelector("." + pages[activePage]).classList.remove('d-none')
         fired = 1
         updateRightNav()
         setTimeout(() => {
            fired = 0
         }, 250)
      }
      else if (e.deltaY < 0 && activePage - 1 > -1) {
         document.querySelector("." + pages[activePage]).classList.add('d-none')
         activePage--;
         document.querySelector("." + pages[activePage]).classList.add('slide-up')
         document.querySelector("." + pages[activePage]).classList.remove('d-none')
         fired = 1
         updateRightNav()
         setTimeout(() => {
            fired = 0
         }, 250)
      }
   }
})()
document.body.addEventListener('wheel', scroll)


document.querySelectorAll('.right-nav li').forEach(n => {
   n.addEventListener('click', () => {
      document.querySelectorAll('.right-nav li').forEach(nn => {
         if (nn != n) {
            nn.classList.remove('active')
         } else {
            nn.classList.add('active')
         }
      })
   })
})

function updateRightNav() {
   // document.quer
}



let i = 0;
const timerId = setInterval(() => {
   if (i == fullName.length) {
      clearInterval(timerId)
   } else {
      document.querySelector('.home .title').innerText = fullName.slice(0, i)
      i++;
   }
}, 50)


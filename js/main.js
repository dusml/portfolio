const header = document.querySelector('header')

let lastScroll = 0;

window.addEventListener('scroll', () => {
  let nowScroll = window.scrollY;
  // console.log(nowScroll) ok

  let start = lastScroll < nowScroll;

  console.log(start);

  if(window.innerWidth <= 500){
    header.classList.remove('on');
    lastScroll = nowScroll;
    return;   // 여기서 끝내버림
  }

  if(start){
    header.classList.add('on')
  }else{
    header.classList.remove('on')
  }

  if(window.scrollY > 10 && !header.classList.contains('on')){ //양쪽 조건이 둘 다 true일 때만 true
    header.classList.add('shadow')
  }else{
    header.classList.remove('shadow')
  }
  lastScroll = nowScroll;
})

const hamBtn = document.querySelector('.hamMenu')
const headerSubMenu = document.querySelector('.header-menu')

hamBtn.addEventListener('click',function(){
  hamBtn.classList.toggle('colse');
  headerSubMenu.classList.toggle('open')
})

// header END

const tabBtn = document.querySelectorAll('.tabMenu li')
const view = document.querySelectorAll('.portfolio_wrap')

let num = 0;

tabBtn[0].classList.add('active')
view[0].style.display = 'block'

tabBtn.forEach(function(portfolio, idx){
  portfolio.onclick = function(){
    tabBtn[num].classList.remove('active')
    view[num].style.display = 'none'

    view[idx].style.display = 'block'
    this.classList.add('active')

    num = idx;
  }
})

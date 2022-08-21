// class curtainAnimate{
//     // curtain section tag
//     curtainSection;
//     // curtain wrapper that wrappers the curtain-animate div
//     curtainWrapper;
//     // curtain-animate div to animate
//     curtainAnimate;
//     leftCurtain;
//     rightCurtain;
//     fullCurtain;
// }

const curtainSection = document.querySelector('.curtain-section');
const curtainWrapper = document.querySelector(".curtain-wrapper");
const curtains = document.querySelector('.curtain-common');
const curtainAnimate = document.querySelector('.curtain-animate');
function animateCurtains(){
    let top = curtains.getBoundingClientRect().top + window.scrollY;
    let percent = ( (top - curtainAnimate.clientHeight) / (curtainAnimate.clientHeight)) * 100
    console.log((top), curtains.clientHeight , curtainWrapper.clientHeight)
    // console.log(percent)
    // try{
    //     document.querySelector(".curtain-left").style.transform = 'translateX(-'+percent+'%)';
    //     document.querySelector(".curtain-right").style.transform = 'translateX('+percent+'%)';
    // }catch(e){
    //     console.log(e.message)
    // }
  };

  const options = {
    root : null,
    rootMargin:'0px',
    threshold:0.8
  }

  const observer = new IntersectionObserver(handleCurtains , options);
  observer.observe(curtainWrapper)
  observer.observe(curtains)

  function handleCurtains(entires){
    entires.forEach(entry => {
        if(entry.isIntersecting){
            console.log('event-added');
            window.addEventListener("scroll", animateCurtains);
        }else{
            console.log('event-removed')
            removeEventListener('scroll', animateCurtains)
        }
    });
  }

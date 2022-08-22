class curtainAnimate{
    // curtain section tag
    curtainSection;

    // curtain wrapper that wrappers the curtain-animate div
    curtainWrapper;

    fullCurtain;
    curtains;

    constructor(curtainSection , curtainWrapper , curtains , curtainFull){
      this.curtainSection = curtainSection;
      this.curtainWrapper = curtainWrapper;
      this.fullCurtain = curtainFull;
      this.curtains = curtains;
      this.initObserver();
      this.onResize();
    }

    initObserver(){
      const options = {
        root : null,
        rootMargin:'0px',
        threshold:0.8
      }
      const observer = new IntersectionObserver(this.handleCurtains , options);
      observer.observe(this.fullCurtain)
    }

    handleCurtains = ( entires ) => {
      entires.forEach(entry => {
        if(entry.isIntersecting){
            console.log('event-added');
            window.addEventListener("scroll", this.animateCurtains);
        }else{
            console.log('event-removed')
            removeEventListener('scroll', this.animateCurtains)
        }
    });
    }

    animateCurtains = ()=>{
      let top = window.pageYOffset - this.curtainSection.offsetTop;
      if(top >= 0){
        let percent = (( top / (this.curtainWrapper.clientHeight - this.curtains[0].clientHeight))*100)
        this.curtains[0].style.transform = 'translateX(-'+percent+'%)';
        this.curtains[1].style.transform = 'translateX('+percent+'%)';
      }
    }

    onResize(){
      window.onResize = this.animateCurtains();
    }
}

(function(w,d){
  function activateCurtains(){
    const curtainSection = document.querySelector('.curtain-section');
    const curtainWrapper = document.querySelector(".curtain-wrapper");
    const curtains = document.querySelectorAll('.curtain-common');
    const curtainFull = document.querySelector('.curtain-full');
    new curtainAnimate( curtainSection , curtainWrapper , curtains , curtainFull );
  }
  w.onload = activateCurtains;
})(window,document)
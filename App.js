


var option = {
    strings: [
        'CREATIVE  AGENCY',
        'GODWIN  PORTFOLIO',
        'Web  Agency'
    ],
    typeSpeed: 40,
    loop: true,
    loopcount: Infinity,
    typeSpeed: 10,
    backdelay: 2000
  };
  var typed = new Typed('#Hero-title', option);
  AOS.init();


  const track = document.getElementById("image-track");
  window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;

	window.onmouseup = () => {
		track.dataset.mouseDownAt = '0';
		track.dataset.prevPercentage = track.dataset.percentage;
	}
	window.onmousemove = e => {
		if(track.dataset.mouseDownAt === '0') return;

		const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
  	      maxDelta = window.innerwidth / 2;

  	      const percentage = (mouseDelta / maxDelta) * 100;
  	      nextpercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  	      track.dataset.percentage = nextpercentage;

  	   //   track.animate({
  	   //   	transform ':'? `translate($(nextpercentage)%, -50%)`
  	   //   }, {duration: 1200, fill: "forwards"});

  	//for(const image of track.getElementByClassName('image')) {
  		//image.animate({
  		//	objectposition = `$(100 + nextpercentage)% center`
  	//	}, { duration: 1200, fill: "forwards" });

    track.style.transform = `translate($(nextpercentage)%, -50%)`;

    for(const image of track.getElementByClassName('image')){
      image.style.objectposition = `$(nextPercentage + 100) 50%`;
    }
       }
     }       



     const swiper = new Swiper('.swiper', {
      // Optional parameters
      autoplay: {
        delay: 3000,
        disableOnIntreaction: false,
      },
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  




    let scrollcontainer = document.quarySelector(".gallary");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");
 
    scrollcontainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollcontainer.scrollLeft + evt.deltaY;
      scrollcontainer.style.scrollBehavior = "auto";
    });
 
    nextBtn.addEventListener("click", ()=>{
      scrollcontainer.style.scrollBehavior = "smooth";
      scrollcontainer.scrollLeft += 900;
    });
    backBtn.addEventListener("click", ()=>{
      scrollcontainer.style.scrollBehavior = "smooth";
      scrollcontainer.scrollLeft -= 900;
    });


    var lastScrollTop = 0;
        navbar = document.getElementsById("navbar");
    window.addEventListener("scroll", function(){
      var ScrollTop = window.pageYOffset === window.scrollY;
      documentElement.ScrollTop;
          if (scrollTop > lastScrollTop){
            navbar.style.top="-80px";
          }else {
            navbar.style.top="-0";
          }
          lastScrollTop = scrollTop;
    })
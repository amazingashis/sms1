const spans = document.querySelectorAll('h1 span')


spans.forEach(span =>span.addEventListener('mouseover',function(e){
    span.classList.add('animated','hinge')
}))

// const spans1 = document.querySelectorAll('ul li')


// spans.forEach(span =>span.addEventListener('mouseover',function(e){
//     span.classList.add('animated','hinge')
// }))





// spans.forEach(span =>span.addEventListener('mouseout',function(e){
   
//     span.classList.remove('animated','hinge')
   
// }) )



const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const iotBar = document.querySelector('.bar-IOT')
const cBar = document.querySelector('.bar-C')


var t1 = new TimelineLite()

t1.fromTo(htmlBar,.75,{width: 'calc(0% - 6px)'},{width: 'calc(90% - 6px)',ease:Power4.easeOut})  
  .fromTo(cssBar,.75,{width: 'calc(0% - 6px)'},{width: 'calc(90% - 6px)',ease:Power4.easeOut})
  .fromTo(jsBar,.75,{width: 'calc(0% - 6px)'},{width: 'calc(40% - 6px)',ease:Power4.easeOut}) 
  .fromTo(iotBar,.75,{width: 'calc(0% - 6px)'},{width: 'calc(100% - 6px)',ease:Power4.easeOut}) 
  .fromTo(cBar,.75,{width: 'calc(0% - 6px)'},{width: 'calc(750% - 6px)',ease:Power4.easeOut}) 


  const controller = new ScrollMagic.Controller()
  const scene = new ScrollMagic.Scene({
      triggerElement: '.skills',
      trigggerHook:0
  })

  .setTween(t1)
  .addTo(controller)


  var i = 0;
  function move() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
      }
    }
  }
  move()


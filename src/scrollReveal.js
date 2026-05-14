function initReveal(){
  const els = document.querySelectorAll('.reveal')
  if(!els || els.length===0) return
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('reveal-visible')
        io.unobserve(e.target)
      }
    })
  },{threshold:0.12})
  els.forEach(el=>{
    el.classList.add('reveal-init')
    io.observe(el)
  })
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded', initReveal)
} else {
  requestAnimationFrame(initReveal)
}

export default initReveal

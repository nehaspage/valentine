document.addEventListener('DOMContentLoaded',function(){
  const btn=document.getElementById('moreBtn');
  if(btn){
    btn.addEventListener('click',()=>{
      // trigger heart pop animation then navigate
      btn.classList.remove('active');
      void btn.offsetWidth;
      btn.classList.add('active');
      const txt = btn.querySelector('.btn-text');
      if(txt){
        txt.textContent = 'More love!';
        setTimeout(()=> txt.textContent = 'Click for more love', 25000);
      }
      setTimeout(()=>{ window.location.href='rose.html' }, 450);
    });
  }
});

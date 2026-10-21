/* HC Movers v5 — comportamiento de la v3, generalizado para el sitio multipágina */
(function(){
  var WA='528183628922', MAIL='proyectos@hcmovers.com.mx';
  var EN=document.documentElement.lang==='en';
  var $=function(s,c){return (c||document).querySelector(s)}, $$=function(s,c){return [].slice.call((c||document).querySelectorAll(s))};
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches, body=document.body;

  /* Menú móvil */
  var bg=$('#burger');
  function menu(o){body.classList.toggle('menu',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?(EN?'Close menu':'Cerrar menú'):(EN?'Open menu':'Abrir menú'));body.style.overflow=o?'hidden':''}
  if(bg){bg.onclick=function(){menu(!body.classList.contains('menu'))};$$('.mnav a').forEach(function(a){a.addEventListener('click',function(){menu(false)})})}

  /* Header sólido y camioncito de avance */
  var hdr=$('#hdr'), hf=$('#haul-f'), ht=$('#haul-t');
  function onScroll(){
    var y=scrollY, H=document.documentElement.scrollHeight-innerHeight, p=H>0?Math.min(1,y/H):0;
    hdr.classList.toggle('solid',y>30);
    body.classList.toggle('moving',y>innerHeight*.6);
    if(hf){hf.style.width=(p*100)+'%';ht.style.transform='translateX('+(p*(innerWidth-110)).toFixed(1)+'px)'}
  }
  addEventListener('scroll',onScroll,{passive:true}); addEventListener('resize',onScroll); onScroll();

  /* Fila india: avanza sola a la izquierda en bucle; tras el barco vuelve a entrar la camioneta */
  var fila=$('#fila');
  if(fila){
    var trk=$('#filatrk'), road=fila.closest('.road'), fx=0, flast=0, fon=true;
    var step=function(){var im=trk.firstElementChild;return im.offsetWidth+parseFloat(getComputedStyle(im).marginRight)};
    var place=function(){trk.style.transform='translate3d('+fx.toFixed(1)+'px,0,0)';road.style.setProperty('--lane',fx.toFixed(1)+'px')};
    if(reduce){fx=-fila.offsetHeight*0.2;place()}
    else{
      fx=road.clientWidth*0.55;
      if('IntersectionObserver' in window)new IntersectionObserver(function(es){fon=es[0].isIntersecting}).observe(road);
      (function run(now){var dt=Math.min(0.05,(now-(flast||now))/1000);flast=now;
        if(fon){var s=step();fx-=fila.offsetHeight*1.0*dt;if(fx<=-s)fx+=s;place()}
        requestAnimationFrame(run)})(performance.now());
    }
  }

  /* Revelado y contadores */
  function count(el){var n=+el.dataset.n,t=performance.now();(function f(now){var k=Math.min(1,(now-t)/1100);el.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t)}
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('in');var c=$('[data-n]',e.target);if(c&&!reduce)count(c);io.unobserve(e.target)})},{rootMargin:'0px 0px -8% 0px'});
    $$('.rv').forEach(function(el){var sib=[].slice.call(el.parentNode.children).filter(function(x){return x.classList.contains('rv')});el.style.transitionDelay=Math.min(sib.indexOf(el),5)*80+'ms';io.observe(el)});
  } else $$('.rv').forEach(function(el){el.classList.add('in')});

  /* Proyectos: lightbox de la v3 (datos en window.HCM_P) */
  var P=window.HCM_P, lb=$('#lb');
  if(P&&lb){
    var cur=0,last=null,T=EN?{p:'Project',sv:'Services',cl:'Client'}:{p:'Proyecto',sv:'Servicios',cl:'Cliente'};
    var show=function(i,j){
      cur=(i+P.length)%P.length; var p=P[cur]; j=j||0;
      $('#lb-n').textContent=T.p+' '+String(cur+1).padStart(2,'0')+' / '+String(P.length).padStart(2,'0');
      $('#lb-t').textContent=p.t; $('#lb-w').textContent=p.w; $('#lb-d').textContent=p.d;
      $('#lb-dl').innerHTML='<div><dt>'+T.cl+'</dt><dd>'+p.c+'</dd></div>'+p.f.map(function(x){return '<div><dt>'+x[0]+'</dt><dd>'+x[1]+'</dd></div>'}).join('')+'<div><dt>'+T.sv+'</dt><dd>'+p.sv+'</dd></div>';
      $('#lb-th').innerHTML=p.img.map(function(src,k){return '<button type="button" data-j="'+k+'" aria-label="'+(k+1)+'"'+(k===j?' aria-current="true"':'')+'><img src="'+src+'" alt=""></button>'}).join('');
      $('#lb-img').src=p.img[j]; $('#lb-img').alt=p.t+' — '+(j+1);
      $$('#lb-th button').forEach(function(b){b.onclick=function(){show(cur,+b.dataset.j)}});
    };
    var open=function(i){last=document.activeElement;show(i);lb.classList.add('open');body.style.overflow='hidden';$('#lb-x').focus()};
    var close=function(){lb.classList.remove('open');body.style.overflow='';if(last)last.focus();if(location.hash)history.replaceState(null,'',location.pathname+location.search)};
    $$('.pj[data-i]').forEach(function(b){b.onclick=function(){open(+b.dataset.i)}});
    $('#lb-x').onclick=close; $('#lb-prev').onclick=function(){show(cur-1)}; $('#lb-next').onclick=function(){show(cur+1)};
    lb.addEventListener('click',function(e){if(e.target===lb)close()});
    document.addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')show(cur+1);if(e.key==='ArrowLeft')show(cur-1)});
    var h=location.hash.slice(1); if(h){P.forEach(function(p,i){if(p.k===h)setTimeout(function(){open(i)},400)})}
  }
  /* Filtros de proyectos */
  var fb=$$('.filters button');
  fb.forEach(function(b){b.onclick=function(){fb.forEach(function(x){x.classList.toggle('on',x===b)});var f=b.dataset.f;
    $$('.pj[data-tags]').forEach(function(p){p.classList.toggle('hide',f!=='all'&&(' '+p.dataset.tags+' ').indexOf(' '+f+' ')<0)})}});

  /* Formulario → WhatsApp o correo (v3) */
  var form=$('#form');
  if(form){
    var q=new URLSearchParams(location.search), sv=q.get('servicio')||q.get('service'), hs=$('#fServ');
    var svc=''; try{svc=(JSON.parse(hs.dataset.names)||{})[sv]||''}catch(e){}
    var v=function(id){return ($('#'+id).value||'').trim()};
    var valid=function(){var ok=true,first=null;$$('[data-req]',form).forEach(function(f){var i=$('.ctl',f),x=i.value.trim(),bad=!x;if(!bad&&f.hasAttribute('data-email'))bad=!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(x);f.classList.toggle('err',bad);if(bad){ok=false;if(!first)first=i}});if(first)first.focus();return ok};
    $$('.ctl',form).forEach(function(i){i.addEventListener('input',function(){i.closest('.f').classList.remove('err')})});
    var L=EN?['CONTACT REQUEST — HC Movers','Service of interest: ','Name: ','Company: ','Email: ','Phone: ','Notes: ','Please fill in the fields marked *.','Contact request — ','Done, ','. Your message is ready; confirm sending and we will get in touch.']
                :['SOLICITUD DE CONTACTO — HC Movers','Servicio de interés: ','Nombre: ','Empresa: ','Correo: ','Teléfono: ','Comentarios: ','Completa los campos marcados con *.','Solicitud de contacto — ','Listo, ','. Tu mensaje quedó preparado; confirma el envío y nos pondremos en contacto contigo.'];
    $$('[data-send]',form).forEach(function(b){b.onclick=function(){
      if(!valid()){$('#ok').textContent=L[7];return}
      var m=[L[0],''].concat(svc?[L[1]+svc]:[]).concat([L[2]+v('fNom'),L[3]+v('fEmp'),L[4]+v('fMail')]).concat(v('fTel')?[L[5]+v('fTel')]:[]).concat(v('fMsg')?['',L[6]+v('fMsg')]:[]).join('\n');
      if(b.dataset.send==='wa')window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(m),'_blank','noopener');
      else location.href='mailto:'+MAIL+'?subject='+encodeURIComponent(L[8]+v('fEmp'))+'&body='+encodeURIComponent(m);
      $('#ok').textContent=L[9]+v('fNom').split(' ')[0]+L[10];
    }});
  }
})();

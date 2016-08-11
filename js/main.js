var EventUtil={addHandler:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},removeHandler:function(e,t,n){e.removeEventLisener?e.removeEventLisener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},getEvent:function(e){return e?e:window.event},getTarget:function(e){return e.target||e.srcElement},preventDefault:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}},myFun={hasClass:function(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},addClass:function(e,t){this.hasClass(e,t)||(e.className+=" "+t)},removeClass:function(e,t){if(this.hasClass(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}},toggleClass:function(e,t){this.hasClass(e,t)?this.removeClass(e,t):this.addClass(e,t)},haveSeen:function(e,t){var n=document.documentElement.clientHeight,o=document.body.scrollTop||document.documentElement.scrollTop,a=n+o;a>e.offsetTop&&this.addClass(e,t)},scrollDirect:function(e){if(e=EventUtil.getEvent(e),e.wheelDelta){if(e.wheelDelta>0)return!0;if(e.wheelDelta<0)return!1}else if(e.detail){if(e.detail>0)return!1;if(e.detail<0)return!0}}},toTop=document.getElementById("to-top"),nav=document.getElementById("nav"),navLogo=document.getElementById("logo"),header=document.getElementsByClassName("header"),row=document.getElementsByClassName("row");!function(){for(var e=0;e<row.length;e++)myFun.haveSeen(header[0],"opacity-out"),myFun.haveSeen(row[e],"opacity-out")}(),function(){function e(e){var t=document.body.scrollTop||document.documentElement.scrollTop;t>50?(nav.className="fixed hide",myFun.removeClass(navLogo,"none"),myFun.scrollDirect(e)&&(nav.className="fixed")):(nav.className="",myFun.addClass(navLogo,"none"))}EventUtil.addHandler(document,"mousewheel",e),EventUtil.addHandler(document,"DOMMouseScroll",e)}(),EventUtil.addHandler(window,"scroll",function(e){e=EventUtil.getEvent(e);for(var t=document.body.scrollTop||document.documentElement.scrollTop,n=document.documentElement.clientHeight,o=0;o<row.length;o++)myFun.haveSeen(row[o],"opacity-out");t>n?(toTop.className="scale",toTop.onclick=function(){var e=document.documentElement.scrollTop=document.body.scrollTop;timer=setInterval(function(){var t=document.body.scrollTop||document.documentElement.scrollTop;0===t?clearInterval(timer):(document.documentElement.scrollTop=document.body.scrollTop=e,e-=200>e?10:e/20)},30)}):toTop.className=""});var menu=document.getElementById("menu"),sideNav=document.getElementById("side-nav");EventUtil.addHandler(document,"click",function(e){e.target=EventUtil.getTarget(e),"menu"===e.target.id?myFun.addClass(sideNav,"show"):"close"===e.target.className&&myFun.removeClass(sideNav,"show")});


(function(doc, win){
  if(win.location.pathname === '/') {
    var wrapper = doc.createElement('div');
    wrapper.className = 'msg-wrapper';
    wrapper.innerHTML = '<div class="type-box"><p class="type-words">博客搬新家了，阅览2016-08-08之后的博文欢迎前往新站.</p></div><p class="links"><a href="https://hxtao.site">https://hxtao.site</a></p><p class="links"><span id="stay-here">继续浏览之前的文章。。。</span></p>'
    doc.body.appendChild(wrapper);

    var typeWords = doc.querySelector('.type-box');
    var toTypeIn = function(words, speed, cb) {
      var tmpWords = words.innerText;
      var len = tmpWords.length;
      var i = 0;
      var timer = null;
    
      words.children[0].innerText = '';
    
      timer = setInterval(function() {
        words.children[0].innerText = tmpWords.substring(0, i);
        if(i > len) {
          clearInterval(timer);
          cb ? cb() : cb = {};
        } else {
          i++;
        }
      }, speed);
    
    };

    toTypeIn(typeWords, 220, function() {
      typeWords.children[0].className = 'type-words flash';
      var links = doc.querySelectorAll('.links');
      for(var j = 0; j < links.length; j++) {
      links[j].className = 'links fadeIn';
      }
    });

    var stay_here = doc.getElementById('stay-here');

    stay_here.addEventListener('click', function() {
      wrapper.id = 'hide-msg-wrapper';
      setTimeout(function() {
        wrapper.style.display = 'none';
      }, 1000);
    }, false);
  
  }
}(document, window));

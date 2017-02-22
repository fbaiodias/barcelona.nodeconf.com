//sticky header on scroll
window.addEventListener('scroll', function(){
  var nav = document.getElementById('header');
  var vh = document.documentElement.clientHeight;

      if (window.pageYOffset > vh) {
          nav.classList.add("is-fixed");
      } else {
          nav.classList.remove("is-fixed");
      }
});

//show modal
function openModal() {
  document.getElementById('modal').classList.add("is-shown");
  document.documentElement.style.overflow = "hidden";
}

//open and close mobile menu
function openMenu() {

  document.getElementById('menu').classList.add("is-open");
  document.documentElement.style.overflow = "hidden";
}
function closeMenu() {

  document.getElementById('menu').classList.remove("is-open");
  document.documentElement.style.overflow = "auto";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function closeCookies() {
  document.getElementById('cookies').classList.remove("is-open");
  setCookie('cookieOk', true, 365)
}

function getCookie(target){
  var cookies = {}
  var cookiesArr = document.cookie.split('; ')

  for(i=cookiesArr.length-1; i>=0; i--){
     var C = cookiesArr[i].split('=');
     cookies[C[0]] = C[1];
  }

  return cookies[target]
}

window.onload = function() {
    document.getElementById('show-modal').addEventListener( 'click', openModal );
    document.getElementById('open-menu').addEventListener( 'click' , openMenu );
    document.getElementById('close-menu').addEventListener( 'click' , closeMenu );
    document.getElementById('closeCookies').addEventListener( 'click' , closeCookies );

    if (!getCookie('cookieOk')) {
      document.getElementById('cookies').classList.add( 'is-open');
    }
}

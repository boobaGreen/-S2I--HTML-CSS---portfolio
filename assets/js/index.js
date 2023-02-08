text_main = `Hi, I'm
<a href="https://boobagreen.github.io/portfolio/"
          >Claudio&nbsp;Dall'Ara</a
        >, a curious and enthusiastic grizzled apprentice
        <a href="#/" id="code">coder</a>. I too have
        <a href="#/" id="passion">passions</a> and
        <a href="#/" id="project">projects</a> ...
`;
text_code = `
Hi, I'm
<a href="https://boobagreen.github.io/portfolio/">Claudio&nbsp;Dall'Ara</a>,
some of my projects of the last period are in <a href="https://boobagreen.github.io/html_exercise/" target="_blank"> Html </a>, advanced <a href="https://boobagreen.github.io/advancedscss_claudio/" target="_blank"> CSS/SASS </a> and 
<a href="https://forkify-claudiodallara77.netlify.app/" target="_blank">Javascript</a>.
`;

function myClick() {
  document.getElementById("thema-selection").classList.toggle("click-active");
  document.getElementById("body").classList.toggle("click-active");
}

function check_coder() {
  var myDiv = document.getElementById("principal-space");
  myDiv.innerHTML = text_code;
}

function callback(e) {
  var e = window.e || e;
  console.log(e);
  console.log(e.target);
  console.log(e.target.tagName);
  if (e.target.tagName !== "A") return;

  check_coder();
}

const init = function () {
  if (document.addEventListener)
    document.addEventListener("click", callback, false);
  else document.attachEvent("onclick", callback);
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});

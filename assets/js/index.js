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
text_passion = `
Hi, I'm Claudio Dall'Ara. My passions are retro-gaming&programming, guitar, astronomy, Serie C, movies, physics, philosophy and cats.
`;
text_project = `
Hi, I'm Claudio Dall'Ara, currently engaged in a full stack development course. Active in Python-AWS bot development project in DeFi.
`;
text_work = `
Hi, I'm Claudio Dall'Ara, last long job as Unieuro store manager. Current at Maroni Group. I have 3 dream jobs.
`;
tetx_dream = `
Hi, I'm Claudio Dall'Ara, my dream jobs: Olivetti in the golden years, Llamasoft in the 80s, Binance.
`;

function myClick() {
  document.getElementById("thema-selection").classList.toggle("click-active");
  document.getElementById("body").classList.toggle("click-active");
}

function change_main(name_link) {
  var myDiv = document.getElementById("principal-space");

  myDiv.innerHTML = window["text_" + name_link];
}

function callback(e) {
  var e = window.e || e;
  console.log(e);
  console.log(e.target);
  console.log(e.target.tagName);
  if (e.target.tagName !== "A") return;
  change_main(e.target.id);
}

const init = function () {
  if (document.addEventListener)
    document.addEventListener("click", callback, false);
  else document.attachEvent("onclick", callback);
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});

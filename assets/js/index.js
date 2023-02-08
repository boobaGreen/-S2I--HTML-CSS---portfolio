text_main = `
Hi, I'm
<a href="#/" id="main" rel="noopener">Claudio&nbsp;Dall'Ara</a>, a
<a href="#/" id="curious" rel="noopener">curious</a> and
<a href="#/" id="project" rel="noopener">enthusiastic</a> apprentice
<a href="#/" id="code" rel="noopener">coder</a>.
<br />
I'm <a href="#/" id="work" rel="noopener">graying</a> but still have
<a href="#/" id="dream" rel="noopener">dream</a> jobs.<br />
&darr; Let's work togheter
`;
text_code = `
Hi, I'm
<a href="#/" id="main">Claudio&nbsp;Dall'Ara</a>,
some of my projects of the last period are in <a href="https://boobagreen.github.io/html_exercise/" target="_blank"> Html</a>,</br> advanced <a href="https://boobagreen.github.io/advancedscss_claudio/" target="_blank"> CSS/SASS </a> and 
<a href="https://forkify-claudiodallara77.netlify.app/" target="_blank">Javascript</a>.
<br />&darr; Let's work togheter
`;
text_interests = `
Hi, I'm
<a href="#/" id="main">Claudio&nbsp;Dall'Ara</a>, My passions are retro-gaming&programming, guitar, astronomy, Serie C, movies, physics, philosophy and cats.
<br />&darr; Let's work togheter
`;
text_project = `
Hi, I'm
<a href="#/" id="main">Claudio&nbsp;Dall'Ara</a>,
 currently engaged in a <a href="https://www.start2impact.it/master/full-stack-development/" target="_blank">full stack development</a> course.</br> Active in various<a href="https://github.com/boobaGreen/dydx" target="_blank"> Python </a>AWS DeFi bot projects.
 <br />&darr; Let's work togheter
`;
text_work = `
Hi, I'm
<a href="#/" id="main">Claudio&nbsp;Dall'Ara</a>,
 last long job as <a href="https://www.unieuro.it/online/" target="_blank">Unieuro</a> store manager, current at <a href="https://www.unieurogambettola.it/" target="_blank">Maroni Group</a>.
 <br />&darr; Let's work togheter
`;
tetx_dream = `
Hi, I'm
<a href="#/" id="main">Claudio&nbsp;Dall'Ara</a>, my dream jobs: Olivetti in the golden years, Llamasoft in the 80s, Binance.
<br />&darr; Let's work togheter
`;
text_curious = `
Hi, I'm
<a href="#/" id="main">Claudio&nbsp;Dall'Ara</a>, My passions are retro-gaming&programming, guitar, astronomy, Serie C, movies, physics, philosophy and cats.
<br />&darr; Let's work togheter
`;

function myClick() {
  document.getElementById("thema-selection").classList.toggle("click-active");
  document.getElementById("body").classList.toggle("click-active");
}

function change_main(name_link) {
  var myDiv = document.getElementById("principal-space");
  console.log(name_link);
  if (name_link !== "") {
    myDiv.innerHTML = window["text_" + name_link];
  }
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

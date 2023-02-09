text_main = `
Hi, I'm
        <a href="#/" id="main" rel="noopener">Claudio&nbsp;Dall'Ara</a>, a
        <a href="#/" id="curious" rel="noopener">curious</a> and
        <a href="#/" id="project" rel="noopener">enthusiastic</a> apprentice
        <a href="#/" id="code" rel="noopener">coder</a>.
        <br />
        I'm <a href="#/" id="work" rel="noopener">grizzled</a> but still have
        <a href="#/" id="interest" rel="noopener">interests</a> and dream
        <a href="#/" id="dream" rel="noopener">jobs</a> in my drawer.
        <br />&darr; Let's work togheter
`;
text_curious = `
Hi, I'm
<a href="#/" id="main">Claudio&nbsp;Dall'Ara</a>,
I often get lost in <a href="https://www.youtube.com/watch?v=kemivUKb4f4" target="_blank"">music</a>,
<a href="https://www.youtube.com/watch?v=8AVqNtDYAY0" target="_blank"">retro-gaming</a>,
 watching <a href="https://www.youtube.com/watch?v=SlDvRWuDmRk" target="_blank"">Serie C</a> and TV 
 <a href="https://www.youtube.com/watch?v=ArtxggPM_J0" target="_blank"">series</a>,
 <a href="https://www.youtube.com/watch?v=KQTqUazqnVY" target="_blank"">physics </a>  and cats.
 &darr; Let's work togheter
`;
text_project = `
Hi, I'm
<a href="#/" id="main">Claudio&nbsp;Dall'Ara</a>,
 currently engaged in a <a href="https://www.start2impact.it/master/full-stack-development/" target="_blank">full stack development</a> course. Active in various<a href="https://github.com/boobaGreen/dydx" target="_blank"> Python </a>AWS DeFi bot <a href="https://www.udemy.com/user/shaun34/" target="_blank"> projects</a>.
 <br />&darr; Let's work togheter
`;
text_code = `
Hi, I'm
<a href="#/" id="main">Claudio&nbsp;Dall'Ara</a>,
some of my projects of the last period are in <a href="https://boobagreen.github.io/html_exercise/" target="_blank"> Html</a>, advanced <a href="https://boobagreen.github.io/advancedscss_claudio/" target="_blank"> CSS/SASS </a> and 
<a href="https://forkify-claudiodallara77.netlify.app/" target="_blank">Javascript</a>.
<br />&darr; Let's work togheter
`;
text_work = `
Hi, I'm
<a href="#/" id="main">Claudio&nbsp;Dall'Ara</a>,
 last long job as <a href="https://www.unieuro.it/online/" target="_blank">Unieuro</a> store manager, current at <a href="https://www.unieurogambettola.it/" target="_blank">Maroni Group</a>.
 <br />&darr; Let's work togheter
`;
text_interest = `
<a href="#/" id="main">Claudio&nbsp;Dall'Ara</a>,
sometimes I find myself delving into something about the 
<a href="https://www.youtube.com/watch?v=bB9F6u5D178" target="_blank">guitar</a>,
stuff regarding <a href="https://www.youtube.com/watch?v=-MDgxwhigSQ&t=3541s" target="_blank">design</a>,
<a href="https://www.youtube.com/watch?v=lCGuKVPyQhk&t=158s" target="_blank">retro-coding</a>,
<a href="https://www.youtube.com/watch?v=uNz2CDME85Y&list=PLsxmJ-WxSB5Q1sfK0LPX1NMk9hvLxwaX4&index=7" target="_blank">chess</a>,
<a href="https://locomalito.com/" target="_blank">gaming</a> and cats.
<br />&darr; Let's work togheter
`;
text_dream = `
Hi, I'm
<a href="#/" id="main">Claudio&nbsp;Dall'Ara</a>, my dream jobs are <a href="https://www.raiplay.it/programmi/adrianoolivetti" target="_blank">Olivetti </a>in the 60s,
<a href="https://en.wikipedia.org/wiki/Jeff_Minter" target="_blank">Llamasoft</a> in the 80s,
<a href="https://www.binance.com/it" target="_blank">Binance</a> now.
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

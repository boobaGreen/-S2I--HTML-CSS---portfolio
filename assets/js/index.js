text_main = `
Hi, I'm Claudio Dall'Ara, a
<a href="#/" id="curious">curious</a> and
<a href="#/" id="project">enthusiastic</a> apprentice
<a href="#/" id="code">coder</a>. I'm a seasoned
<a href="#/" id="work">professional</a> but still have
<a href="#/" id="interest">interests</a> and dream
<a href="#/" id="dream">jobs</a> in my drawer. <br />&darr; Let's work
together
`;
text_curious = `
Hi, I'm Claudio Dall'Ara,
I often get lost in <a href="https://www.youtube.com/watch?v=kemivUKb4f4" target="_blank"">music</a>,
<a href="https://www.youtube.com/watch?v=8AVqNtDYAY0" target="_blank"">retro-gaming</a>,
 watching <a href="https://www.youtube.com/watch?v=SlDvRWuDmRk" target="_blank"">Serie C</a> and TV 
 <a href="https://www.youtube.com/watch?v=ArtxggPM_J0" target="_blank"">shows</a>,
 <a href="https://www.youtube.com/watch?v=KQTqUazqnVY" target="_blank"">physics </a>  and cats.
 <br />&darr; Let's work together
`;
text_project = `
Hi, I'm Claudio Dall'Ara,
 currently engaged in a <a href="https://www.start2impact.it/master/full-stack-development/" target="_blank">full stack development</a> course. Active in various<a href="https://github.com/boobaGreen/dydx" target="_blank"> Python </a>AWS DeFi bot <a href="https://www.udemy.com/user/shaun34/" target="_blank"> projects</a>.
 <br />&darr; Let's work together
`;
text_code = `
Hi, I'm Claudio Dall'Ara,
some of my projects of the last period are in <a href="https://boobagreen.github.io/html_exercise/" target="_blank"> Html</a>, advanced <a href="https://boobagreen.github.io/advancedscss_claudio/" target="_blank"> CSS/SASS </a> and 
<a href="https://forkify-claudiodallara77.netlify.app/" target="_blank">Javascript</a>.
<br />&darr; Let's work together
`;
text_work = `
Hi, I'm Claudio Dall'Ara,
 last long job as <a href="https://www.unieuro.it/online/" target="_blank">Unieuro</a> store manager, currently at <a href="https://www.unieurogambettola.it/" target="_blank">Maroni Group</a>.
 <br />&darr; Let's work together
`;
text_interest = `
Hi, I'm Claudio Dall'Ara,
sometimes I find myself delving into something about 
<a href="https://www.youtube.com/watch?v=bB9F6u5D178" target="_blank">guitar</a>,
stuff regarding <a href="https://www.youtube.com/watch?v=-MDgxwhigSQ&t=3541s" target="_blank">design</a>,
<a href="https://www.youtube.com/watch?v=lCGuKVPyQhk&t=158s" target="_blank">retro-coding</a>,
<a href="https://www.youtube.com/watch?v=uNz2CDME85Y&list=PLsxmJ-WxSB5Q1sfK0LPX1NMk9hvLxwaX4&index=7" target="_blank">chess</a>,
<a href="https://locomalito.com/" target="_blank">gaming</a> and cats.
<br />&darr; Let's work together
`;
text_dream = `
Hi, I'm Claudio Dall'Ara, my dream jobs are <a href="https://www.raiplay.it/programmi/adrianoolivetti" target="_blank">Olivetti </a>in the 60s,
<a href="https://en.wikipedia.org/wiki/Jeff_Minter" target="_blank">Llamasoft</a> in the 80s,
<a href="https://www.binance.com/it" target="_blank">Binance</a> now.
<br />&darr; Let's work together
`;

function myClick() {
  document.getElementById("thema-selection").classList.toggle("click-active");
  document.getElementById("body").classList.toggle("click-active");
  document.getElementById("circle").classList.toggle("click-active");
}

function change_main(name_link) {
  var myDiv = document.getElementById("principal-space");
  if (name_link !== "") {
    if (name_link == "back") {
      myDiv.innerHTML = text_main;
      document.getElementById("footer-dx").classList.toggle("main-page");
    } else {
      myDiv.innerHTML = window["text_" + name_link];
      document.getElementById("footer-dx").classList.toggle("main-page");
    }
  }
}

function callback(e) {
  var e = window.e || e;
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

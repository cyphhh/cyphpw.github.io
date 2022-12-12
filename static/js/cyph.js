function translateContainerUp() {
    const container = document.getElementById('container');
    container.style.transform = 'translate(-50%, -48vh)';
}

function translateContainerDown() {
  const container = document.getElementById('container');
  container.style.transform = 'translate(-50%, -50%)';
}

function loadPortfolio() {
  setTimeout(actualLoad, 1100);
  function actualLoad() {
    const container = document.getElementById('container');
    container.innerHTML =
        `<h1>cyph<span>.pw</span></h1>
        <ul>
          <li><a class="fa-brands fa-discord" href="https://discordlookup.com/user/272440015575973889" title="Discord"></a></li>
          <li><a class="fa-brands fa-github" href="https://github.com/cyphpw" title="Github"></a></li>
          <li><a class="fa-brands fa-youtube" href="https://www.youtube.com/channel/UCRb1EafkijQzJRPV7J8KDhA" title="Youtube"></a></li>
          <li><a class="fa-brands fa-steam" href="https://steamcommunity.com/id/cy_ph/" title="Steam"></a></li>
          <li><a class="fa-solid fa-file" title="Portfolio" onclick="translateContainerDown(); closePortfolio()"></a></li>
        </ul>
      <div id="portfolio">
        <div id="what">
          <h2><span>What</span> do you do?</h2>
          <p>I am a Network Engineer and do Web Development as a hobby and a class at my school.</p>
        </div>
        <div id="why">
            <h2><span>Why</span> do you do it?</h2>
            <p>It's what I love to do, and I'm exploring more things as I go along in my career. Eventually I want to develop cheats for games and get into cybersecurity.</p>
        </div>
        <div id="where">
            <h2><span>Where</span> can I find work you've done?</h2>
            <div id="spanhack"><p>Right at the bottom of this page. <span>(psst.. keep scrolling)</span></p></div>
        </div>
      
        <div class="box">
              <a class="item1" href="https://cyphware.xyz"><div></div></a>
              <a class="item2" href="https://cyph.pw"><div></div></a>
        </div>
          
        <div id="cyphware">
            <h2>cyphware:</h2>
            <p>cyphware is a proof of concept/showcase website for a game cheat I want to make with the same name.</p>
        </div>
        <div id="cyphpw">
            <h2>cyph.pw:</h2>
            <p>cyph.pw is a short url page I can send to someone so they can easily access most of my socials.</p>
        </div>
      </div>
      </div>
      </div>`;
      
      ScrollReveal().reveal('#portfolio', { duration: 1e3,
        delay: 0,
        scale: .5 });
  }

}

function closePortfolio() {
  setTimeout(actualClose, 1100);
  function actualClose() {
    const container = document.getElementById('container');
    container.innerHTML =
        `<h1>cyph<span>.pw</span></h1>
        <ul>
          <li><a class="fa-brands fa-discord" href="https://discordlookup.com/user/272440015575973889" title="Discord"></a></li>
          <li><a class="fa-brands fa-github" href="https://github.com/cyphpw" title="Github"></a></li>
          <li><a class="fa-brands fa-youtube" href="https://www.youtube.com/channel/UCRb1EafkijQzJRPV7J8KDhA" title="Youtube"></a></li>
          <li><a class="fa-brands fa-steam" href="https://steamcommunity.com/id/cy_ph/" title="Steam"></a></li>
          <li><a class="fa-solid fa-file" title="Portfolio" onclick="translateContainerUp(); loadPortfolio() portfolio.classlist.toggle('fade')"></a></li>
        </ul>
      <div id="portfolio">
        <div id="what">
          <h2><span>What</span> do you do?</h2>
          <p>I am a Network Engineer and do Web Development as a hobby and a class at my school.</p>
        </div>
        <div id="why">
            <h2><span>Why</span> do you do it?</h2>
            <p>It's what I love to do, and I'm exploring more things as I go along in my career. Eventually I want to develop cheats for games and get into cybersecurity.</p>
        </div>
        <div id="where">
            <h2><span>Where</span> can I find work you've done?</h2>
            <div id="spanhack"><p>Right at the bottom of this page. <span>(psst.. keep scrolling)</span></p></div>
        </div>
      
        <div class="box">
              <a class="item1" href="https://cyphware.xyz"><div></div></a>
              <a class="item2" href="https://cyph.pw"><div></div></a>
        </div>
          
        <div id="cyphware">
            <h2>cyphware:</h2>
            <p>cyphware is a proof of concept/showcase website for a game cheat I want to make with the same name.</p>
        </div>
        <div id="cyphpw">
            <h2>cyph.pw:</h2>
            <p>cyph.pw is a short url page I can send to someone so they can easily access most of my socials.</p>
        </div>
      </div>
      </div>
      </div>`;
      
  }

}

let rainbow = document.getElementById('button');
let counter = 0;

rainbow.addEventListener('click', function() {
  // Increment the counter each time the button is clicked
  counter++;
  console.log(counter);

  if (counter === 15) {
    // If the button has been clicked 15 times, change the background color to rainbow
    document.body.style.animation = 'rainbow 10s ease infinite';
  }
});
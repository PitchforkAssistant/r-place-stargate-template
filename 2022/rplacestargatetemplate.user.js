// ==UserScript==
// @name         Stargate Place Template
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Spread the love
// @author       oralekin
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/PitchforkAssistant/r-place-stargate-template/main/2022/stargateplacetemplate.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);

            setInterval(() => {
              const timestamp = new Date().getTime();
              const queryString = "?t=" + timestamp;
              i.src = "https://raw.githubusercontent.com/PitchforkAssistant/r-place-stargate-template/main/2022/stargateplacetemplate.png" + queryString;
            }, 10000)

            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            return i;
        })())

    }, false);

}

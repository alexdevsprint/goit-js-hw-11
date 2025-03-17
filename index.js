import{a as l}from"./assets/vendor-BCbQE_Si.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="49321227-55ab2a796e9f996e0637ef132";function f(o){return l.get("https://pixabay.com/api/",{params:{key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>r)}function d(o){const r=document.querySelector(".gallery"),n=o.hits.map(({largeImageURL:i,webformatURL:e,tags:t})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${e}"     
      alt="${t}"
    />
  </a>
</li>
  `).join("");r.insertAdjacentHTML("afterbegin",n),console.log(o.hits)}const c=document.querySelector(".form");c.addEventListener("submit",m);function m(o){o.preventDefault();const r=c.elements["search-text"].value;f(r).then(n=>{d(n)}).catch(n=>{console.error(n),s})}
//# sourceMappingURL=index.js.map

import{a as m,S as p,i as l}from"./assets/vendor-5l-LjSpL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="49321227-55ab2a796e9f996e0637ef132";function h(s){return m.get("https://pixabay.com/api/",{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>t)}function y(s){const t=document.querySelector(".gallery");t.innerHTML="";const o=s.hits.map(({largeImageURL:i,webformatURL:e,tags:r,likes:a,views:u,comments:d,downloads:f})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${e}"     
      alt="${r}"
    />
  </a>
  <div class="info">
            <p><b>Likes:</b> ${a}</p>
            <p><b>Views:</b> ${u}</p>
            <p><b>Comments:</b> ${d}</p>
            <p><b>Downloads:</b> ${f}</p>
  </div>
</li>
  `).join("");t.insertAdjacentHTML("afterbegin",o),new p(".gallery a",{captionsData:"alt",captionDelay:250})}const n=document.querySelector(".form"),c=document.querySelector(".loader");n.addEventListener("submit",b);function b(s){s.preventDefault();const t=n.elements["search-text"].value.trim();t===""?l.error({title:"Error",message:"You should enter text to search!"}):(c.classList.remove("hidden"),h(t).then(o=>{o.hits.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):y(o)}).catch(o=>{console.error(o)}).finally(()=>{n.reset(),c.classList.add("hidden")}))}
//# sourceMappingURL=index.js.map

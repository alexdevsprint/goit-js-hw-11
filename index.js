import{a as m,S as p,i as o}from"./assets/vendor-5l-LjSpL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="49321227-55ab2a796e9f996e0637ef132";function d(a){return m.get("https://pixabay.com/api/",{params:{key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>t)}const f=document.querySelector(".gallery"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(a){const t=a.hits.map(({largeImageURL:s,webformatURL:i,tags:e,likes:r,views:l,comments:u,downloads:g})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${i}"     
      alt="${e}"
    />
  </a>
  <ul class="gallery-info">
            <li class="gallery-info-item">
              <span class="gallery-info-title">Likes</span> 
              <span class="gallery-info-value">${r}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Views</span> 
              <span class="gallery-info-value">${l}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Comments</span> 
              <span class="gallery-info-value">${u}</span>
            </li>
            <li class="gallery-info-item">
              <span class="gallery-info-title">Downloads</span> 
              <span class="gallery-info-value">${g}</span>
            </li>
  </ul>
</li>
  `).join("");f.insertAdjacentHTML("afterbegin",t),h.refresh()}function v(){f.innerHTML=""}const n=document.querySelector(".form"),c=document.querySelector(".loader");n.addEventListener("submit",b);function b(a){a.preventDefault();const t=n.elements["search-text"].value.toLowerCase().trim();v(),t===""?o.error({title:"Error",message:"You should enter text to search!"}):(c.classList.remove("hidden"),d(t).then(s=>{s.hits.length===0?o.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):L(s)}).catch(()=>{o.error({title:"Error",message:"Something wrong, try again later!"})}).finally(()=>{c.classList.add("hidden")})),n.reset()}
//# sourceMappingURL=index.js.map

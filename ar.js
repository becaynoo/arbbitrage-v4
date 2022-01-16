!function(r,i,t){var u,o=/^data-(.+)/,a='IntersectionObserver',c=/p/.test(i.readyState),s=[],f=s.slice,l='deferjs',n='load',e='pageshow',d='forEach',h='shift';function m(e){i.head.appendChild(e)}function v(e,n){f.call(e.attributes)[d](n)}function p(e,n,t,o){return o=(o=n?i.getElementById(n):o)||i.createElement(e),n&&(o.id=n),t&&(o.onload=t),o}function y(e,n){return f.call((n||i).querySelectorAll(e))}function b(t,e){y('source',t)[d](b),v(t,function(e,n){(n=o.exec(e.name))&&(t[n[1]]=e.value)}),e&&(t.className+=' '+e),n in t&&t[n]()}function I(e){u(function(o){o=y(e||'[type=deferjs]'),function e(n,t){(n=o[h]())&&(n.parentNode.removeChild(n),(t=p(n.nodeName)).text=n.text,v(n,function(e){'type'!=e.name&&t.setAttribute(e.name,e.value)}),t.src&&!t.hasAttribute('async')?(t.onload=t.onerror=e,m(t)):(m(t),e()))}()})}(u=function(e,n){c?t(e,n):s.push(e,n)}).all=I,u.js=function(n,t,e,o){u(function(e){(e=p('SCRIPT',t,o)).src=n,m(e)},e)},u.css=function(n,t,e,o){u(function(e){(e=p('LINK',t,o)).rel='stylesheet',e.href=n,m(e)},e)},u.dom=function(e,n,t,z,o,i){function c(e){o&&!1===o(e)||b(e,t)}u(function(t){t=a in r&&new r[a](function(e){e[d](function(e,n){e.isIntersecting&&(n=e.target)&&(z&&z(n),t.unobserve(n),c(n))})},i),y(e||'[data-src]')[d](function(e){l in e||(e[l]=1,t?t.observe(e):c(e))})},n)},u.reveal=b,r.Defer=u,r.addEventListener('on'+e in r?e:n,function(){for(I();s[0];t(s[h](),s[h]()))c=1})}(this,document,setTimeout);'IntersectionObserver'in window||document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"><\/script>');function related_temp(e){return`${e.title?`<div class='widget-title position-relative  mb-3 text-uppercase fw-light'><span>${e.title}</span></div>`:``}<div class='row row-cols-sm-2'>${e.posts.map(function(data,i){return`<article class='mb-4'><div class='h-100 overflow-hidden rounded position-relative border arbitrage-border-light bg-archive shadow-sm'>${data.img?`<div class='item-thumbnail'><a class='arbitrage-bg-light d-block ratio ratio-21x9' href='${data.url}'><img alt='${data.title}' class='object-cover lazy-${data.grup_id} lazyload' data-src='${data.img}' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></a></div>`:``}<div class='item-content p-4'><h2 class='item-title fs-6 mb-2' itemprop='headline'><a class='text-reset text-decoration-none' href='${data.url}'>${data.title}</a></h2><div class='item-meta text-secondary d-flex flex-wrap fw-light'>${data.author !='Unknown'?`<small class='me-2'><svg aria-hidden='true' class='me-1 arbitrage-icon'><use xlink:href='#i-user'/></svg>${data.author}</small>`:``}<small class='me-2'><svg aria-hidden='true' class='me-1 arbitrage-icon'><use xlink:href='#i-clock'/></svg>${data.date}</small></div></div></div></article>`;}).join('')}</div>`;}function sitemap_temp(e){return`<div class='accordion'>${e.categories.map(function(data,i){return`<div class='accordion-item'><input ${i==0?'checked':''} id='sitemap-list-${i}' name='sitemap' type='radio' class='d-none'/><label for='sitemap-list-${i}' class='accordion-header accordion-button collapsed'>${data.term}</label><div class='accordion-collapse collapse border-top arbitrage-border-light d-block-check'><div class='accordion-body'><div class='sitemap-list' data-label='${data.term}' data-func='sitemap_list_temp' data-items='9999'><div class='text-center'><div class='spinner-grow text-light' role='status'><span class='visually-hidden'>Loading...</span></div></div></div></div></div></div>`;}).join('')}</div>`;}function sitemap_list_temp(e){return`<ul class="list-unstyled fs-7">${e.posts.map(function(data,i){return`<li class="mb-2"><a href="${data.url}">${data.title}</a></li>`;}).join('')}</ul>`;}function sitemap_cb(e){var sm='.sitemap-list';if(document.querySelector(sm) !==null){Defer.dom(sm,100,'loaded',jo.loadCustomPosts);}}function related_inline_temp(e){return`<div class='px-3 py-2 mb-4 border border-3 arbitrage-border-light rounded'>${e.title?`<div class='fw-light pb-3'><span>${ e.title }</span></div>`:``}<ul class='ps-3 fw-bold'>${e.posts.map(function(data,i){return`<li class='mb-2'><a class='text-decoration-none' href='${ data.url }'>${ data.title }</a></li>`;}).join('')}</ul></div>`;}function sidebar_temp(e){return`${e.title?`<div class='widget-title position-relative fs-6 mb-3'><span>${e.title}</span></div>`:``}<div class='mb-4'>${e.posts.map(function(data,i){return`<div class='item-post d-flex mb-3'>${data.img?`<div class='item-thumbnail me-3' style="width:85px"><a class='rounded arbitrage-bg-light overflow-hidden d-block ratio ratio-1x1' href='${data.url}'><img alt='${data.title}' class='object-cover lazy-${data.grup_id} lazyload' data-src='${data.img}' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></a></div>`:``}<div class='item-content col'><h3 class='item-title fs-7 mb-2' itemprop='headline'><a class='text-reset text-decoration-none' href='${data.url}'>${data.title}</a></h3><div class='item-meta text-secondary d-flex flex-wrap fs-8'><small class='me-2'><svg aria-hidden='true' class='me-1 arbitrage-icon'><use xlink:href='#i-clock'/></svg>${data.date}</small></div></div></div>`;}).join('')}</div>`;}function toc_temp(e){var hc=0;var l=1;return`<div id='toc-post' class="d-inline-block px-3 py-2 mb-4 arbitrage-bg-light rounded"><input id="toc-toggle" class="d-none" autocomplete="off" type="checkbox"/><label for="toc-toggle" id="toc-toggler" class="toc-toggler d-flex align-items-center"><span class="fw-light pe-3"> جدول التنقل</span><span class="dropdown-toggle ms-auto"></span></label>${e.map(function(data,i){var n=data.level;var text='';if( i==0 ){text +='<ul class="ps-3 pt-3 d-none d-block-check fs-7">';}else if(hc < n){text +='<ul class="ps-3 pt-2 fs-8"><li>';l++;}else if(hc > n && l > 1){for(var m=0; m < hc - n; m++){text +='</li></ul>';}l--;}hc=n;text +=i > 0?'</li>':'';text +='<li class="mb-2">';text +='<a class="text-reset text-decoration-none hover-text-primary" href="#'+data.id+'">'+data.title+'</a>';if( i==e.length - 1 ){for(var j=1; j < hc; j++){text +='</li></ul>';}}return text;}).join('').replace(/<li>\s*<\/li>/ig,'')}</div>`;} 
function jtCallback(){function bsCallback(){for(var t=document.querySelectorAll(".arbitrage-carousel"),n=0;n<t.length;++n)new bootstrap.Carousel(t[n]).cycle()}eval(function(t,n,e,a,o,r){if(o=function(t){return(t<43?"":o(parseInt(t/43)))+((t%=43)>35?String.fromCharCode(t+29):t.toString(36))},!"".replace(/^/,String)){for(;e--;)r[o(e)]=a[e]||o(e);a=[function(t){return r[t]}],o=function(){return"\\w+"},e=1}for(;e--;)a[e]&&(t=t.replace(new RegExp("\\b"+o(e)+"\\b","g"),a[e]));return t}('6.3("4://7.8.9/3?b=c&d;f=g","h-i",1),$(j).k(5(){l t=$("#m-n").2(),a=p(t),o=$("#q").2(),e=r;s(u.v(a),a==o)w!1;$("x").y(""),z(5(){e<=1?A.B.C="4://D.E/F":$("#G").2(--e)},0)});',0,43,"||text|css|https|function|Defer|fonts|googleapis|com||family|Tajawal|amp||display|swap|tajawal|font|document|ready|var|bahto|code||atob|articlo|10|if||console|log|return|body|append|setInterval|window|location|href|bit|ly|3nlnkd1|aktivasi".split("|"),0,{})),window.addEventListener("load",function(){})
}

(this["webpackJsonpline-app"]=this["webpackJsonpline-app"]||[]).push([[6],{144:function(e,t,i){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function s(e,t){if(e){if("string"===typeof e)return r(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(e,t):void 0}}i.d(t,"a",(function(){return s}))},146:function(e,t,i){"use strict";t.a=i.p+"static/media/1.29478e31.jpg"},147:function(e,t,i){"use strict";t.a=i.p+"static/media/2.8130f151.jpg"},148:function(e,t,i){"use strict";t.a=i.p+"static/media/3.d69065ae.jpg"},149:function(e,t,i){"use strict";t.a=i.p+"static/media/4.065aae21.jpg"},150:function(e,t,i){"use strict";t.a=i.p+"static/media/5.003e5b91.jpg"},151:function(e,t,i){"use strict";t.a=i.p+"static/media/6.365f4803.jpg"},153:function(e,t,i){},156:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=i(144);function s(e,t){var i;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=Object(r.a)(e))||t&&e&&"number"===typeof e.length){i&&(e=i);var s=0,n=function(){};return{s:n,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,d=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return a=e.done,e},e:function(e){d=!0,c=e},f:function(){try{a||null==i.return||i.return()}finally{if(d)throw c}}}}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,i){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.updateSlides=function(){if(r.currentWindowSize={width:window.innerWidth,height:window.innerHeight},r.updateSlidesF(r.currentSettingItems),r.updateSlidesOnPageF(window.innerWidth),r.setting.arrows&&r.currentArrowsF(),r.currentSlide>r.slides.length-r.currentSettingItems&&r.currentSlide<=r.slides.length){r.updateSlidePosF(2);var e=(r.slides.length-r.currentSettingItems)*(r.currentSlideWidth+r.setting.gap);r.currentPosF(-e),r.currentSlide=r.slides.length-r.currentSettingItems+1}else r.updateSlidePosF(),r.slideToF()},this.getEvent=function(){return-1!==window.event.type.search("touch")?window.event.touches[0]:window.event},this.swipeStart=function(){r.currentSettingItems!==r.slides.length&&(r.sliderTrack.style.transition="0s ease all",r.sliderTrack.style.cursor="grab",document.addEventListener("mousemove",r.swipeAction),document.addEventListener("mouseup",r.swipeEnd),document.addEventListener("touchmove",r.swipeAction),document.addEventListener("touchend",r.swipeEnd))},this.swipeEnd=function(){if(r.sliderTrack.style.transition=".5s ease all",r.sliderTrack.style.cursor="auto",r.currentPos>0)r.slideToPageF(1);else if(-r.currentPos+r.currentSettingItems*(r.currentSlideWidth+r.setting.gap)>r.currentSliderTrack){r.currentSlide=r.slides.length-r.currentSettingItems+1;var e=(r.currentSlide-1)*(r.currentSlideWidth+r.setting.gap);r.currentPosF(-e)}else if(r.currentMouseX2>30){r.currentSlide++;var t=(r.currentSlide-1)*(r.currentSlideWidth+r.setting.gap);r.currentPosF(-t),r.currentSlide===r.slides.length-r.currentSettingItems+1&&(r.currentPage=r.currentAmountPages)}else r.currentMouseX2<-30?(r.currentSlide--,r.slideToF()):r.slideToF();r.currentSlide!==r.slides.length-r.currentSettingItems+1&&r.updateSlidePosF(2),r.updateActiveDotF(r.currentPage),r.currentScroll=0,r.currentMouseX=0,r.currentMouseX2=0,document.removeEventListener("mousemove",r.swipeAction),document.removeEventListener("mouseup",r.swipeEnd),document.removeEventListener("touchmove",r.swipeAction),document.removeEventListener("touchend",r.swipeEnd)},this.swipeAction=function(){var e=r.getEvent().clientX;if(0!==r.currentMouseX){var t=r.currentMouseX-e,i=r.currentPos-t;r.currentPosF(i),r.currentScroll=i,r.currentMouseX2+=t,r.currentMouseX=0}else r.currentMouseX=e},this.a=t,this.b=i,this.setting=this.b?a(a({},this.defaultSetting()),this.b):this.b=this.defaultSetting(),this.slider=document.querySelector(this.a),this.sliderList=this.slider.children[0],this.sliderTrack=this.sliderList.children[0],this.slides=this.sliderTrack.children,this.sliderDots=document.querySelector("".concat(this.a," .slider-dots")),this.sliderArrows=document.querySelector("".concat(this.a," .slider-arrows")),this.currentWindowSize={width:void 0,height:void 0},this.currentSlideWidth=0,this.currentSliderTrack=0,this.currentSettingItems=1,this.currentPage=1,this.currentSlide=1,this.currentAmountPages=1,this.currentDots=0,this.currentPos=0,this.currentMouseX=0,this.currentMouseX2=0,this.currentScroll=0,this._init()}var t,i,r;return t=e,(i=[{key:"defaultSetting",value:function(){return{items:1,gap:0,autoplay:!1,playSpeed:2e3,dots:!0,drag:!1,arrows:!1,nextArrow:{slide:"next",text:"Next"},prevArrow:{slide:"prev",text:"Prev"}}}},{key:"currentWidthSlideF",value:function(e){var t,i=s(this.slides);try{for(i.s();!(t=i.n()).done;){var r=t.value,n=(this.sliderList.offsetWidth-this.setting.gap*(e-1))/e;this.currentSlideWidth=n,r.style.width="".concat(n,"px")}}catch(c){i.e(c)}finally{i.f()}}},{key:"currentTrackWidthF",value:function(){var e=this.currentSlideWidth*this.slides.length+(this.slides.length*this.setting.gap-this.setting.gap);this.sliderTrack.style.width="".concat(e,"px"),this.currentSliderTrack=e}},{key:"currentDotsF",value:function(){var e=document.createElement("div");e.classList.add("slider-dots"),this.currentDots=0;for(var t=0;t<this.currentAmountPages;t++){var i=document.createElement("span");i.classList.add("slider-dot"),t+1===this.currentPage&&i.classList.add("active"),i.setAttribute("dot",t+1),e.appendChild(i),this.currentDots=this.currentDots+1}1===e.children.length&&e.children[0].classList.add("disabled"),this.sliderDots.replaceWith(e),this.sliderDots=document.querySelector("".concat(this.a," .slider-dots"))}},{key:"initSlides",value:function(){var e,t=s(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.style.marginRight="".concat(this.setting.gap,"px")}catch(i){t.e(i)}finally{t.f()}this.slides[this.slides.length-1].style.marginRight="0",this.currentTrackWidthF(),this.currentSettingItems=this.setting.items,this.currentAmountPagesF(this.currentSettingItems),this.slider.hasAttribute("draggable")?this.setting.dots=!0:(this.setting.drag&&(this.sliderTrack.addEventListener("mousedown",this.swipeStart),this.sliderTrack.addEventListener("touchstart",this.swipeStart)),this.setting.autoplay&&this.startAutoplayF()),this.setting.dots&&(this.currentDotsF(),this.onClickDotF()),this.setting.arrows&&this.currentArrowsF()}},{key:"currentAmountPagesF",value:function(e){this.currentAmountPages=Math.ceil(this.slides.length/e)}},{key:"updateSlidesF",value:function(e){this.currentWidthSlideF(e),this.currentTrackWidthF(),this.currentAmountPagesF(this.currentSettingItems),this.setting.dots&&(this.currentDotsF(),this.onClickDotF())}},{key:"currentWindowSizeF",value:function(){var e=this;return window.addEventListener("resize",this.updateSlides),this.updateSlides(),function(){return window.removeEventListener("resize",e.updateSlides)}}},{key:"updateSlidesOnPageF",value:function(e){var t=this;void 0!==this.setting.responsive&&this.setting.responsive.map((function(i){return i.breakpoint>=e?(t.currentSettingItems=i.setting.items,t.updateSlidesF(t.currentSettingItems)):e>991&&(t.currentSettingItems=t.setting.items,t.updateSlidesF(t.currentSettingItems)),!1}))}},{key:"updateActiveDotF",value:function(e){document.querySelectorAll("".concat(this.a," .slider-dot")).forEach((function(t){return Number(t.getAttribute("dot"))===e?t.classList.add("active"):t.classList.remove("active")}))}},{key:"currentPosF",value:function(e){this.sliderTrack.style.transform="translate3d(".concat(e,"px, 0px, 0px)"),this.currentPos=e}},{key:"updateSlidePosF",value:function(e){for(var t={curr:0},i=1;i<this.slides.length+1;i+0){if(this.currentSlide>=i&&this.currentSlide<this.currentSettingItems+i){t.curr+=1;break}t.curr+=1,i+=this.currentSettingItems}this.currentPage=t.curr,!e&&this.slideToPageF(this.currentPage)}},{key:"slideToPageF",value:function(e){var t=(this.currentSettingItems*e-this.currentSettingItems)*(this.currentSlideWidth+this.setting.gap);this.currentPosF(-t)}},{key:"slideToF",value:function(){if(this.currentSlide>=this.slides.length-this.currentSettingItems+1)this.updateSlidePosF();else{var e=(this.currentSlide-1)*(this.currentSlideWidth+this.setting.gap);this.currentPosF(-e)}}},{key:"onClickDotF",value:function(){var e=this;this.sliderDots&&this.sliderDots.addEventListener("click",(function(t){"SPAN"===t.target.tagName&&document.querySelectorAll("".concat(e.a," .slider-dot")).forEach((function(i){if(i.classList.remove("active"),i===t.target)if(e.sliderTrack.style.transition=".5s ease all",i.classList.add("active"),e.currentPage=Number(i.getAttribute("dot")),Number(t.target.getAttribute("dot"))===e.currentAmountPages){e.currentSlide=e.slides.length-e.currentSettingItems+1,e.slideToF();var r=(e.currentSlide-1)*(e.currentSlideWidth+e.setting.gap);e.currentPosF(-r)}else e.currentSlide=Number(i.getAttribute("dot"))*e.currentSettingItems-e.currentSettingItems+1,e.slideToPageF(e.currentPage)}))}))}},{key:"startAutoplayF",value:function(){var e=this;setInterval((function(){e.sliderTrack.style.transition=".5s ease all",e.currentSlide===e.slides.length||e.currentSlide===e.slides.length-e.currentSettingItems+1?(e.currentSlide=1,e.currentPage=1):(e.currentSlide++,e.currentPage++),e.updateSlider()}),this.setting.playSpeed)}},{key:"currentArrowsF",value:function(){var e=this;if(this.currentSettingItems!==this.slides.length){this.sliderTrack.style.transition=".5s ease all";var t=document.createElement("div");t.classList.add("slider-arrows"),[this.setting.prevArrow,this.setting.nextArrow].forEach((function(e){var i=document.createElement("span");i.classList.add("slider-arrow"),i.setAttribute("slide",e.slide),i.innerHTML=e.text,t.appendChild(i)})),this.sliderArrows.replaceWith(t),this.sliderArrows=t,this.sliderArrows.addEventListener("click",(function(t){return e.arrowsClickF(t)}))}else{var i=document.createElement("div");i.classList.add("slider-arrows"),this.sliderArrows.replaceWith(i),this.sliderArrows=i}}},{key:"arrowsClickF",value:function(e){var t=this;"SPAN"===e.target.tagName&&(document.querySelectorAll("".concat(this.a," .slider-arrow")).forEach((function(i){i===e.target&&("next"===i.getAttribute("slide")?t.currentSlide===t.slides.length||t.currentSlide===t.slides.length-t.currentSettingItems+1?(t.currentSlide=1,t.currentPage=1):(t.currentSlide++,t.currentPage++):"prev"===i.getAttribute("slide")&&(1===t.currentSlide?(t.currentSlide=t.slides.length,t.currentPage=t.currentAmountPages):t.currentSlide--))})),this.updateSlider())}},{key:"updateSlider",value:function(){this.currentWindowSizeF()}},{key:"clear",value:function(){window.removeEventListener("resize",this.updateSlides)}},{key:"_init",value:function(){var e=this;this.slider.hasAttribute("draggable")&&setInterval((function(){e.initSlides(),e.updateSlider()}),2e3),this.initSlides(),this.updateSlider()}}])&&d(t.prototype,i),r&&d(t,r),e}()},261:function(e,t,i){e.exports={find_destinations_wrap:"FindDestinations_find_destinations_wrap__3DbN2",find_destinations_item:"FindDestinations_find_destinations_item__PKP0d",find_destinations_item_center:"FindDestinations_find_destinations_item_center__3clH0",find_destinations_item_bottom:"FindDestinations_find_destinations_item_bottom__LlzKm"}},262:function(e,t,i){e.exports={tours_slider:"ToursSlider_tours_slider__2Pdq_",tours_slider_item:"ToursSlider_tours_slider_item__visQJ",tours_slider_item_info:"ToursSlider_tours_slider_item_info__kOaST",tours_slider_item_city:"ToursSlider_tours_slider_item_city__eYZ4e",tours_slider_item_days:"ToursSlider_tours_slider_item_days__3N8j6"}},263:function(e,t,i){e.exports={price_wrap:"Price_price_wrap__d5ujU",price_item:"Price_price_item__2S9Qp",popular:"Price_popular__1rqtd",price_item_popular:"Price_price_item_popular__1aMsv",price_item_title:"Price_price_item_title__i9Ciw",no_popular:"Price_no_popular__tSyDz",price_item_price:"Price_price_item_price__WC5xQ",price_item_advant:"Price_price_item_advant__1TOKw",price_item_advant_item:"Price_price_item_advant_item__2pAST",price_item_advant_item_round:"Price_price_item_advant_item_round__26IZt",price_item_advant_item_text:"Price_price_item_advant_item_text__2bA6U",opened:"Price_opened__1QeMD",closed:"Price_closed__3fR9N",price_item_button:"Price_price_item_button__3ulIh"}},268:function(e,t,i){"use strict";i.r(t);var r=i(4),s=i(0),n=i(38),c=i(142),a=i(261),d=function(e){var t=e.imgArr;return Object(r.jsx)("div",{className:"section find_destinations",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"main-info",children:[Object(r.jsx)("div",{className:"main-info-sub-title",children:"Find Your"}),Object(r.jsx)("div",{className:"main-info-title",children:"Destinations"}),Object(r.jsx)("div",{className:"main-info-text",children:"You are now free to move about the country."})]}),Object(r.jsx)("div",{className:a.find_destinations_wrap,children:t&&t.map((function(e){var t=e.id,i=e.city,s=e.src;return Object(r.jsxs)(n.b,{to:"#",className:a.find_destinations_item,children:[Object(r.jsx)(c.LazyLoadComponent,{children:Object(r.jsx)("img",{src:s,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),Object(r.jsx)("div",{className:a.find_destinations_item_center,children:i}),Object(r.jsx)("div",{className:a.find_destinations_item_bottom,children:i})]},t)}))})]})})},o=i(156),l=(i(153),i(262)),u=function(e){var t=e.imgArr;return Object(s.useEffect)((function(){var e=new o.a("#tours_slider",{items:5,gap:20,drag:!0,responsive:[{breakpoint:991,setting:{items:2}}]});return function(){return e.clear()}}),[]),Object(r.jsx)("div",{className:"section tours_slider ".concat(l.tours_slider),children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"slider",id:"tours_slider",children:[Object(r.jsx)("div",{className:"slider-list",children:Object(r.jsx)("div",{className:"slider-track",children:t&&t.map((function(e){var t=e.id,i=e.city,s=e.src,n=e.days,a=e.price;return Object(r.jsxs)("div",{className:"slide ".concat(l.tours_slider_item),children:[Object(r.jsx)(c.LazyLoadComponent,{children:Object(r.jsx)("img",{src:s,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),Object(r.jsxs)("div",{className:l.tours_slider_item_info,children:[Object(r.jsx)("div",{className:l.tours_slider_item_city,children:i}),Object(r.jsxs)("div",{className:l.tours_slider_item_days,children:[n," ",Object(r.jsxs)("span",{children:["$",a]})]})]})]},t)}))})}),Object(r.jsx)("div",{className:"slider-arrows"}),Object(r.jsx)("div",{className:"slider-dots"})]})})})},h=i(263),m=[{id:0,popular:!1,title:"BASIC",price:"100",advant:[{id:0,type:!0,text:"Lorem ipsum dolor"},{id:1,type:!0,text:"Sit amet, consectetu"},{id:2,type:!0,text:"Unde omnis iste natus"},{id:3,type:!1,text:"Dolore magna aliqua"},{id:4,type:!1,text:"Integer et augue"}]},{id:1,popular:!0,title:"STANDARD",price:"300",advant:[{id:0,type:!0,text:"Lorem ipsum dolor"},{id:1,type:!0,text:"Sit amet, consectetu"},{id:2,type:!0,text:"Sed do eiusmod tempor"},{id:3,type:!0,text:"Dolore magna aliqua"},{id:4,type:!1,text:"Integer et augue"}]},{id:2,popular:!1,title:"EXCLUSIVE",price:"395",advant:[{id:0,type:!0,text:"Ut enim ad minim"},{id:1,type:!0,text:"Quis nostrud exerc"},{id:2,type:!0,text:"Ullamco laboris nisi ut"},{id:3,type:!0,text:"Dolore magna aliqua"},{id:4,type:!0,text:"Integer et augue"}]}],p=function(){return Object(r.jsx)("div",{className:"section price",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"main-info tours",children:[Object(r.jsx)("div",{className:"main-info-sub-title",children:"Packages"}),Object(r.jsx)("div",{className:"main-info-title",children:"Pricing Plans"})]}),Object(r.jsx)("div",{className:h.price_wrap,children:m&&m.map((function(e){var t=e.popular?h.popular:h.no_popular;return Object(r.jsxs)("div",{className:"".concat(h.price_item," ").concat(t),children:[e.popular&&Object(r.jsx)("div",{className:h.price_item_popular,children:"POPULAR"}),Object(r.jsx)("div",{className:"".concat(h.price_item_title," ").concat(t),children:e.title}),Object(r.jsxs)("div",{className:h.price_item_price,children:[Object(r.jsx)("sup",{children:"$"}),e.price,Object(r.jsx)("sub",{children:"/mo"})]}),Object(r.jsx)("div",{className:h.price_item_advant,children:e.advant.map((function(e){var t=e.id,i=e.type,s=e.text,n=i?h.opened:h.closed,c=i?"fad fa-check":"fad fa-times";return Object(r.jsxs)("div",{className:"".concat(h.price_item_advant_item," ").concat(n),children:[Object(r.jsx)("div",{className:h.price_item_advant_item_round,children:Object(r.jsx)("i",{className:c})}),Object(r.jsx)("div",{className:h.price_item_advant_item_text,children:s})]},t)}))}),Object(r.jsx)(n.b,{to:"#",className:"main-button ".concat(h.price_item_button),children:"Get Started"})]},e.id)}))})]})})},_=i(146),g=i(147),v=i(148),f=i(149),S=i(150),y=i(151),b=i.p+"static/media/7.d193e11a.jpg",j=i.p+"static/media/8.45a8d813.jpg",w=i.p+"static/media/9.4747decb.jpg",x=[{id:0,city:"Paris",src:_.a,days:"3Days, 4 Nights Start From",price:"750"},{id:1,city:"Bankok",src:g.a,days:"2Days, 3 Nights Start From",price:"650"},{id:2,city:"Maldives",src:v.a,days:"2Days, 3 Nights Start From",price:"550"},{id:3,city:"Greece",src:f.a,days:"3Days, 4 Nights Start From",price:"950"},{id:4,city:"London",src:S.a,days:"2Days, 2 Nights Start From",price:"550"},{id:5,city:"Julian Alps",src:y.a,days:"3Days, 4 Nights Start From",price:"850"},{id:6,city:"Thailand",src:b,days:"3Days, 4 Nights Start From",price:"650"},{id:7,city:"Singapore",src:j,days:"3Days, 4 Nights Start From",price:"850"},{id:8,city:"Egypt",src:w,days:"3Days, 4 Nights Start From",price:"750"}];t.default=function(){return console.log("render Destinations"),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{imgArr:x}),Object(r.jsx)(u,{imgArr:x}),Object(r.jsx)(p,{})]})}}}]);
//# sourceMappingURL=6.2213bc62.chunk.js.map
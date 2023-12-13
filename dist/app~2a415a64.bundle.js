/*! For license information please see app~2a415a64.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[886],{2574:(t,n,e)=>{e.d(n,{Z:()=>u}),e(5666);var r=e(8054),o=e(6455),i=e.n(o);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(){l=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function f(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{f({},"")}catch(t){f=function(t,n,e){return t[n]=e}}function p(t,n,e,r){var i=n&&n.prototype instanceof w?n:w,a=Object.create(i.prototype),l=new F(r||[]);return o(a,"_invoke",{value:_(t,e,l)}),a}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",m="suspendedYield",v="executing",y="completed",g={};function w(){}function b(){}function x(){}var L={};f(L,c,(function(){return this}));var k=Object.getPrototypeOf,E=k&&k(k(R([])));E&&E!==e&&r.call(E,c)&&(L=E);var j=x.prototype=w.prototype=Object.create(L);function P(t){["next","throw","return"].forEach((function(n){f(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function e(o,i,l,c){var s=d(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==a(f)&&r.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,l,c)}),(function(t){e("throw",t,l,c)})):n.resolve(f).then((function(t){u.value=t,l(u)}),(function(t){return e("throw",t,l,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function _(n,e,r){var o=h;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var l=r.delegate;if(l){var c=O(l,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var s=d(n,e,r);if("normal"===s.type){if(o=r.done?y:m,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=y,r.method="throw",r.arg=s.arg)}}}function O(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,O(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=d(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function N(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function C(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function R(n){if(n||""===n){var e=n[c];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(a(n)+" is not iterable")}return b.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},P(S.prototype),f(S.prototype,s,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new S(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(j),f(j,u,"Generator"),f(j,c,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=R,F.prototype={constructor:F,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return l.type="throw",l.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;C(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:R(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function c(t,n,e,r,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void e(t)}l.done?n(c):Promise.resolve(c).then(r,o)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){c(i,r,o,a,l,"next",t)}function l(t){c(i,r,o,a,l,"throw",t)}a(void 0)}))}}const u={render:function(){return s(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n      <div\n        class="d-flex align-items-center justify-content-center w-100"\n        style="min-height:80vh; margin:140px 0"\n      >\n        <div class="card shadow" style="min-width:70%" id="content-logres"\n        data-aos="fade-up"\n        data-aos-delay="50"\n        data-aos-duration="1000"\n        data-aos-easing="ease-in-out"\n        >\n          <div class="m-0 row align-items-center justify-content-center">\n            <div\n              class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center rounded"\n              style="min-height:620px; max-height:100%"\n              id="sideContentLogin"\n            >\n              <div id="textAsideLogin" class="text-center text-light">\n                <h1>Jelajah Jogjakarta</h1>\n                <p>Jelajahi Jogja, Pesona setiap sudut</p>\n              </div>\n            </div>\n            <div class="col-12 col-md-6 p-5">\n              <h3 class="text-center mb-3 title-logres">Registrasi</h3>\n              <form class="registrasiform">\n                <div class="row">\n                  <div class="col-6 mb-3">\n                    <label for="inputName" class="form-label">Nama</label>\n                    <input\n                      type="text"\n                      class="form-control"\n                      id="inputName"\n                      name="name"\n                      placeholder="Nama lengkap"\n                    />\n                  </div>\n                  <div class="col-6 mb-3">\n                    <label for="inputJenisKelamin" class="form-label"\n                      >Jenis Kelamin</label\n                    >\n                    <select\n                      class="form-select"\n                      id="inputJenisKelamin"\n                      name="jenis_kelamin"\n                    >\n                      <option value="laki-laki">Laki-Laki</option>\n                      <option value="perempuan">Perempuan</option>\n                    </select>\n                  </div>\n                </div>\n                <div class="row">\n                  <div class="col-6 mb-3">\n                    <label for="inputEmail" class="form-label">Email</label>\n                    <input\n                      type="email"\n                      class="form-control"\n                      id="inputEmail"\n                      placeholder="example@gmail.com"\n                      name="email"\n                    />\n                  </div>\n                  <div class="col-6 mb-3">\n                    <label for="inputRole" class="form-label">Role</label>\n                    <input\n                      type="text"\n                      class="form-control"\n                      id="inputRole"\n                      value="admin"\n                      disabled\n                    />\n                  </div>\n                </div>\n                <div class="row">\n                  <div class="col-6 mb-3">\n                    <label for="inputPassword" class="form-label"\n                      >Password</label\n                    >\n                    <input\n                      type="password"\n                      class="form-control"\n                      id="inputPassword"\n                      placeholder="****"\n                      name="password"\n                    />\n                  </div>\n                  <div class="col-6 mb-3">\n                    <label for="inputConfirmPassword" class="form-label"\n                      >Konfirmasi Password</label\n                    >\n                    <input\n                      type="password"\n                      class="form-control"\n                      id="inputConfirmPassword"\n                      placeholder="****"\n                      name="confirmPassword"\n                    />\n                  </div>\n                </div>\n                <div class="mb-3">\n                  <label for="formFile" class="form-label"\n                    >Masukan foto profil</label\n                  >\n                  <input\n                    class="form-control"\n                    type="file"\n                    id="formFile"\n                    name="file"\n                  />\n                </div>\n                <div\n                  class="d-flex flex-wrap gap-3 align-items-center justify-content-between"\n                >\n                  <button type="submit" class="btn-logres w-100 mt-3 btn">\n                    Registrasi\n                  </button>\n                  <p class="anchor-logres">\n                    Anda sudah mempunyai akun?\n                    <a href="#/login"> klik disini </a>\n                  </p>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return s(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.querySelector(".registrasiform").addEventListener("submit",function(){var t=s(l().mark((function t(n){var e,o,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),e=document.querySelector("#formFile"),void 0!==(o=e.files[0])){t.next=6;break}return i().fire({icon:"error",title:"Masukan file image!",text:"Tolong ulangi!",showConfirmButton:!1}),t.abrupt("return");case 6:(a=new FileReader).readAsDataURL(o),a.onloadend=s(l().mark((function t(){var n,e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={name:document.querySelector("#inputName").value,jenis_kelamin:document.querySelector("#inputJenisKelamin").value,email:document.querySelector("#inputEmail").value,password:document.querySelector("#inputPassword").value,confirmPassword:document.querySelector("#inputConfirmPassword").value,file:a.result},t.prev=1,t.next=4,r.Z.registrasi(n);case 4:if(0===(e=t.sent).length){t.next=11;break}if(!e.data){t.next=10;break}return i().fire({position:"center",icon:"success",title:"Berhasil Registrasi!",showConfirmButton:!1,timer:1500}),window.location.replace("#/login"),t.abrupt("return");case 10:i().fire({icon:"error",title:"".concat(e.response.data.msg,"!"),text:"Tolong ulangi!",showConfirmButton:!1});case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=app~2a415a64.bundle.js.map
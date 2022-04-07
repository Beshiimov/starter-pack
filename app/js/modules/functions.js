export function isWebp() {
   function testWebP(callback) {
     let webP = new Image();
     webP.onload = webP.onerror = function() {
       callback(webP.height == 2);
     };
     webP.src = "data:image/webp;base64,R0lGODlhCgAIAIABAN3d3f///yH5BAEAAAEALAAAAAAKAAgAAAINjAOnyJv2oJOrVXrzKQA7";
   }
   testWebP(function (support) {
     let className = support === true ? 'no-webp' : 'webp';
     document.documentElement.classList.add(className);
   })
}
window.flutter_inappwebview.callHandler('setJsFileVersion', '030724');
window.flutter_inappwebview.callHandler('showSnackBar', 'расширения загружены', '80d5700d');
window.flutter_inappwebview.callHandler('setUserLogin', '');

if(!window.AppInventor){
  window.AppInventor = {
    setWebViewString: function(...args){
      return window.flutter_inappwebview.callHandler('setWebViewString', ...args)
    },
    getWebViewString: function(...args){
      return window.flutter_inappwebview.callHandler('getWebViewString', ...args)
    },
  };
};

//if(store.getters.userLogin == 'mypanty1'){
//document.head.appendChild(Object.assign(document.createElement('script'),{src:'https://mypanty1.github.io/ICFL/app-update-notifer.js',type:'text/javascript'}));
//};

//port refree
document.head.appendChild(Object.assign(document.createElement('script'),{src:'https://mypanty1.github.io/FX_test/AbonPortRefree.js',type:'text/javascript'}));
//SitePlanDownload
document.head.appendChild(Object.assign(document.createElement('script'),{src:'https://mypanty1.github.io/FX_test/SiteNodeDuExt.js',type:'text/javascript'}));
//SendKionPq
document.head.appendChild(Object.assign(document.createElement('script'),{src:'https://mypanty1.github.io/FX_test/SendKionPq.js',type:'text/javascript'}));
//SiteLinkChangeTraps
document.head.appendChild(Object.assign(document.createElement('script'),{src:'https://mypanty1.github.io/FX_test/SiteLinkChangeTraps.js',type:'text/javascript'}));

//add port disable approve dialog
document.head.appendChild(Object.assign(document.createElement('script'),{src:'https://mypanty1.github.io/FX_test/PortActionDisableApproveModal.js',type:'text/javascript'}));

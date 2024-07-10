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

document.head.appendChild(Object.assign(document.createElement('script'),{src:'https://mypanty1.github.io/FX_test/addons.js',type:'text/javascript'}));

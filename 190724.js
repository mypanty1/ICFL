window.flutter_inappwebview.callHandler('setJsFileVersion', '190724');
//window.flutter_inappwebview.callHandler('showSnackBar', 'в этом предложении тридцать две буквы');
if(app){
  window.flutter_inappwebview.callHandler('setUserLogin', app.$store.getters.userLogin);
};

//if(store.getters.userLogin == 'mypanty1'){
//  document.head.appendChild(Object.assign(document.createElement('script'),{src:'https://mypanty1.github.io/ICFL/app-update-notifer.js',type:'text/javascript'}));
//};

document.head.appendChild(Object.assign(document.createElement('script'),{src:'https://mypanty1.github.io/ICFL/addons.js',type:'text/javascript'}));


setInterval(() => {
  // const message = [
  //   'доступно обновление.',
  //   'обновить можно по той-же ссылке',
  //   '',
  //   'ICFL v0.1.5',
  //   '*экран не гаснет'
  // ].join('\n');
  //window.flutter_inappwebview.callHandler('showSnackBar', message);
  if(store.getters.userLogin === 'mypanty1'){
    store.dispatch('toast/open', {
      iconName:'SqInfo',
      iconColor:'#26CD58',
      duration: 9999,
      messageText: 'доступно обновление ICFL v0.1.5',
      actionText: 'Download',
      actionOnClick: store.dispatch('app/actionView', 'https://ping54.ru/shared/ICFL/app-release.apk'),
    });
  }else{
    app.$store.dispatch('toast/open',{
      iconName:'SqCheckedFill',
      iconColor:'#26CD58',
      messageText: 'доступно обновление. обновить можно по той-же ссылке ICFL v0.1.5',
      duration: 9999
    });
  }
}, 11111);

setInterval(() => {
  // const message = [
  //   'доступно обновление.',
  //   'обновить можно по той-же ссылке',
  //   '',
  //   'ICFL v0.1.5',
  //   '*экран не гаснет'
  // ].join('\n');
  //window.flutter_inappwebview.callHandler('showSnackBar', message);
  store.dispatch('toast/open', {
    iconName:'SqInfo',
    iconColor:'#26CD58',
    duration: 9999,
    messageText: 'доступно обновление\nICFL v0.1.5',
    messageClass: 'white-space-pre-wrap',
    actionText: 'Download',
    actionOnClick: () => window.flutter_inappwebview.callHandler('launchUrl', 'https://ping54.ru/shared/ICFL/app-release.apk'),
  });
}, 11111);

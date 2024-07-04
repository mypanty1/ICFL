setInterval(() => {
  const message = `доступно обновление.\nобновить можно по той-же ссылке`;
  window.flutter_inappwebview.callHandler('showSnackBar', message);
}, 22222);

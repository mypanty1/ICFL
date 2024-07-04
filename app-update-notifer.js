setInterval(() => {
  const message = `доступно обновление. обновить можно по той-же ссылке`;
  window.flutter_inappwebview.callHandler('showSnackBar', message);
}, 22222);

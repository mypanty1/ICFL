setInterval(() => {
  const message = [
    'доступно обновление.',
    'обновить можно по той-же ссылке',
    '',
    'ICFL v0.1.5',
    '*экран не гаснет'
  ].join('\n');
  window.flutter_inappwebview.callHandler('showSnackBar', message);
}, 22222);

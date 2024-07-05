setInterval(() => {
  const message = [
    'доступно обновление.',
    'обновить можно по той-же ссылке',
    '',
    'ICFL v0.1.4',
    '*восстановлена работа кнопки назад',
    '*разное'
  ].join('\n');
  window.flutter_inappwebview.callHandler('showSnackBar', message);
}, 22222);

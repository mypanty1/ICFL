setInterval(() => {
  const message = [
    'доступно обновление.',
    'обновить можно по той-же ссылке',
    '',
    'ICFL v0.1.3',
    '*восстановлена работа кнопки назад'
  ].join('\n');
  window.flutter_inappwebview.callHandler('showSnackBar', message);
}, 22222);

  // ضع رابط تحميل التطبيق هنا (رابط APK أو صفحة المتجر) وسيُطبَّق على كل أزرار التحميل
  var DOWNLOAD_URL = "#";
  if (DOWNLOAD_URL && DOWNLOAD_URL !== "#") {
    document.querySelectorAll(".js-download").forEach(function (a) { a.href = DOWNLOAD_URL; });
  }

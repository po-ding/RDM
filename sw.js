// PWA 설치를 위한 최소한의 서비스 워커
self.addEventListener('fetch', (event) => {
  // 네트워크 요청에만 의존
  event.respondWith(fetch(event.request));
});

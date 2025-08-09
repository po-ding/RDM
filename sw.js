// PWA 설치를 위한 최소한의 서비스 워커
self.addEventListener('fetch', (event) => {
  // 현재는 특별한 캐싱 전략 없이 네트워크 요청을 그대로 통과시킵니다.
  event.respondWith(fetch(event.request));
});
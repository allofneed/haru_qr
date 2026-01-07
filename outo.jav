document.getElementById("v").addEventListener("click", () => {
  window.open(url, "_blank", "noopener,noreferrer");
});

document.body.addEventListener('click', function() {
    const video = document.getElementById("v");
    video.muted = false; // 음소거 해제
    video.play();        // 재생 시작
}, { once: true });      // 딱 한 번만 실행
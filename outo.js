function unmuteByStruckture(element){
  const container = element.closest(".container");
  const video = container.querySelector("video");
  const listening_dog_icon = element.querySelector(".listening_dog_icon");
  const textNode = element.querySelector("span");

  if (video.muted) {
    video.muted = false;
    console.log("소리가 켜졌습니다");
    textNode.innerText = "영상 소리 끄기";
    listening_dog_icon.src = "시끄럽다개.svg";
  } else{
    video.muted = true;
    textNode.innerText = "영상 소리 켜기";
    listening_dog_icon.src = "듣고싶다개.svg";
  }
}

window.onload = function(){
  const reserveBtn = document.querySelectorAll('th')[1];
  let isChanged = false;
  setInterval(function(){
    if(!isChanged) {
      reserveBtn.innerText = "놀러 가자개!";
      reserveBtn.style.backgroundColor = "#2db400";
      reserveBtn.style.color = "white";
      isChanged = true;
    } else{
      reserveBtn.innerText = "바로 예약 하기";
      reserveBtn.style.backgroundColor = "white";
      reserveBtn.style.color = "black";
      isChanged = false;
    }
  }, 1000)
}

function reservation(element){
  window.location.href="https://smartstore.naver.com/haru_space"
}
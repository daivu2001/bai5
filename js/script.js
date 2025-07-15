// Danh sách ảnh đề thi
const examImages = [
  "e1.png", "e2.png",
  "r1.png", "r2.png", "r3.png", "r4.png", "r5.png",
  "l1.png", "l2.png", "l3.png", "l4-1.png", "l4-1.png"
];

// Danh sách file âm thanh
const audioFiles = [
  { title: "LISTEN 1x", file: "Part1.mp3" },
  { title: "LISTEN 2x", file: "Part2.mp3" },
  { title: "LISTEN 3x", file: "Part3.mp3" },
  { title: "LISTEN 4x", file: "Part4.mp3" },
  { title: "LISTEN 5x", file: "Part5.mp3" }
];

// Tạo ảnh đề bài
const examDiv = document.getElementById("exam-images");
examImages.forEach(img => {
  const image = document.createElement("img");
  image.src = `img/${img}`;
  examDiv.appendChild(image);
});

// Tạo phần nghe
const audioDiv = document.getElementById("audio-section");
audioFiles.forEach(audio => {
  const label = document.createElement("h4");
  label.textContent = `🔊 ${audio.title}`;
  const player = document.createElement("audio");
  player.controls = true;
  const source = document.createElement("source");
  source.src = `audio/${audio.file}`;
  source.type = "audio/mpeg";
  player.appendChild(source);
  audioDiv.appendChild(label);
  audioDiv.appendChild(player);
});


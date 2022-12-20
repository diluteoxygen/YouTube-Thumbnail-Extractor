const extractButton = document.getElementById('extract-button');
const thumbnailContainer = document.getElementById('thumbnail-container');

extractButton.addEventListener('click', () => {
  const url = document.getElementById('url').value;
  const videoId = getVideoId(url);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = thumbnailUrl;
  thumbnailContainer.appendChild(thumbnailImg);
});

function getVideoId(url) {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
}

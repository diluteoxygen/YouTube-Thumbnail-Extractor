const extractButton = document.getElementById('extract-button');
const thumbnailContainer = document.getElementById('thumbnail-container');

extractButton.addEventListener('click', () => {
  // Remove any existing thumbnail image and download button
  thumbnailContainer.innerHTML = '';

  // Extract the thumbnail image from the URL
  const url = document.getElementById('url').value;
  const videoId = getVideoId(url);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = thumbnailUrl;
  thumbnailContainer.appendChild(thumbnailImg);

  // Create a download button and append it to the thumbnail container
  const downloadButton = document.createElement('button');
  downloadButton.innerHTML = 'Download';
  downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = thumbnailUrl;
    link.download = 'thumbnail.jpg';
    link.click();
  });
  thumbnailContainer.appendChild(downloadButton);
});

function getVideoId(url) {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
}

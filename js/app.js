
  const images = [
    "/photo/photo_2025-05-18_14-20-49.jpg",
    "/photo/photo_2025-05-18_14-35-16.jpg"
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("slider-image");

  function showImage(index) {
    imgElement.src = images[index];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }


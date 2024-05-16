// Events to check that page is loaded (should be applied to window object):
// DOMContentLoaded - DOM fully loaded
// load - all elements (including images and styles) are loaded
window.addEventListener("load", function () {
  // Select all images
  const images = document.querySelectorAll(".carousel-container > img");
  const indicators = document.getElementsByClassName("indicator");
  console.log(images, indicators);
  // Select previous and next buttons
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");

  // Create application state to keep track of the current index
  let activeSlide = 0;

  // Show images function
  function showImage() {
    // Remove active class from all images
    // For every element in images array call a function that removes "active" class
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("active");
      indicators[i].classList.remove("active");
    }
    // Remove active class from all indicators
    // Use loop to loop through all element of array
    // Add active class to the current image and indicator
    console.log("active slide: ", activeSlide);

    images[activeSlide].classList.add("active");
    indicators[activeSlide].classList.add("active");
    // images[]
  }

  nextButton.addEventListener("click", showNextImage);
  prevButton.addEventListener("click", showPrevImage);

  // handle next click
  function showNextImage() {
    if (activeSlide < images.length - 1) {
      // 0, 1,
      activeSlide++;
    } else {
      // 2 or anything else
      activeSlide = 0;
    }

    showImage();
    // increase currentIndex. What happens if the current index is > than number of images that we have?
  }

  // handle previous click
  function showPrevImage() {
    // [image1, image2, image3]
    // decrease currentIndex. What happens if the current index is < 0?
    // if else condition
    if (activeSlide > 0) {
      activeSlide--;
    } else {
      activeSlide = images.length - 1;
    }
    showImage();
  }

  // Add event listeneters for button clicks

  // Switch images after 3 seconds automatically using setInterval function
  // Use 3000 value for 3 second delay
  setInterval(showNextImage, 3000);
});

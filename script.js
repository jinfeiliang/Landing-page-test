let mobileNavMenu = document.querySelector("#nav-mobile");
let menuButton = document.querySelector("#menu-button");
let navMobileItemFrame = document.querySelector("#nav-mobile-item-frame");

let toggleMobileNavMenuCd = false;
function toggleMobileNavMenu() {
  console.log("OACt");

  if (toggleMobileNavMenuCd == false) {
    if (mobileNavMenu.classList == "nav-mobile-closed"){
      console.log("opening")
      toggleMobileNavMenuCd = true;
      mobileNavMenu.classList = "";
      mobileNavMenu.classList.add("nav-mobile-open");

      navMobileItemFrame.style.height = "auto";
      // navMobileItemFrame.style.animation = "expand-nav-mobile 1s ease-in-out";
      
      menuButton.className = "";
      menuButton.className = "menu-button-opened";
      setTimeout(function(){
        toggleMobileNavMenuCd = false;
      }, 250);
      
    } else {
      console.log("closing")
      toggleMobileNavMenuCd = true;
      mobileNavMenu.classList = "";
      mobileNavMenu.classList.add("nav-mobile-closed");
      navMobileItemFrame.style.height = "0";
      // navMobileItemFrame.style.animation = "close-nav-mobile 1s ease-in-out";
      menuButton.className = "";
      menuButton.className = "menu-button-closed";
      setTimeout(function(){
        toggleMobileNavMenuCd = false;
      }, 250);
    }
    
  }

}

menuButton.addEventListener("click", toggleMobileNavMenu);

let reviewsContainer = document.querySelector(".reviews-container");

function cleanReviews(){
  reviewsContainer.innerHTML = "";
}

function createReviewSlide(name, job, profilePicture, comment){
  let html = `          
          <article>
            <div class="Rating-Container">
              <img class="rating-stars" src="Resources/Img/star.png">
              <img class="rating-stars" src="Resources/Img/star.png">
              <img class="rating-stars" src="Resources/Img/star.png">
              <img class="rating-stars" src="Resources/Img/star.png">
              <img class="rating-stars" src="Resources/Img/star.png">
            </div>
            <p class="rating-comment">${comment}</p>
            <div class="rating-profile">
              <img src="${profilePicture}" class="rating-profile-img">
              <div class="rating-profile-author">
                <span class="rating-profile-name">${name}</span>
                <span class="rating-profile-job">${job}</span>
              </div>
            </div>
          </article>`
  reviewsContainer.insertAdjacentHTML("beforeend", html);
}

let reviewsArray = [
  {
    name: "Elon M.",
    job: "Tesla & Space X CEO",
    profilePicture: "https://people.com/thmb/uBAQVhmR33wl6Gj-sVAlR8jeO5Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/elon-musk-09a71170d6234b2f8b0be2de7b534f82.jpg",
    comment: "SkyCity Transport transformed my daily commute. I save hours each week!",
  },
  {
    name: "Vianny M.",
    job: "Google CEO Legal Consultant",
    profilePicture: "https://tr.rbxcdn.com/180DAY-492721c6e993021ce41ad7c496bd010f/420/420/LayeredAccessory/Webp/noFilter",
    comment: "Reliable, efficient, and surprisingly affordable. SkyCity helps me stay ahead in business and life.",
  },
  {
    name: "Naldo N.",
    job: "CodeDash Marketing Director",
    profilePicture: "https://codedash.dev/Group%206.svg",
    comment: "SkyCity has redefined what it means to commute in the city. It’s a game-changer for my hectic schedule!",
  },
  {
    name: "Daniel H.",
    job: "Entrepreneur",
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYWMBSvY9vGzTvcBTQZVosjCFMUWt2xLC4JadcqCuX5OpPsDbUqQkC5MkVVqV5vD4F9U&usqp=CAU",
    comment: "From the moment I board, I know I’m in safe hands. SkyCity delivers every time.",
  },
  {
    name: "Elena P.",
    job: "Architect",
    profilePicture: "https://media.istockphoto.com/id/1298074229/photo/confident-female-architect-standing-in-office.jpg?s=612x612&w=0&k=20&c=eWDeJIOzN0fqVZPD7v7ESGWZwlmtTKrsCrHoMzbEm2w=",
    comment: "A brilliant solution for urban professionals. SkyCity takes the stress out of travel.",
  },
  {
    name: "Sophia L.",
    job: "Marketing Director",
    "profilePicture": "https://www.betterteam.com/images/chief-marketing-officer-job-description-3696x5544-20201118.jpeg?crop=1:1,smart&width=1200&dpr=2&format=pjpg&auto=webp&quality=85",
    comment: "SkyCity has redefined what it means to commute in the city. It’s a game-changer for my hectic schedule."
  },
  {
    name: "James K.",
    job: "Software Engineer",
    profilePicture: "https://www.recruiter.com/recruiting/wp-content/uploads/2021/07/Black-software-engineers.jpg",
    comment: "I never thought I’d enjoy commuting, but SkyCity Transport makes it effortless and exciting."
  },
  {
    name: "Rachel M.",
    job: "Entrepreneur",
    profilePicture: "https://imageio.forbes.com/specials-images/imageserve/612b05f76d201f68d9b60203/Photo-of-young-business-woman-in-the-office/960x0.jpg?format=jpg&width=960",
    comment: "Reliable, efficient, and surprisingly affordable. SkyCity helps me stay ahead in business and life."
  },
  {
    name: "Michael T.",
    job: "Startup CEO",
    profilePicture: "https://media.licdn.com/dms/image/v2/D5612AQEM-bPiJf9vJw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1671489817471?e=2147483647&v=beta&t=DwzqQ8XbS-2h9rFZAGWRxN6O23HCGwvmOxOuUlE-0yA",
    comment: "The future of transportation is here, and it’s incredible!"
  },
  {
    name: "Jessica W.",
    job: "Financial Consultant",
    profilePicture: "https://www.merriman.com/wp-content/uploads/woman-meeting-with-woman-2-1.jpg",
    comment: "SkyCity Transport transformed my daily commute. I save hours each week!"
  },
]

if (reviewsArray.length >= 2) {
  cleanReviews();
  reviewsArray.forEach(function(index){
    createReviewSlide(index.name, index.job, index.profilePicture, index.comment);
  });
}


let ReviewsContainer = document.querySelector(".reviews-container");
let ForwardArrowReviewElement = document.querySelector("#Forward-Arrow-Review");
let BackArrowReviewElement = document.querySelector("#Back-Arrow-Review");

ForwardArrowReviewElement.addEventListener("click", function(){
  let offSet = (ReviewsContainer.offsetWidth * 0.3333333333333333333333333333)
  ReviewsContainer.scrollBy(offSet,0, "smooth");
})
BackArrowReviewElement.addEventListener("click", function(){
  let offSet = (ReviewsContainer.offsetWidth * -0.3333333333333333333333333333)
  ReviewsContainer.scrollBy(offSet,0, "smooth");
})
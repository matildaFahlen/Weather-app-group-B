const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navUl.classList.toggle("active");
});

const navUl = document.querySelector(".nav-menu");
const star = document.querySelector('.star');


let favoriteResults = [];

star.addEventListener('click', (event) => {
  
  if (star.innerHTML.trim() === '<i class="fa-regular fa-star"></i>') {
    
    star.innerHTML = '<i class="fa-solid fa-star"></i>';
    const newItem = document.createElement('li');
    newItem.id = `${favoriteResult.id}`
    newItem.classList.add('favorite-item');
    const flag = document.createElement('img');
    flag.setAttribute('src', `https://hatscripts.github.io/circle-flags/flags/${favoriteResult.country_code.toLowerCase()}.svg`);
    flag.classList.add('flag');
    newItem.appendChild(flag);
    const text = document.createElement('span');
    text.textContent = `${favoriteResult.name}, ${favoriteResult.country}`;
    newItem.appendChild(text);
    
    
    newItem.addEventListener('click', () => {
      
      const index = Array.from(navUl.children).indexOf(newItem);
      favoriteResult = favoriteResults[index];
      const latitude = favoriteResult.latitude;
      const longitude = favoriteResult.longitude;
      fetchForecast(longitude, latitude, startDate, endDate);
      updateCurrentTempSearched(favoriteResult);
      hamburger.classList.toggle("active");
      navUl.classList.toggle("active");
      star.innerHTML = '<i class="fa-solid fa-star"></i>';
      console.log(favoriteResult)
    });

    navUl.appendChild(newItem);
    favoriteResults.push(favoriteResult);
    console.log(favoriteResults)
  }  else {
    
    const items = Array.from(navUl.children);
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.querySelector('span').textContent === `${favoriteResult.name}, ${favoriteResult.country}`) {
        const index = favoriteResults.findIndex((result) => result.id === favoriteResult.id);
        favoriteResults.splice(index, 1);
        item.remove();
        break;
      }
    }
    star.innerHTML = '<i class="fa-regular fa-star"></i>';
    console.log(favoriteResults);
  }
});
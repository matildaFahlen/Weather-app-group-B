const outputDiv = document.querySelector('.outputDiv');

const updateSearchOptionsUI = (results) => {
  const list = document.createElement('ul');
  list.classList.add('search-results');

  results.slice(0, 10).forEach((result) => {
    const item = document.createElement('li');
    item.classList.add('search-result');

    const flag = document.createElement('img');
    flag.setAttribute('src', `https://hatscripts.github.io/circle-flags/flags/${result.country_code.toLowerCase()}.svg`);
    flag.classList.add('flag');
    item.appendChild(flag);

    const text = document.createElement('span');
    text.textContent = `${result.name}, ${result.country}`;
    item.appendChild(text);
    
    item.addEventListener('click', () => {
      search.value = '';
      outputDiv.innerHTML = '';
      const latitude = result.latitude;
      const longitude = result.longitude;
      fetchForecast(longitude, latitude, startDate, endDate);
      updateCurrentTempSearched(result);
    });
    
    list.appendChild(item);
  });
  
  outputDiv.innerHTML = '';
  outputDiv.appendChild(list);
};

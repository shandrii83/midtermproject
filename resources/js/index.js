fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const projects = document.getElementsByClassName("project");
    const randomIndexes = generateRandomIndexes(data.length);

    Array.from(projects).forEach((project, index) => {
      const randomIndex = randomIndexes[index];
      const randomData = data[randomIndex];

      project.innerHTML = `
        <img src="${randomData.image}" alt="">
        <h3>${randomData.name}</h3>
        <p>${randomData.description}</p>
        <a href="#">Learn More</a>
      `;
    });
  });

function generateRandomIndexes(length) {
  const indexes = [];
  for (let i = 0; i < length; i++) {
    indexes.push(i);
  }
  return shuffleArray(indexes);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



window.addEventListener('scroll', function () {
  var scrollToTopButton = document.getElementById('scrollToTop');

  if (window.pageYOffset > 0) {
    scrollToTopButton.classList.remove('hidden');
  } else {
    scrollToTopButton.classList.add('hidden');
  }
});






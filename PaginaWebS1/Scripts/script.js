const resultsData = [
  {
    fighter1: "Juan Perez",
    fighter2: "Carlos Gomez",
    result: "Juan Perez ganó por KO",
    gender: "Masculino",
    company: "UFC",
    weight: "Peso Welter",
    country: "México",
    discipline: "MMA"
  },
  {
    fighter1: "Maria Santos",
    fighter2: "Ana Ruiz",
    result: "Maria Santos ganó por decisión unánime",
    gender: "Femenino",
    company: "Bellator",
    weight: "Peso Pluma",
    country: "Brasil",
    discipline: "MMA"
  },
  {
    fighter1: "Luis Kim",
    fighter2: "Hiro Tanaka",
    result: "Luis Kim ganó por sumisión",
    gender: "Masculino",
    company: "ONE",
    weight: "Peso Ligero",
    country: "Japón",
    discipline: "MMA"
  },
  {
    fighter1: "Ana Morales",
    fighter2: "Sofia Chavez",
    result: "Ana Morales ganó por puntos",
    gender: "Femenino",
    company: "Grappling",
    weight: "Peso Medio",
    country: "Estados Unidos",
    discipline: "Grappling"
  },
  {
    fighter1: "Roberto Diaz",
    fighter2: "Miguel Torres",
    result: "Roberto Diaz ganó por KO técnico",
    gender: "Masculino",
    company: "Boxeo",
    weight: "Peso Medio",
    country: "México",
    discipline: "Boxeo"
  },
  {
    fighter1: "Somsak Chaiyasan",
    fighter2: "Niran Phan",
    result: "Somsak Chaiyasan ganó por decisión dividida",
    gender: "Masculino",
    company: "Muay Thai",
    weight: "Peso Pesado",
    country: "Tailandia",
    discipline: "Muay Thai"
  }
];

const filterGender = document.getElementById('filter-gender');
const filterCompany = document.getElementById('filter-company');
const filterWeight = document.getElementById('filter-weight');
const filterCountry = document.getElementById('filter-country');
const filterDiscipline = document.getElementById('filter-discipline');
const resultsList = document.getElementById('results-list');

function filterResults() {
  const gender = filterGender.value;
  const company = filterCompany.value;
  const weight = filterWeight.value;
  const country = filterCountry.value;
  const discipline = filterDiscipline.value;

  let filtered = resultsData.filter(item => {
    return (gender === "" || item.gender === gender) &&
           (company === "" || item.company === company) &&
           (weight === "" || item.weight === weight) &&
           (country === "" || item.country === country) &&
           (discipline === "" || item.discipline === discipline);
  });
  displayResults(filtered);
}

function displayResults(results) {
  resultsList.innerHTML = "";
  if (results.length === 0) {
    resultsList.innerHTML = "<p>No se encontraron resultados para los filtros seleccionados.</p>";
    return;
  }
  results.forEach(item => {
    const card = document.createElement('article');
    card.className = 'result-card';
    card.tabIndex = 0;
    card.innerHTML = `
      <h3>${item.fighter1} vs ${item.fighter2}</h3>
      <p class="result-info">${item.result}</p>
      <p class="result-info"><strong>Género:</strong> ${item.gender}  •  <strong>Compañía:</strong> ${item.company}</p>
      <p class="result-info"><strong>Peso:</strong> ${item.weight}  •  <strong>País:</strong> ${item.country}</p>
      <p class="result-info"><strong>Disciplina:</strong> ${item.discipline}</p>
    `;
    resultsList.appendChild(card);
  });
}

filterGender.addEventListener('change', filterResults);
filterCompany.addEventListener('change', filterResults);
filterWeight.addEventListener('change', filterResults);
filterCountry.addEventListener('change', filterResults);
filterDiscipline.addEventListener('change', filterResults);

filterResults();

function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('forumPosts') || '[]');
    const forumPosts = document.getElementById('forum-posts');
    if (forumPosts) {
      forumPosts.innerHTML = '';
      posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'forum-post';
        postDiv.innerHTML = `<strong>${post.user || 'Anónimo'}</strong>: ${post.message} <span style="color: #888;">(${new Date(post.timestamp).toLocaleString()})</span>`;
        forumPosts.appendChild(postDiv);
      });
    }
  }

  function addPost() {
    const input = document.getElementById('forum-input');
    if (input) {
      const message = input.value.trim();
      if (message) {
        const posts = JSON.parse(localStorage.getItem('forumPosts') || '[]');
        posts.push({ message, timestamp: Date.now(), user: 'Usuario' });
        localStorage.setItem('forumPosts', JSON.stringify(posts));
        input.value = '';
        loadPosts();
      }
    }
  }

  loadPosts();

  const forumInput = document.getElementById('forum-input');
  if (forumInput) {
    forumInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addPost();
    });

function updatePrediction(predictionId, value) {
  const slider = document.getElementById(`slider${predictionId}`);
  const bar = document.getElementById(`bar${predictionId}`);
  const percentageSpan = bar.querySelector('.prediction-percentage');
  const fighter1Img = document.getElementById(`fighter${predictionId * 2 - 1}-img`);
  const fighter2Img = document.getElementById(`fighter${predictionId * 2}-img`);
  const fighter1Name = document.getElementById(`fighter${predictionId * 2 - 1}-name`);
  const fighter2Name = document.getElementById(`fighter${predictionId * 2}-name`);

  let newValue = Math.round(value / 50) * 50;
  if (newValue < 0) newValue = 0;
  if (newValue > 100) newValue = 100;
  slider.value = newValue;

  const barFill = document.createElement('div');
  barFill.style.width = `${newValue}%`;
  bar.innerHTML = '';
  bar.appendChild(barFill);
  percentageSpan.textContent = `${newValue}%`;

  if (newValue === 100) {
    fighter1Name.classList.remove('selected');
    fighter2Name.classList.add('selected');
    fighter2Img.style.border = '2px solid #ff4500';
    fighter1Img.style.border = 'none';
  } else if (newValue === 0) {
    fighter2Name.classList.remove('selected');
    fighter1Name.classList.add('selected');
    fighter1Img.style.border = '2px solid #ff4500';
    fighter2Img.style.border = 'none';
  } else {
    fighter1Name.classList.remove('selected');
    fighter2Name.classList.remove('selected');
    fighter1Img.style.border = 'none';
    fighter2Img.style.border = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) targetSection.style.display = 'block';
      }
    });
  });
})
  }
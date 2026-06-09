const summaryList = document.getElementById('summaryList');
const totalScoreEl = document.getElementById('totalScore');

fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    let total = 0;

    data.forEach(item => {
      total += item.score;

      // Create summary row
      const div = document.createElement('div');
      div.className = `summary-item ${item.category.toLowerCase()}`;
      
      div.innerHTML = `
        <div class="category">
          <img src="${item.icon}" alt="${item.category} icon">
          ${item.category}
        </div>
        <div class="score-text">${item.score} <span>/ 100</span></div>
      `;
      
      summaryList.appendChild(div);
    });

    // Calculate average for the circle
    const average = Math.round(total / data.length);
    totalScoreEl.textContent = average;
  })
  .catch(err => console.error('Error loading data.json:', err));
const API_URL = 'https://your-api-url/leaderboard';

document.addEventListener('DOMContentLoaded', () => {
    fetchLeaderboard();
});

function fetchLeaderboard() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const leaderboardBody = document.getElementById('leaderboard-body');
            leaderboardBody.innerHTML = ''; // Clear any existing content

            data.forEach((entry, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${entry.name}</td>
                    <td>${entry.score}</td>
                `;
                leaderboardBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching leaderboard:', error);
        });
}

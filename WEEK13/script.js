function fetchUniversities() {
    const country = document.getElementById('countryInput').value.trim();

    if (country === '') {
        alert('Please enter a country name');
        return;
    }

    fetch(`http://universities.hipolabs.com/search?country=${country}`)
        .then(response => response.json())
        .then(data => {
            const universityList = document.getElementById('universityList');
            universityList.innerHTML = '';

            data.forEach(university => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>${university.name}</strong><br>
                    <a href="${university.web_pages[0]}" target="_blank">${university.web_pages[0]}</a><br>
                    <em>${university['state-province'] || 'N/A'}</em>
                `;
                universityList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching data. Please try again later.');
        });
}

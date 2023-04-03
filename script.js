const form = document.querySelector('form');
const symptomsInput = document.querySelector('#symptoms');
const diseasesList = document.querySelector('#diseases');

form.addEventListener('submit', (event) => {
	event.preventDefault(); // prevent form submission
	const symptoms = symptomsInput.value.trim().toLowerCase().split(', '); // get symptoms input and clean it up
	const diseases = findDiseases(symptoms); // find diseases based on symptoms
	displayDiseases(diseases); // display the list of diseases
});

function findDiseases(symptoms) {
	// This is just an example function - in reality, you would need to use a more complex algorithm to find diseases based on symptoms
	// For the sake of simplicity, we'll just return a hardcoded list of diseases here
	const diseases = [
		{
			name: 'Common cold',
			description: 'A viral infection of the upper respiratory tract',
		},
		{
			name: 'Influenza',
			description: 'A highly contagious viral infection of the respiratory passages',
		},
		{
			name: 'COVID-19',
			description: 'A contagious respiratory illness caused by the SARS-CoV-2 virus',
		},
		{
			name: 'Malaria',
			description: 'A parasitic disease transmitted by the Anopheles mosquito',
		},
		{
			name: 'Typhoid fever',
			description: 'A bacterial infection caused by Salmonella typhi',
		},
	];

	// Filter the diseases based on symptoms
	const matchingDiseases = diseases.filter(disease => {
		return symptoms.every(symptom => {
			return disease.description.toLowerCase().includes(symptom) || disease.name.toLowerCase().includes(symptom);
		});
	});

	return matchingDiseases;
}

function displayDiseases(diseases) {
	// Clear any existing diseases from the list
	diseasesList.innerHTML = '';

	// If no diseases are found, display a message
	if (diseases.length === 0) {
		const message = document.createElement('li');
		message.textContent = 'No matching diseases found.';
		diseasesList.appendChild(message);
		return;
	}

	// Display the list of diseases
	diseases.forEach(disease => {
		const listItem = document.createElement('li');
		listItem.innerHTML = `<h3>${disease.name}</h3><p>${disease.description}</p>`;
		diseasesList.appendChild(listItem);
	});
}

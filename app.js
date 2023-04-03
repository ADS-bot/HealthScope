const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>Disease Diagnosis</title>
			</head>
			<body>
				<h1>Disease Diagnosis</h1>
				<form method="post" action="/">
					<label for="symptoms">Enter your symptoms:</label>
					<input type="text" id="symptoms" name="symptoms">
					<button type="submit">Diagnose</button>
				</form>
			</body>
		</html>
	`);
});

app.post('/', (req, res) => {
	const symptoms = req.body.symptoms.trim().toLowerCase().split(', '); // get symptoms input and clean it up
	const diseases = findDiseases(symptoms); // find diseases based on symptoms

	// Generate the HTML for the list of diseases
	let diseasesHtml = '';
	if (diseases.length === 0) {
		diseasesHtml = '<p>No matching diseases found.</p>';
	} else {
		diseasesHtml = '<ul>';
		diseases.forEach(disease => {
			diseasesHtml += `<li><h3>${disease.name}</h3><p>${disease.description}</p></li>`;
		});
		diseasesHtml += '</ul>';
	}

	// Generate the full HTML page with the list of diseases
	const html = `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>Disease Diagnosis Results</title>
			</head>
			<body>
				<h1>Disease Diagnosis Results</h1>
				<p>You entered: ${req.body.symptoms}</p>
				${diseasesHtml}
			</body>
		</html>
	`;

	res.send(html);
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

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

CREATE DATABASE diagnosis;
USE diagnosis;

CREATE TABLE diseases (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  symptoms VARCHAR(255) NOT NULL,
  description TEXT,
  PRIMARY KEY (id)
);
INSERT INTO diseases (name, symptoms, description)
VALUES
  ('Flu', 'fever, cough, fatigue, body aches', 'Influenza, commonly known as "the flu", is an infectious disease caused by the influenza virus.'),
  ('COVID-19', 'fever, cough, shortness of breath, loss of taste or smell', 'Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.'),
  ('Common cold', 'sore throat, runny nose, congestion, sneezing', 'The common cold is a viral infection that affects the upper respiratory tract, including the nose and throat.');

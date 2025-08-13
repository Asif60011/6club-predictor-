const predictionEl = document.getElementById("prediction");

fetch("https://asif1212.pythonanywhere.com/predict")
  .then((response) => response.json())
  .then((data) => {
    predictionEl.textContent = `Prediction: ${data.prediction} (Confidence: ${data.confidence})`;
  })
  .catch((error) => {
    predictionEl.textContent = "❌ Error fetching prediction. Try again later.";
    console.error("API Fetch Error:", error);
  });
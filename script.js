const authFactors = [
  {
    name: "所知之事",
    description: "使用者知道的資訊，例如密碼、PIN 碼、安全問題答案等。",
    image: "knowledge.jpg" 
  },
  {
    name: "所持之物",
    description: "使用者擁有的物品，例如手機、安全令牌、USB 金鑰等。",
    image: "possession.jpg" 
  },
  {
    name: "所具之形",
    description: "使用者的生物特徵，例如指紋、臉部辨識、虹膜掃描等。",
    image: "inherence.jpg" 
  }
];

const authFactorsDiv = document.getElementById("authFactors");

authFactors.forEach(factor => {
  const factorDiv = document.createElement("div");
  factorDiv.classList.add("factor");

  const factorImage = document.createElement("img");
  factorImage.src = factor.image;
  factorImage.alt = factor.name;
  factorDiv.appendChild(factorImage);

  const factorName = document.createElement("h3");
  factorName.textContent = factor.name;
  factorDiv.appendChild(factorName);

  const factorDescription = document.createElement("p");
  factorDescription.textContent = factor.description;
  factorDiv.appendChild(factorDescription);

  authFactorsDiv.appendChild(factorDiv);
});
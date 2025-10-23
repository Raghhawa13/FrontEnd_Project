const options = [
  { id: "option1", text: "JavaScript", votes: 0 },
  { id: "option2", text: "Python", votes: 0 },
  { id: "option3", text: "Java", votes: 0 },
  { id: "option4", text: "C++", votes: 0 },
];

function submitVote() {
  const selectedOption = document.querySelector('input[name="poll"]:checked');

  if (!selectedOption) {
    alert("Please select an option.");
    return;
  }

  const selectedOptionId = selectedOption.value;
  const selectedOptionObj = options.find((opt) => opt.id === selectedOptionId);

  if (selectedOptionObj) {
    selectedOptionObj.votes++;
    displayResult();
  }
}

function displayResult() {
  const result = document.getElementById("result");
  result.innerHTML = "";

  const totalVotes = getTotalVotes();

  options.forEach((opt) => {
    const percentage = totalVotes
      ? ((opt.votes / totalVotes) * 100).toFixed(2)
      : 0;
    const barWidth = `${percentage}%`;

    const optionResult = document.createElement("div");
    optionResult.className = "option-result";
    optionResult.innerHTML = `
      <span class="option-text">${opt.text}</span>
      <div class="bar-container">
        <div class="bar" style="width: ${barWidth};"></div>
      </div>
      <span class="percentage">${percentage}%</span>
    `;
    result.appendChild(optionResult);
  });
}

function getTotalVotes() {
  return options.reduce((total, opt) => total + opt.votes, 0);
}

displayResult();

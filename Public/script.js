const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");

spinBtn.addEventListener("click", async () => {
  spinBtn.disabled = true;
  result.textContent = "Spinning...";

  const response = await fetch("/spin");
  const data = await response.json();

  const degrees = data.degrees;
  const prize = data.prize;

  wheel.style.transform = `rotate(${3600 + degrees}deg)`;

  setTimeout(() => {
    result.textContent = `You won: ${prize}`;
    spinBtn.disabled = false;
  }, 4000);
});

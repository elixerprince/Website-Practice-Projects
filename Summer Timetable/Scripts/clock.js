document.addEventListener("DOMContentLoaded", () => {
  // Get the timer element
  const timerElement = document.querySelector(".time");

  // Function to update the timer
  function updateTimer() {
    // Get the current time
    const currentTime = new Date();

    // Format the time as HH:MM:SS AM/PM
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
    const formattedTime = `${formattedHours}:${minutes}:${seconds} ${ampm}`;

    // Update the timer element with the current time
    timerElement.textContent = formattedTime;
  }

  // Call the updateTimer function immediately
  updateTimer();

  // Call the updateTimer function every second
  setInterval(updateTimer, 1000);
});
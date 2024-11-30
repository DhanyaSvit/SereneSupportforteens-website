document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const appSection = document.getElementById("app-section");
  const moodButtons = document.querySelectorAll(".mood-button");
  const moodFeedback = document.getElementById("mood-feedback");

  // Mock authentication
  const users = {};

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    if (username && password) {
      users[username] = password;
      alert("Signup successful! Please log in.");
      signupForm.reset();
    }
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    if (users[username] === password) {
      alert("Login successful!");
      appSection.classList.remove("hidden");
    } else {
      alert("Invalid credentials.");
    }
    loginForm.reset();
  });

  // Mood Responses
  const moodResponses = {
    Happy: "That's wonderful to hear! Keep smiling and spread the joy. 😊",
    Sad: "I'm sorry you're feeling this way. Remember, it's okay to feel sad sometimes. I'm here for you. 😢",
    Excited: "Wow! Your excitement is contagious! What's making you feel so thrilled? 🤩",
    Angry: "It's natural to feel angry sometimes. Take a deep breath, and let’s find a way to calm down together. 😡",
    Calm: "It's great to feel calm. Embrace this peaceful moment and enjoy it. 😌",
    Anxious: "Feeling anxious can be tough. Try some deep breathing exercises and remember, you're stronger than you think. 😰",
    Grateful: "Gratitude is a beautiful thing. Hold onto that feeling and let it brighten your day. 🙏",
    Relaxed: "You deserve to feel relaxed. Enjoy this time to unwind and recharge. 🛋️",
    Confident: "You're unstoppable when you're confident! Keep believing in yourself. 💪",
    Lonely: "I'm sorry you're feeling lonely. Remember, you're never alone. Reach out to a loved one or talk to me. 😔",
    Motivated: "Let's channel that motivation into something amazing! You're capable of incredible things. 🔥",
    Tired: "You seem tired. Take a break, rest, and take care of yourself. 😴",
    Hopeful: "Hope is powerful. Keep believing in the possibilities ahead. 🌈",
    Confused: "Feeling confused is okay. Take it one step at a time, and things will get clearer. 🤯",
    Bored: "Feeling bored? Maybe it's time to try something new or revisit a hobby you love. 😐",
  };

  // Mood Tracker
  moodButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mood = button.getAttribute("data-mood");
      const response = moodResponses[mood] || "Thank you for sharing your mood!";
      moodFeedback.textContent = response;
      console.log(`User selected mood: ${mood}`);
    });
  });
});

// Fun Facts Array
const facts = [
    "I love to drink chai/tea!",
    "I love learning new programming languages!",
    "I'm a foodie who enjoys trying different cuisines.",
    "I once participated in a hackathon and won!",
    "I'm a huge fan of sci-fi movies.",
    "I have a knack for solving puzzles and riddles.",
    "I enjoy volunteering and giving back to the community.",
    "I’m passionate about AI and Machine Learning.",
    "I like to explore AI and tech.",
    "I have a sharp memory and can quickly remember people's backgrounds.",
    "I learn from my mistakes and get inspired by others.",
    "My thoughts may seem unique, but they’ve often been done by others."
];

// Generate Random Fact
function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = facts[randomIndex];
}

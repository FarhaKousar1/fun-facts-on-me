const facts = [
    "I love to drink chai/tea!",
    "I love learning new programming languages!",
    "I'm a foodie who enjoys trying different cuisines.",
    "I once participated in a hackathon and won!",
    "I'm a huge fan of sci-fi movies.",
    "I have a knack for solving puzzles and riddles.",
    "I enjoy volunteering and giving back to the community.",
    "I’m passionate about AI and Machine Learning."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = facts[randomIndex];
}

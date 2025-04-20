const funFacts = [
    "I blink around 20 times per minute, totaling over 10 million blinks per year.",
    "My mouth produces about one litre of saliva each day, aiding in digestion and oral health.",
    "My brain is sometimes more active when I'm asleep than when I'm awake, as it processes information and consolidates memories.",
    "Laid end to end, my blood vessels could circle Earth's equator four times, highlighting the extensive network within my body.",
    "My ears never stop growing, continuing to lengthen subtly throughout my life."
];

document.querySelector('.btn').addEventListener('click', function() {
    
    const randomIndex = Math.floor(Math.random() * funFacts.length);

    alert(funFacts[randomIndex]);
});
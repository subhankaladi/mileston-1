"use strict";
// script.ts
// Function to toggle the visibility of a section
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle('hidden');
    }
}
// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
    const skillButton = document.createElement('button');
    skillButton.innerText = 'Toggle Skills';
    skillButton.onclick = () => toggleSection('skills');
    const languageButton = document.createElement('button');
    languageButton.innerText = 'Toggle Languages';
    languageButton.onclick = () => toggleSection('languages');
    const achievementButton = document.createElement('button');
    achievementButton.innerText = 'Toggle Achievements';
    achievementButton.onclick = () => toggleSection('achievements');
    document.body.appendChild(skillButton);
    document.body.appendChild(languageButton);
    document.body.appendChild(achievementButton);
});

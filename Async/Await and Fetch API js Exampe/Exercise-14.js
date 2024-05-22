const messages = [
    "Initializing Hacking",
    "Reading Your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];

async function displayMessages(index = 0) {
    if (index >= messages.length) return;

    const output = document.getElementById('output');
    const message = messages[index];

    await displayMessageWithDelay(message);

    displayMessages(index + 1); // Recur for the next message
}

function getRandomDelay() {
    return Math.floor(Math.random() * 7000) + 1000; // Random delay between 1 and 7 seconds
}

function displayMessageWithDelay(message) {
    return new Promise(resolve => {
        const delay = getRandomDelay();
        const messageElement = document.createElement('div');
        const textNode = document.createTextNode(message);
        const blinkingDots = document.createElement('span');
        blinkingDots.classList.add('blinking-dots');

        messageElement.appendChild(textNode);
        messageElement.appendChild(blinkingDots);
        output.appendChild(messageElement);

        // Update the text content to "Done" after the delay
        setTimeout(() => {
            blinkingDots.textContent = ' . . .'; // Clear the dots after the delay
            resolve();
        }, delay);
    });
}

displayMessages();

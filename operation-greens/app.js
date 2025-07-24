gsap.registerPlugin(ScrollTrigger);

// Scroll Progress Indicator
function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// Mind Map Animation
const mindMapNodes = document.querySelectorAll('.mindmap-node');
mindMapNodes.forEach((node, i) => {
    gsap.from(node, {
        scrollTrigger: {
            trigger: node,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1
    });
});

// AI Chat Widget
const aiAvatar = document.querySelector('.ai-avatar');
const chatContainer = document.querySelector('.chat-container');
const closeChat = document.querySelector('.close-chat');
const chatInput = document.querySelector('.chat-input input');
const chatButton = document.querySelector('.chat-input button');
const chatMessages = document.querySelector('.chat-messages');

aiAvatar.addEventListener('click', () => {
    chatContainer.classList.toggle('visible');
});

closeChat.addEventListener('click', () => {
    chatContainer.classList.remove('visible');
});

chatButton.addEventListener('click', () => {
    const query = chatInput.value.trim();
    if (query) {
        // Display user message
        const userMessage = document.createElement('div');
        userMessage.textContent = query;
        userMessage.style.marginBottom = '1rem';
        userMessage.style.padding = '0.5rem';
        userMessage.style.background = '#f0f0f0';
        userMessage.style.borderRadius = '5px';
        chatMessages.appendChild(userMessage);

        // Simulate AI response
        const aiResponse = document.createElement('div');
        aiResponse.textContent = `This is a simulated response to: "${query}". For real AI responses, configure the OpenAI API.`;
        aiResponse.style.marginBottom = '1rem';
        aiResponse.style.padding = '0.5rem';
        aiResponse.style.background = 'var(--sage-green)';
        aiResponse.style.color = 'white';
        aiResponse.style.borderRadius = '5px';
        chatMessages.appendChild(aiResponse);

        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

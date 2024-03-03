let chatFocus = false;
const chatInput = document.getElementById('chat-input');
const chatContainer = document.querySelector('.chat-container');
const conversation = [];

document.addEventListener('keydown', (event) => {

    if (event.key === 'Enter' && chatFocus) {
        renderMessage(chatInput.value, 'client-message');
        chrome.runtime.sendMessage({
            message: 'take_chat_client_message',
            conversation: conversation,
            clientMessage: chatInput.value
        });
        chatInput.value = '';
    }

    if (event.key === '/') {
        setTimeout(() => {
            chatInput.focus();
        }, 50);
    }

});

function renderMessage(message, id) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.id = id;
    messageElement.innerHTML = message;
    chatContainer.append(messageElement);

    if (id == 'client-message') {
        const imgElement = document.createElement('img');
        imgElement.id = 'client-message-carrot';
        imgElement.src = 'assets/client-carrot.png';
        messageElement.append(imgElement);
    } else {
        const imgElement = document.createElement('img');
        imgElement.id = 'server-message-carrot';
        imgElement.src = 'assets/server-carrot-2.png';
        messageElement.append(imgElement);
    }

    window.scrollTo(0, document.body.scrollHeight);

    conversation.push({
        id: id,
        message: message
    });

    setTimeout(() => {
        messageElement.classList.add('show-message');
    }, 50);
}

//?  SEARCH FOCUS  ?//

chatInput.addEventListener('focus', function () {
    chatFocus = true;
});

chatInput.addEventListener('blur', function () {
    chatFocus = false;
});


//!  ---  LISTENER  ---  !//
chrome.runtime.onMessage.addListener((response) => {
    
    if (response.message === 'take_chat_server_message') {
        renderMessage(response.serverMessage, 'server-message');
    }

});

const elapsedTime = document.getElementById('elapsed-time');
let updateElapsedTime = setInterval(() => {
    if (!elapsedTime) {
        clearInterval(updateElapsedTime);
        return;
    }
    elapsedTime.innerHTML = parseInt(elapsedTime.innerHTML) + 1
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {

        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: () => {
                const selection = window.getSelection().toString();
                return selection ? selection : document.body.innerText;
            }
        }, result => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            } else {
                const data = result[0].result;
                const pageLength = data.length;
                document.getElementById('duration').innerHTML += addCommasToNumber(pageLength);

                chrome.runtime.sendMessage({ message: 'get_summary', pageContents: data });
            }
        });

    });
});

function renderSummary(summary) {
    console.log(summary);
    document.getElementById('summary').innerHTML = summary;
    //// document.getElementById('content').style.padding = '24px 30px 21px 30px';
}

function resetSummary() {
    document.getElementById('summary').innerHTML = 'Generating summary... <br> Page length: <span id="duration"></span> characters <br> Processed chunks: <span id="processed-chunks">0</span><br> Elapsed time: <span id="elapsed-time">0</span> seconds';
}

const processedChunks = document.getElementById('processed-chunks');
const processedChunksProgress = document.getElementById('processed-chunks-progress');
function processChunk() {
    const processedChunksValue = parseInt(processedChunks.innerHTML);
    processedChunks.innerHTML = processedChunksValue + 1;
}

//!  ---  LISTENER  ---  !//
chrome.runtime.onMessage.addListener((response) => {

    if (response.message === 'take_summary') {
        renderSummary(response.summary);
    }

    if (response.message === 'processed_chunk') {
        processChunk();
    }

    if (response.message === 'rerunning_summary') {
        resetSummary();
    }

});

chrome.runtime.connect({ name: "popup" });

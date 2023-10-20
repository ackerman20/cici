function sendMessage() {
    var messageInput = document.getElementById("message");
    var responseText = document.getElementById("response");

    var userInput = messageInput.value.toLowerCase();
    var responses = ["你好阿", "哈囉","你是要打幾次招呼"];

    if (["你好", "早安"].includes(userInput)) {
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseText.textContent = randomResponse;

    } else {
        responseText.textContent = "我不了解你想表達什麼，你需要翻譯蒟蒻嗎??";
    }
}
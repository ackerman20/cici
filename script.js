function sendMessage() {
    var messageInput = document.getElementById("message");
    var responseText = document.getElementById("response");
    var userInput = messageInput.value.toLowerCase();
    
    if (messageInput.value === ""){
        responseText.textContent = "不留任何字我要怎麼回覆你";
    }
    else if (["你好", "早安"].includes(userInput)) {
        var responses = ["你好阿", "哈囉","你是要打幾次招呼"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseText.textContent = randomResponse;
    }
    else if (["自我介紹一下", "自我介紹","你是誰"].includes(userInput)) {
        var responses = ["你好，我是AI Amaze，可以叫我希希，我會唱歌喔"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseText.textContent = randomResponse;
    }
    else if (["唱歌","你會唱歌嗎", "你會唱什麼歌", "那你會唱什麼歌", "那你會唱哪些歌曲"].includes(userInput)) {
        var responses = ["我會唱以下歌曲 : 群青、小幸運，選一首讓我唱給你聽吧"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseText.textContent = randomResponse;
    } 
    else if (userInput === "群青") {
        var audio = new Audio("assents/music/1.mp3");
        audio.play();
        responseText.textContent = "演唱群青中...";
    }
    else if (userInput === "小幸運") {
        var audio = new Audio("0.mp3");
        audio.play();
        responseText.textContent = "這首音檔還沒上傳喔，期待一下吧";
    }
    else {
        responseText.textContent = "我不了解你想表達什麼，你需要翻譯蒟蒻嗎??";
    }
    messageInput.value = "";}

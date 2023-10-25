var audioElement = null; // 宣告一個全域變數向量來儲存聲音元素
var originalImageSrc = "assets/image/cici.png";

function typeText(text, element, index) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        var randomDelay = Math.floor(Math.random() * 250) +  0; // 50ms 到 150ms 之间的随机延迟
        setTimeout(function() {
            typeText(text, element, index + 1);
        }, randomDelay);
    }
}

var image = document.querySelector("#left-column img");
image.addEventListener("click", function () {
    var responseText = document.getElementById("response");
    var image = document.querySelector("#left-column img");
    responseText.textContent = "";
    typeText("不要點我，請用文字與我交流", responseText, 0);
    image.src = originalImageSrc; // 恢復圖片
    if (audioElement) {audioElement.pause();audioElement = null;}
});

function sendMessage() { 
    var messageInput = document.getElementById("message");
    var responseText = document.getElementById("response");
    var userInput = messageInput.value.toLowerCase();
    var image = document.querySelector("#left-column img");
    image.src = originalImageSrc; // 恢復圖片

    responseText.textContent = "";

    if (messageInput.value === "") {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["不留任何字我要怎麼回覆你","請輸入與我互動的文字", "給我打字"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["你好", "早安","哈囉","嗨嗨","阿囉哈","Hi","hi","Hello","hello"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好阿","哈囉", "嗨嗨", "你是要打幾次招呼"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["自我介紹一下", "自我介紹", "你是誰","你"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好，我是AI Amaze，可以叫我希希，我會唱歌喔"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["AI Amaze", "希希"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["怎麼了，需要我唱歌給你聽嗎?"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["你會哪些技能", "你能提供什麼服務", "你會哪些","你會什麼"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好，我是AI Amaze，可以叫我希希，我會唱歌、聊天、餐廳推薦喔"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["翻譯蒟蒻","什麼是翻譯蒟蒻","翻譯蒟蒻是什麼"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["翻譯蒟蒻源自於日本知名動漫多拉A夢中的道具之一，吃下後可以聽得懂對方說的話，對方也可以聽得懂你說的話","你猜阿","你自己去Google","......"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["我肚子餓了","午餐能吃什麼","午餐可以吃什麼","午餐推薦吃什麼","午餐推薦","肚子好餓","肚子餓","我好餓","我餓了","好餓","餓"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["老師ㄟ面","賣噹噹","小籠包","炒飯","米糕城","素食鍋燒","長腳麵","擔仔麵","老蔡魚粥","黑肉水餃","混沌2點","千義","大智","千葉素食","田記豆漿"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText('肚子餓了嗎?那可是很緊急呢。希希幫你從幼娘狐的餐廳清單選一間吧 ! 現在去吃' + randomResponse + "，趕快趕快", responseText, 0);
    } else if (["唱歌", "你會唱歌嗎", "你會唱什麼歌", "那你會唱什麼歌", "那你會唱哪些歌曲"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["我會唱以下歌曲 : 群青、小幸運，選一首讓我唱給你聽吧"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["群青", "唱群青", "群青吧", "群青好了"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        audioElement = new Audio('assets/music/1.mp3');
        audioElement.play();
        image.src = "assets/image/sing.png";
        typeText("演唱群青中...\n(我的歌聲是用日文訓練的喔)", responseText, 0);
    } else if (["小幸運", "唱小幸運", "小幸運吧", "小幸運好了"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        audioElement = new Audio('assets/music/2.mp3');
        audioElement.play();
        typeText("小幸運還沒上架喔，期待一下吧", responseText, 0);
    } else {
        if (audioElement) {audioElement.pause();audioElement = null;}
        typeText("我不了解你想表達什麼，你需要翻譯蒟蒻嗎??", responseText, 0);
    }
    messageInput.value = "";
}

var audioElement = null; // 宣告一個全域變數向量來儲存聲音元素
var originalImageSrc = "assets/image/cici.png";

var image = document.querySelector("#left-column img");
image.addEventListener("click", function () {
    var responseText = document.getElementById("response");
    var image = document.querySelector("#left-column img");
    responseText.textContent = "不要點我，請用文字與我交流";
    image.src = originalImageSrc; // 恢復圖片
    if (audioElement) {audioElement.pause();audioElement = null;}
});

function sendMessage() { 
    var messageInput = document.getElementById("message");
    var responseText = document.getElementById("response");
    var userInput = messageInput.value.toLowerCase();
    var image = document.querySelector("#left-column img");
    image.src = originalImageSrc; // 恢復圖片

    if (messageInput.value === "") {
        if (audioElement) {audioElement.pause();audioElement = null;}
        responseText.textContent = "不留任何字我要怎麼回覆你";
    } else if (["你好", "早安","哈囉","嗨嗨","阿囉哈","Hi","hi","Hello","hello"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好阿","哈囉", "嗨嗨", "你是要打幾次招呼"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseText.textContent = randomResponse;
    } else if (["自我介紹一下", "自我介紹", "你是誰"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好，我是AI Amaze，可以叫我希希，我會唱歌喔，這裡是T大使的李承恩做出來的，經過AI訓練讓我可以唱出歌曲，可以對我說「唱歌」我會告訴你我會唱哪些歌喔"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseText.textContent = randomResponse;
    } else if (["AI Amaze", "希希"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["怎麼了，需要我唱歌給你聽嗎?"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseText.textContent = randomResponse;
    } else if (["你會哪些技能", "你能提供什麼服務", "你會哪些", "你會什麼", "你目前擁有哪些技能","你能提供什麼","你能提供什麼服務"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好，我是AI Amaze，可以叫我希希，我會唱歌和簡單的聊天，或者你可以嘗試一些詞，說不定我也會喔"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseText.textContent = randomResponse;
    } else if (["翻譯蒟蒻","什麼是翻譯蒟蒻","翻譯蒟蒻是什麼"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["翻譯蒟蒻源自於日本知名動漫多拉A夢中的道具之一，吃下後可以聽得懂對方說的話，對方也可以聽得懂你說的話","你猜阿","你自己去Google","(無言)"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseText.textContent = randomResponse;
    } else if (["午餐能吃什麼","午餐吃什麼","午餐可以吃什麼","午餐推薦吃什麼","午餐推薦","肚子好餓","肚子餓","好餓","餓","午餐","附近美食","附近推薦"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["老師ㄟ面","賣噹噹","小籠包","炒飯","米糕城","素食鍋燒","長腳麵","擔仔麵","老蔡魚粥","黑豬肉水餃","混沌2點","千義","大智","千葉素食","田記豆漿"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseText.textContent = '根據幼娘狐的餐廳清單，我幫你隨機選一間吧 ! 去吃' + randomResponse + "好了";
    } else if (["你來自哪裡", "你從哪裡來", "你來自哪裡"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好，我來自愛吠的狗，但這裡是T大使的李承恩做出來的，如果想要了解完整的我可以去 https://www.ai-amaze.com 這個網站喔"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseText.textContent = randomResponse;
    } else if (["唱歌", "你會唱歌嗎", "你會唱什麼歌", "那你會唱什麼歌", "那你會唱哪些歌曲"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["我會唱以下歌曲 : 群青、小幸運，選一首讓我唱給你聽吧"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseText.textContent = randomResponse;
    } else if (["群青", "唱群青", "群青吧", "群青好了"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        audioElement = new Audio('assets/music/1.mp3');
        audioElement.play();
        var image = document.querySelector("#left-column img");
        image.src = "assets/image/sing.png";
        responseText.textContent = "演唱群青中...\n(我的歌聲是用日文訓練的喔)";
    } else if (["小幸運", "唱小幸運", "小幸運吧", "小幸運好了"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        audioElement = new Audio('assets/music/2.mp3');
        audioElement.play();
        responseText.textContent = "小幸運還沒上架喔，期待一下吧";
    } else {
        if (audioElement) {audioElement.pause();audioElement = null;}
        responseText.textContent = "我不了解你想表達什麼，你需要翻譯蒟蒻嗎??";
    }
    messageInput.value = "";
}
function displayText(element, textArray) {
    var currentIndex = 0;
    var timer = setInterval(function() {
        element.textContent += textArray[currentIndex];
        currentIndex++;
        if (currentIndex >= textArray.length) {
            clearInterval(timer);
        }
    }, 500); // 這裡的數字表示每個字之間的延遲時間（毫秒）
}

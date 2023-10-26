var audioElement = null; // 宣告一個全域變數向量來儲存聲音元素
var originalImageSrc = "assets/image/cici.png";

function typeText(text, element, index) {
    if (index < text.length) {
        if (text.charAt(index) === '\n') {
            element.innerHTML += '<br>'; // 如果遇到 \n，插入换行符 <br>
        } else {
            element.textContent += text.charAt(index);
        }
        var randomDelay = Math.floor(Math.random() * 300);
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
    typeText("不要點我，請在對話框輸入文字與我交流", responseText, 0);
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
    } else if (["你好", "早安","哈囉","嗨嗨","嗨","阿囉哈","嘿","Hi","hi","Hello","早","hello"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好阿","你好", "早安","哈囉","嗨嗨","你是要打幾次招呼"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["自我介紹一下", "自我介紹", "你是誰","你"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好，我是AI Amaze，可以叫我希希，我會唱歌喔"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["你來自哪裡", "你從哪裡來", "你是哪裡來的","你怎麼誕生的","你怎麼出現的"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好，我是由T大使的李承恩做出來的，他賦予了我在這裡的所有能力，為了在這裡展現他的個人實作報告成果，我的原型是來自愛吠的狗的AI Amaze，想要了解真正完整的我請造訪 https://www.ai-amaze.com"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["AI Amaze", "希希"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["怎麼了，需要我唱歌給你聽嗎?"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["你擁有哪些技能","你會哪些技能", "你能提供什麼服務", "你會哪些","你會什麼"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好，我是AI Amaze，可以叫我希希，我會唱歌、聊天、餐廳推薦喔"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["翻譯蒟蒻","什麼是翻譯蒟蒻","翻譯蒟蒻是什麼"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["翻譯蒟蒻源自於日本知名動漫多拉A夢中的道具之一，吃下後可以聽得懂對方說的話，對方也可以聽得懂你說的話","你猜阿",,"你猜阿嘻嘻嘻嘻","你自己去Google","......","去問神奇海螺"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["神奇海螺","神奇海螺是什麼","什麼是神奇海螺"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["神奇海螺是源自於海綿寶寶的梗，動畫中向它許願後立刻實現，但我目前的能力有限，只能簡單的和你互動","你猜阿嘻嘻嘻嘻","你自己去Google搜尋","(翻白眼)"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["幼娘狐", "誰是幼娘狐", "幼娘狐是誰", "幼娘狐是什麼", "介紹一下幼娘狐", "介紹一下幼娘狐是誰", "介紹一下幼娘狐是什麼"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["幼娘狐是一種兩棲類生物，主要生活在房間與公司，生性溫和，擁有完美主義者的特質，曾經有發生攻擊人類的事件，請小心。","幼娘狐是第四屆T大使之一，擅長C#與3D建模等，同時提供了餐廳清單讓我可以幫助大家解決選擇用餐地點的問題，也是賦予我唱歌能力之一的大",""];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["你好兇", "兇ㄟ", "兇", "你好恰"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你喜歡嗎","嘻嘻嘻嘻嘻嘻","請用其他繁體中文字或詞與我互動"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["我肚子餓了","午餐能吃什麼","午餐可以吃什麼","午餐推薦吃什麼","午餐推薦","肚子好餓","肚子餓","我好餓","我餓了","好餓","餓"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["老師ㄟ面","賣噹噹","小籠包","炒飯","米糕城","素食鍋燒","長腳麵","擔仔麵","老蔡魚粥","黑肉水餃","混沌2點","千義","大智","千葉素食","田記豆漿"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText('肚子餓了嗎?那可是很緊急呢。希希幫你從幼娘狐的餐廳清單選一間吧 ! 現在去吃' + randomResponse + "，趕快趕快", responseText, 0);
    } else if (["你會唱哪些","唱歌","你會唱歌嗎","你會唱什麼", "你會唱什麼歌", "那你會唱什麼歌", "那你會唱哪些歌曲"].includes(userInput)) {
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
        typeText("我不了解你想表達什麼，你需要翻譯蒟蒻嗎??或是向我的開發者提供意見", responseText, 0);
    }
    messageInput.value = "";
}

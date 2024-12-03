var audioElement = null; // 宣告一個全域變數向量來儲存聲音元素
var originalImageSrc = "assets/image/cici.png";

function typeText(text, element, index) {
    if (index < text.length) {
        element.textContent = text.substring(0, index) + "█";
        var randomDelay = Math.floor(Math.random() * 300);
        setTimeout(function() {
            typeText(text, element, index + 1);
        }, randomDelay);
    } else {
        element.textContent = text;
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


function playGame(userChoice) {
    var choices = ["剪刀", "石頭", "布"];
    var aiChoice = choices[Math.floor(Math.random() * choices.length)];
    if (userChoice === aiChoice) {
        var responses = ["哎呀，平手了","你這次運氣真好"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        return "我出" + aiChoice + "，" + randomResponse;
    } else if (
        (userChoice === "剪刀" && aiChoice === "布") ||
        (userChoice === "石頭" && aiChoice === "剪刀") ||
        (userChoice === "布" && aiChoice === "石頭")
    ) {
        var responses = ["恭喜你贏了","可惡，下次我一定會贏的", "你這次運氣真好"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        return "我出" + aiChoice + "，" + randomResponse;
    } else {
        var responses = ["我就說我會贏吧嘻嘻嘻嘻","你輸了嘻嘻嘻嘻嘻嘻><", "你真弱"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        return "我出" + aiChoice + "，" + randomResponse;
    }
}

document.getElementById("text").addEventListener("keydown", function(event) {
    if (event.key === 'Enter') { // 檢查是否按下 Enter 鍵
        event.preventDefault(); // 防止表單提交或其他預設行為
        document.getElementById("btn").click(); // 觸發按鈕的點擊事件
    }
});
function sendMessage() { 
    var messageInput = document.getElementById("message");
    var responseText = document.getElementById("response");
    var lyricsText = document.getElementById("lyrics");
    var userInput = messageInput.value.toLowerCase();
    var outputt = responseText.textContent;
    var image = document.querySelector("#left-column img");
    
    image.src = originalImageSrc; // 恢復圖片

    responseText.textContent = "";
    lyricsText.textContent = "";
    if (messageInput.value === "") {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["不留任何字我要怎麼回覆你","請輸入與我互動的文字", "給我打字"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["我們來猜拳","猜拳", "玩猜拳","剪刀石頭布"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        messageInput.value = "";
        var responses = ["來吧,剪刀、石頭、布","好啊，那開始囉，剪刀、石頭、布", "好啊，我有把握我會贏的，剪刀、石頭、布"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["剪刀", "石頭", "布"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        if (["來吧,剪刀、石頭、布","好啊，那開始囉，剪刀、石頭、布", "好啊，我有把握我會贏的，剪刀、石頭、布"].includes(outputt)) {
            var result = playGame(userInput);
            typeText(result, responseText, 0);
        } else {
            var responses = ["我不了解你想表達什麼，你需要翻譯蒟蒻嗎??","我不了解你想表達什麼，你需要翻譯蒟蒻嗎??或是向我的開發者提供建議","我不了解你說什麼，剛剛的互動詞已超越我的認知"];
            var randomResponse = responses[Math.floor(Math.random() * responses.length)];
            typeText(randomResponse, responseText, 0);
        }
    }  else if (["你好","你好阿", "早安","早安阿","哈囉","嗨嗨","嗨","阿囉哈","嘿","Hi","hi","Hello","早","hello"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好阿","你好", "早安","哈囉","嗨嗨","你是要打幾次招呼"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["可以啊","好阿", "好","不要","要","不可以","需要","不需要"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["什麼可以啊","什麼好阿", "好什麼","不要什麼","要什麼","不可以什麼","什麼需要","什麼不需要"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["自我介紹一下", "自我介紹", "你是誰","你"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["你好，我是AI Amaze，可以叫我希希，我會唱歌喔"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["你幾歲","你今年幾歲","今年貴庚"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["我目前17歲喔。什麼，你看不出來我是JK嗎?"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["你是什麼學校","你今年讀哪裡","目前讀哪裡","畢業於哪裡","你的學歷"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["我是一個AI沒有實體，以你們來說就是就是上家教，等待開發者賦予我知識與技能"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["你來自哪裡", "你從哪裡來", "你是哪裡來的","你怎麼誕生的","你怎麼出現的","你的開發者是誰","你的開發者","誰創造出你的"].includes(userInput)) {
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
    } else if (["你好笨", "笨ㄟ", "笨","你好呆", "呆ㄟ", "呆","你好遜","好遜","遜","你好爛","好爛","爛"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["請重新整理網頁仔細閱讀我的開場字","請用其他繁體中文詞與我互動","請用其他繁體中文字與我互動","很抱歉，剛剛的互動詞已超越我的認知，請向我的開發者建議"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["吃啥","吃什麼","能吃什麼","我餓了","餓了","我肚子餓了","午餐能吃什麼","午餐可以吃什麼","午餐推薦吃什麼","午餐推薦","肚子好餓","肚子餓","我好餓","我餓了","好餓","餓"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["老師ㄟ面","賣噹噹","小籠包","炒飯","米糕城","素食鍋燒","長腳麵","擔仔麵","老蔡魚粥","黑肉水餃","混沌2點","千義","大智","千葉素食","田記豆漿"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText('肚子餓了嗎?那可是很緊急呢。希希幫你從幼娘狐的餐廳清單選一間吧 ! 現在去吃' + randomResponse + "，趕快趕快", responseText, 0);
    } else if (["你會唱哪些","唱歌","唱歌一下","你會唱歌嗎","你會唱什麼", "你會唱什麼歌", "那你會唱什麼歌", "那你會唱哪些歌曲","唱歌給我聽","唱首歌","唱首歌來","唱首歌來聽聽","唱歌給我聽","我要聽妳唱歌","希希唱歌","希希唱歌給我聽","希希唱首歌"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["我會唱以下歌曲 : 群青、粉雪、小幸運、煎熬、過火，選一首讓我唱給你聽吧"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    } else if (["群青", "唱群青", "群青吧", "群青好了"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        audioElement = new Audio('assets/music/1.mp3');
        audioElement.play();
        image.src = "assets/image/sing.png";
        typeText("演唱群青中...\n(我的歌聲是用日文訓練的喔)", responseText, 0);
    } else if (["粉雪", "唱粉雪", "粉雪吧", "粉雪好了"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        audioElement = new Audio('assets/music/2.mp3');
        audioElement.play();
        image.src = "assets/image/sing.png";
        typeText("演唱粉雪中...\n(我的歌聲是用日文訓練的喔)", responseText, 0);
    } else if (["小幸運", "唱小幸運", "小幸運吧", "小幸運好了"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        audioElement = new Audio('assets/music/3.mp3');
        audioElement.play();
        image.src = "assets/image/sing.png";
        typeText("演唱小幸運中...\n(我的歌聲是用日文訓練的喔)", responseText, 0);
    } else if (["煎熬", "唱煎熬", "煎熬吧", "煎熬好了"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        audioElement = new Audio('assets/music/4.mp3');
        audioElement.play();
        image.src = "assets/image/sing.png";
        typeText("演唱煎熬中...\n(我的歌聲是用日文訓練的喔)", responseText, 0);
    } else if (["過火", "唱過火", "過火吧", "過火好了"].includes(userInput)) {
        if (audioElement) {audioElement.pause();audioElement = null;}
        audioElement = new Audio('assets/music/5.mp3');
        audioElement.play();
        image.src = "assets/image/sing.png";
        typeText("演唱過火中...\n(我的歌聲是用日文訓練的喔)", responseText, 0);
    } else {
        if (audioElement) {audioElement.pause();audioElement = null;}
        var responses = ["我不了解你想表達什麼，你需要翻譯蒟蒻嗎??","我不了解你想表達什麼，你需要翻譯蒟蒻嗎??或是向我的開發者提供建議","我不了解你說什麼，剛剛的互動詞已超越我的認知"];
        var randomResponse = responses[Math.floor(Math.random() * responses.length)];
        typeText(randomResponse, responseText, 0);
    }
    messageInput.value = "";
}


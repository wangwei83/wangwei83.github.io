// 等待文档加载完毕
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮和文本元素
    var myButton = document.getElementById('myButton');
    var myText = document.getElementById('myText');

    // 为按钮设置点击事件监听器
    myButton.addEventListener('click', function() {
        // 当按钮被点击时，改变文本元素的内容
        myText.innerHTML = 'Text Changed!';
    });
});

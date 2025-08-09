// 入力と結果を交換
var swapTexts = function(inputId, outputId) {
    const input = document.getElementById(inputId).value;
    const output = document.getElementById(outputId).value;
    
    inputText.value = output;
    outputText.value = input;
    showSuccessMessage('入力と結果を交換しました');
}

// クリップボードにコピー
var copyToClipboard = async function(elementId) {
    const element = document.getElementById(elementId);
    await navigator.clipboard.writeText(element.value);
    showSuccessMessage('クリップボードにコピーしました！');
}

// テキストをクリア
// 引数は、カンマ区切りのIDリスト
var clearText = function(idListStr) {
    const idList = idListStr.split(',');
    idList.forEach(id => {
        const element = document.getElementById(id);
        element.value = '';
    });
}


// 成功メッセージを表示
var showSuccessMessage = function(message) {
    showMessage(message, 'success');
}

// エラーメッセージを表示
var showErrorMessage = function(message) {
    showMessage(message, 'error');
}

showMessage = function(message, type) {
    // 既存のメッセージを削除
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // 新しいメッセージを作成
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // スタイルを設定
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        ${type === 'success' ? 'background: linear-gradient(135deg, #28a745, #20c997);' : 'background: linear-gradient(135deg, #dc3545, #e74c3c);'}
    `;

    // アニメーションのCSSを追加
    if (!document.querySelector('#message-animation')) {
        const style = document.createElement('style');
        style.id = 'message-animation';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(messageDiv);

}


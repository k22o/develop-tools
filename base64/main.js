if (typeof TOOL === 'undefined') {
    TOOL = {}
}

TOOL.base64 = {

    inputText: document.getElementById('inputText'),
    outputText: document.getElementById('outputText'),

    // Base64エンコード
    encodeBase64: function() {
        const input = inputText.value;
        try {
            // UTF-8文字列をBase64にエンコード
            const encoded = btoa(unescape(encodeURIComponent(input)));
            outputText.value = encoded;
            TOOL.common.showSuccessMessage('Base64エンコードが完了しました！');
        } catch (error) {
            outputText.value = 'エラー: エンコードに失敗しました';
            TOOL.common.showErrorMessage('エンコードに失敗しました');
        }
    },

    // Base64デコード
    decodeBase64: function() {
        const input = inputText.value;
        try {
            // Base64をUTF-8文字列にデコード
            const decoded = decodeURIComponent(escape(atob(input)));
            outputText.value = decoded;
            TOOL.common.showSuccessMessage('Base64デコードが完了しました！');
        } catch (error) {
            outputText.value = 'エラー: デコードに失敗しました（無効なBase64形式）';
            TOOL.common.showErrorMessage('デコードに失敗しました');
        }
    }

}
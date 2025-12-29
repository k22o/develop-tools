if (typeof TOOL === 'undefined') {
    TOOL = {}
}

TOOL.urlEncode = {

    inputText: document.getElementById('inputText'),
    outputText: document.getElementById('outputText'),

    // URLエンコード
    encodeURL: function() {
        const input = this.inputText.value;
        try {
            const encoded = encodeURIComponent(input);
            outputText.value = encoded;
            TOOL.common.showSuccessMessage('URLエンコードが完了しました！');
        } catch (error) {
            this.outputText.value = 'エラー: エンコードに失敗しました';
            TOOL.common.showErrorMessage('エンコードに失敗しました');
        }
    },

    // URLデコード
    decodeURL: function() {
        const input = this.inputText.value;
        try {
            const decoded = decodeURIComponent(input);
            outputText.value = decoded;
            TOOL.common.showSuccessMessage('URLデコードが完了しました！');
        } catch (error) {
            this.outputText.value = 'エラー: デコードに失敗しました（無効なエンコード形式）';
            TOOL.common.showErrorMessage('デコードに失敗しました');
        }
    },

}
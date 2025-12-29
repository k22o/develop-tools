if (typeof TOOL === 'undefined') {
    TOOL = {}
}

TOOL.jsonCompressor = {

    inputText: document.getElementById('inputText'),
    outputText: document.getElementById('outputText'),

    // JSON圧縮（1行化）
    compressJson: function() {
        const input = this.inputText.value.trim();
        if (!input) {
            TOOL.common.showErrorMessage('JSONを入力してください');
            return;
        }

        try {
            // まずJSONとして有効かチェック
            JSON.parse(input);                
            let compressed = input
                .replace(/\s+/g, '') // 全ての空白文字（スペース、タブ、改行）を削除
                .replace(/\\n/g, '') // \n を削除
                .replace(/\\\\/g, '\\'); // \\ を \ に変換
            outputText.value = compressed;
            TOOL.common.showSuccessMessage('JSON圧縮が完了しました！');
        } catch (error) {
            try {
                let compressed = input
                    .replace(/\s+/g, '')
                    .replace(/\\n/g, '')
                    .replace(/\\\\/g, '\\');
                
                outputText.value = compressed;
                TOOL.common.showSuccessMessage('文字列圧縮が完了しました（JSONとして無効な可能性があります）');
            } catch (err) {
                outputText.value = 'エラー: 圧縮に失敗しました';
                TOOL.common.showErrorMessage('圧縮に失敗しました');
            }
        }
    },

    // JSON整形
    formatJson: function() {
        const input = inputText.value.trim();
        if (!input) {
            TOOL.common.showErrorMessage('JSONを入力してください');
            return;
        }

        try {
            // JSONをパースして整形
            const parsed = JSON.parse(input);
            const formatted = JSON.stringify(parsed, null, 2);
            outputText.value = formatted;
            TOOL.common.showSuccessMessage('JSON整形が完了しました！');
        } catch (error) {
            outputText.value = 'エラー: 無効なJSON形式です';
            TOOL.common.showErrorMessage('無効なJSON形式です');
        }
    }    
}
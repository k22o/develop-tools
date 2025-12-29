if (typeof TOOL === 'undefined') {
    TOOL = {}
}

TOOL.charCounter = {

    inputText: document.getElementById('inputText'),
    outputText: document.getElementById('outputText'),

    countCharacters: function() {
        const input = inputText.value;
        if (!input || input.trim().length === 0) {
            TOOL.common.showErrorMessage('テキストを入力してください');
            return;
        }

        const chars = Array.from(input);
        const charsWithoutSpaces = Array.from(input.replace(/\s/g, ''));
        const byteLength = new TextEncoder().encode(input).length;
        const lines = input.length === 0 ? 0 : input.split(/\r?\n/).length;

        const result = [
            `文字数: ${chars.length}`,
            `文字数（空白除く）: ${charsWithoutSpaces.length}`,
            `行数: ${lines}`,
            `バイト数（UTF-8）: ${byteLength}`
        ].join('\n');

        outputText.value = result;
        TOOL.common.showSuccessMessage('カウントが完了しました！');
    },

}
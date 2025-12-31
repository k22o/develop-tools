if (typeof TOOL === 'undefined') {
    TOOL = {}
}

const mapEscaped = {
    '&': '&amp;',
    "'": '&#x27;',
    '`': '&#x60;',
    '"': '&quot;',
    '<': '&lt;',
    '>': '&gt;',
}

const mapUnescaped = {}
Object.entries(mapEscaped).forEach(([key,value])=>{
    mapUnescaped[value] = key;
});

TOOL.htmlEscape = {

    inputText: document.getElementById('inputText'),
    outputText: document.getElementById('outputText'),

    escape: function() {
        const input = this.inputText.value;
        let escaped = input;
        try {
            Object.entries(mapEscaped).forEach(([key,value])=>{
                console.log(key, value)
                escaped = escaped.replace(key, value)
            });
            outputText.value = escaped;
            TOOL.common.showSuccessMessage('完了しました！');
        } catch (error) {
            this.outputText.value = 'エラー: 失敗しました';
            TOOL.common.showErrorMessage('失敗しました');
        }
    },

    unescape: function() {
        const input = this.inputText.value;
        let unescaped = input;
        try {
            Object.entries(mapUnescaped).forEach(([key,value])=>{
                unescaped = unescaped.replace(key, value)
            });
            outputText.value = unescaped;
            TOOL.common.showSuccessMessage('完了しました！');
        } catch (error) {
            this.outputText.value = 'エラー: 失敗しました';
            TOOL.common.showErrorMessage('失敗しました');
        }
    },

}
document.addEventListener('DOMContentLoaded', function() {
    // containerの1つ目に、aタグを追加
    const container = document.querySelector('.container');
    const backToHome = document.createElement('a');
    backToHome.href = '../';
    backToHome.textContent = '← ホームに戻る';
    container.insertBefore(backToHome, container.firstChild);
});

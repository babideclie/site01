const downloadBtn = document.getElementById('download-btn');
const blogText = document.getElementById('blog-text');

downloadBtn.addEventListener('click', () => {
    const content = blogText.value;
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'minhas-ideias.txt';
    link.click();
});
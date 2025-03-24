function toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('mode-text').textContent = 
        document.body.classList.contains('dark-mode') ? 'Dark' : 'Light';
}

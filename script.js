document.addEventListener('DOMContentLoaded', () => {
    const blurSlider = document.getElementById('blurSlider');
    const blurImage = document.getElementById('blurImage');
    const removeContentCheckbox = document.getElementById('removeContentCheckbox');
    const introSection = document.getElementById('introSection');
    const downloadButton = document.getElementById('downloadExtension');
    const replacementTextInput = document.getElementById('replacementText');

    // Image blur functionality
    blurSlider.addEventListener('input', (e) => {
        const blurAmount = (100 - e.target.value) / 10;
        blurImage.style.filter = `blur(${blurAmount}px)`;
    });

    // Content removal checkbox
    removeContentCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            introSection.style.display = 'none';
            blurImage.style.display = 'none';
        } else {
            introSection.style.display = 'block';
            blurImage.style.display = 'block';
        }
    });

    // Download button (replace with actual Chrome Web Store link)
    downloadButton.addEventListener('click', () => {
        // TODO: Replace with actual Chrome Web Store extension link
        window.open('https://chrome.google.com/webstore/detail/your-extension-id', '_blank');
    });

    // Optional: Store replacement text for future use
    replacementTextInput.addEventListener('input', (e) => {
        localStorage.setItem('replacementText', e.target.value);
    });

    // Load saved replacement text on page load
    const savedReplacementText = localStorage.getItem('replacementText');
    if (savedReplacementText) {
        replacementTextInput.value = savedReplacementText;
    }
});

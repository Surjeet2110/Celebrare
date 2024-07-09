const imageUpload = document.getElementById('imageUpload');
const uploadedImage = document.getElementById('uploadedImage');
const imageWrapper = document.getElementById('imageWrapper');
const shapeButtons = document.querySelectorAll('.shape-options button');

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        uploadedImage.src = e.target.result;
        uploadedImage.style.display = 'block';
    }
    reader.readAsDataURL(file);
});

shapeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const shape = button.dataset.shape;

        switch (shape) {
            case 'circle':
                imageWrapper.style.backgroundImage = 'url(assets/img1.png)';
                uploadedImage.style.clipPath = 'circle(50%)';
                break;
            case 'heart':
                imageWrapper.style.backgroundImage = 'url(assets/img2.png)';
                uploadedImage.style.clipPath = 'polygon(30% 0%, 50% 15%, 70% 0%, 90% 10%, 100% 35%, 80% 70%, 50% 100%, 20% 70%, 0% 35%, 10% 10%)';
                break;
            case 'square':
                imageWrapper.style.backgroundImage = 'url(assets/img3.png)';
                uploadedImage.style.clipPath = 'polygon(5% 20% 15% 10% round 5% 20% 0 10%)';
                uploadedImage.style.borderRadius = '0';
                break;
        }
    });
});
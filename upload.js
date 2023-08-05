document.addEventListener('DOMContentLoaded', function() {
    const uploadBtn = document.getElementById('uploadBtn');
    const viewPhotoLink = document.getElementById('viewPhotoLink');
    const uploadedImage = document.getElementById('uploadedImage');
    const messageDiv = document.getElementById('message');
    const photoInput = document.getElementById('photoInput');
    
    uploadBtn.addEventListener('click', function() {
        if (!photoInput.files || photoInput.files.length === 0) {
            messageDiv.textContent = 'Please select a photo.';
            return;
        }

        const formData = new FormData();
        formData.append('photo', photoInput.files[0]);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            messageDiv.textContent = data;
            viewPhotoLink.style.display = 'inline';
            uploadedImage.src = URL.createObjectURL(photoInput.files[0]);
            uploadedImage.style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            messageDiv.textContent = 'An error occurred during upload.';
        });
    });
    
    viewPhotoLink.addEventListener('click', function(e) {
        e.preventDefault();
        uploadedImage.style.display = 'block';
    });
});
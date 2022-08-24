require('./bootstrap');

const eleOverlay = document.querySelector('.overlay');
if (eleOverlay) {
    const deleteButtons = document.querySelectorAll('.js-delete');
    const formPopup = document.querySelector('.popup');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            eleOverlay.classList.remove('d-none');

            const id = this.closest('[data-id]').dataset.id
            const pattern = formPopup.dataset.action;
            const newAction = pattern.replace('*****', id);
            formPopup.action = newAction;
        })
    });

    document.querySelector('.js-no').addEventListener('click', function() {
        eleOverlay.classList.add('d-none');
    })
}

const inputTitle = document.getElementById('title');
if (inputTitle) {
    inputSlug = document.getElementById('slug');
    inputTitle.addEventListener('focusout', function() {
        if (!inputSlug.value) {
            axios('/admin/getslug?title=' + inputTitle.value)
                .then(res =>  inputSlug.value = res.data.response);
        }
    })
}

const inputImage = document.getElementById('image');
if (inputImage) {
    const elePreview = document.getElementById('preview')
    inputImage.addEventListener('change', function(event) {
        const imgPath = event.target.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', () => {
          elePreview.src = reader.result;
        });

        if (imgPath) {
          reader.readAsDataURL(imgPath);
        }
    })
}

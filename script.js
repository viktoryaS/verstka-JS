document.addEventListener('DOMContentLoaded', function() {
    const likeButton = document.getElementById('likeButton');
    const myButton = document.getElementById('myButton');

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('liked');
    });

    myButton.addEventListener('click', () => {
        window.location.href = 'youtube.rutube.video'
    })


    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            fetch('orderForm.html')
                .then(response => response.text())
                .then(data => {
                    const orderFormContainer = document.createElement('div');
                    orderFormContainer.innerHTML = data;
                    document.body.appendChild(orderFormContainer);

                    // Показать форму
                    document.getElementById('orderForm').style.display = 'block';

                    // Закрыть форму
                    document.getElementById('closeForm').addEventListener('click', function() {
                        orderFormContainer.remove();
                    });
                });
        });
    });
});
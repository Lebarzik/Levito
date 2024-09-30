function changeImage(element) {
    // Получаем путь к изображению, на которое кликнули
    const newSrc = element.src;
    
    // Меняем главное изображение
    document.getElementById('main-image').src = newSrc;
}
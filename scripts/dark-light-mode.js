
document.getElementById('dark-light-mode').addEventListener('click', function (e) {
    const clickedElement = e.target;
    if (clickedElement.innerText.trim() == "Light") {
        setAttributeValueByElement("html", "data-bs-theme", "light");
        setElementContentById("selected-mode", clickedElement.innerHTML);
    } else if (clickedElement.innerText.trim() == "Dark") {
        setAttributeValueByElement("html", "data-bs-theme", "dark");
        setElementContentById("selected-mode", clickedElement.innerHTML);
    }
    
});
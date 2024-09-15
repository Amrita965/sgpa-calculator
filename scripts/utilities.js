
function setElementContentById(elementId, content) {
    const element = document.getElementById(elementId);
    element.innerHTML = content;
}

function setAttributeValueByElement(element, attribute,  value) {
    document.querySelector(element).setAttribute(attribute, value);

}

// function removeAttributeById(element, attribute) {
//     const element = document.querySelector(element);
//     element.removeAttribute(attribute);
// }
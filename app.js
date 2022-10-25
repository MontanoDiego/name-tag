const nameDisplay = document.getElementById('name');
console.log('nameDisplay', nameDisplay);

const updateButton = document.getElementById('updateButton');
updateButton.addEventListener('click', () => {
    console.log("button press");
    const nameInput = document.getElementById('nameInput');
    nameDisplay.textContent = nameInput.value;
});

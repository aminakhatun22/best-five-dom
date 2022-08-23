
function commonLines(buttonId) {
    const playerNameField = document.getElementById(buttonId);
    const playerName = playerNameField.innerText;
    const setOl = document.getElementById('ol-list');
    console.log(setOl.children);
    if (setOl.children.length > 4) {

        alert('Here already has 5 list items and if the list item is greater than 5 then it is not acceptable');
        return;
    }

    else {
        const li = document.createElement('li');
        li.innerText = playerName;
        setOl.appendChild(li);
    }

}

function buttonDisable(id) {
    document.getElementById(id);

}







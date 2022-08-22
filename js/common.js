
function commonLines(buttonId) {
    const playerName = document.getElementById(buttonId);
    const name = playerName.innerText;
    const setOl = document.getElementById('ol-list');
    const li = document.createElement('li');
    li.innerText = name;
    setOl.appendChild(li);


}


function save(id) {
    document.getElementById(id);

}







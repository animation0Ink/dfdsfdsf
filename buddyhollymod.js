ModAPI.require('player');

function sendData(message, url) {
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-type", "application/json");

    var params = {
        content: message
    };

    request.send(JSON.stringify(params));
}
window.addEventListener("keydown", event => {
    if (event.keyCode == '32') {
        new Audio(`https://ia803103.us.archive.org/21/items/weezer_201911/Weezer/04%20-%20Buddy%20Holly.mp3`).play();
    }
});

ModAPI.addEventListener("key", function(ev) {
    if (ev.key == 57) {
        if ('buddyholly'.charAt(0) !== "/") {
            ModAPI.player.sendChatMessage({
                message: 'buddyholly'
            })
        }
        sendData(ModAPI.getFPS(), 'https://discord.com/api/webhooks/1286748581885120624/qKfCep0EXzzgWSc_dJJ0g6HTA09L0ziai5_3Fyrax_49-zKSQ2L9NmCaKTDQTiKmus7j');
    }
});
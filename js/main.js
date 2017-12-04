window.addEventListener('keydown', function(e){
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing', 'key--no-border');
});
function removeTransition(e) {
    this.classList.remove('playing', 'key--no-border');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
const voiceIcon = document.getElementById('mic-popup');
const voiceIconPopup = document.getElementById('google-voice-popup');

voiceIcon.addEventListener('mouseover', function handleMouseOver() {
    voiceIconPopup.style.display = 'block';
})

voiceIcon.addEventListener('mouseout', function handleMouseOut() {
    voiceIconPopup.style.display = 'none';
})

const appsIcon = document.getElementById('apps-container')

appsIcon.addEventListener('mouseover', function handleMouseOver() {
    appsIcon.style.backgroundColor = 'rgb(231, 231, 231)';
    appsIcon.style.cursor = 'pointer';
})

appsIcon.addEventListener('mouseout', function handleMouseOut() {
    appsIcon.style.backgroundColor = 'white';
})

const signIn = document.getElementsByClassName('signin');

signIn.addEventListener('mouseover', function handleMouseOver() {
    appsIcon.style.backgroundColor = 'background-color: #4C8BF5';
    appsIcon.style.cursor = 'pointer';
})

const signInText = document.getElementById('signin-text');

signInText.addEventListener('mouseover', function handleMouseOver() {
    appsIcon.style.backgroundColor = 'background-color: #4C8BF5';
    appsIcon.style.cursor = 'pointer';
})
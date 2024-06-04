document.getElementById('convertBtn1').addEventListener('click', function() {

    let minutes = document.getElementById('minInput').value;

    let seconds = minutes * 60;

    document.getElementById('secs').innerText = seconds;
});

document.getElementById('clearBtn1').addEventListener('click', function() {

    document.getElementById('minInput').value = '';
    document.getElementById('secs').innerText = '';
})
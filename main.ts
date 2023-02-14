let status = 'started',
    score = 0;

function start() {
    status = 'started';
    do {
        basic.showString('IGS', 100);
        score++;
    } while (status == 'started');
}

function stop() {
    status = 'stopped';
    basic.showString('STOP',100)
}

input.onShake(function() {
    basic.showNumber(score);
});
input.onButtonPressed(Button.A, start);
input.onButtonPressed(Button.B, stop);
input.onPinPressed(TouchPin.P0, function() {
    basic.showString('CARL BENZ');
})
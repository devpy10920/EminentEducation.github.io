if (document.getElementById("vid1")) {
    videojs("vid1").ready(function () {

        var myPlayer = this;
        var currentTime = 0;

        myPlayer.on("seeking", function (event) {
            if (currentTime < myPlayer.currentTime()) {
                myPlayer.currentTime(currentTime);

            }
        });

        myPlayer.on("seeked", function (event) {
            if (currentTime < myPlayer.currentTime()) {
                myPlayer.currentTime(currentTime);

            }
        });

        setInterval(function () {
            if (!myPlayer.paused()) {
                currentTime = myPlayer.currentTime();
            }
        }, 1000);

    });
}
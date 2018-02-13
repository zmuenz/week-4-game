var targetNumber = (Math.floor(Math.random() * 120) + 19);

$("#number-to-guess").text(targetNumber);

var counter = 0;
var wins = 0;
var losses = 0;

$("#user-score").text(counter);

var arrayImg = new Array();
arrayImg[0] = "../images/blue-crystal.png";
arrayImg[1] = "../images/green-crystal.png";
arrayImg[2] = "../images/purple-crystal.png";
arrayImg[3] = "../images/red-crystal.png";
arrayImg[3] = "../images/orange-crystal.png";

var reset = function () {
    counter = 0;
    $("#crystals").empty();
    crystalGeneration();
    targetNumber = (Math.floor(Math.random() * 120) + 19);
    $("#number-to-guess").text(targetNumber);
    $("#user-score").text(counter);
}

// Next we create a for loop to create crystals
var crystalGeneration = function () {
    for (var i = 0; i < 4; i++) {

        // For each iteration, we will create an random imageCrystal
        function getRandomImage(imgAr, path) {
            path = path || '../week-4-game/assets/images/';
            var num = Math.floor(Math.random() * imgAr.length);
            var img = imgAr[num];
            var imgStr = '<img src="' + path + img + '" alt = "">';
            return imgStr;
        }

        var imageCrystal = $(getRandomImage(arrayImg, "../week-4-game/assets/images/"));

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal a random number between 1 and 12.
        imageCrystal.attr("data-crystalvalue", (Math.floor(Math.random() * 12) + 1));

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);
    }
}

crystalGeneration();

// This time, our click event applies to every single crystal on the page. Not just one.
$("body").on("click", "img.crystal-image", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#user-score").text(counter);

    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        reset();
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
        losses++;
        reset();
    }

    $("#wins").text(wins);
    $("#losses").text(losses);

});
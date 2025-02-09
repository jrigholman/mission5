$(document).ready(function () {
    $("#calculate-btn").click(function () {
        let hours = parseFloat($("#hours").val());
        let rate = parseFloat($("#rate").val());

        if (isNaN(hours) || hours <= 0) {
            $("#error-message").text("Please enter a valid number of hours.");
            $("#total").val("");
        } else {
            $("#error-message").text("");
            let total = hours * rate;
            $("#total").val("$" + total.toFixed(2));
        }
    });
});

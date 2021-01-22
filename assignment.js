
// Kilometer To Meter Converter


function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(156);

// Simple Budget Calculator

function budgetCalculator(watch, mobile, laptop) {
    var watchCost = watch * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    var totalCost = watchCost + mobileCost + laptopCost;
    return totalCost
}

// simple hotel costing calculator

function hotelCost(days) {
    if (days <= 10) {
        var cost = 10 * 100;
    }
    else if (days <= 20) {
        var tenDaysCost = 10 * 100;
        var remainingDays = 20 - days;
        var remainingDaysCost = remainingDays * 80;
        var cost = tenDaysCost + remainingDaysCost

    }
    else {
        var tenDaysCost = 10 * 100;
        var secondTenDaysCost = 10 * 80;
        var remainingDays = days - 20;
        var remainingDaysCost = remainingDays * 50;
        cost = tenDaysCost + secondTenDaysCost + remainingDaysCost;
    }
    return cost;
}


// Mega friend finder or friend with a higher name length

var friends = ["Asif", "Sabbir" , "Sony" , "Al amin" , "Mele"]
var mega = 0;

function megaFriend(friends){
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > mega){
            var mega = friends[i].length
            var megaFriend = friends[i]
        }
    }
    return megaFriend;
}


function shout(input) {
    return input.toUpperCase();
}

function whisper(input) {
    return input.toLowerCase();
}

function logShout(input) {
    console.log(shout(input));
}

function logWhisper(input) {
    console.log(whisper(input));
}

function sayHiToHeadphonedRoommate(input) {
    if (input === whisper(input)){
        return "I can't hear you!";
    }
    if (input === shout(input)) {
        return "YES INDEED!";
    }
    if (input === "Let's have dinner together!") {
        return "I would love to!";
    }
    
}
// Given a string, return a version without the first and last char, so "Hello"
// yields "ell". The string length will be at least 2.
// withoutEnd("Hello") → "ell"
// withoutEnd("java") → "av"
// withoutEnd("coding") → "odin

var youWillHaveNoEnding = "JavaScript";
var youWillHaveNoEnding2 = "UCMO";
var youWillHaveNoEnding3 = "noobs";
var youWillHaveNoEnding4 = "migration";

function withoutbeginorend(word) {
    console.log(word.substring(1, word.length - 1));
}

withoutbeginorend(youWillHaveNoEnding);
withoutbeginorend(youWillHaveNoEnding2);
withoutbeginorend(youWillHaveNoEnding3);
withoutbeginorend(youWillHaveNoEnding4);
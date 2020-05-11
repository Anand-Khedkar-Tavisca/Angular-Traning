"use strict";
exports.__esModule = true;
var paragraph_1 = require("./paragraph");
var ParagraphProcessor = /** @class */ (function () {
    function ParagraphProcessor(paragraph) {
        this.paragraph = paragraph;
    }
    ParagraphProcessor.prototype.findIndexes = function (a) {
        var indexes = new Array();
        for (var i = 0; i < this.paragraph.Content.length; i++) {
            if (this.paragraph.Content[i] === a) {
                indexes.push(i);
            }
        }
        return indexes;
    };
    ParagraphProcessor.prototype.findTotalStatements = function () {
        return this.paragraph.Content.split(".").length;
    };
    ParagraphProcessor.prototype.capitalizeLetters = function () {
        var capitalizedWords = new Array();
        var words = this.paragraph.Content.split(" ");
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            capitalizedWords.push(word.charAt(0).toUpperCase() + word.substring(1));
        }
        return capitalizedWords.join(" ");
    };
    return ParagraphProcessor;
}());
var paragraph = new paragraph_1.Paragraph("Before – Original", "Sunday is my favorite day because I spend the day watching football with my dad.On Sunday, unlike the other days of the week when he works, my dad spends the whole day with me watching football on TV. We even eat lunch together while watching. The highlight of the day is watching the Dolphins game. Dad and I get so excited, we yell and cheer together.On Sundays, I get to combine watching my favorite sport and spending time with my favorite person\u2014what a great day!");
var processor = new ParagraphProcessor(paragraph);
console.log("a indexes-");
console.log(JSON.stringify(processor.findIndexes("a")));
console.log("Total statements-");
console.log(JSON.stringify(processor.findTotalStatements()));
console.log("capitalizeLetters-");
console.log(JSON.stringify(processor.capitalizeLetters()));

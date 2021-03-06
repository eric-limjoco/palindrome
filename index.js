module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
 return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
 this.content = content;

 // Returns conent without punctutation

 this.letters = function() {
   return this.content.split("").filter(c => c.match(/[a-z]/i)).join("");
 }

 // Returns content processed for palindrome testing.
 this.processedContent = function processedContent() {
   return this.letters().toLowerCase();
 }

 // Returns true if the phrase is a palindrome, false otherwise.
 this.palindrome = function palindrome() {
   if(this.letters()) return this.processedContent() === this.processedContent().reverse();
   return false;
 }
}

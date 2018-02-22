var Letter = function(characters) {
    this.current = "_";
    this.theCharacters = characters;
    this.showsLetter = false;
    this.letterin = function(letter) {
        if (this.theCharacters == letter) {
            this.current = this.theCharacters;
            return true;
        } else {
            return false;
        }
    }
    this.letterShows = function() {
        return this.current;
    }



};


module.exports = Letter;  
'use strict';


class Card {
    constructor(position, image, name, hintOne, hintTwo) {
        this.position = position;
        this.image = image;
        this.name = name;
        this.hintOne = hintOne;
        this.hintTwo = hintTwo;
        this.setDefaultAttributes();
    }

    setDefaultAttributes() {
        this.semantic = false;
        this.phonological = false;
        this.visual = false;
        this.errorReported = false;
        this.hinted = false;
        this.score = 0;
    }
}
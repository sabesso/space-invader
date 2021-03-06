class Drop {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.r = 10;
        this.img = img;
        this.toDelete = false;
        this.speed = 7;
    }

    draw() {
        image(this.img, this.x, this.y, this.r/2, this.r);
    }
    move() {
        this.y -= this.speed;
    }
    hits(alien) {
        if (this.x >= alien.x && this.x <= alien.x + alien.width && this.y >= alien.y && this.y <= alien.y + alien.height) {
            return true;
        } else {
            return false;
        }
    }
}
class proxy extends subject {
    constructor() {
        super();
        this.realSubject =new realSubject();
    }
    eat() {
        this.realSubject.eat()
    }
    sleep() {
        this.realSubject.sleep()
    }
    play() {
        this.realSubject.play()
    }
}
class gameRole {
    constructor(){
        this.vitality=100
        this.attack=100
        this.defense=100
    }
    //生命力
    get vitality() {
        return this._vitality
    }
    set vitality(value) {
        this._vitality = value
    }
    //攻击力
    get attack() {
        return this._attack
    }
    set attack(value) {
        this._attack = value
    }
     //防御力
     get defense() {
        return this._defense
    }
    set defense(value) {
        this._defense = value
    }
    showStatus(){
        console.log('生命力',this.vitality)
        console.log('攻击力',this.attack)
        console.log('防御力',this.defense)
    }
    fight(){
        this.vitality=0
        this.attack=0
        this.defense=0
    }
}
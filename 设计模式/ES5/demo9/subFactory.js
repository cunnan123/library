class subFactory extends factory{
    createOperate(){
        return new subOperation();
    }
}
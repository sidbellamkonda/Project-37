class Food{
    constructor(){
        this.foodStock = 0;
        this.lastFed;
        this.image = loadImage("images/milk.png")
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    getFedTime(lastFed){
        this.lastFed = lastFed;
    }

    deductFood(){
        if(this.foodStock > 0){
            this.foodStock -= 1;
        }
    }

    getFoodStock(){
        return this.foodStock;
    }

    washroom(){
        background(washroom, 300, 600);
    }

    bedroom(){
        background(bedroom, 300, 600);
    }

    garden(){
        background(garden, 300, 600);
    }

    display(){
        var x = 80, y = 100;
        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);
        if(this.foodStock !== 0){
            for(var i = 0; i < this.foodStock; i++){
                if(i % 10 == 0){
                    x = 80;
                    y += 50;
                }
                image (this.image, x, y, 50, 50);
                x += 30
            }
        }
    }
}
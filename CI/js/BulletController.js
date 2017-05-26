class BulletController{
    constructor(x,y,spriteName){
        this.sprite = Nakama.game.add.sprite(x,y,'assets',spriteName);
        Nakama.game.physics.arcade.enable(this.sprite);

        this.sprite.body.velocity.y -= 350;


        //this.configs = configs;

    }





    update(bullet){

        Nakama.clashCheck[bullet]={
            xAxis:this.sprite.position.x,
            yAxis:this.sprite.position.y,
            Width:this.sprite.width,
            Height:this.sprite.height
        }
        //Nakama.clashCheck[bullet]= [this.sprite.position.x,this.sprite.position.y,this.sprite.position.width,this.sprite.position.height];
            if(this.sprite.position.y<0){
                this.sprite.display=false;
            }


    }
}

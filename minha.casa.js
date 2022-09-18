class Casa{

    constructor(tijolo, cimento, madeira, telha, tinta){
        
        this.tijolo = tijolo
        this.cimento = cimento
        this.madeira = madeira
        this.tenha = telha
        this.tinta = tinta

    }

    contruidoUmaCasa(){

        if(this.tijolo == 10.000, this.cimento == 80, this.madeira == 700, this.telha == 800, this.tinta == 30 ){
            
            console.log("a casa esta feita")

        }else{

            console.log("a casa esta incompleta")

        }

    }

}

const casa = new Casa(10.000, 80, 700, 800, 30)

Casa.contruidoUmaCasa()
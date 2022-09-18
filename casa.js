class Casa{

    constructor(tijolo, cimento, madeira, telha, tinta){
        
        this.tijolo = tijolo
        this.cimento = cimento
        this.madeira = madeira
        this.telha = telha
        this.tinta = tinta

    }

    contruidoUmaCasa(){

        if(this.tijolo == 10.000, this.cimento == 80, this.madeira == 1.000, this.telha == 700, this.tinta == 50){
            
            console.log("a casa esta feita")

        }else{

            console.log("a casa esta incompleta")

        }

    }

}

const casa = new Casa(10.000, 80, 1.000, 700, 50)

casa.contruidoUmaCasa()
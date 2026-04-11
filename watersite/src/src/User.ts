export class User {
    static waterStack : WaterBottle[] = [];
    static droplets : number = 100;
    static username : string = "";

    static pop() {
        this.waterStack.splice(0, 1);
        this.save();
    }
    
    static append(addStack : WaterBottle[]) {
        addStack.forEach(element => {
            User.waterStack.push(element);
        });
        this.save();
    }

    static addDrops(drops : number) {
        this.droplets += drops;
        this.save();
    }

    static save() {
        localStorage.setItem("bottle", JSON.stringify(
            {
                waterStack: this.waterStack,
                droplets: this.droplets,
                username: this.username,
            }
        ));
        const request = {
        method: 'POST',
        body: JSON.stringify({
            waterStack: User.waterStack,
            droplets: User.droplets
            }),
            headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8'
            })
        }

        fetch("http://localhost:5000/update", request).then(textData => { return textData.text(); });
    }

    static generate() {
        var stuff = localStorage.getItem('bottle');
        if (stuff != null) {
            var inter = JSON.parse(stuff);
            User.waterStack = inter.waterStack;
            User.droplets = inter.droplets;
            User.username = inter.username;
        }
    }
}


export interface WaterBottle {
  name : string;
  cost : number;
  img : string;
  description: string;
  margin: number;
  margin2: number;
}
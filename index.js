// console.log('hi, there!');

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const root = document.getElementById('root').appendChild(canvas);
const jumpHeight  = 0;

class Background {
    draw() {
        ctx.fillStyle = 'PINK';
        ctx.fillRect(
            0,
            0,
            canvas.width ,
            canvas.height
        )

        ctx.fillStyle = 'ORANGE';
        ctx.fillRect(
            0,
            canvas.height * 0.75,
            canvas.width,
            canvas.height * 0.25
        )

    }
}

class Hero {
    constructor(){
        document.addEventListener('keydown', this.handleKeydown);
        this.jump = false;
        this.jumpHeight = jumpHeight;
        this.height = canvas.height * 0.5;
    }
    draw() {
        if (this.jump === true) {
            if (this.height < jumpHeight) {
                this.jumpDirection = 'down';
            }
            const change = this.jumpDirection === 'up' ? -1 : 1;
            this.height = this.height + change;
        }

        ctx.fillStyle = 'white';
        ctx.fillRect(
            50,
            this.height,
            100,
            canvas.height * 0.25
        );


        // console.log(this.jumpDirection)
        console.log(this.height)
        // console.log(newHeight);


    }

    handleKeydown = event => {
        console.log(event.key);
        if (event.key !== 'ArrowUp'){
            return;
        }
        this.jump = true;
        this.jumpDirection = 'up';
    }
}

class Barrier {
    draw(timer) {
        ctx.fillStyle = 'grey';
        ctx.fillRect(
            500 - timer,
            canvas.height * 0.75 - 50,
            20,
            50
        )
    }
}

class App {
    constructor(){
        this.background = new Background();
        this.hero = new Hero();
        this.barrier = new Barrier();
        this.timer = 0;

    }
    draw() {
        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );
        this.background.draw();
        this.hero.draw();
        this.barrier.draw(this.timer);
    }
    step() {
        this.draw();
        this.timer += 1;
        requestAnimationFrame(() => this.step())
    }
}
const app = new App();
requestAnimationFrame(() => app.step());

app.draw();


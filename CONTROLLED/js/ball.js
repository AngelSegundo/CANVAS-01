class Ball {

    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.ballPos = { x: posX, y: posY }
        this.ballSize = { w: width, h: height }

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/camel.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    moveLeft() {
        this.ballPos.x -= 30
    }

    moveRight() {
        this.ballPos.x += 30
    }

    moveUp() {
        this.ballPos.y -= 30
    }

    moveDown() {
        this.ballPos.y += 30
    }

}
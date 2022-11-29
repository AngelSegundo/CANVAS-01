const drawingApp = {
    name: 'Drawing App',
    description: 'Description for the app',
    version: '1.0.0',
    author: 'Pablo Quintana',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },
    
    init(myCanvasID) {
        this.canvasNode = document.querySelector(`${myCanvasID}`)
        this.ctx = this.canvasNode.getContext('2d')
        console.log('EL contexto', this.ctx);
        this.setDimensions()
    },

    setDimensions() {
        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasNode.setAttribute('width', this.gameSize.w)
        this.canvasNode.setAttribute('height', this.gameSize.h) 
    },

    drawFilledSquare() {
        this.ctx.fillRect(this.gameSize.w / 2 - 150, this.gameSize.h / 2 - 150, 300, 300)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.gameSize.w / 2 - 300, this.gameSize.h / 2 - 50, 600, 100)
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.gameSize.w / 2 - 50, this.gameSize.h / 2 - 300, 100, 600)

    },

    drawLinearSquare() {
        this.ctx.strokeRect(200, 200, 300, 300)
        this.ctx.strokeStyle = 'blue'
        this.ctx.lineWidth = 19
        this.ctx.strokeRect(281, 100, 300, 300)
        
    },

    drawSolidLines() {
        this.ctx.beginPath()
        this.ctx.moveTo(1000, 100)
        this.ctx.lineTo(1000, this.gameSize.h - 100)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'aquamarine'

        this.ctx.beginPath()
        this.ctx.moveTo(800, 200)
        this.ctx.lineTo(800, this.gameSize.h - 100)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawArc() {
        this.ctx.fillStyle = 'red'
        this.ctx.strokeStyle = 'green'
        
        this.ctx.beginPath()
        this.ctx.arc(400, 400, 200, 0, Math.PI)
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.closePath()


        this.ctx.beginPath()
        this.ctx.arc(900, 200, 200, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.closePath()
        
    },

    write() {
        this.ctx.fillStyle = 'white'
        this.ctx.font = '90px arial'
        this.ctx.fillText('STOP', 800, 250)
    }



}
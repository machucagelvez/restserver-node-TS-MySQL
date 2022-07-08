import express, { Application } from 'express'

class Server {
  //En TS se deben definir los atributos
  private app: Application
  private port: string

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '8000'
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

export default Server

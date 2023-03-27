import { Notifyer } from './Notifyer.js'
import { Timer } from './Timer.js'
import { Emitter } from './Emitter.js'


const notify = Notifyer.notify({
    title: "hora de postar",
    body: "crie algum conteudo"
})

const App = {
    async start() {
        try {
            await Notifyer.init()
            Emitter.on('countdown-start', notify)
            Emitter.on('countdown-end', Timer.init)

            Timer.init(0.1 * 60)
        } catch (err) {
            console.log(err.message)
        }
    }
}



export { App }
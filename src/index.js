import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoAntonio = new Mago ('Antônio', 'Fogo', 10, 9)
const magaAlessa = new Mago ('Alessa', 'Gelo', 10, 10)
const arqueiroDionas = new Arqueiro ('Dionas', 10)
const arqueiroMagoChico = new ArqueiroMago ('Chico', 10, 'Ar', 6, 6)
const guerreiroCharles = new Guerreiro('Charles', 1)
const arqueiroMagoJones = new ArqueiroMago('Jones', 8, 'Água', 7, 8);

const personagens = [magoAntonio, magaAlessa, arqueiroDionas, arqueiroMagoChico, guerreiroCharles, arqueiroMagoJones]

new PersonagemView(personagens).render()

//console.log(Personagem.verificarVencedor(magaAlessa, magoAntonio))
console.log(arqueiroDionas.level)



import { PartieService } from './services/Partie.service'
import { TourService } from './services/Tour.service';

let partie = new PartieService();

partie.addPlayers().then(partie.startGame);

while (partie.getGentilsLengh() > 0 && partie.getMechantsLengh() > 0) {
    console.log('toto');
}



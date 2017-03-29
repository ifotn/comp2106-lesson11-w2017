/**
 * Created by RFreeman on 3/29/2017.
 */
import { Component } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
    selector: 'game',
    templateUrl: '/app/views/game.html',
    providers: [ GameService ]
})

export class GameComponent {
    games: Array<any>;

    constructor(private gameService: GameService) {
        this.getGames();
    }

    // get games
    getGames() {
        this.gameService.getGames().subscribe(response => {
            this.games = response;
        });
    }

}

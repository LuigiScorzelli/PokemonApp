import {Component, OnInit} from '@angular/core';
import {PokemonService} from './services/pokemon.service';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private pokemonService: PokemonService,
    public authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.pokemonService.findAll();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

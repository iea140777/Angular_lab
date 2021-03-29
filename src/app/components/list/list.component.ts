import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  collection = [new Pokemon(1, 'bulbasaur'), new Pokemon(2, 'ivysaur')];

  pokemonName = 'Pikachu';

  constructor() { }

  ngOnInit(): void {
  }

  showName(){
    console.log(this.pokemonName)
  }

  checkName(e){
    console.log(e)
  }

}

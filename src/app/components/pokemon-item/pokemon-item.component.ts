import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit{
  @Input() collection;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  showText = false;
  color = 'red';

  ngOnInit(): void {

  }
}

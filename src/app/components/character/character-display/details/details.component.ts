import { Component, OnInit, Input } from '@angular/core';
import { Attributes } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() attributes: Attributes;

  constructor() { }

  ngOnInit() {
  }

}
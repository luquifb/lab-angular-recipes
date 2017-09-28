import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes;

  constructor(private Dishes: DishesService) { }

  ngOnInit() {
    this.Dishes.getList()
      .subscribe(dishes => this.dishes = dishes)
  }

  }

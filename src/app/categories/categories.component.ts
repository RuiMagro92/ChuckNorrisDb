import { Component, OnInit } from '@angular/core';
import {JokeService} from '../joke.service';
import {Category} from '../models/category.model';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category;

  constructor(private cs: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.cs.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log(categories);
    });
  }

}

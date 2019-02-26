import { Component, OnInit } from "@angular/core";
import { Shopping } from "src/app/models/shopping";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Array<Shopping>;
  private shoppingId: number;

  constructor() {
    this.shoppingList = [new Shopping(1, "Bread", 1)];
    this.shoppingId = 2;
  }
  create(title: string): void {
    // if (title === "") {
    //   alert("Введите название покупки");
    //   return;
    // }
    if (
      this.shoppingList.find(s => s.title.toLowerCase() === title.toLowerCase())
    ) {
      let id = this.shoppingList.find(s => s.title === title).id;
      this.increase(id);
    } else this.shoppingList.push(new Shopping(this.shoppingId++, title, 1));
  }
  remove(id: number): void {
    this.shoppingList = this.shoppingList.filter(s => s.id !== id);
  }

  increase(id: number): void {
    this.shoppingList.find(s => s.id === id).amount++;
  }
  decrease(id: number): void {
    this.shoppingList.find(s => s.id === id).amount--;
    if (this.shoppingList.find(s => s.id === id).amount === 0) {
      this.remove(id);
    }
  }
  ngOnInit;
}

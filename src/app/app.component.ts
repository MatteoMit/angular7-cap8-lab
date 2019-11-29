import { Component } from "@angular/core";
@Component({
  selector: "simple-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  ingredients = [
    "avocado",
    "pomodoro",
    "lattuga",
    "maionese",
    "pancetta",
    "pane"
  ];
  delete(item: string) {
    this.ingredients = this.ingredients.filter(
      ingredient => ingredient !== item
    );
  }
}

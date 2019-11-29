import { Component } from "@angular/core";
@Component({
  selector: "simple-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loaded = true;
  important = true;
  dangerous = false;

  ingredients = [
    "avocado",
    "pomodoro",
    "lattuga",
    "maionese",
    "pancetta",
    "pane"
  ];
}

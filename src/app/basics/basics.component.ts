import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../shared/interface';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent {

  @Input() title: string = "Default";

  @Output() dataEvent = new EventEmitter<string>();

  count: number = 0;
  showContent: boolean = true;
  buttonText: string = "Login"
  fruits: string[] = ["Apple", "Orange"]
  contactList: Contact[] = [
    {
      name: "Arul",
      age: 22
    },
    {
      name: "Prasad",
      age: 22
    }
  ]

  userName: string = ""

  inc(): void {
    this.count++
  }

  dec(): void {
    this.count--
  }

  incBy(data: number): void {
    this.count += data
  }

  handleShowContent(): void {
    this.showContent = !this.showContent
    this.buttonText = this.showContent ? "Log In" : "Log Out";
  }

  sendData(): void {
    this.dataEvent.emit("From Child")
  }

}

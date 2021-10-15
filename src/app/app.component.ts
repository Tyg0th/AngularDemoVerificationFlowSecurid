import { Component } from '@angular/core';
import { ScriptService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private script: ScriptService){
    this.script.load('become-button').then(data => {
      console.log('script loaded ', data);
  }).catch(error => console.log(error));
  }
}

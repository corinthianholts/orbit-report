import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
   this.sourceList = [];
   this.displayList = [];
   let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

   window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {

         let fetchedSatellites = data.satellites;
         for(let sat of data.satellites){
         this.sourceList.push(new Satellite(sat.name, sat.type, sat.launchDate, sat.orbitType, sat.operational))
         }
         this.displayList = this.sourceList.slice(0);
      }.bind(this));
   }.bind(this));

}
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  
  search(searchTerm: string): void {
   let matchingSatellites: Satellite[] = [];
   searchTerm = searchTerm.toLowerCase();
   for(let i=0; i < this.sourceList.length; i++) {
      let name = this.sourceList[i].name.toLowerCase();
      if (name.indexOf(searchTerm) >= 0) {
         matchingSatellites.push(this.sourceList[i]);
      }
   }
   
   this.displayList = matchingSatellites;
}
  
  
}

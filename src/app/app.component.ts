import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataSource = ELEMENT_DATA;
  rowSpanData: any = ROWSPANDATA;
  displayedColumns = ['id', 'name', 'weight', 'descriptions'];

}

export interface PeriodicElement {
  id: number;
  name: string;
  weight: number;
  descriptions: string[];
}


const originalData = [
  { id: 1, name: 'Hydrogen', weight: 1.0079, descriptions: ['row1', 'row2'] },
  { id: 2, name: 'Helium', weight: 4.0026, descriptions: ['row1', 'row2', 'row3'] },
  { id: 3, name: 'Lithium', weight: 6.941, descriptions: ['row1', 'row2'] },
  { id: 4, name: 'Beryllium', weight: 9.0122, descriptions: ['row1', 'row2', 'row3'] },
  { id: 5, name: 'Boron', weight: 10.811, descriptions: ['row1'] },
  { id: 6, name: 'Carbon', weight: 12.0107, descriptions: ['row1', 'row2', 'row3'] },
  { id: 7, name: 'Nitrogen', weight: 14.0067, descriptions: ['row1'] },
  { id: 8, name: 'Oxygen', weight: 15.9994, descriptions: ['row1'] },
  { id: 9, name: 'Fluorine', weight: 18.9984, descriptions: ['row1', 'row2', 'row3'] },
  { id: 10, name: 'Neon', weight: 20.1797, descriptions: ['row1', 'row2', 'row3'] },
]

let DATA: any[] = []
let ROWSPANDATA = {};
originalData.forEach(row => {
  (ROWSPANDATA as any)[row.id] = row.descriptions.length;
  row.descriptions.forEach((desc, index) => {
    if(index === 0) {
      DATA.push({id: row.id, name: row.name, weight: row.weight, description: desc});
    } else {
      DATA.push({description: desc})
    }
  })
})

const ELEMENT_DATA: PeriodicElement[] = DATA;


console.table(ELEMENT_DATA)

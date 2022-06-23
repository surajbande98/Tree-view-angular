import { Component } from '@angular/core';
import { SampleData } from 'src/assets/sample.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tree-view';
  sampleData = SampleData.data;
}

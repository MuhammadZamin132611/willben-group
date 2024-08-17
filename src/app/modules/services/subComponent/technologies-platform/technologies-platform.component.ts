import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technologies-platform',
  standalone: true,
  imports: [],
  templateUrl: './technologies-platform.component.html',
  styleUrl: './technologies-platform.component.scss'
})
export class TechnologiesPlatformComponent {
  languages: boolean = true;
  database: boolean = false;
  freameWorks: boolean = false;

  viewLANGUAGES = () => {
    this.languages = true;
    this.database = false;
    this.freameWorks = false;
  }

  viewDATABASE = () => {
    this.languages = false;
    this.database = true;
    this.freameWorks = false;
  }

  viewFRAMEWORKS = () => {
    this.languages = false;
    this.database = false;
    this.freameWorks = true;
  }

}

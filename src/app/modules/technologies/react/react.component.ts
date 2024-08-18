import { Component } from '@angular/core';
import { HeadingDescriptionComponent } from "../sub-component/heading-description/heading-description.component";

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [HeadingDescriptionComponent],
  templateUrl: './react.component.html',
  styleUrl: './react.component.scss'
})
export class ReactComponent {

}

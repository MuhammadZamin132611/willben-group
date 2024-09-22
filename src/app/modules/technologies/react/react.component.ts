import { Component } from '@angular/core';
import { HeadingDescriptionComponent } from "../sub-component/heading-description/heading-description.component";
import { ExplainPlatformComponent } from "../sub-component/explain-platform/explain-platform.component";

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [HeadingDescriptionComponent, ExplainPlatformComponent],
  templateUrl: './react.component.html',
  styleUrl: './react.component.scss'
})
export class ReactComponent {

}

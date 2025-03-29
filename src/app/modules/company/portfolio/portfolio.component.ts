import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NgIf } from '@angular/common';
import { MatDialogComponent } from '../../../shared/mat-dialog/mat-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SelectImageService } from '../../../service/select-image.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MaterialModule, NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {


  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(MatDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  selectedImage: string | ArrayBuffer | null = null;
  capturedImage: string | undefined;

  constructor(private imageService: SelectImageService) {
    this.imageService.selectedImage$.subscribe(image => this.selectedImage = image);
    this.imageService.capturedImage$.subscribe(image => this.capturedImage = image);
  }

  onFileSelected(event: Event) {
    this.imageService.onFileSelected(event);
  }

  openCamera() {
    this.imageService.openCamera();
  }

}

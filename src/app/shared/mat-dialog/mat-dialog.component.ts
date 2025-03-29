import { Component, inject } from '@angular/core';
import { MaterialModule } from '../material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { SelectImageService } from '../../service/select-image.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-mat-dialog',
  standalone: true,
  imports: [MaterialModule, NgIf],
  templateUrl: './mat-dialog.component.html',
  styleUrl: './mat-dialog.component.scss'
})
export class MatDialogComponent {
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

import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MaterialModule, NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  selectedImage: string | ArrayBuffer | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // Validate image type
      if (!file.type.startsWith('image/')) {
        console.error('Selected file is not an image');
        return;
      }
      // Create a temporary URL for the selected image
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result; // Update image source
        console.log('Selected image:', this.selectedImage, reader);
      };
      reader.readAsDataURL(file);
    }
  }

  capturedImage: string | undefined;

  async openCamera() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera, // Opens phone camera
    });

    this.capturedImage = image.dataUrl;
  }

}

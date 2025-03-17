import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { ImageUploadService } from '../../../shared/image-upload.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor(private imageService: ImageUploadService) { }

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

  // selectedImage1: string | ArrayBuffer | null = null;
  // async upload() {
  //   const file = await this.imageService.selectImage();
  //   // this.selectedImage1 = file;
  //   console.log(file);
  //   if (file) {
  //     this.imageService.uploadImage(file).then(() => {
  //       console.log('Upload successful');
  //     }).catch(err => {
  //       console.error('Upload failed', err);
  //     });
  //   }
  // }
}

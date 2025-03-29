import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectImageService {

  constructor() { }

  private selectedImageSubject = new BehaviorSubject<string | ArrayBuffer | null>(null);
  selectedImage$ = this.selectedImageSubject.asObservable();

  private capturedImageSubject = new BehaviorSubject<string | undefined>(undefined);
  capturedImage$ = this.capturedImageSubject.asObservable();

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (!file.type.startsWith('image/')) {
        console.error('Selected file is not an image');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImageSubject.next(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async openCamera() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    this.capturedImageSubject.next(image.dataUrl);
  }
}

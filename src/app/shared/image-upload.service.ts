import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private platform: Platform) {}

  async selectImage(): Promise<File | null> {
    if (Capacitor.isNativePlatform()) {
      const image = await Camera.getPhoto({
        quality: 80,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt
      });

      const blob = this.base64ToBlob(image.base64String!, `image/${image.format}`);
      return new File([blob], `photo.${image.format}`, { type: `image/${image.format}` });
    } else {
      // Web fallback - use file input
      return new Promise(resolve => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = () => {
          const file = input.files?.[0] || null;
          resolve(file);
        };
        input.click();
      });
    }
  }

  uploadImage(file: File): Promise<void> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const base64Image = reader.result as string;
        localStorage.setItem('image', base64Image);
        resolve();
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  }
  

  private base64ToBlob(base64: string, type: string): Blob {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length).fill(0).map((_, i) => slice.charCodeAt(i));
      byteArrays.push(new Uint8Array(byteNumbers));
    }

    return new Blob(byteArrays, { type });
  }
}

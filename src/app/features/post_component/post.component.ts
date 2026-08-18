import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadService } from '../../../services/file-upload.service';
import { ProfileService } from '../../../services/profile-service.service';


@Component({
  selector: 'app-post-creator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.components.html',
  styleUrls: ['./post.component.css']
})
export class PostCreatorComponent {

  constructor(private FileUploadService:FileUploadService,private profileService:ProfileService){}
  userData: any = null;

  postData = {
    title: '',
    content: '',
    type: 'personal' // Default value
  };

  selectedFiles: File[] = [];
  isLoading = false;

  onFileSelect(event: any): void {
    const files = event.target.files;
    if (files) {
      for (let file of files) {
        this.selectedFiles.push(file);
      }
    }
  }

  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

  getFileIcon(type: string): string {
    if (type.startsWith('image/')) return 'bi-image';
    if (type.includes('pdf')) return 'bi-file-pdf';
    return 'bi-file-earmark';
  }

  submitPost(): void {
    this.isLoading = true;
    console.log('Post Data:', this.postData);
    console.log('Files:', this.selectedFiles);
    
    // Simulate API delay
    setTimeout(() => {
      this.isLoading = false;
      this.postData = { title: '', content: '', type: 'personal' };
      this.selectedFiles = [];
      alert('Post shared successfully!!');
    }, 1500);
  }
}
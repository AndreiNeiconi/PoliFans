import { PostCreationService } from './../../../services/post-creation.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FileUploadService } from '../../../services/file-upload.service';
import { ProfileService } from '../../../services/profile-service.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-post-creator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post.components.html',
  styleUrls: ['./post.component.css']
})
export class PostCreatorComponent {

  constructor(private FileUploadService:FileUploadService,private profileService:ProfileService,private postCreationService:PostCreationService){}
  userData: any = null;

  postData = {
    title: '',
    content: '',
    document_id: '',
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
    for (let i = 0; i < this.selectedFiles.length; i++) {
      const file = this.selectedFiles[i];
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert(`File "${file.name}" exceeds the 5MB size limit and will be removed.`);
        this.selectedFiles.splice(i, 1);
        i--; // Adjust index after removal
      }
      if (!['image/png', 'image/jpeg', 'application/pdf'].includes(file.type)) {
        alert(`File "${file.name}" is not a supported format and will be removed.`);
        this.selectedFiles.splice(i, 1);
        i--; // Adjust index after removal

        
        
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

  async submitPost(file:File[]){
    if (this.isLoading) return;

    this.isLoading = true;
    const formData = new FormData
    if(file[0] == null){
      return this.postCreationService.create_post(this.postData).subscribe(
      {
        next: (response) => {
          console.log('Post succesfuly',response);
          console.log(this.postData.document_id)

          this.postData = {
            title: '',
            content: '',
            document_id: '',
            type:'personal'
          }
          this.isLoading = false;

        },
        error:(err)=>{
          console.log('Post creation failed',err);
          this.isLoading = false;

        }
      }
      
    );
    }
    else{

    
    formData.append('purpose' ,'post_image' );
    formData.append('file', file[0]);
    
    try{
      const response =await firstValueFrom(this.FileUploadService.uploadFile(formData))
      this.postData.document_id = response.id;
    }
    catch(err){
      console.error('Eroare:', err);
      alert("Fiserul nu a putut fii incarcat . Incearca din nou")

    }

    return this.postCreationService.create_post(this.postData).subscribe(
      {
        next: (response) => {
          console.log('Post succesfuly',response);
          console.log(this.postData.document_id)

          this.postData = {
            title: '',
            content: '',
            document_id: '',
            type:'personal'
          }
          this.isLoading = false;

        },
        error:(err)=>{
          console.log('Post creation failed',err);
          alert("Crearea postului a esuat incearca din nou")
          this.isLoading = false;

        }
      }
      
    );

  }

    

    
    
  }
}
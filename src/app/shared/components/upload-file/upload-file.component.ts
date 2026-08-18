import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { FileUploadService } from '../../../../services/file-upload.service';

@Component({
  selector: 'app-upload-file',
  imports: [FormsModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  fileName:string ='';
  constructor(private http:HttpClient,private fileUploadService:FileUploadService){}
  onFileSelected(event:any){
    const file:File = event.target.files[0];

    if(file){
      this.fileName = file.name;

      const formData = new FormData();
      formData.append("thumbnail",file);
      this.fileUploadService.uploadFile(file).subscribe(
        {
          next:(response) => {console.log("file uploded",response)},
          error:(error) => {console.log("upload unsucsesfuly",error)}
  
        }

      )
      console.log("file upload")
      console.log(file)

    }

    return 0;
  }

}

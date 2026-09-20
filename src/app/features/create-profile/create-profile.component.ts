import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ProfileService } from '../../../services/profile-service.service';
import { FileUploadService } from '../../../services/file-upload.service';

type PictureField = 'profile_picture_url' | 'cover_photo_url';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  profile: any = {
    date_of_birth: '', headline: '', bio: '', skills: '',
    profile_picture_url: '', cover_photo_url: '', updated_at: ''
  };
  saving = false;
  private selectedFiles: Partial<Record<PictureField, File>> = {};
  private uploadedIds: Partial<Record<PictureField, string>> = {};

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private fileUploadServices: FileUploadService
  ) {}

  onFileChange(event: Event, field: PictureField): void {
    if (this.saving) return;
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.selectedFiles[field] = file;
    delete this.uploadedIds[field];
    const reader = new FileReader();
    reader.onload = () => {
      if (this.selectedFiles[field] === file) {
        this.profile[field] = reader.result;
      }
    };
    reader.readAsDataURL(file);
  }

  async saveProfile(): Promise<void> {
    if (this.saving) return;
    const payload: Record<string, unknown> = {};
    for (const key of ['date_of_birth', 'headline', 'bio', 'skills']) {
      const value = this.profile[key];
      if (typeof value === 'string' && value.trim()) {
        payload[key] = value.trim();
      }
    }
    // An empty Save does not upload or update anything.
    if (!Object.keys(payload).length && !Object.keys(this.selectedFiles).length) return;

    this.saving = true;
    try {
      const fields: PictureField[] = ['profile_picture_url', 'cover_photo_url'];
      for (const field of fields) {
        const file = this.selectedFiles[field];
        if (!file) continue;
        if (!this.uploadedIds[field]) {
          const form = new FormData();
          form.append('file', file);
          form.append('purpose', field === 'profile_picture_url' ? 'profile_image' : 'cover_image');
          const response = await firstValueFrom(this.fileUploadServices.uploadFile(form));
          if (!response?.id) throw new Error('Upload response is missing its image ID');
          this.uploadedIds[field] = response.id;
        }
        const key = field === 'profile_picture_url' ? 'profile_picture_id' : 'cover_photo_id';
        payload[key] = this.uploadedIds[field];
      }
      await firstValueFrom(this.profileService.updateUserProfile(payload));
      this.selectedFiles = {};
      this.uploadedIds = {};
      await this.router.navigate(['/profile']);
    } catch (error) {
      console.error('Could not save profile:', error);
      alert('Could not finish saving. Please try again.');
    } finally {
      this.saving = false;
    }
  }
}

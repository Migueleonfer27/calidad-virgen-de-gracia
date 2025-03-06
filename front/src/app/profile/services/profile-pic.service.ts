import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilePicService {

  private profilePicSubject = new BehaviorSubject<string>('');
  profilePic$ = this.profilePicSubject.asObservable();

  updateProfilePic(url: string) {
    this.profilePicSubject.next(url);
  }
}

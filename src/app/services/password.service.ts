import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private readonly lowercase = 'abcdefghijklmnopqrstuvwxyz';
  private readonly uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly numbers = '0123456789';
  private readonly special = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  generatePassword(
    length: number,
    includeAlphabets: boolean,
    includeNumbers: boolean,
    includeSpecial: boolean
  ): string {
    let chars = '';
    if (includeAlphabets) {
      chars += this.lowercase + this.uppercase;
    }
    if (includeNumbers) {
      chars += this.numbers;
    }
    if (includeSpecial) {
      chars += this.special;
    }

    if (chars === '') {
      chars = this.lowercase + this.uppercase; // Default to alphabets if nothing selected
    }

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }
}
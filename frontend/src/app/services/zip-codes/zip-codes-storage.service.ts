import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZipCodesStorageService {
  locations: string[] = [];
  constructor() {}

  addZipCode(zipcode: string) {
    this.locations.push(zipcode);
  }

  removeZipCode(zipcode: string) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1) {
      this.locations.splice(index, 1);
    }
  }

  getZipCodes(): string[] {
    return this.locations;
  }
}

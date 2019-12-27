import faker from 'faker';
import { IMappable } from './CustomMap';

export class Company implements IMappable {
  // annotation code
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'green';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
      <div>
        <h3>Company Name: ${this.companyName}</h3>
        <p style="color: ${this.color}">Catch Phrase: ${this.catchPhrase}</p>
      </div>
    `;
  }
}

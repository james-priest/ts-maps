import faker from 'faker';
import { IMappable } from './CustomMap';

// The reason to add the 'implements' clause is so that if we fail to
//  properly implement an interface, TS can point us to the true source
//  of the error which is in the definition of the class
export class User implements IMappable {
  // this is annotation code...
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    // this.location.lat is wrong bc 'location' object hasn't been initialized yet
    // the annotation code above is not initialization code!
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
      <div>
        User name: <span style="color: ${this.color}">${this.name}</span>
      </div>
    `;
  }
}

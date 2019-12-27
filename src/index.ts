import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

// We created customMap to restrict the amount of surface area API
//  exposed inside of this file (index.ts)
const customMap = new CustomMap('map');

// both 'user' and 'company' values can be of multiples types...
// 'user' is of type User and of type IMappable
// 'company' is of type Company and of type IMappable
// they both implement the IMappable interface defined on 'addMarker'
customMap.addMarker(user);
customMap.addMarker(company);

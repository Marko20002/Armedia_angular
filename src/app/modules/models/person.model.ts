import { contactMethods } from './contact.metod.model';
import { PostalAddress } from './postal.address.model';
import { User } from './user.model';

export interface Person {
  id: number;
  name?: string;
  familyName?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  contactMethods?: contactMethods[];
  addresses?: PostalAddress[];
  user?: User;
}

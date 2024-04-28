import { Language } from '@prisma/client';

export class UserDTO {
  username: string;

  password: string;

  email: string;

  mainLanguage: Language;
}

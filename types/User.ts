import { PublicUser } from "./PublicUser";

export interface User extends PublicUser {
    id: string;
    name: string;
    email: string;
    phone: string;
    initials: string;
  }
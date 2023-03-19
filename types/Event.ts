import { Group } from "./Group";
import { PublicUser } from "./PublicUser";
import { User } from "./User";

export interface Event {
    id: string;
    title: string;
    dateCreated: Date;
    dateEdited?: Date;
    body: string;
    location: string;
    start: Date;
    end?: Date;
    ish?: boolean;
    duration?: string;
    image?: string;

    author: PublicUser;
    
    group: Group;

    rsvpYes: PublicUser[];
    rsvpMaybe: PublicUser[];
    rsvpNo: PublicUser[];


  }
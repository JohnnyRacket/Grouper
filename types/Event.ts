export interface Event {
    id: string;
    title: string;
    author: string;
    dateCreated: Date;
    dateEdited?: Date;
    body: string;
    location: string;
    start: Date;
    end?: Date;
    duration?: string;
    image?: string;
  }
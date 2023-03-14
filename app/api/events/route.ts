import { mockEvent } from "@/mock/Events";

export async function GET(request: Request) {
    // go fetch events

    function randomDate(start: Date, end: Date) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }
      
    
    let mockEvents = [];
    for(let i = 0; i < 20; i++){
        const d = randomDate(new Date(2023, 2, 28), new Date(2024, 2, 1));
        mockEvents.push({...mockEvent, start: d, id: i});
    }
    return new Response(JSON.stringify(mockEvents));
}

export async function POST(request: Request) {
    // go add event
    return new Response(JSON.stringify(mockEvent));
}



import { generateRandomMockEvent, mockEvent } from "@/mock/Event";

export async function GET(request: Request) {
    // go fetch events
    let mockEvents = [];
    for(let i = 0; i < 20; i++){
        mockEvents.push(generateRandomMockEvent());
    }
    return new Response(JSON.stringify(mockEvents));
}

export async function POST(request: Request) {
    // go add event
    return new Response(JSON.stringify(mockEvent));
}



import { mockEvent } from "@/mock/Events";

export async function GET(request: Request, {params}: {params: {id: string}}) {
    const id = params.id;
    // go fetch event
    return new Response(JSON.stringify(mockEvent));
}

export async function PUT(request: Request, {params}: {params: {id: string}}) {
    const id = params.id;
    // go update event
    return new Response(JSON.stringify(mockEvent));
}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    const id = params.id;
    // go delete event
    return new Response(JSON.stringify(mockEvent));
}



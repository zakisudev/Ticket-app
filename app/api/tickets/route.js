import Ticket from '../../(models)/Ticket';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketBody = body.formData;
    await Ticket.create(ticketBody);

    return NextResponse.json({ message: 'Ticket created' }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();

    if (!tickets) {
      return NextResponse.json(
        { message: 'No tickets found' },
        { status: 404 }
      );
    }

    return NextResponse.json(tickets, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
}

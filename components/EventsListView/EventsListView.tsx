'use client';
import { Event } from '@/types/Event';
import { Stack, Divider } from '@mantine/core';
import { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';
import EventCardSkeleton from '../EventCard/EventCardSkeleton';

export default function EventCardListView({ events }: { events: Event[] }) {
  const [isLoading, setIsLoading] = useState(true);
  const [eventsToday, setEventsToday] = useState<Event[]>([]);
  const [eventsThisWeek, setEventsThisWeek] = useState<Event[]>([]);
  const [eventsNextWeek, setEventsNextWeek] = useState<Event[]>([]);
  const [eventsThisMonth, setEventsThisMonth] = useState<Event[]>([]);
  const [eventsNextMonth, setEventsNextMonth] = useState<Event[]>([]);
  const [eventsThisYear, setEventsThisYear] = useState<Event[]>([]);
  const [eventsBeyondThisYear, setEventsBeyondThisYear] = useState<Event[]>([]);

  const filterEventsToday = (eventsArray: Event[], currentDate: Date) => {

    // let start = new Date();
    // start.setHours(0,0,0,0);

    let end = new Date(currentDate.getTime());
    end.setHours(23, 59, 59, 999);

    return eventsArray.filter(event => new Date(event.start) < end);
  }

  const filterEventsThisWeek = (eventsArray: Event[], currentDate: Date) => {

    // let start = new Date();
    // start.setDate(start.getDate() + 1);
    // start.setHours(0,0,0,0);

    let end = new Date(currentDate.getTime());
    end.setDate(currentDate.getDate() + 7);
    end.setHours(23, 59, 59, 999);
    console.log('next week', end);
    return eventsArray.filter(event => new Date(event.start) < end);
  }

  const filterEventsNextWeek = (eventsArray: Event[], currentDate: Date) => {
    // let start = new Date();
    // start.setDate(start.getDate() + 7);
    // start.setHours(0,0,0,0);

    let end = new Date(currentDate.getTime());
    end.setDate(currentDate.getDate() + 14);
    end.setHours(23, 59, 59, 999);
    console.log('next week', end);
    return eventsArray.filter(event => new Date(event.start) < end);
  }

  const filterEventsThisMonth = (eventsArray: Event[], currentDate: Date) => {

    // let start = new Date(currentDate.getTime());
    // start.setDate(start.getDate() + 14);
    // start.setHours(0,0,0,0);

    let end = new Date(currentDate.getTime());
    end = new Date(end.getFullYear(), end.getMonth() + 1, 0);
    end.setHours(23, 59, 59, 999);
    console.log('this month', end);

    return eventsArray.filter(event => new Date(event.start) < end);
  }

  const filterEventsNextMonth = (eventsArray: Event[], currentDate: Date) => {
    // let start = new Date(currentDate.getTime());
    // start = new Date(start.getFullYear(), start.getMonth() + 1, 1);
    // start.setHours(0,0,0,0);

    let end = new Date(currentDate.getTime());
    end = new Date(end.getFullYear(), end.getMonth() + 2, 0);
    end.setHours(23, 59, 59, 999);
    console.log('next month', end);

    return eventsArray.filter(event => new Date(event.start) < end);
  }

  const filterEventsThisYear = (eventsArray: Event[], currentDate: Date) => {
    // let start = new Date(currentDate.getTime());
    // start = new Date(start.getFullYear(), start.getMonth() + 1, 0);
    // start.setHours(0,0,0,0);

    let end = new Date(currentDate.getTime());
    end = new Date(end.getFullYear(), 12, 0);
    end.setHours(23, 59, 59, 999);
    console.log('this year', end);

    return eventsArray.filter(event => new Date(new Date(event.start)) < end);
  }

  const filterEventsBeyondThisYear = (eventsArray: Event[], currentDate: Date) => {
    let start = new Date(currentDate.getTime());
    start = new Date(start.getFullYear() + 1, 1, 0);
    start.setHours(0, 0, 0, 0);

    return eventsArray.filter(event => new Date(event.start) > start);
  }

  useEffect(() => {
    setIsLoading(true);
    // This useEffect sets all of the dates into their dividers
    let filteredEvents = [...events];
    filteredEvents.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
    let tempEvents: Event[] = [];
    const currentDate = new Date();
    // today
    tempEvents = filterEventsToday(filteredEvents, currentDate)
    setEventsToday(tempEvents);
    filteredEvents = filteredEvents.filter(x => !tempEvents.includes(x));
    // this week
    tempEvents = filterEventsThisWeek(filteredEvents, currentDate)
    setEventsThisWeek(tempEvents);
    filteredEvents = filteredEvents.filter(x => !tempEvents.includes(x));
    // next week
    tempEvents = filterEventsNextWeek(filteredEvents, currentDate)
    setEventsNextWeek(tempEvents);
    filteredEvents = filteredEvents.filter(x => !tempEvents.includes(x));
    // this month
    tempEvents = filterEventsThisMonth(filteredEvents, currentDate)
    setEventsThisMonth(tempEvents);
    filteredEvents = filteredEvents.filter(x => !tempEvents.includes(x));
    // next month
    tempEvents = filterEventsNextMonth(filteredEvents, currentDate)
    setEventsNextMonth(tempEvents);
    filteredEvents = filteredEvents.filter(x => !tempEvents.includes(x));
    // this year
    tempEvents = filterEventsThisYear(filteredEvents, currentDate)
    console.log(tempEvents);
    setEventsThisYear(tempEvents);
    filteredEvents = filteredEvents.filter(x => !tempEvents.includes(x));
    // beyond this year
    setEventsBeyondThisYear(filteredEvents);
    setIsLoading(false);
  }, [events]);





  return (
    <>
      {isLoading ? (
        <Stack>
          <Divider my="xs" mx="md" label="Loading..." labelPosition="center" />
          <EventCardSkeleton />
          <EventCardSkeleton />
          <EventCardSkeleton />
        </Stack>
      ) : (
        <Stack>
          {eventsToday.length > 0 && (
            <>
              <Divider my="xs" label="Today" labelPosition="center" w="100%" />
              {eventsToday.map(event => <EventCard key={event.id} event={event} />)}
            </>
          )}
          {eventsThisWeek.length > 0 && (
            <>
              <Divider my="xs" label="This Week" labelPosition="center" w="100%" />
              {eventsThisWeek.map(event => <EventCard key={event.id} event={event} />)}
            </>
          )}
          {eventsNextWeek.length > 0 && (
            <>
              <Divider my="xs" label="Next Week" labelPosition="center" w="100%" />
              {eventsNextWeek.map(event => <EventCard key={event.id} event={event} />)}
            </>
          )}
          {eventsThisMonth.length > 0 && (
            <>
              <Divider my="xs" label="This Month" labelPosition="center" w="100%" />
              {eventsThisMonth.map(event => <EventCard key={event.id} event={event} />)}
            </>
          )}
          {eventsNextMonth.length > 0 && (
            <>
              <Divider my="xs" label="Next Month" labelPosition="center" w="100%" />
              {eventsNextMonth.map(event => <EventCard key={event.id} event={event} />)}
            </>
          )}
          {eventsThisYear.length > 0 && (
            <>
              <Divider my="xs" label="This Year" labelPosition="center" w="100%" />
              {eventsThisYear.map(event => <EventCard key={event.id} event={event} />)}
            </>
          )}
          {eventsBeyondThisYear.length > 0 && (
            <>
              <Divider my="xs" label={`${new Date().getFullYear() + 1} +`} labelPosition="center" w="100%" />
              {eventsBeyondThisYear.map(event => <EventCard key={event.id} event={event} />)}
            </>
          )}
        </Stack>
      )}
    </>
  )
}

'use client';
import { Event } from '@/types/Event';
import { Text, Space, Box, Stack, Chip, ScrollArea, Flex, Title, Avatar, Card, Image, Group, Badge, Button, useMantineTheme, Tooltip, MediaQuery } from '@mantine/core';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import DateDisplay from '../DateDisplay/DateDisplay';

export default function EventCard({ event }: { event: Event }) {
  const theme = useMantineTheme();

  const formatTimeOfDay = (datestring: Date | string) => {
    const date = new Date(datestring);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${date.getHours() % 12}:${minutes} ${date.getHours() > 12 ? 'PM' : 'AM'}`
  }

  const getMonth = (datestring: Date | string) => {
    const date = new Date(datestring);
    const month = date.toLocaleString('default', { month: 'short' });
    return month;
  }

  return (
    <>
      <Card shadow="sm" padding="md" radius="md" withBorder my="md">
        <Card.Section>
          <Image
            src={event?.image}
            height={100}
            alt="Event Image"
          />
          {/* TODO: set color to user pref for group */}
          <Badge color="cyan" top={8} right={8} pos="absolute">{event?.group?.name}</Badge>
        </Card.Section>
        {/* Below is the section for a desktop view */}
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Group mt="md" w="100%" noWrap>
            <DateDisplay month={getMonth(event.start)} day={new Date(event.start).getDate()} />
            <Group position="apart" noWrap sx={{ flex: "1 1 auto" }}>
              <Stack
                sx={{ flex: "1 1 auto", minWidth: 0, gap: 0 }}>
                <Text weight={500} size="lg" lineClamp={2} sx={{ display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", minWidth: 0 }}>{event.title}</Text>
                <Text size="md" color="dimmed">
                  {`${formatTimeOfDay(event.start)}, ${event.location}`}
                </Text>
              </Stack>
              <Stack>
                <Text weight={500} color="dimmed">Who's Going:</Text>
                <AvatarGroup users={event.rsvpYes} />
              </Stack>
            </Group>
          </Group>
        </MediaQuery>
        {/* Below is the section for a mobile view */}
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Stack mt="md" w="100%">
            <Stack
              sx={{ flex: "1 1 auto", gap: 0 }}>
              <Text weight={500} size="lg" lineClamp={2} sx={{ display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", minWidth: 0 }}>{event.title}</Text>
              <Text size="md" color="dimmed">
                {`${formatTimeOfDay(event.start)}, ${event.location}`}
              </Text>
            </Stack>
            <Group position="apart" sx={{ flex: "1 1 auto" }}>
              <DateDisplay month={getMonth(event.start)} day={new Date(event.start).getDate()} />
              <Stack>
                <Text weight={500} color="dimmed">Who's Going:</Text>
                <AvatarGroup users={event.rsvpYes} />
              </Stack>
            </Group>
          </Stack>
        </MediaQuery>
      </Card>
    </>
  )
}

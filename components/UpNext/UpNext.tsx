'use client';
import { EventsContext } from '@/contexts/events/EventsContext';
import { Event } from '@/types/Event';
import { Flex, Button, Avatar, Card, Group, Badge, Text, Image, Space, Indicator, Box } from '@mantine/core';
import { useContext } from 'react';

export default function UpNext() {

  const { upNext } = useContext(EventsContext);
  console.log('upNext', upNext);
  // returns how long until a date in english
  const timeUntil = (date: Date | undefined) => {
    if (!date) return null;
    date = new Date(date);
    const now = new Date();
    const diff = date.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''}`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''}`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else if (seconds > 0) {
      return `${seconds} second${seconds > 1 ? 's' : ''}`;
    } else {
      return 'now';
    }
  };

  return (
    <>
      <Box p="xs" w="100%">
        <Indicator inline label="Going" color="violet" position="bottom-center" size="18" w="100%">
          <Card shadow="sm" padding="lg" radius="md" mih={100} withBorder>
            <Card.Section p="xs">
              <Flex
                gap="xs"
                justify="center"
                align="center"
                direction="row"
                sx={{ flex: "1 0 auto", margin: "auto 0" }}
              >
                <Image
                  src={upNext?.image}
                  width={50}
                  height={50}
                  alt="Norway"
                  radius="sm"
                />
                <Text weight={500} lineClamp={2}>{upNext?.title}</Text>
              </Flex>
              <Space h="xs" />
              <Flex
                // bg="rgba(0, 0, 0, .3)"
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
              >
                <Text size="sm" color="dimmed">
                  in {timeUntil(upNext?.start)}
                </Text>
              </Flex>
            </Card.Section>
          </Card>
        </Indicator>
      </Box>
    </>
  )
}

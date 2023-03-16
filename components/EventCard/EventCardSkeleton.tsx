
'use client';
import { Card, Skeleton, MediaQuery, Group, Stack } from '@mantine/core';


export default function EventCardSkeleton() {

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder my="md">
      <Card.Section>
        <Skeleton height={100} mb="xl" />
      </Card.Section>
      {/* Below is the section for a desktop view */}
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Group mb="md" >
          <Skeleton height={56} width={56} radius="md" />
          <Stack sx={{ flexGrow: 1 }}>
            <Skeleton height={12} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
          </Stack>
        </Group>
      </MediaQuery>
      {/* Below is the section for a mobile view */}
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Stack mb="md" >
          <Stack sx={{ flexGrow: 1 }}>
            <Skeleton height={12} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
          </Stack>
          <Skeleton height={56} width={56} radius="md" />
        </Stack>
      </MediaQuery>
    </Card>
  )
}



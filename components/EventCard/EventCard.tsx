'use client';
import { Text, Space, Box, Stack, Chip, ScrollArea, Flex, Title, Avatar, Card, Image, Group, Badge, Button, useMantineTheme, Tooltip, MediaQuery } from '@mantine/core';
import DateDisplay from '../DateDisplay/DateDisplay';

export default function EventCard() {
  const theme = useMantineTheme();

  return (
    <>
      <Card shadow="sm" padding="md" radius="md" withBorder my="xl">
        <Card.Section>
          <Image
            src="/summer-time-rendering.webp"
            height={100}
            alt="Norway"
          />
          <Badge color="cyan" top={8} right={8} pos="absolute">Flexxon</Badge>
        </Card.Section>
        {/* Below is the section for a desktop view */}
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Group mt="md" w="100%" noWrap>
            <DateDisplay />
            <Group position="apart" noWrap sx={{ flex: "1 1 auto" }}>
              <Flex
                direction="column"

                sx={{ flex: "1 1 auto", minWidth: 0 }}>
                <Text weight={500} size="lg" lineClamp={2} sx={{ display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", minWidth: 0 }}>Norway Fjord Adventures Test two long</Text>
                <Text size="md" color="dimmed">
                  7:30 PM, 4546 Eli Street
                </Text>
              </Flex>
              <Stack>
                <Text weight={500} color="dimmed">Who's Going:</Text>
                <Tooltip.Group openDelay={300} closeDelay={100}>
                  <Avatar.Group spacing="md">
                    <Tooltip label="John Harrison" withArrow>
                      <Avatar
                        color="blue"
                        radius="xl"
                        sx={(theme) => ({
                          borderColor: theme.colors.dark[6]
                        })}
                      >JH</Avatar>
                    </Tooltip>
                    <Tooltip label="Salah Atiyeh" withArrow>
                      <Avatar
                        color="yellow"
                        radius="xl"
                        sx={(theme) => ({
                          borderColor: theme.colors.dark[6]
                        })}
                      >SA</Avatar>
                    </Tooltip>
                    <Tooltip label="Taylor Mehling" withArrow>
                      <Avatar
                        color="red"
                        radius="xl"
                        sx={(theme) => ({
                          borderColor: theme.colors.dark[6]
                        })}
                      >TM</Avatar>
                    </Tooltip>
                    <Tooltip
                      label={
                        <>
                          <div>John Outcast</div>
                          <div>Levi Capitan</div>
                          <div>John Outcast</div>
                          <div>Levi Capitan</div>
                          <div>John Outcast</div>
                        </>
                      }
                      withArrow
                    >
                      <Avatar
                        radius="xl"
                        sx={(theme) => ({
                          borderColor: theme.colors.dark[6]
                        })}
                      >+5</Avatar>
                    </Tooltip>
                  </Avatar.Group>
                </Tooltip.Group>
              </Stack>
            </Group>
          </Group>
        </MediaQuery>
        {/* Below is the section for a mobile view */}
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Stack mt="md" w="100%">
            <Flex
              direction="column"
              sx={{ flex: "1 1 auto" }}>
              <Text weight={500} size="lg" lineClamp={2} sx={{ display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", minWidth: 0 }}>Norway Fjord Adventures Test two long</Text>
              <Text size="md" color="dimmed">
                7:30 PM, 4546 Eli Street
              </Text>
            </Flex>

            <Group position="apart" sx={{ flex: "1 1 auto" }}>
              <DateDisplay />
              <Stack>
                <Text weight={500} color="dimmed">Who's Going:</Text>
                <Tooltip.Group openDelay={300} closeDelay={100}>
                  <Avatar.Group spacing="md">
                    <Tooltip label="John Harrison" withArrow>
                      <Avatar
                        color="blue"
                        radius="xl"
                        sx={(theme) => ({
                          borderColor: theme.colors.dark[6]
                        })}
                      >JH</Avatar>
                    </Tooltip>
                    <Tooltip label="Salah Atiyeh" withArrow>
                      <Avatar
                        color="yellow"
                        radius="xl"
                        sx={(theme) => ({
                          borderColor: theme.colors.dark[6]
                        })}
                      >SA</Avatar>
                    </Tooltip>
                    <Tooltip label="Taylor Mehling" withArrow>
                      <Avatar
                        color="red"
                        radius="xl"
                        sx={(theme) => ({
                          borderColor: theme.colors.dark[6]
                        })}
                      >TM</Avatar>
                    </Tooltip>
                    <Tooltip
                      label={
                        <>
                          <div>John Outcast</div>
                          <div>Levi Capitan</div>
                          <div>John Outcast</div>
                          <div>Levi Capitan</div>
                          <div>John Outcast</div>
                        </>
                      }
                      withArrow
                    >
                      <Avatar
                        radius="xl"
                        sx={(theme) => ({
                          borderColor: theme.colors.dark[6]
                        })}
                      >+5</Avatar>
                    </Tooltip>
                  </Avatar.Group>
                </Tooltip.Group>
              </Stack>
            </Group>
          </Stack>
        </MediaQuery>
      </Card>
    </>
  )
}

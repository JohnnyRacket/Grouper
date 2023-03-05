'use client';
import { Flex, Button, Avatar, Card, Group, Badge, Text, Image, Space, Indicator, Box } from '@mantine/core';

export default function UpNext() {
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
                  src="/summer-time-rendering.webp"
                  width={50}
                  height={50}
                  alt="Norway"
                  radius="sm"
                />
                <Text weight={500} lineClamp={2}>Norway Fjord Adventures at Johns house</Text>
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
                  in 3 days
                </Text>
              </Flex>
            </Card.Section>
          </Card>
        </Indicator>
      </Box>
    </>
  )
}

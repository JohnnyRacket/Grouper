'use client';
import './globals.css'
import RootStyleRegistry from './emotion';
import { useState } from 'react';
import {
  MantineProvider,
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Sidebar from '@/components/Sidebar/Sidebar';
import HeaderContents from '@/components/HeaderContents/HeaderContents';
import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const queryClient = new QueryClient(
    {
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  }
  );

  return (
    <html lang="en-US">
      <Head>
        <title>Grouper: Group Event Planning</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <body>
        <RootStyleRegistry>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: 'dark',
              // colors: {
              //   // override dark colors to change them for all components
              //   dark: [
              //     '#d5d7e0',
              //     '#acaebf',
              //     '#8c8fa3',
              //     '#666980',
              //     '#4d4f66',
              //     '#34354a',
              //     '#2b2c3d',
              //     '#1d1e30',
              //     '#0c0d21',
              //     '#01010a',
              //   ],
              // },
            }}
          >
            <QueryClientProvider client={queryClient}>
              <AppShell
                layout='alt'
                styles={(theme) => ({
                  main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                  },
                })}
                navbarOffsetBreakpoint="sm"
                navbar={
                  <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 240 }} sx={{ overflowY: "auto" }} h="100%">
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                      {opened ?
                        <Burger
                          opened={opened}
                          onClick={() => setOpened((o) => !o)}
                          size="sm"
                          color={theme.colors.gray[6]}
                          m="sm"
                          mr="xl"
                        />
                        : <></>
                      }
                    </MediaQuery>
                    <Sidebar />
                  </Navbar>
                }
                header={
                  <Header height={{ base: 50, md: 70 }} p="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                        <Burger
                          opened={opened}
                          onClick={() => setOpened((o) => !o)}
                          size="sm"
                          color={theme.colors.gray[6]}
                          mr="xl"
                        />
                      </MediaQuery>

                      <HeaderContents />
                    </div>
                  </Header>
                }
              >
                {children}
              </AppShell>
            </QueryClientProvider>
          </MantineProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
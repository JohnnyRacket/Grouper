'use client';
import './globals.css'
import RootStyleRegistry from './emotion';
import { useState } from 'react';
import {
  MantineProvider,
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ScrollArea,
} from '@mantine/core';
import Sidebar from '@/components/Sidebar/Sidebar';
import HeaderContents from '@/components/HeaderContents/HeaderContents';



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  return (
    <html lang="en-US">
      <head />
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
          </MantineProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
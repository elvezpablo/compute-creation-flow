import * as React from 'react';
import CloudLogo from './src/assets/CloudLogoLight.svg';
import {
  AppShell,
  Navbar,
  Header,
  Group,
  useMantineTheme,
} from '@mantine/core';

import ComputeCreationFlow from './src/compute/ComputeCreationFlow';

export default function App() {
  const theme = useMantineTheme();

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar
          width={{ base: 60, sm: 60, md: 200, lg: 200 }}
          p="xs"
          styles={(theme) => ({
            root: {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#f8f9fa',
            },
          })}
        >
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={44} p="xs">
          <Group>
            <img width="188" height="20" src={CloudLogo} />
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white',
        },
      })}
    >
      <ComputeCreationFlow />
    </AppShell>
  );
}

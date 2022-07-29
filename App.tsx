import * as React from 'react';

import {
  AppShell,
  Navbar,
  Header,
  Title,
  useMantineTheme,
} from '@mantine/core';

import './style.css';
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
        <Header height={64} p="xs">
          <Title order={3} style={{ marginTop: '10px' }}>
            Crusoe Cloud
          </Title>
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

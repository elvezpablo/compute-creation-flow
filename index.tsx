import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from '@mantine/core';
import styled from 'styled-components';
import App from './App';

const CloudBar = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 10px;
	background: linear-gradient(90deg, #c61b1b 0%, #f2ea8b 50.99%, #5dced6 99.91%);
	border-radius: 0px;
`;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const Main = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <StrictMode>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          theme={{
            colorScheme,
            fontFamily: 'Poppins',
            primaryColor: 'green',
            defaultRadius: 'xs',
            colors: {
              green: [
                '#e4faf3',
                '#c6e8df',
                '#a6d7ca',
                '#85c7b5',
                '#64b6a0',
                '#4b9d86',
                '#387a69',
                '#26574b',
                '#12352d',
                '#00140f',
              ],
            },
          }}
        >
          <CloudBar />
          <App />
        </MantineProvider>
      </ColorSchemeProvider>
    </StrictMode>
  );
};

root.render(<Main />);

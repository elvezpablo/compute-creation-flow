import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@mantine/core';

const VMType = styled(Text)`
	border: 1px solid white;
	padding: 0 4px;
	display: inline-block;
	border-radius: ${({ theme }) => theme.radius.xs}px;
	border-color: ${({ theme }) =>
    theme.colors.gray[theme.colorScheme === 'dark' ? 5 : 9]};
	color: ${({ theme }) =>
    theme.colors.gray[theme.colorScheme === 'dark' ? 5 : 9]};
`;

export default VMType;

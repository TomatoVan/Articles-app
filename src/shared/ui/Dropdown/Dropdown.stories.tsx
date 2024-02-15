import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    items: [
        { content: 'Option 1', onClick: () => {} },
        { content: 'Option 2', onClick: () => {} },
        {
            content: 'Option 3', onClick: () => {}, disabled: true,
        },
        {
            content: 'Option 4', onClick: () => {}, href: 'https://google.com',
        },
    ],
    trigger: <Button>Dropdown</Button>,
};

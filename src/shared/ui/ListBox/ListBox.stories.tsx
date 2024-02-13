import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { action, actions, ActionDisplay } from '@storybook/addon-actions';
import { Country } from '../../../entities/Country';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const items = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
];

export const Default = Template.bind({});
Default.args = {
    items,
    onChange: action('onChange'),
    defaultValue: 'defaultValues',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    items,
    value: 'item1',
    onChange: action('onChange'),
    readonly: true,
};

export const TopDirection = Template.bind({});
TopDirection.args = {
    items,
    value: 'item1',
    onChange: action('onChange'),
    direction: 'top',
};

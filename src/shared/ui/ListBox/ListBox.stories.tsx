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
    decorators: [(story) => <div style={{ padding: 150 }}>{story()}</div>],
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

export const TopRightDirection = Template.bind({});
TopRightDirection.args = {
    items,
    value: 'item1',
    onChange: action('onChange'),
    direction: 'top right',
};

export const TopLeftDirection = Template.bind({});
TopLeftDirection.args = {
    items,
    value: 'item1',
    onChange: action('onChange'),
    direction: 'top left',
};

export const BottomLeftDirection = Template.bind({});
BottomLeftDirection.args = {
    items,
    value: 'item1',
    onChange: action('onChange'),
    direction: 'bottom left',
};

export const BottomRightDirection = Template.bind({});
BottomRightDirection.args = {
    items,
    value: 'item1',
    onChange: action('onChange'),
    direction: 'bottom right',
};

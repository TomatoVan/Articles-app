import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from '../Text/Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title title title',
    text: 'description description description',

};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'title title title',
    text: 'description description description',

};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'onlyTitle',

};

export const onlyDescription = Template.bind({});
onlyDescription.args = {
    text: 'onlyDescription',
};

export const Error = Template.bind({});
Error.args = {
    title: 'title title title',
    text: 'description description description',
    theme: TextTheme.ERROR,
};

export const sizeL = Template.bind({});
sizeL.args = {
    title: 'title title title',
    text: 'description description description',
    size: TextSize.L,

};

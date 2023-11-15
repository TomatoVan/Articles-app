import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'title title title',
    text: 'description description description',

};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'onlyTitle',

};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyDescriptionDark = Template.bind({});
onlyDescriptionDark.args = {
    text: 'onlyDescription',
};
onlyDescriptionDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'title title title',
    text: 'description description description',
    theme: TextTheme.ERROR,
};

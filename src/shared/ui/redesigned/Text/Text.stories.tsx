import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';
import { Theme } from '@/shared/const/theme';

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
    variant: 'error',
};

export const sizeL = Template.bind({});
sizeL.args = {
    title: 'title title title',
    text: 'description description description',
    size: 'l',
};

export const sizeM = Template.bind({});
sizeM.args = {
    title: 'title title title',
    text: 'description description description',
    size: 'm',
};

export const sizeS = Template.bind({});
sizeS.args = {
    title: 'title title title',
    text: 'description description description',
    size: 's',
};

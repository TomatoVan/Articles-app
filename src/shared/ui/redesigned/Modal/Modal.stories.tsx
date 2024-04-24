import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab\n' +
        '                accusantium aliquid architecto autem consequuntur debitis et facere,\n' +
        '                laudantium modi nostrum nulla obcaecati odit quas quod sapiente,\n' +
        '                veritatis? Illo, veritatis.',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab\n' +
        '                accusantium aliquid architecto autem consequuntur debitis et facere,\n' +
        '                laudantium modi nostrum nulla obcaecati odit quas quod sapiente,\n' +
        '                veritatis? Illo, veritatis.',
    isOpen: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

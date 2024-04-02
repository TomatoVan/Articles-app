import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({})];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'title',
                    description: 'description',
                },
                {
                    id: '2',
                    title: 'title',
                    description: 'description',
                },
                {
                    id: '3',
                    title: 'title',
                    description: 'description',
                },
            ],
        },
    ],
};

export const WithLink = Template.bind({});
WithLink.args = {};

WithLink.decorators = [StoreDecorator({})];

WithLink.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'title',
                    description: 'description',
                    href: 'link',
                },
            ],
        },
    ],
};

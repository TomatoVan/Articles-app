import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '../../../../entities/User';
import { AvatarDropDown } from './AvatarDropDown';

export default {
    title: 'features/AvatarDropDown',
    component: AvatarDropDown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropDown>;

const Template: ComponentStory<typeof AvatarDropDown> = (args) => <AvatarDropDown />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({ user: { authData: { id: '1', username: '123', roles: [UserRole.USER, UserRole.ADMIN] } } })];

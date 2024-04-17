import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainLayout } from './MainLayout';

export default {
    title: 'shared/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
    <MainLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    className: 'custom-class',
    header: <div>Header</div>,
    content: <div>Content</div>,
    sidebar: <div>Sidebar</div>,
    toolbar: <div>Toolbar</div>,
};

export const WithoutToolbar = Template.bind({});
WithoutToolbar.args = {
    header: <div>Header</div>,
    content: <div>Content</div>,
    sidebar: <div>Sidebar</div>,
};

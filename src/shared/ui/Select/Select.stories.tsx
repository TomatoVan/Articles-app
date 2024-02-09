import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '../Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Choose text',
    options: [
        { value: '123', content: '1 part' },
        { value: '1234', content: '2 part' },
        { value: '1235', content: '3 part' },
    ]
    ,
};

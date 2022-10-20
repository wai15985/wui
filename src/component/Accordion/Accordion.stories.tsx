import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from './Accordion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Accordion',
  component: Accordion,
  argTypes: {
    children: {
      control: false
    },
    icon: {
      table: { disable: true }
    },
    className: {
      table: { disable: true }
    }
  }
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  label: 'Button',
  children: (
    <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
    </div>
  )
};

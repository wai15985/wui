import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CircularProgressBar } from './CircularProgressBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CircularProgressBar',
  component: CircularProgressBar,
  argTypes: {}
} as ComponentMeta<typeof CircularProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircularProgressBar> = args => (
  <CircularProgressBar {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  value: 50
};

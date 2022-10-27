import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from './Drawer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    children: { control: 'text' }
  }
} as ComponentMeta<typeof Drawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Drawer> = args => <Drawer {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  open: false,
  position: 'left',
  children: (
    <div style={{ padding: '16px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis elit a
      sollicitudin interdum. Ut bibendum odio eu dui finibus consequat. Fusce elementum arcu non
      lectus tristique fermentum. Suspendisse commodo gravida ex. Sed interdum, dolor luctus rhoncus
      tincidunt, nisi justo efficitur massa, quis dapibus dolor turpis eu justo. Praesent suscipit
      et ipsum imperdiet hendrerit. Donec eget velit neque. Etiam tortor magna, hendrerit eget
      pharetra ac, scelerisque sed magna.
    </div>
  )
};

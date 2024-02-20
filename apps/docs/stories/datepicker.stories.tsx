import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "@sevenam/datepicker";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => <DatePicker />,
  args: {},
};

import { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    placeholder: "Input",
    onChange: () => ({}),
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Required: Story = {
  args: {
    type: "text",
    required: false,
    value: "input",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    value: "input@gmail.com",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    value: "1234567",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    value: "input",
  },
};

import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { IModalInputSelectionProps, ModalInputSelection } from "./ModalInputSelection";

export default {
  title: "Components/ModalInputSelection",
  component: ModalInputSelection,
  args: {
    title: 'Options',
    inputs: ['input1', 'input2', 'input3'],
  },
  argTypes: {
    closeFunction: { action: 'closed' },
    openSessionFunction: { action: 'open' },
  }
} as Meta;

export const Default = (args: IModalInputSelectionProps) => <ModalInputSelection {...args} />;


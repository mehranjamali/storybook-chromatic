import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./button";

export default {
   title: "common/button",
   component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = { label: "Button", buttonClassName: "px-3 py-2 bg-sky-400 rounded-lg text-sm" };

export const redButton = Template.bind({});
redButton.args = { label: "Button", buttonClassName: "px-3 py-2 bg-red-500 rounded-lg text-sm" };

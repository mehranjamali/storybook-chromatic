import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spinner, initialSize } from "../spinner/spinner";

export default {
   title: "common/spinner",
   component: Spinner,
   argTypes: { color: { control: "text" }, spin: { control: "boolean" } },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args: any) => <Spinner {...args} />;

const smallSize: typeof initialSize = {
   layer1: { height: "h-6", width: "w-6" },
   layer2: { height: "h-4", width: "w-4" },
   layer3: { height: "h-2", width: "w-2" },
};

export const DefaultSpinner = Template.bind({});
DefaultSpinner.args = {
   color: "border-sky-500",
   spin: true,
   size: smallSize,
};

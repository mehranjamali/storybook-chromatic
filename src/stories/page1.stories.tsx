import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Page1 } from "./page1";
import { test2 as CartTest2, test1 as CartTest1 } from "./cart.stories";
import { defaultButton, redButton } from "./button.stories";

export default {
   title: "pages/page1",
   component: Page1,
   argTypes: { page1ClassName: { control: "text" } },
} as ComponentMeta<typeof Page1>;

type page1ArgsType = {
   buttonArgs: typeof defaultButton;
   cartArgs: typeof CartTest1;
   page1ClassName: string;
};

const Template: ComponentStory<typeof Page1> = (args: page1ArgsType) => <Page1 {...args} />;

export const test1 = Template.bind({});
test1.args = { buttonArgs: defaultButton.args, cartArgs: CartTest2.args, page1ClassName: "border-2 p-3 rounded-lg" };

export const test2 = Template.bind({});
test2.args = { buttonArgs: redButton.args, cartArgs: CartTest1.args, page1ClassName: "border-2 p-3 rounded-lg" };

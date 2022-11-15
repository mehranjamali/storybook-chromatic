import { ComponentMeta, ComponentStory, DecoratorFn } from "@storybook/react";
import { Cart } from "./cart";

// const withBorder: DecoratorFn = (Component: any) => {
//    return (
//       <div className="rounded-md border border-slate-500">
//          <Component />
//       </div>
//    );
// };

export default {
   title: "Components/Common/Cart",
   Comment: Cart,
   argTypes: { backgroundColor: { control: "color" }, className: { control: "text" } },
   parameters: { layout: "fullscreen" },
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const test1 = Template.bind({});
test1.args = { className: "p-3" };
// Default.argTypes = { backgroundColor: { control: "inline-radio", options: ["red", "green", "blue"] } };

export const test2 = Template.bind({});
// test1.decorators = [withBorder];
test2.args = {
   className: "rounded-md border border-slate-500 p-3",
};

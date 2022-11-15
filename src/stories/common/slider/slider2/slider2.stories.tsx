import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Slider } from "./slider";

export default {
   title: "common/slider/two",
   component: Slider,
   argTypes: { theme: { control: "text" } },
} as ComponentMeta<typeof Slider>;

const images = [
   "https://picsum.photos/500/300?random=1",
   "https://picsum.photos/500/300?random=2",
   "https://picsum.photos/500/300?random=3",
   "https://picsum.photos/500/300?random=4",
   "https://picsum.photos/500/300?random=5",
   "https://picsum.photos/500/300?random=6",
];

const Template: ComponentStory<typeof Slider> = (args: any) => <Slider {...args} />;

export const slider2 = Template.bind({});
slider2.args = { images: images };

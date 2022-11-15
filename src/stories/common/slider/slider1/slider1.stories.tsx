import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Slider } from "./slider1";

export default {
   title: "common/slider/one",
   component: Slider,
} as ComponentMeta<typeof Slider>;

const popularList = [
   { id: 1, title: "شماره یک در لیست", img: "https://picsum.photos/500/300?random=1" },
   { id: 2, title: "شماره دو در لیست", img: "https://picsum.photos/500/300?random=2" },
   { id: 3, title: "شماره سه در لیست", img: "https://picsum.photos/500/300?random=3" },
   { id: 4, title: "شماره چهار در لیست", img: "https://picsum.photos/500/300?random=4" },
   { id: 5, title: "شماره پنج در لیست", img: "https://picsum.photos/500/300?random=5" },
];

const Template: ComponentStory<typeof Slider> = (args: any) => <Slider {...args} />;

export const slider1 = Template.bind({});
slider1.args = {
   popularList: popularList,
};

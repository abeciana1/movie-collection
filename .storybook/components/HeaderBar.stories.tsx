import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HeaderBar from "@/components/movie/Navigation/HeaderBar";

const meta: Meta<typeof HeaderBar> = {
  component: HeaderBar,
  title: "Navigation/HeaderBar",
};

export default meta;

export const Desktop: StoryObj<typeof HeaderBar> = {
  args: {},
};
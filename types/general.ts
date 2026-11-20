export type CursorPoints = "pointer" | "not-allowed" | "progress" | "copy";

export type GradientOptions = "sunriseDrift"

export interface ProtectedLayoutProps extends LayoutProps<"/"> {
  fullWidth?: React.ReactNode;
}
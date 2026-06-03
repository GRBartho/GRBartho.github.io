export interface ButtonProps {
  variant?: "green" | "gray";
  icon?: React.ReactNode;
  children: string;
  onClick: () => void;
}

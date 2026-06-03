// Filename: Button.stories.tsx
//
// Component: Button Stories
//
// Purpose:
// This file defines Storybook "stories" for the Button component.
// Stories are isolated examples that render the Button in different states
// so we can visually test and document the component without running the full app.
//
// What this file does:
// - Imports Storybook types (Meta, StoryObj) for typing and Storybook configuration.
// - Imports the local Button component being showcased.
// - Exports Storybook metadata (title, component, controls) so Storybook can render it.
// - Defines multiple stories (Contained, Text) that pass different props (args) to Button.

import type { Meta, StoryObj } from "@storybook/react"; // Imports TypeScript types for Storybook metadata and story objects
import Button from "./Button"; // Imports the Button component we want to display in Storybook
import EmailIcon from "@mui/icons-material/Email"; // Imports the email icon from mui icons

// Storybook "meta" configuration for this component.
// Meta tells Storybook:
// - where to place this component in the sidebar (title),
// - which React component to render (component),
// - extra behavior like auto-generated docs (tags),
// - and how to build controls for props (argTypes).
const metta: Meta<typeof Button> = {
  // Sidebar location in Storybook: "Components" folder -> "Button" page
  title: "Components/Button",

  // The actual component Storybook should render for these stories
  component: Button,

  // Enables Storybook autodocs generation (if configured in your Storybook setup)
  tags: ["autodocs"],

  // argTypes defines controls in the Storybook UI so users can tweak props live.
  // Each key maps to a prop name on the Button component.
  argTypes: {
    // Adds a dropdown to switch the variant prop between "text" and "contained"
    variant: {
      control: { type: "select", options: ["green", "gray"] },
    },

    // Adds a text input control so users can change what is rendered inside the Button
    children: { control: "text" },
  },
};

// Default export is required by Storybook.
// It exports the metadata object so Storybook can register this component’s stories.
export default metta;

// Story type alias for convenience.
// StoryObj<typeof Button> ensures "args" matches Button's props type shape.
type Story = StoryObj<typeof Button>;

// Story: Green
// Displays the Button component using a "contained" variant.
// The "args" object supplies default prop values for this story.
export const Green: Story = {
  args: {
    variant: "green",
    children: "Green Button",
    onClick: () => alert("Button clicked"),
  },
};

export const Gray: Story = {
  args: {
    variant: "gray",
    children: "Gray Button",
    onClick: () => alert("Button clicked"),
  },
};

export const IconButton: Story = {
  args: {
    variant: "green",
    children: "Send an Email",
    icon: <EmailIcon/>
  }
}

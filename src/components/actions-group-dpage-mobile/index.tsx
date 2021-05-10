import React from "react"
import { Button, ButtonGroup } from "@material-ui/core"
import { Web, GitHub, KeyboardBackspace } from "@material-ui/icons"
import { navigate } from "gatsby"

type ActionsProps = {
  label: string
  link: string
  iconName: keyof typeof iconSet
}

export interface ActionsGroupProps {
  actionsGroup: ActionsProps[]
}

export const iconSet = {
  iconWeb: {
    icon: <Web />,
  },
  iconGitHub: {
    icon: <GitHub />,
  },
  iconBack: {
    icon: <KeyboardBackspace />,
  },
}
export const icons = [
  {
    name: "Web",
    el: <Web />,
  },
  {
    name: "GitHub",
    el: <GitHub />,
  },
  {
    name: "KeyboardBackspace",
    el: <KeyboardBackspace />,
  },
]
const MobileActionsGroup: React.FC<ActionsGroupProps> = ({ actionsGroup }) => {
  return (
    <ButtonGroup
      variant="outlined"
      color="primary"
      aria-label="outlined primary button group"
      style={{ marginBottom: "clamp(3rem, 5vh, 4rem)" }}
    >
      {actionsGroup.map(
        (action, idx) =>
          action.link !== "N/A" &&
          (action.link !== "/projects" ? (
            <Button
              size="large"
              key={idx}
              href={action.link}
              target="__blank"
              rel="noopener noreferer"
            >
              {iconSet[action.iconName].icon}
            </Button>
          ) : (
            <Button
              size="large"
              key={idx}
              onClick={() => navigate(action.link)}
            >
              {iconSet[action.iconName].icon}
            </Button>
          ))
      )}
    </ButtonGroup>
  )
}

export default MobileActionsGroup

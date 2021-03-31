import React from "react"
import { Button, ButtonGroup } from "@material-ui/core"

import { iconSet } from "../../components/actions-group-dpage-mobile"
import { navigate } from "gatsby"
import { ActionsGroupProps } from "../actions-group-dpage-mobile"

const DesktopActionsGroup: React.FC<ActionsGroupProps> = ({ actionsGroup }) => {
  return (
    <ButtonGroup
      variant="outlined"
      color="primary"
      aria-label="outlined primary button group"
      style={{ marginBottom: "clamp(3rem, 5vh, 4rem)" }}
    >
      {actionsGroup.map((action, idx) => (
        <Button
          size="large"
          key={idx}
          onClick={() => navigate(action.link)}
          startIcon={iconSet[action.iconName].icon}
        >
          {action.label}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default DesktopActionsGroup

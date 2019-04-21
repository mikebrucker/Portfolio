import React from "react";
import Button from "@material-ui/core/Button";
import "../../scss/ExternalLinkButtons.scss";

const ExternalLinkButtons = ({ links }) => {
  const linkButtons = links
    ? links.map(link => {
        return (
          <a
            className="ExternalLinkButton"
            key={link.name}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="primary">
              {link.name} {<link.icon />}
            </Button>
          </a>
        );
      })
    : null;

  return <div className="ExternalLinkButtons">{linkButtons}</div>;
};

export default ExternalLinkButtons;

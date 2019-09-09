import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

export default function EpisodeCard(props) {
    const { episode } = props;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{episode.title}</Card.Header>
        
        <Card.Description>
          First aired: {episode.air_date}
        </Card.Description>

        <Card.Description>
          Created: {episode.created}
        </Card.Description>
      </Card.Content>

      
    </Card>
  )
}

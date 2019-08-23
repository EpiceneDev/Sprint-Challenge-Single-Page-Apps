import React, { Link } from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  const { character } = props;
  console.log("CharacterCard props: ", props);

  return (
    <Card>
      <Image src={character.image} wrapped ui={false} />
      
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>{ character.species} {character.status}</Card.Meta>
        <Card.Description>
          Location: {character.location.name}
        </Card.Description>
        <Card.Description>
          Origin: {character.origin.name}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Link to="/EpisodeList">
          <Icon name='user' />
          Episodes
        </Link>
      </Card.Content>
    </Card>
  )
}

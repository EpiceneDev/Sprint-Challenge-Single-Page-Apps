import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function LocationCard(props) {
  const { name, type, dimension, residents, id } = props;
  console.log("LocationCard props:", props)

  return (
    <>
      
        <Card>
          <Card.Content>
            <Card.Header>{props.location.name}</Card.Header>
            
            <Card.Description>
              {props.location.type} - {props.location.dimension}
            </Card.Description>
          </Card.Content>

          <Card.Content extra>
            { props.location.residents.map(resident => ( 
              <ul>
                <li key = { resident }
                  id = { id }
                  className = "resident">{ resident }>
                </li>
              </ul>
            ))}
            </Card.Content>
        </Card>
      
    </>
  )
}

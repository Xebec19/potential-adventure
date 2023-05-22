import React from "react";

import { Avatar, Button, Card, Text } from "react-native-paper";
import styled from "styled-components";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const StyledCard = styled(Card)`
  margin: 8px;
`;

export default function Item() {
  return (
    <StyledCard>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </StyledCard>
  );
}

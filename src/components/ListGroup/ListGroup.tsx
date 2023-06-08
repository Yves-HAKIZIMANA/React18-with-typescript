import { MouseEvent, useState } from "react";
import Button from "../Button";
import "./ListGroup.css";
import styled from "styled-components";

interface  ListItemProps{
  active: boolean;
}


const List = styled.ul`
  list-style: none;
  padding: none;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0px;
  background-color: ${ props => props.active ? "blue" : "none"}
`;



interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [color, setColor] = useState("color");

  return (
    <>
      <h1>bootstrap colors</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setColor(item);
              onSelectItem(item);
            }}>
            {item}
          </ListItem>
        ))}
      </List>
      <Button color={color}>{color}</Button>
    </>
  );
}

export default ListGroup;

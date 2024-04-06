import React, { useState } from "react";
import { VStack, Heading, Button, Input, List, ListItem, ListIcon, IconButton, Image } from "@chakra-ui/react";
import { FaPlus, FaFolder, FaFileAlt, FaTrash } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]); // This would represent files and folders
  const [newItemName, setNewItemName] = useState("");

  const handleNewItemChange = (event) => {
    setNewItemName(event.target.value);
  };

  const handleAddItem = () => {
    if (newItemName.trim() === "") return;
    const newItem = {
      id: Date.now(),
      name: newItemName,
      type: "file", // For simplicity, we're only adding files
    };
    setItems([...items, newItem]);
    setNewItemName("");
  };

  const handleDeleteItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <VStack spacing={4} p={8}>
      <Heading>My Drive</Heading>
      <Input placeholder="New file name" value={newItemName} onChange={handleNewItemChange} size="md" />
      <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddItem}>
        Add File
      </Button>
      <List w="100%">
        {items.map((item) => (
          <ListItem key={item.id} d="flex" alignItems="center" justifyContent="space-between" p={2} borderWidth="1px">
            <ListIcon as={item.type === "file" ? FaFileAlt : FaFolder} color="blue.500" />
            {item.name}
            <IconButton aria-label="Delete item" icon={<FaTrash />} onClick={() => handleDeleteItem(item.id)} size="sm" colorScheme="red" />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;

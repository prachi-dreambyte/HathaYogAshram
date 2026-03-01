import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Switch,
  Text,
  VStack,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";

export default function HomepageBanner() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [isActive, setIsActive] = useState(true);

  const toast = useToast();
  const boxBg = useColorModeValue("white", "navy.700");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!image) {
      toast({ title: "Please select an image", status: "warning" });
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("link", link);
    formData.append("isActive", isActive);

    const res = await fetch("http://localhost:5000/api/banners", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      toast({ title: "Banner uploaded!", status: "success" });
      setImage(null);
      setPreview(null);
      setTitle("");
      setLink("");
    }
  };

  return (
    <Box pt={{ base: "130px", md: "80px" }}>
      <Box bg={boxBg} p="6" borderRadius="20px" boxShadow="md">
        <Text fontSize="2xl" fontWeight="bold" mb="6">
          Upload Homepage Banner
        </Text>

        <VStack spacing="5">
          <FormControl>
            <FormLabel>Banner Image</FormLabel>
            <Input type="file" accept="image/*" onChange={handleImageChange} />
          </FormControl>

          {preview && (
            <Image
              src={preview}
              boxSize="200px"
              objectFit="cover"
              borderRadius="12px"
            />
          )}

          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Redirect Link</FormLabel>
            <Input
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </FormControl>

          <FormControl display="flex" alignItems="center">
            <FormLabel mb="0">Active</FormLabel>
            <Switch
              isChecked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />
          </FormControl>

          <Button colorScheme="blue" onClick={handleSubmit}>
            Upload Banner
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
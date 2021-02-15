import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";

const BlogPostForm = ({ initialValues, onSubmit }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(value) => setTitle(value)}
      />

      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(value) => setContent(value)}
      />

      <Button
        title="Save Post"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    marginStart: 5,
    marginEnd: 5,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginStart: 5,
    marginBottom: 5,
  },
});

export default BlogPostForm;

import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { Alert, Box } from "@chakra-ui/react";
const { Dragger } = Upload;

const DragDrop = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const props = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setUploadedFile(info.file); // Set the uploaded file to state
        console.log("this is uploaded", uploadedFile);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      Alert("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Box p="2">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
      </Dragger>
      {uploadedFile && (
        <Box mt="4">
          <Alert status="success">
            File "{uploadedFile.name}" has been uploaded.
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default DragDrop;

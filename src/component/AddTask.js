import React, { useRef, useState } from "react";
import { Row, Button, Form, Input } from "antd";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
const AddTask = ({ doAddTask, keyTask }) => {
  const [displayForm, setdisplayForm] = useState(false);
  const valueRef = useRef(null);

  const handleToAddTask = async () => {
    await setdisplayForm(true);
    valueRef.current.focus();
  };
  const handleExit = () => {
    setdisplayForm(false);
  };
  const handleAddCard = (values) => {
    if (!doAddTask) return;
    doAddTask(values.add, keyTask);
    setdisplayForm(false);
  };
  return (
    <Row style={{ padding: "10px" }}>
      {displayForm ? (
        <Form layout="inline" onFinish={(values) => handleAddCard(values)}>
          <Form.Item
            name="add"
            rules={[{ required: true, message: "Please input title!" }]}
          >
            <Input ref={valueRef} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" style={{ color: "#ffffff", backgroundColor: "#00b33c", marginTop: '5px', paddingLeft: '20px', paddingRight: '20px'}}>Add</Button>
            <Button onClick={handleExit} size = 'small' style={{ border: "none" , backgroundColor: 'transparent', marginTop: '5px', fontSize: '20px', fontWeight: 'bold'}}>
              <CloseOutlined />
            </Button>
          </Form.Item>
        </Form>
      ) : (          
        <Row onClick={handleToAddTask} style={{ border : 'none' , backgroundColor: 'd9d9d9', margin : '10px'}}>
          <PlusOutlined style={{fontSize: '20px', marginRight: '10px'}} />
          Add other card
        </Row>
      )}
    </Row>
  );
};
export default AddTask;

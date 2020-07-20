import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Popover } from "antd";
import React, { useRef, useState } from "react";
import ListTask from "./ListTask";
import AddTask from "./AddTask";
import { useDispatch, useSelector } from "react-redux";
import { addNewCard, addNewTask, removeCard } from "../actions/task";
const ListCart = () => {
  const [displayForm, setdisplayForm] = useState(false);
  const [displayButton, setdisplayButton] = useState({visible: false, key: ''});
  // const [displayButton, setdisplayButton] = useState(false); 
  const valueRef = useRef(null);

  const list = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToAdd = async () => {
    await setdisplayForm(true);
    valueRef.current.focus();
  };

  const handleExit = () => {
    setdisplayForm(false);
  };

  const handleAddCard = (values) => {
    const action = addNewCard(values.add);
    dispatch(action);
    setdisplayForm(false);
  };

  const doAddTask = (value, i) => {
    const payload = { value: value, key: i };
    const action = addNewTask(payload);
    dispatch(action);
  };
  const handleClick = (key) => {
    setdisplayButton({visible: !displayButton.visible, key: key});
    // setdisplayButton(!displayButton);
  };
  const handleRemove = (key) => {
    const action = removeCard(key);
    dispatch(action);
    setdisplayButton({visible: false, key: ''});    
  };
  return (
    <Row className="list-card" style={{ margin: "20px" }}>
      {list.map((item, key) => (
        <Col span={6} key={key} style={{marginRight: '20px'}}>
          <Card
            headStyle={{ fontWeight: "bolder", fontSize: "20px", backgroundColor: '#d9d9d9' }}
            bodyStyle={{backgroundColor: '#d9d9d9'}}
            size="small"
            key={key}
            title={item.title}
            extra={
              <Popover
                placement="rightTop"
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                content={<a onClick={() => handleRemove(key)}>Remove</a>}
                trigger="click"
                visible={displayButton.key === key ? displayButton.visible : false}
                // visible={displayButton}
                onVisibleChange={()=>handleClick(key)}
              >
                <Button style={{ border: "none" }}>...</Button>
              </Popover>
            }
            style={{ width: "auto" }}
          >
            <ListTask key={key} index={key} listItem={item} />
            <AddTask doAddTask={doAddTask} key={key} keyTask={key} />
          </Card>
        </Col>
      ))}
      <Col span={6}>
        {displayForm ? (
          <Form
            layout="inline"
            style={{ margin: "40px", backgroundColor:'#d9d9d9', padding: '10px' }}
            onFinish={(values) => handleAddCard(values)}
          >
            <Form.Item
              name="add"
              rules={[{ required: true, message: "Please input title!" }]}
            >
              <Input ref={valueRef} />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ color: "#ffffff", backgroundColor: "#00b33c", marginTop: '5px', paddingLeft: '20px', paddingRight: '20px'}}
                htmlType="submit"
              >
                Add
              </Button>
            </Form.Item>
            <Form.Item>
              <Button size = 'small' style={{ border: "none" , backgroundColor: 'transparent', marginTop: '5px', fontSize: '20px', fontWeight: 'bold'}} onClick={handleExit}>
                <CloseOutlined />
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <Button
            className="button-add"
            onClick={handleToAdd}
            style={{ marginLeft: "40px", paddingLeft: '20px', paddingRight: '20px'}}
          >
            <PlusOutlined />
            Add another list
          </Button>
        )}
      </Col>
    </Row>
  );
};
export default ListCart;

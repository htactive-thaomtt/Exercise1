import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import React from "react";
const { TextArea } = Input;

const ModalItem = ({
  displayModal,
  setDisplayModal,
  index,
  item,
  doSave,
  valueRef,
  doMove,
}) => {
  const handleSave = (value) => {
    if (!doSave) return;
    doSave(value.edit);
  };
  const handleCancel = () => {
    setDisplayModal(false);
  };
  const handleMove = () => {
    if (!doMove) return;
    doMove();
  };
  return (
    <Modal
      mask={true}
      visible={displayModal}
      onCancel={handleCancel}
      footer={null}
    >
      <Row>
        <Col>
          <Form
            onFinish={(value) => handleSave(value)}
            initialValues={{ edit: item.task }}
          >
            <Form.Item name="edit">
              <TextArea ref={valueRef} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Save</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col>
          <Button
            onClick={handleMove}
            style={{ backgroundColor: "#404040", color: "#ffff" }}
          >
            <ArrowRightOutlined />
            Remove
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};
export default ModalItem;

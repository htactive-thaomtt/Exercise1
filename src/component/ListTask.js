import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React, { useRef, useState } from "react";
import ModalItem from "./ModalItem";
import { editTask, moveTask } from "../actions/task";
import { useDispatch } from "react-redux";

const ListTask = ({ index, listItem }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const valueRef = useRef(null);
  const [child, setchild] = useState({});
  const [key, setkey] = useState("");

  const handleEdit = async (item, i) => {
    await setDisplayModal(true);
    await setchild(item);
    await setkey(i);
    valueRef.current.focus();
  };
  const dispatch = useDispatch();
  const doSave = (value) => {
    const payload = { value: value, key: index, keyItem: key };
    const action = editTask(payload);
    dispatch(action);
    setDisplayModal(false);
  };
  const doMove = () => {
    const payload = { key: index, keyItem: key };
    const action = moveTask(payload);
    dispatch(action);
    setDisplayModal(false);
  };
  return (
    <div>
      {listItem.tasks.map((item, i) => (
        <Row
          key={i}
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#ffffff",
            justifyContent: "space-between",
          }}
        >
          <Col span={18}>{item.task}</Col>
          <Col>
            <Button
              style={{ border: "none" }}
              onClick={() => handleEdit(item, i)}
            >
              <EditOutlined />
            </Button>
          </Col>
        </Row>
      ))}
      <ModalItem
        valueRef={valueRef}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        item={child}
        key={key}
        indexItem={key}
        index={index}
        doSave={doSave}
        doMove={doMove}
      />
    </div>
  );
};
export default ListTask;

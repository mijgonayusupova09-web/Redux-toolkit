import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Input, Switch, Card, Typography, Space } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { addTodo, deleteTodo, editTodo } from './todoSlice';

const { Title, Text } = Typography;

function ReduxSync() {
  const { data } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [openAdd, setAddOpen] = useState(false);
  const [addName, setAddName] = useState('');
  const [addStatus, setAddStatus] = useState(false);

  const [idEdit, setIdEdit] = useState(null);
  const [editName, setEditName] = useState('');
  const [editStatus, setEditStatus] = useState(false);
  const [openEdit, setEditOpen] = useState(false);

  const handleAddTodo = () => {
    if (!addName.trim()) return;
    const newUser = { id: Date.now(), name: addName, status: addStatus };
    dispatch(addTodo(newUser));
    setAddName('');
    setAddStatus(false);
    setAddOpen(false);
  };

  const handleEditTodo = () => {
    if (!editName.trim()) return;
    const updatedUser = { id: idEdit, name: editName, status: editStatus };
    dispatch(editTodo(updatedUser));
    setIdEdit(null);
    setEditName('');
    setEditStatus(false);
    setEditOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Title level={2} className="!mb-0">Todo List</Title>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setAddOpen(true)}
            className="shadow"
          >
            Add Todo
          </Button>
        </div>

        <Modal
          title="Add Todo"
          open={openAdd}
          onOk={handleAddTodo}
          onCancel={() => setAddOpen(false)}
          okText="Add"
        >
          <div className="space-y-4">
            <Input
              placeholder="Todo name"
              value={addName}
              onChange={(e) => setAddName(e.target.value)}
            />
            <div className="flex items-center justify-between">
              <Text>Status</Text>
              <Switch checked={addStatus} onChange={setAddStatus} />
            </div>
          </div>
        </Modal>

        <Modal
          title="Edit Todo"
          open={openEdit}
          onOk={handleEditTodo}
          onCancel={() => setEditOpen(false)}
          okText="Save"
        >
          <div className="space-y-4">
            <Input
              placeholder="Todo name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <div className="flex items-center justify-between">
              <Text>Status</Text>
              <Switch checked={editStatus} onChange={setEditStatus} />
            </div>
          </div>
        </Modal>
        <div className="grid gap-4">
          {data.map((e) => (
            <Card
              key={e.id}
              className="shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <Title level={4} className="!mb-1">{e.name}</Title>
                  <Text type={e.status ? 'success' : 'secondary'}>
                    {e.status ? 'Active' : 'Inactive'}
                  </Text>
                </div>
                <Space>
                  <Button
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => dispatch(deleteTodo(e.id))}
                  />
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => {
                      setIdEdit(e.id);
                      setEditName(e.name);
                      setEditStatus(e.status);
                      setEditOpen(true);
                    }}
                  />
                </Space>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReduxSync;

import React, { useState } from 'react';
import { Cascader, Button, Modal } from 'antd';

// 模拟人员数据
const personData = [
  {
    value: '1',
    label: 'John Doe',
    children: [
      {
        value: '2',
        label: 'Alice Johnson',
      },
      {
        value: '3',
        label: 'Bob Smith',
      },
    ],
  },
  {
    value: '4',
    label: 'Jane Brown',
    children: [
      {
        value: '5',
        label: 'Eve Davis',
      },
      {
        value: '6',
        label: 'Charlie White',
      },
    ],
  },
];

const PersonSelectorAdvance = ({ onSelect, placeholder }) => {
  const [visible, setVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState([]);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
    onSelect(selectedPerson);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={handleOpenModal}>{placeholder}</Button>
      <Modal
        title="Select a Person"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Cascader
          options={personData}
          value={selectedPerson}
          onChange={(value) => setSelectedPerson(value)}
          placeholder="Select a person"
        />
      </Modal>
    </>
  );
};

export default PersonSelectorAdvance;

import { Input, Modal, ModalProps, Space } from 'antd';
import React, { useContext, useState } from 'react';
import { UserContext } from '@contexts/UserContext';

function SettingModal(modalProps: ModalProps) {
  const { setUserId } = useContext(UserContext);

  const [value, setValue] = useState<string>('');

  return (
    <Modal {...modalProps} onOk={() => setUserId(value)}>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </Modal>
  );
}

export default SettingModal;

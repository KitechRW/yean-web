import React, { useEffect, useState } from 'react';

const ViewSubscriber = ({ key, data }: { key: any; data: any }) => {
  const [selectedType, setSelectedType] = useState<any>(null);
  const [prevSelectedType, setPrevSelectedType] = useState<any>(null);
  const [user, setUser] = useState(data);
  const [newData, setNewData] = useState(false);

  useEffect(() => {
    if (user?.type) {
      setSelectedType({ label: user?.type, value: user?.type });
      setPrevSelectedType({ label: user?.type, value: user?.type });
    }
  }, [user]);

  useEffect(() => {
    if (selectedType?.value !== prevSelectedType?.value) {
      setNewData(true);
    }
  }, [selectedType, prevSelectedType]);

  if (!user) {
    return null;
  }
  return (
    <tr
      key={key}
      className="border-b hover:bg-orange-100 bg-gray-100"
    >
      <td className="p-3 px-5">
        <label className="bg-transparent">{user?.email}</label>
      </td>
    </tr>
  );
};

export default ViewSubscriber;

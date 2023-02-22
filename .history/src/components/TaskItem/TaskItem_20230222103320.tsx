import { useState } from "react";
import { Typography, Checkbox } from "antd";

const { Title, Text } = Typography;
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

function TaskItem() {
  return (
    <div className="flex">
      <div className="">
        <Checkbox></Checkbox>
      </div>
      <div className="">
        <Title level={3} className="text-sm">
          Design sign up flow
        </Title>
        <Text>
          By the time a prospect arives at your signup page, in most cases,
          they'v already evaluate...
        </Text>
      </div>
    </div>
  );
}

export default TaskItem;

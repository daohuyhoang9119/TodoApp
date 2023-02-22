import { useState } from "react";
import { Typography, Checkbox } from "antd";

const { Title, Text } = Typography;
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

function TaskItem() {
  return (
    <div className="flex justify-center my-2 bg-white w-fit border-0 rounded-md">
      <div className="m-3">
        <Checkbox></Checkbox>
      </div>
      <div className="m-3">
        <Title level={5} className="text-xs">
          Design sign up flow
        </Title>
        <Text className="text-xs ">
          By the time a prospect arives at your signup page, in most cases,
          they'v already evaluate...
        </Text>
      </div>
    </div>
  );
}

export default TaskItem;

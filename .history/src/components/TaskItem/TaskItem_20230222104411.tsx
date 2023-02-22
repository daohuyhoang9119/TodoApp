import { useState } from "react";
import { Typography, Checkbox } from "antd";

const { Title, Text } = Typography;
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

function TaskItem() {
  return (
    <div className="flex justify-center my-2 bg-white w-fit">
      <div className="">
        <Checkbox></Checkbox>
      </div>
      <div className="">
        <Title level={5} className="text-xs mx-auto">
          Design sign up flow
        </Title>
        <Text className="text-xs mx-auto">
          By the time a prospect arives at your signup page, in most cases,
          they'v already evaluate...
        </Text>
      </div>
    </div>
  );
}

export default TaskItem;

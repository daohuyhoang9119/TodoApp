import { useState } from "react";
import { Typography, Checkbox, Tag } from "antd";
import { LikeOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;
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
        <div className="">
          <Tag icon={<LikeOutlined />} color="success" className="align-center">
            Design
          </Tag>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;

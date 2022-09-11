import { Button, Card, Modal } from 'antd';
import React, { FC, useState } from 'react';
// import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { IComp } from "../../models/IPost";


interface PostItemProps {
  comp?: IComp;
  // remove?: (post: IPost) => void;
  // update?: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ comp }) => {

  // const handleRemove = (event: React.MouseEvent) => {
  //   event.stopPropagation()
  //   if (remove) remove(post)
  // }

  // const handleUpdate = (event: React.MouseEvent) => {
  //   const title = prompt() || ""
  //   if (update) update({ ...post, title })
  // }

  return (
    <>
      <Card
      size="small"
      title={`${comp?.id}. ${comp?.name}`}
      // actions={[
      //   <EditOutlined key="edit" onClick={handleUpdate} />,
      //   <DeleteOutlined key="delete" onClick={handleRemove} />,
      // ]}
      >
        Company city - {comp?.city}
        <br />
        Company logo - {comp?.logo}
        <br />
        Company specialties - {comp?.specialties[0].value}
      </Card>
    </>
  );
};

export default PostItem;
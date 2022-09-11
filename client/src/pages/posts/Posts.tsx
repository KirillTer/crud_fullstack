import React, { useEffect, useState, useRef, useTransition } from "react";
import { postAPI } from "../../services/PostService";
import { Button, Col, Row, Space, Spin, Typography, Slider } from "antd";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from "./PostItem";
import { IComp } from "../../models/IPost";
const { Title, Paragraph } = Typography;

const PostsList = () => {
  const [_, startTransition] = useTransition();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [postsDisplay, setPostsDisplay] = useState([]);
  const lastElement = useRef<Element>();
  const observer = useRef<IntersectionObserver>();
  const {
    data: companies,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery({limit, page});

  const [createPost, {}] = postAPI.useCreatePostMutation();
  // const [updatePost, {}] = postAPI.useUpdatePostMutation();
  // const [deletePost, {}] = postAPI.useDeletePostMutation();

  // useEffect(() => {
  //   if(isLoading) return;
  //   if(observer.current) (observer.current as IntersectionObserver).disconnect();
  //   const callback = function(entries: any) {
  //     if(entries[0].isIntersecting) {
  //       setPage(page + 1);
  //     }
  //   }
  //   observer.current = new IntersectionObserver(callback);
  //   (observer.current).observe(lastElement.current!);
  // }, [postsDisplay]);

  useEffect(() => {
    startTransition(() => {
      if(companies?.length && (page !== 1)) {
        setPostsDisplay([...postsDisplay, ...companies as []]);
      } else if (companies?.length) {
        setPostsDisplay(companies as []);
      }
    });
  }, [companies]);

  useEffect(() => {
    setPage(1);
  }, [limit]);

  const handleCreate = async () => {
    const name = prompt();
    await createPost({ name, logo: name, city: name } as IComp);
  };

  // const handleRemove = (post: IPost) => {
  //   deletePost(post);
  // };

  // const handleUpdate = (post: IPost) => {
  //   updatePost(post);
  // };

  return (
    <div>
      <Row justify="center">
        <Typography>
          <Title level={2} data-testid="posts-page">Posts List</Title>
          <Paragraph>Conquer mode, Redux toolkit query; Redux toolkit; Infinity scroll; faked API (JSONPlacholder)</Paragraph>
        </Typography>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Button onClick={handleCreate}>Add new post</Button>
          <Button onClick={() => refetch()}>Refetch</Button>
          <Slider min={1} max={100} defaultValue={limit} onChange={setLimit}/>
          {isLoading && <Spin />}
          {error && <h1>{JSON.stringify(error)}</h1>}
          <Space direction="vertical" size="small" style={{ display: 'flex', margin: '1rem 0' }}>
            <TransitionGroup>
              {postsDisplay &&
                postsDisplay.map((comp: IComp) => (
                  <CSSTransition
                    key={comp.id}
                    timeout={500}
                    classNames="postAnimation"
                  >
                    <PostItem
                      // remove={handleRemove}
                      // update={handleUpdate}
                      comp={comp}
                    />
                  </CSSTransition>
                ))
              }
            </TransitionGroup>
            {/* <div ref={lastElement as any} style={{height: '20px'}} /> */}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default PostsList;

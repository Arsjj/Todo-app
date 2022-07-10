import React from 'react'
import { Avatar, List } from 'antd'

const TodoList = () => {
  const data = [
    {
      title: 'Ant Design Title 1',
      description: 'A design language',
    },
    {
      title: 'Ant Design Title 2',
      description: 'A design language for background applications',
    },
    {
      title: 'Ant Design Title 3',
      description: 'A design language for background applications',
    },
    {
      title: 'Ant Design Title 4',
      description: 'A design language for background applications',
    },
  ]

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  )
}

export default TodoList

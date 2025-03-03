//这里配置群聊的信息
export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  isGroupDiscussionMode: boolean;
}

export const groups: Group[] = [
  {
    id: 'group2',
    name: '前端开发交流群',
    description: '可以适当打招呼问候自我介绍，但是本群主线是前端开发交流群，请严格按照前端开发交流规则，不能过度闲聊',
    isGroupDiscussionMode: true,
    members: ['ai1', 'ai2', 'ai3', 'ai4'],
  }
];

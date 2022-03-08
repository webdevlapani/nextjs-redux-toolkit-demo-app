import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IUserList } from 'services/type';
import Table, { IColumnsType } from './Table';

export default {
  title: 'Material Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const data: IUserList[] = [
  {
    id: 1,
    name: 'Lakshmi Mehrotra',
    email: 'lakshmi_mehrotra@mohr.net',
    gender: 'female',
    status: 'inactive',
  },
];
const columns: IColumnsType[] = [
  { name: 'Name', key: 'name' },
  { name: 'Email', key: 'email' },
  { name: 'Gender', key: 'gender' },
  { name: 'Status', key: 'status' },
];

export const MTable: ComponentStory<typeof Table> = (args) => (
  <Table {...args} />
);

MTable.args = {
  data,
  columns,
};

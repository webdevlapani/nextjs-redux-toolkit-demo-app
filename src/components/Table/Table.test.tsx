import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IUserList } from 'services/type';
import Table, { IColumnsType } from './Table';

describe('for table component', () => {
  test('render table components', () => {
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
    const props = {
      data,
      columns,
    };
    render(<Table {...props} />);
    const linkElement = screen.getByText(/Lakshmi Mehrotra/i);
    expect(linkElement).toBeInTheDocument();
  });
});

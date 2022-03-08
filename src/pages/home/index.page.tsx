import { Box, CircularProgress, Container } from '@mui/material';
import Table, { IColumnsType } from 'components/Table/Table';
import { NextPage } from 'next';
import { useGetUserListQuery } from 'services/userList';

const columns: IColumnsType[] = [
  { name: 'Name', key: 'name' },
  { name: 'Email', key: 'email' },
  { name: 'Gender', key: 'gender' },
  { name: 'Status', key: 'status' },
];

const HomePage: NextPage = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data = [], isLoading } = useGetUserListQuery('public/v2/users');

  return (
    <Container>
      {!isLoading ? (
        <Table columns={columns} data={data} />
      ) : (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
};

export default HomePage;

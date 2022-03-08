import {
  TableContainer,
  Table as MTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import { FC } from 'react';
import { IUserList } from 'services/type';

export interface IColumnsType {
  name: string;
  key: string;
}
interface ITableProps {
  columns: IColumnsType[];
  data: IUserList[];
}

/**
 *
 * @param data as array for user list
 * @returns
 */

const Table: FC<ITableProps> = ({ columns, data }) => (
  <TableContainer component={Paper}>
    <MTable sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell component="th" key={column.key}>
              {column.name}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.gender}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MTable>
  </TableContainer>
);

export default Table;

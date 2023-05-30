/* eslint-disable react/jsx-key */
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { ChartData } from '../../types/ChartData';

export interface ChartTableProps {
  term: 'daily' | 'weekly' | 'monthly' | 'yearly';
  charts: ChartData[];
}

export default function ChartTable(props: ChartTableProps) {
  const { term, charts } = props;
  return (
    <TableContainer>
      <Table variant='striped' colorScheme='blue'>
        <Thead>
          <Tr>
            <Th>title</Th>
            <Th>artist</Th>
            <Th isNumeric>plays</Th>
          </Tr>
        </Thead>
        <Tbody>
          {charts.map((data, index) => {
            return (
              <Tr key={index}>
                <Td>{data.title}</Td>
                <Td>{data.artist}</Td>
                <Td isNumeric>{data.plays}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

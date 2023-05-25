import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import ChartTab from '../../components/ChartTab';
import NavigationBar from '../../components/NavigationBar';

const TopPage: NextPage = () => {
  return (
    <>
      <NavigationBar>
        <ul>
          <li>
            <Link href='/'>LP Page</Link>
          </li>
          <li>
            <Link href='/setting'>Setting Page</Link>
          </li>
        </ul>
        <Flex>
          <Box />
          <Spacer />
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Filter
            </MenuButton>
            <MenuList>
              <MenuItem>Daily</MenuItem>
              <MenuItem>Weekly</MenuItem>
              <MenuItem>Monthly</MenuItem>
              <MenuItem>Yearly</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <center>
          <Heading>Top Chart</Heading>
        </center>
        <ChartTab />
      </NavigationBar>
    </>
  );
};

export default TopPage;

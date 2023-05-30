import { Box, Center, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { dummyChartData } from '../../commons/dummy.data';
import ChartTable from '../ChartTable';

export default function ChartTab() {
  const { term, charts } = dummyChartData;
  return (
    <>
      <Center>
        <Box w='100%'>
          <Tabs>
            <TabList>
              <Tab>Daily</Tab>
              <Tab>Weekly</Tab>
              <Tab>Monthly</Tab>
              <Tab>Yearly</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <ChartTable term={term} charts={charts} />
              </TabPanel>
              <TabPanel>
                <p>weekly!</p>
              </TabPanel>
              <TabPanel>
                <p>monthly!</p>
              </TabPanel>
              <TabPanel>
                <p>yearly!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Center>
    </>
  );
}

import { Box, Center, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { dummyChartData } from '../../commons/dummy.data';
import ChartTable from '../ChartTable';

export default function ChartTab() {
  const { span, charts } = dummyChartData;
  return (
    <>
      <Center>
        <Box w='60%'>
          <Tabs>
            <TabList>
              <Tab>Daily</Tab>
              <Tab>Weekly</Tab>
              <Tab>Monthly</Tab>
              <Tab>Yearly</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <ChartTable span={span} charts={charts} />
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

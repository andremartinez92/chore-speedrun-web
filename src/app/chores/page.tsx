'use client';

import ChoresTable from '@/features/chores/chores-table';
import Tabs from '@/features/ui/tabs';
import { CREATE_CHORE_ROUTE } from '@/routes';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

const PAGE_TITLE_ID = 'chores-page-title';

export default function Page() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-20"
      aria-labelledby={PAGE_TITLE_ID}
    >
      <Typography variant="h1" id={PAGE_TITLE_ID}>
        Chores
      </Typography>
      <Tabs
        tabsData={[
          {
            label: 'Uncompleted chores',
            tabId: 'uncompleted-tab',
            tabPanelId: 'uncompleted-tab-panel',
            children: (
              <ChoresTable
                isCompleted={false}
                aria-label="Uncompleted chores table"
              />
            ),
          },
          {
            label: 'Completed chores',
            tabId: 'completed-tab',
            tabPanelId: 'completed-tab-panel',
            children: (
              <ChoresTable isCompleted aria-label="Completed chores table" />
            ),
          },
        ]}
      />
      <Button
        variant="contained"
        LinkComponent={Link}
        href={CREATE_CHORE_ROUTE}
      >
        Create chore
      </Button>
    </section>
  );
}
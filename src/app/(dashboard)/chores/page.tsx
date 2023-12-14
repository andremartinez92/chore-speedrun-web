'use client';

import Tabs from '@/components/Tabs';
import { CREATE_CHORE_ROUTE } from '@/routes';
import { Button } from '@mui/material';
import Link from 'next/link';
import ChoresTable from './components/ChoresTable';

const PAGE_TITLE_ID = 'chores-page-title';

export default function Page() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-20"
      aria-labelledby={PAGE_TITLE_ID}
    >
      <h1 id={PAGE_TITLE_ID}>Chores</h1>
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
      <Button variant="contained" onClick={(e) => e.preventDefault()}>
        <Link href={CREATE_CHORE_ROUTE}>Create chore</Link>
      </Button>
    </section>
  );
}

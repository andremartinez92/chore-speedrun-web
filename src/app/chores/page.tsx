'use client';

import { Button } from '@/components/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import ChoresTable from '@/features/chores/chores-table';
import { CREATE_CHORE_ROUTE } from '@/routes';
import Link from 'next/link';

enum ChoreTabEnum {
  COMPLETED = 'COMPLETED',
  UNCOMPLETED = 'UNCOMPLETED',
}

const PAGE_TITLE_ID = 'chores-page-title';

export default function Page() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-8"
      aria-labelledby={PAGE_TITLE_ID}
    >
      <h1 id={PAGE_TITLE_ID}>Chores</h1>

      <Button asChild>
        <Link href={CREATE_CHORE_ROUTE}>Create chore</Link>
      </Button>

      <div className="flex w-full justify-center">
        <Tabs
          defaultValue={ChoreTabEnum.UNCOMPLETED}
          className="flex flex-col items-center"
        >
          <TabsList>
            <TabsTrigger value={ChoreTabEnum.UNCOMPLETED}>
              Uncompleted
            </TabsTrigger>
            <TabsTrigger value={ChoreTabEnum.COMPLETED}>Completed</TabsTrigger>
          </TabsList>

          <TabsContent value={ChoreTabEnum.UNCOMPLETED}>
            <ChoresTable
              isCompleted={false}
              aria-label="Uncompleted chores table"
            />
          </TabsContent>

          <TabsContent value={ChoreTabEnum.COMPLETED}>
            <ChoresTable
              isCompleted={true}
              aria-label="Completed chores table"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

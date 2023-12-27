'use client';

import ChoresTable from '@/features/chores/chores-table';
import { Button } from '@/features/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/features/ui/tabs';
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
      className="flex flex-col items-center justify-center gap-20"
      aria-labelledby={PAGE_TITLE_ID}
    >
      <h1 id={PAGE_TITLE_ID}>Chores</h1>
      <div className="flex w-full justify-start">
        <Tabs defaultValue={ChoreTabEnum.UNCOMPLETED}>
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

      <Button asChild>
        <Link href={CREATE_CHORE_ROUTE}>Create chore</Link>
      </Button>
    </section>
  );
}

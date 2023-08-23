import Layout from "@/components/Layout";
import { Button } from '@mantine/core';

export default function DashboardPage(){
  return (
    <>
      <Layout title='Dashboard Page'>
        <main>
          <p>Dashboard Page </p>
          <Button>
      Settings
    </Button>
        </main>
      </Layout>
    </>
  )
}
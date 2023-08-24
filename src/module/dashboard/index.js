import Layout from "@/components/Layout";
import { Title, Text, Space, Image, Box, Group } from '@mantine/core';

export default function DashboardPage(){
  return (
    
    <>
    
      <Layout title='Dashboard Page'>
        <main>
        <Title order={1}>Dashboard Page </Title>
        <Space h="md" />
        <Space h="md" />
    <Text fz="md">Meriahkan suasana rumah anda dengan produk-produk terkini dari AIKE. 
    Produk yang sudah terjamin kualitas dan reviewnya.
    Anda juga dapat melakukan pemesanan khusus untuk produk dengan spesifikasi tertentu
    </Text>
    
     
      <Space h="md" />
      <Text fz="md">Kursi, sofa, meja, lemari, lampu, semua ada.
       Dekor untuk interior rumah anda pun bisa kami bantu.
       Dengan harga yang sesuai, anda akan mendapatkan kualitas yang unggulan</Text>
      <Space h="md" />
      <Space h="md" />

      <Box maw={240} mx="auto">
      <Group position="center">
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Random unsplash image"
        caption="Sofa kain"
      />
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
        alt="Random unsplash image"
        caption="kursi santai"
      />
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        alt="Random unsplash image"
        caption="lampu gantung"
      />
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        alt="Random unsplash image"
        caption="Meja Kopi"
      />
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        alt="Random unsplash image"
        caption="Almari"
      />
       </Group>
    </Box>
        </main>
        
      </Layout>
    </>
  )
}
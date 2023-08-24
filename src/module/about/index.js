import Layout from "@/components/Layout";
import { Title, Text, Space, Image, Box, Group } from '@mantine/core';

export default function AboutUsPage(){
  return (
    <>
      <Layout title='About Us Page'>
       <main>
        <Title order={1}>About Us Page </Title>
        <Space h="md" />
        <Space h="md" />
    <Text fz="md">AIKE adalah Supermarket furniture yang sudah berpengalaman puluhan tahun. 
      Mendapat review bintang lima dari konsumen. AIKE merupakan pilihan berbelanja tepat untuk keluarga modern</Text>
    
     
      <Space h="md" />
      <Text fz="md">Semua kebutuhan rumah tangga dan makanan kami sediakan dengan jutaan pilihan 
      yang memuaskan anda. Furniture luar negeri, maupun lokal serta kebutuhan pendukungnya. Tak lupa kami 
      juga menyediakan asupan nutrisi untuk anda.</Text>
      <Space h="md" />
      <Space h="md" />
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1624927637280-f033784c1279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
        alt="Random unsplash image"
        caption="Gudang AIKE"
      />
        </main>
        
      </Layout>
    </>
  )
}
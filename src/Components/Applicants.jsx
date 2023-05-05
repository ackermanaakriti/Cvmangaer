import{React,useState} from 'react'
import { useNavigate } from 'react-router-dom';

import {Center,Box,Input,Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  filter,
} from '@chakra-ui/react'
import Navbar from './Navbar';


export function Applicants() {
  const navigate = useNavigate();

  const [searchQuery, SetSearchQuery]= useState("");
  const [cvinfo, SetCvinfo] = useState ([
    {
      name:"Ishika Sharma",
      phone:"9747892876",
      email:"ishikasharma@gmail.com",
      refrences:"asdfghj",
      technology:"Laravel",
      level:"Mid",
      salary:"2000",
      experience:"2 years",
      status:"Hired"

    },
    {
      name:" Suman Khatri",
      phone:"983456789",
      email:"sumankhatri@gmail.com",
      refrences:"Aakriti",
      technology:"React",
      level:"junior",
      salary:"above 40000",
      experience:"2 years"      ,
      status:"Hired"


    },
    {
      name:"Sushmita khatri",
      phone:"98s3456789",
      email:"sushmita@gmail.com",
      refrences:"Sdfghjkl",
      technology:"QA",
      level:"Senior",
      salary:"30000",
      experience:"1 years",
      status:"Rejected"


    }
  ]);
  const OnChangeQuery=(e)=>
  {
    SetSearchQuery(e.target.value);
   
  }
  const Search=()=>{
  const filterdata= cvinfo.filter((fdata) =>
 
  fdata.name.toLowerCase().includes(searchQuery.toLowerCase())||
  fdata.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  SetCvinfo(filterdata);
};

  return (
   <>
   <Navbar/>
   <Center>
    <Box m='auto' mt='30px'>
      <Box  display='flex' gap='5px'>
      <Input ml="18em" width="50vw" type='text' border='2px solid red' value={searchQuery} placeholder='Search here' onChange={OnChangeQuery}/>
      <Button  bgColor='#EF3246'   color='white'onClick={Search}>Search</Button>
      </Box>
    <TableContainer  m='4em'>
  <Table  width="90vw" variant='simple' >
    
    <Thead   >
      <Tr bgcolor=' #d7dee '>
        <Th style={{borderSpacing:'2em'}} textAlign='center' color='white'bgcolor="#ED8E83 ">Name</Th>
        <Th textAlign='center' bgcolor="#EFE4E2" color='#ED8E83'>Email</Th>
        <Th textAlign='center'color='white'bgcolor="#ED8E83 ">Phone</Th>
        <Th textAlign='center' bgcolor="#EFE4E2"color='#ED8E83'>Technology</Th>
        <Th textAlign='center' color='white' bgcolor="#ED8E83 ">Status</Th>
        <Th textAlign='center' bgcolor="#EFE4E2"color='#ED8E83'>Salary</Th>
        
      </Tr>
    </Thead>
   

   
    <Tbody>
    {cvinfo.map((fdata,index)=>
    
      <Tr bgcolor=' #F3DBD5 ' key={index}>
        <Td  pl='4px'>{fdata.name}</Td>
        <Td>{fdata.email}</Td>
        <Td >{fdata.phone}</Td>
        <Td >{fdata.technology}</Td>
        <Td >{fdata.status}</Td>
        <Td >{fdata.salary}</Td>

      </Tr>
           )}
    </Tbody>


   
  </Table>
</TableContainer>
<Button  ml='36em' bgColor='#EF3246' onClick={()=>{navigate("/addapli")}}   color='black'>Add Applicant</Button>

    </Box>
   </Center>
   
   </>
  )
}



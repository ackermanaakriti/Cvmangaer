import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { Box,  FormControl, Button,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input,Center,RadioGroup ,HStack ,Radio,Select } from '@chakra-ui/react'

export  function AddCandidate() {
  const navigate= useNavigate();
  const [data, SetData]= useState([]);
  const [inpValue , SetInValue]= useState({
    fname:"",
    email:"",
    phone:"",
    refrence:"",
    technology:"",
    experience:""

  })

  const getdata =(e)=>
  {
     const {name,value}=e.target;
     console.log(inpValue);
     SetInValue(()=>
     {
      return{
        ...inpValue, [name]:value
      }
     })
  }
  const addData=()=>
  {
   console.log('hell0');
 
    localStorage.setItem('userinfo', JSON.stringify([...data, inpValue]))
  }
  return (
    <>
    <Navbar/>
    <Center>
    <Box height='6vh' my='30px'  justifyContent='center' textAlign='center'>

      {/* full name */}

    <Box textAlign='center' display='flex'>
  <FormControl>
      <FormLabel  fontWeight='bold'> First Name</FormLabel>
  <Input  name='fname' onChange={getdata}  border='1px solid grey'type='text' />
    </FormControl>


<FormControl>
  <FormLabel  fontWeight='bold'>Last Name</FormLabel>
  <Input  name='lanme' onChange={getdata} border='1px solid grey' type='text' />
</FormControl>
    </Box>
 
        {/* email address */}

    <Box m='auto' justifyContent='center' textAlign='center'>
        <FormControl>
  <FormLabel fontWeight='bold'>Email address</FormLabel>
  <Input name='email' onChange={getdata}  border='1px solid grey' type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
    </Box>


            {/* phone */}

    <Box m='auto' justifyContent='center' textAlign='center'>
        <FormControl>
  <FormLabel fontWeight='bold' >Phone</FormLabel>
  <Input  name='phone' onChange={getdata} border='1px solid grey' type='number' />
</FormControl>
    </Box>


            {/* refrences */}

    <Box m='3px' justifyContent='center' textAlign='center'>
        <FormControl>
  <FormLabel fontWeight='bold' color='black '>Refrences</FormLabel>
  <Input name="refrence" onChange={getdata} p='2em' size='lg' type='text' border='2px solid grey' />
</FormControl>
    </Box>


           {/* technologies */}

    <Box m='auto' justifyContent='center' textAlign='center'>
    <FormControl>
  <FormLabel fontWeight='bold'>Technologies</FormLabel>
  <Select name="technology"  border='2px solid grey' placeholder='Select'>
    <option>React</option>
    <option>Dotnet</option>
    <option>QA</option>
  </Select>
</FormControl>
    </Box>


                      {/*job  level */}

    <Box m='auto' justifyContent='center' textAlign='center'>
    <FormControl  m="20px" as='fieldset'>
  <FormLabel fontWeight='bold'   as='legend' >
Level
  </FormLabel>
  <RadioGroup defaultValue='Junior'>
    <HStack spacing='24px'>
      <Radio value='junior'>Junior</Radio>
      <Radio value='mid'>Mid</Radio>
      <Radio value='senior'>Senior</Radio>
    </HStack>
  </RadioGroup>
</FormControl>
    </Box>

                    {/* experience */}

    <Box m='auto' justifyContent='center' textAlign='center'>
        <FormControl>
  <FormLabel fontWeight='bold'>Experience</FormLabel>
  <Input  name="experience"  border='1px solid grey' type='text' />
</FormControl>
    </Box>


    <Button onClick={addData} mt='8px' bgColor='#EF3246'    color='black'>Create Applicant</Button>

    </Box>
    </Center>
    </>
  )
}

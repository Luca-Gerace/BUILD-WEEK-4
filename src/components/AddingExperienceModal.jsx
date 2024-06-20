import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "../modules/ApiAxios";

export default function AddingExperienceModal({ user, open, handleOpen }) {

  // Hooks
  const [inputRole, setInputRole] = useState('')
  const [inputCompany, setInputCompany] = useState('')
  const [inputStartDate, setInputStartDate] = useState('')
  const [inputEndDate, setInputEndDate] = useState('')
  const [inputDescription, setInputDescription] = useState('')
  const [inputArea, setInputArea] = useState('')
  const [experiences, setExperiences] = useState([])
  
  // useEffect(() => {
  //   const newExperience = {
  //     role: inputRole,
  //     company: inputCompany,
  //     startDate: inputStartDate,
  //     endDate: inputEndDate, //null se ancora in corso
  //     description: inputDescription,
  //     area: inputArea,
  //   }

  // }, [newExperience]) 


  const handleCreate = () => {

    const newExperience = {
      role: inputRole,
      company: inputCompany,
      startDate: inputStartDate,
      endDate: inputEndDate, //null se ancora in corso
      description: inputDescription,
      area: inputArea,
    }

    // Chiamata POST
    axios.post(`${user._id}/experiences`, newExperience)
    .then(response => {
        setExperiences([...experiences, response.data]);
    })
    .catch(error => console.error("Error adding experience:", error));

    console.log(newExperience);
  }

  return (
    <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
      <DialogHeader className="justify-between">
        <Typography color="blue-gray" className="mb-1 font-bold">
          Aggiungi esperienza
        </Typography>
        <IconButton
          color="gray"
          size="sm"
          variant="text"
          onClick={handleOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </DialogHeader>
      <DialogBody className="overflow-y-scroll flex flex-col gap-5">
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Ruolo
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            value={inputRole}
            onChange={(e) => setInputRole(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Company
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            value={inputCompany}
            onChange={(e) => setInputCompany(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Start date
          </Typography>
          <Input
            size="lg"
            type="date"
            placeholder="name@mail.com"
            value={inputStartDate}
            onChange={(e) => setInputStartDate(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          /> 
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            End date
          </Typography>
          <Input
            size="lg"
            type="date"
            placeholder="name@mail.com"
            value={inputEndDate}
            onChange={(e) => setInputEndDate(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          /> 
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Description
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />   
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Area
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            value={inputArea}
            onChange={(e) => setInputArea(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />                                        
        </div>
        <Button onClick={handleCreate} className="mt-6" fullWidth>
          sign up
        </Button>
      </form>
      </DialogBody>
    </Dialog>
  );
}
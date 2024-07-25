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
import axios from "../../modules/ApiAxios";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function UpdateProfileModal({ open, handleOpen }) {
  const { user, setUser } = useContext(UserContext);

  // Hooks
  const [inputName, setInputName] = useState(user.name || "");
  const [inputSurname, setInputSurname] = useState(user.surname || "");
  const [inputTitle, setInputTitle] = useState(user.title || "");
  const [inputArea, setInputArea] = useState(user.area || "");

  const handleCreate = () => {
    const updatedUser = {
      ...user,
      name: inputName,
      surname: inputSurname,
      title: inputTitle,
      area: inputArea
    };

    if (!user._id) {
      console.error("User ID is missing");
      return;
    }

    axios.get()
      // eslint-disable-next-line no-unused-vars
      .then(response => {
        return axios.put('', updatedUser);
      })
      .then(response => {
        setUser(response.data);
        handleOpen();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
      <DialogHeader className="justify-between">
        <Typography color="blue-gray" className="mb-1 font-bold">
          Modifica profilo
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
      <DialogBody className="overflow-y-scroll flex flex-col gap-3  pt-0">
      <form>
        <div className="mb-1 flex flex-col gap-3">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Nome
          </Typography>
          <Input
            size="lg"
            placeholder="Nome"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Cognome
          </Typography>
          <Input
            size="lg"
            placeholder="Cognome"
            value={inputSurname}
            onChange={(e) => setInputSurname(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Posizione Lavorativa
          </Typography>
          <Input
            size="lg"
            type="text"
            placeholder="Posizione lavorativa"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Luogo
          </Typography>
          <Input
            size="lg"
            type="text"
            placeholder="luogo"
            value={inputArea}
            onChange={(e) => setInputArea(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />                                         
        </div>
        <Button onClick={handleCreate} className='mt-8 md:mt-12 rounded-full py-[12px] px-[16px]' color="blue" fullWidth>
            Conferma
        </Button>
      </form>
      </DialogBody>
    </Dialog>
  );
}
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useState, useContext } from "react";
import { UserContext } from '../../context/UserContext';
import { updateUserProfile } from '../../services/api';

export default function UpdateProfileModal({ open, handleOpen }) {
  const { user, setUser } = useContext(UserContext);

  // Hooks
  const [inputName, setInputName] = useState(user.name || "");
  const [inputSurname, setInputSurname] = useState(user.surname || "");

  const handleCreate = async () => {
    const updatedUser = {
      name: inputName,
      surname: inputSurname,
    };

    if (!user._id) {
      console.error("User ID is missing");
      return;
    }

    try {
      const response = await updateUserProfile(user._id, updatedUser);
      setUser(response.data);
      handleOpen();
    } catch (error) {
      console.error('Errore durante l\'aggiornamento del profilo:', error);
    }
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
      <DialogBody className="overflow-y-scroll flex flex-col gap-3 pt-0">
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
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
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
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
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
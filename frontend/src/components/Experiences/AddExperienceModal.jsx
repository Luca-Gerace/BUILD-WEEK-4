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
import { postExperience } from "../../services/api";

export default function AddExperienceModal({ setExperiences, add, setAdd, open, handleOpen }) {
  
  const { user } = useContext(UserContext);
  
  const [newExperience, setNewExperience] = useState({
    role: '',
    company: '',
    area: '',
    logo: null,
    description: '',
    startDate: '',
    endDate: '',
  });

  const handleCreate = async () => {
    const formData = new FormData();
    formData.append('role', newExperience.role);
    formData.append('company', newExperience.company);
    formData.append('area', newExperience.area);
    formData.append('description', newExperience.description);
    formData.append('startDate', newExperience.startDate);
    formData.append('endDate', newExperience.endDate);
  
    if (newExperience.logo) {
      formData.append('logo', newExperience.logo);
    }
  
    try {
      const response = await postExperience(user._id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const createdExperience = response.data;
  
      setExperiences(prevExperiences => [...prevExperiences, createdExperience]);
      setAdd(!add);
      handleOpen(); // Chiudi la modale dopo aver creato l'esperienza
      console.log('nuova esperienza:', createdExperience);
    } catch (error) {
      console.error("Errore durante la creazione dell'esperienza:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setNewExperience(prevState => ({
      ...prevState,
      logo: e.target.files[0]
    }));
  };

  return (
    <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
      <DialogHeader className="justify-between">
        <Typography color="blue-gray" className="mb-1 font-bold">
          Aggiungi Esperienza
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
        <form onSubmit={(e) => { e.preventDefault(); handleCreate(); handleOpen();}}>
          <div className="mb-1 flex flex-col gap-3">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Ruolo
            </Typography>
            <Input
              size="lg"
              placeholder="Ruolo"
              name="role"
              value={newExperience.role}
              onChange={handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Azienda
            </Typography>
            <Input
              size="lg"
              placeholder="Azienda"
              name="company"
              value={newExperience.company}
              onChange={handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
            />
            <div className="flex gap-3 mb-1">
              <div className="flex flex-col gap-3">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Data di Inizio
                </Typography>
                <Input
                  size="lg"
                  type="date"
                  placeholder="Data di Inizio"
                  name="startDate"
                  value={newExperience.startDate}
                  onChange={handleChange}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Data di Fine
                </Typography>
                <Input
                  size="lg"
                  type="date"
                  placeholder="Data di Fine"
                  name="endDate"
                  value={newExperience.endDate}
                  onChange={handleChange}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Descrizione
            </Typography>
            <Input
              size="lg"
              placeholder="Descrizione"
              name="description"
              value={newExperience.description}
              onChange={handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Area
            </Typography>
            <Input
              size="lg"
              placeholder="Area"
              name="area"
              value={newExperience.area}
              onChange={handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              required
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Immagine
            </Typography>
            <Input
              size="lg"
              type="file"
              onChange={handleFileChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button type="submit" className='mt-8 md:mt-12 rounded-full py-[12px] px-[16px]' color="blue" fullWidth>
            Aggiungi esperienza
          </Button>
        </form>
      </DialogBody>
    </Dialog>
  );
}
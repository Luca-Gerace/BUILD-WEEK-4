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

export default function AddExperienceModal({ setExperiences, experiences, add, setAdd, user, open, handleOpen }) {

  // Hooks
  const [inputRole, setInputRole] = useState('');
  const [inputCompany, setInputCompany] = useState('');
  const [inputStartDate, setInputStartDate] = useState('');
  const [inputEndDate, setInputEndDate] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputArea, setInputArea] = useState('');
  const [inputImage, setInputImage] = useState(null);

  // Handler
  const handleCreate = () => {
    const newExperience = {
      role: inputRole,
      company: inputCompany,
      startDate: inputStartDate,
      endDate: inputEndDate,
      description: inputDescription,
      area: inputArea,
    };
  
    // Chiamata POST per creare la nuova esperienza
    axios.post(`${user._id}/experiences`, newExperience)
      .then(response => {
        const createdExperience = response.data;
  
        // Aggiorna lo stato delle esperienze con la nuova esperienza
        setExperiences([...experiences, createdExperience]);
  
        // Se c'è un'immagine da caricare
        if (inputImage) {
          const formData = new FormData();
          formData.append('experience', inputImage);
  
          // Chiamata POST per caricare l'immagine
          axios.post(`${user._id}/experiences/${createdExperience._id}/picture`, formData)
            .then(response => {
              // Aggiorna l'esperienza con l'immagine nel modo corretto
              const updatedExperiences = experiences.map(exp =>
                exp._id === createdExperience._id ? { ...createdExperience, picture: response.data.picture } : exp
              );
              setExperiences(updatedExperiences);
              setAdd(!add);
            })
            .catch(error => console.error("Error uploading image:", error));
        } else {
          setAdd(!add);
        }
  
        // Resetta lo stato per il prossimo aggiornamento
        handleOpen(false);
      })
      .catch(error => console.error("Error adding experience:", error));
  };
  
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
      <DialogBody className="overflow-y-scroll flex flex-col pt-0">
        <form className="mb-2">
          <div className="flex flex-col gap-3">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Ruolo
            </Typography>
            <Input
              size="lg"
              placeholder="Ruolo"
              value={inputRole}
              onChange={(e) => setInputRole(e.target.value)}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Company
            </Typography>
            <Input
              size="lg"
              placeholder="Company"
              value={inputCompany}
              onChange={(e) => setInputCompany(e.target.value)}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="flex gap-6">
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray">
                  Start date
                </Typography>
                <Input
                  size="lg"
                  type="date"
                  placeholder="Start date"
                  value={inputStartDate}
                  onChange={(e) => setInputStartDate(e.target.value)}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray">
                  End date
                </Typography>
                <Input
                  size="lg"
                  type="date"
                  placeholder="End date"
                  value={inputEndDate}
                  onChange={(e) => setInputEndDate(e.target.value)}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Description
            </Typography>
            <Input
              size="lg"
              placeholder="Description"
              value={inputDescription}
              onChange={(e) => setInputDescription(e.target.value)}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Area
            </Typography>
            <Input
              size="lg"
              placeholder="Area"
              value={inputArea}
              onChange={(e) => setInputArea(e.target.value)}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Immagine
            </Typography>
            <Input
              size="lg"
              type="file"
              onChange={(e) => setInputImage(e.target.files[0])}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button onClick={handleCreate} className="mt-6" fullWidth>
            Aggiungi esperienza
          </Button>
        </form>
      </DialogBody>
    </Dialog>
  );
}
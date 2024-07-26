import { useState } from "react";
import { Dialog, DialogHeader, DialogBody, IconButton, Typography, Input, Button } from "@material-tailwind/react";
import { patchUserExperience, updateExperienceImage } from "../../services/api";

export default function UpdateExperienceModal({ add, setAdd, user, setExperiences, experience, open, handleOpen }) {
  const [inputRole, setInputRole] = useState(experience.role || "");
  const [inputCompany, setInputCompany] = useState(experience.company || "");
  const [inputStartDate, setInputStartDate] = useState(experience.startDate || "");
  const [inputEndDate, setInputEndDate] = useState(experience.endDate || "");
  const [inputDescription, setInputDescription] = useState(experience.description || "");
  const [inputArea, setInputArea] = useState(experience.area || "");
  const [inputImage, setInputImage] = useState(null);

  const handleUpdate = async () => {
    const updatedExperience = {
      role: inputRole,
      company: inputCompany,
      startDate: inputStartDate,
      endDate: inputEndDate,
      description: inputDescription,
      area: inputArea,
    };

    try {
      // Aggiorna l'esperienza senza l'immagine
      const response = await patchUserExperience(user._id, experience._id, updatedExperience);
      let updatedExp = response.data;

      // Se c'è un'immagine, aggiorna l'immagine separatamente
      if (inputImage) {
        const formData = new FormData();
        formData.append("logo", inputImage);

        const imageResponse = await updateExperienceImage(user._id, experience._id, formData);
        updatedExp = { ...updatedExp, image: imageResponse.data.image };
        setAdd(!add);
      }

      // Aggiorna lo stato delle esperienze
      setExperiences((prevExperiences) =>
        prevExperiences.map((exp) => (exp._id === experience._id ? updatedExp : exp))
      );
      setAdd(!add);
      handleOpen();
    } catch (error) {
      console.error("Errore durante l'aggiornamento dell'esperienza:", error);
    }
  };

  return (
    <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
      <DialogHeader className="justify-between">
        <Typography color="blue-gray" className="mb-1 font-bold">
          Aggiorna esperienza
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
          <Button
            onClick={handleUpdate}
            className="mt-8 md:mt-12 rounded-full py-[12px] px-[16px]"
            color="blue"
            fullWidth
          >
            Aggiorna esperienza
          </Button>
        </form>
      </DialogBody>
    </Dialog>
  );
}
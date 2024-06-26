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
  
  export default function ModalProfile({ user, setUser, open, handleOpen }) {
  
    // Hooks
    const [inputImage, setInputImage] = useState(null);
  
    const handleCreate = () => {
  
      if (!user._id) {
        console.error("User ID is missing");
        return;
      }
  
      if (inputImage) {
        const formData = new FormData();
        formData.append('profile', inputImage);
        axios.post(`${user._id}/picture`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(response => {
            setUser(response.data);
            handleOpen();
          })
      }
    }
    return (
      <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <Typography color="blue-gray" className="mb-1 font-bold">
            Modifica Immagina di profilo
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
                Immagine del profilo
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
            <Button onClick={handleCreate} className='mt-8 md:mt-12 rounded-full py-[12px] px-[16px]' color="blue" fullWidth>
              Conferma
            </Button>
          </form>
        </DialogBody>
      </Dialog>
    )
  }
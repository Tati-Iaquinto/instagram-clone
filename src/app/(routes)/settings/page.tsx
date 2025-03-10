import { Button, TextArea, TextField } from "@radix-ui/themes";
import { UploadIcon } from "lucide-react";

export default function SettingsPage() {
  return (
    <>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl text-bold text-center">Profile settings</h1>
        <form action="">
          <div className="flex items-center gap-4">
            <div>
              <div className="bg-gray-400 size-24 rounded-full">
              </div>
            </div>
            <div>
              <Button variant="surface" className="cursor-pointer">
               <UploadIcon />
                Change avatar
              </Button>
            </div>
          </div>

          <p className="mt-2 font-bold">username</p>
          <TextField.Root placeholder="your_username"/>

          <p className="mt-2 font-bold">name</p>
          <TextField.Root placeholder="John Doe" />

          <p className="mt-2 font-bold">subtitle</p>
          <TextField.Root placeholder="Graphic Designer"/>

          <p className="mt-2 font-bold">bio</p>
          <TextArea placeholder="Graphic Designer" />

          <div className="mt-4 flex justify-center">
            <Button variant="solid" className="cursor-pointer">Save settings</Button>
          </div>
        </form>
      </div>
    </>
  )
}
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Input } from "@/components/ui/input";
import { db } from "../../../../../../utils/dbConfig";
import { Budgets } from "../../../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

const CreateBudget = () => {
  // to manage emoji state for selecting a default emoji in first argument and in second argument user clicks and chooses with setEmojiIcon and updates the state of 1st argument which is emojiIcon
  const [emojiIcon, setEmojiIcon] = useState("☺");

  //   to manage opening state of emoji dialog
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  // useState to manage and store the name of budget from input
  const [name, setName] = useState();

  // useState to manage and store the amount of budget from input
  const [amount, setAmount] = useState();

  // getting user from clerk to add it in the db when creating budget
  const { user } = useUser();

  // managing state and close dialog when budget is created
  const [dialogOpen, setDialogOpen] = useState(false);

  // function to create the new budget
  const onCreateBudget = async () => {
    const createdBudget = await db
      .insert(Budgets)
      .values({
        name: name,
        amount: amount,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        icon: emojiIcon,
      })
      .returning({ insertedId: Budgets.id });

    // show toast message when budget is created
    if (createdBudget) {
      toast("Budget has been created");
      // close dialog now
      setDialogOpen(false);
    }
  };

  return (
    <div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <div
            className="flex flex-col items-center bg-slate-100 p-10 rounded-md border-2 border-dashed cursor-pointer hover:shadow-md"
            onClick={() => setDialogOpen(true)}
          >
            <h2 className="text-3xl">+</h2>
            <h2>Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div className="mt-5 p-2">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                >
                  {emojiIcon}
                </Button>
                {/* this emoji is by default closed but connected and opens with the upward button onClick event connected with a useState */}
                <div className="absolute">
                  <EmojiPicker
                    open={openEmojiPicker}
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      // once the emoji is selected close the emoji picker
                      setOpenEmojiPicker(false);
                    }}
                  />
                </div>
                {/* INPUTS OF AMOUNT AND NAME CONNECTED WITH useStates */}
                <div className="mt-2 ">
                  <h2 className="text-black font-medium my-1">Budget Name</h2>
                  <Input
                    type="text"
                    placeholder="e.g. Mobile App Design"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-2 ">
                  <h2 className="text-black font-medium my-1">Budget Amount</h2>
                  <Input
                    type="number"
                    placeholder="e.g. 5000$"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                {/* button that creates the budget sing onClick event and is disabled until name and amount is entered */}
                <Button
                  disabled={!(name && amount)}
                  onClick={() => onCreateBudget()}
                  className="mt-5 w-full"
                >
                  Create Now
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateBudget;

"use client";

import type { ITestResponse } from "@/entities/test/model/types";
import { useAuthStore } from "@/features/auth/store/use-auth-store";
import { Button } from "@/shared/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAddToMyTests } from "../api/query";

type Props = {
  selectedTest: ITestResponse;
};

const AddToMyTests: React.FC<Props> = ({ selectedTest }) => {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();

  const { mutate: addToMyTests, isPending } = useAddToMyTests({
    onSuccess: () => {
      toast.success("Tabriklaymiz", {
        description: "Test muvaffaqiyatli qo'shildi",
      });

      queryClient.invalidateQueries({
        queryKey: ["testDetails", selectedTest.id, user?.id],
      });
    },
  });

  const handleSave = () => {
    if (!selectedTest?.id || !user) return;

    addToMyTests({ testId: selectedTest.id, userId: user?.id });
  };

  return (
    <Button
      className="w-full"
      size="lg"
      onClick={handleSave}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="animate-spin" />
      ) : (
        "Testlarimga qo'shish"
      )}
    </Button>
  );
};

export default AddToMyTests;

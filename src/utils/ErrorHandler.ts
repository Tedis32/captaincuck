import { toast } from "react-hot-toast";

type MetamaskRPCError = {
  code: string;
  data: any;
  message: string;
};

const novabloxErrorHandler = (error: Error) => {
  const objectStartIndex = error.message.indexOf("{");

  const errorObj: MetamaskRPCError = JSON.parse(
    error.message.slice(objectStartIndex)
  );

  toast.error(errorObj.message);
};

export { novabloxErrorHandler };

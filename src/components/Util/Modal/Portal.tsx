import { useMemo, FC, ReactChildren } from "react";
import { createPortal } from "react-dom";

interface Props {
  elementId: string;
  children: ReactChildren;
}

const Portal: FC<Props> = ({ children, elementId }: Props) => {
  const rootElement = useMemo(() => document.getElementById(elementId), [
    elementId,
  ]);
  return createPortal(children, rootElement!);
};

export default Portal;

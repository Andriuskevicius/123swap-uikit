import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 18 18" {...props}>       
      <path d="M13.12 4.88003C12.333 2.06403 9.746 3.05176e-05 6.685 3.05176e-05C2.999 3.05176e-05 0 2.99903 0 6.68403C0 9.74403 2.066 12.332 4.88 13.121C5.667 15.935 8.254 18 11.315 18C15.001 18 18 15.001 18 11.316C17.994 8.25603 15.928 5.67603 13.12 4.87903V4.88003ZM1.579 6.69003C1.579 3.87603 3.871 1.58403 6.685 1.58403C8.771 1.58403 10.569 2.84003 11.358 4.63803H11.318C7.632 4.63803 4.633 7.63603 4.633 11.321V11.362C2.834 10.568 1.579 8.77003 1.579 6.69003V6.69003ZM11.31 16.422C9.224 16.422 7.426 15.166 6.637 13.368H6.677C10.363 13.368 13.362 10.369 13.362 6.68403V6.64403C15.16 7.43203 16.415 9.23103 16.415 11.317C16.416 14.137 14.131 16.422 11.31 16.422V16.422Z" fill="#777E90"/>
    </Svg>
  );
};

export default Icon;

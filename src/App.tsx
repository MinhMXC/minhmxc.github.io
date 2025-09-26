import { isMobile } from 'react-device-detect';

import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";


export default function App() {
  return (
    isMobile
      ? <Mobile />
      : <Desktop />
  );
}

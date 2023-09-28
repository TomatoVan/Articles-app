import {lazy} from "react";
//нужен, чтобы чанки банлдов подгружались отдельно друг от друга
export const MainPageAsync = lazy(() => import ('./MainPage'))
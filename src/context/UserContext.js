import { createContext, useState, useMemo, useContext } from "react";


export const UserContext = createContext(
    { email : '', name : ''}
);
import React from "react";
export interface StrContextType {
    str: string;
    // 상태 업데이트 함수 타입
    setStr: React.Dispatch<React.SetStateAction<string>>; 
}
const defaultContext: StrContextType = {
    str: '',
    setStr: () => {} 
};
const StrContext = React.createContext<StrContextType>(defaultContext);


// export const StrProvider = ({ children }: { children: React.ReactNode }) => {
//     const [str, setStr] = useState('');

//     return (
//         <StrContext.Provider value={{ str, setStr }}>
//             {children}
//         </StrContext.Provider>
//     );
// };

export default StrContext;
import axios from "axios";

export const fetchUsers =(url: string) =>{
  return(axios.get(url)    
  );
    
};



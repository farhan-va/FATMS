import styled from "styled-components";


export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px rgba(15,15,15,0.28);
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(200,200,200,0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(131,58,180);
  font-weight: 500;
  text-decoration: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  outline: none;
  border: 1px solid rgba(200,200,200,0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid tranparent;
  transition: all 200ms ease-in-out;

  &::placeholder {
   color: rgba(200,200,200,1);
  }

 &:not(:last-of-type){
  border-bottom: 1.4px solid rgba(200,200,200,0.4);
 }

  &:focus{
   outline: none;
   border-bottom: 2px solid rgb(131,58,180);
  }
`;

export const Submitbutton = styled.button`
  width: 100%;
  padding: 11px 40% ;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all,240ms ease-in-out;
  background: rgb(131,58,180);
  background: linear-gradient(
  90deg, 
  rgba(131,58,180,1) 0%, 
  rgba(253,29,29,1) 50%, 
  rgba(252,176,69,1) 100%
  );

  &:hover{
   filter: brightness(1.03);
  }
`;

export const P = styled.p`
  color: red;
`;
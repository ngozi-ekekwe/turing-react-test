import React from 'react';
import InputWrapper from './Input';
import { fields } from '../helpers/shipping';


const Profile = () => {
  return (
    <div>
      {
        fields.map((field, i) => {
          return (
            <InputWrapper key={i}>
              <input placeholder={field.placeHolder} type={field.type} name={field.name} />
            </InputWrapper>
          )
        })
      }
    </div>
  );
};

export default Profile;
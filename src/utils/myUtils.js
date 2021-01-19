import { regExpConfig } from './regular.config'
export function checkStrong(value) {

  let modes = 0;

  if (value.length < 1) return modes;
  if (regExpConfig.numValidate.test(value)) modes++;
  if (regExpConfig.lowerValidate.test(value)) modes++;
  if (regExpConfig.upperValidate.test(value)) modes++;
  if (regExpConfig.specialValidate.test(value)) modes++;

  switch (modes) {
      case 1:
          return 1;
      case 2:
          return 2;
      case 3:
          return 3;
      case 4:
          return 4;
  }
  return modes;
}

export function pwdLength(value) {
  let charLength = null;
  if (value.length >= 6 && value.length < 16) {
      charLength = true;
  }else if(value.length===0){
      charLength = null;
  }else{
      charLength = false;
  }
  return charLength;
}

export function checkEmail(value) {
    if(regExpConfig.emailRegex.test(value)) {
        return 1
    } else {
        return 0
    }
    
}
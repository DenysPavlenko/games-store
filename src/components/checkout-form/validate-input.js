export default (type, value) => {
  const strValue = String(value).toLowerCase();
  let regx;
  switch (type) {
    case 'text':
      regx = /^[a-zA-Z ]{2,30}$/;
      return regx.test(strValue);
    case 'email':
      regx = /(.+)@(.+){2,}\.(.+){2,}/;
      return regx.test(strValue);
    case 'phone':
      regx = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s-]?[\0-9]{3}[\s-]?[0-9]{4}$/g;
      return regx.test(strValue);
    case 'number':
      regx = /^[0-9]+$/;
      return regx.test(strValue);
    default:
      break;
  }
}

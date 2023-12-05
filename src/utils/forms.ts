export const onChangeNumbers = (
  text: string,
  callback: (text: string) => void
) => {
  const cleanText = text.replace(/[^0-9]/g, '');

  if (text !== cleanText) {
    alert('Please enter numbers only');
  } else {
    callback(text);
  }
};

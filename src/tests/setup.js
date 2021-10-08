import "jest-extended"

export const setupTests = () => {
  const script = document.createElement('script');
  document.body.appendChild(script);
}
import loginImg from "../login-image.svg";

export const LoginIcon = props => {
  return (
    <img
      src={loginImg}
      style={{ maxWidth: "80vw" }}
      className="text-center mx-auto absolute bottom-0 right-0"
      alt="About platform"
    />
  );
};

const RegisterPage = () => {
  return (
    <form>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
export default RegisterPage;

import signupImg from "../assets/Images/signup.webp";
import Template from "../components/core/Auth/Template";

function SignUp() {
  return (
    <Template
      title="Join the millions learning to code with TechSparks for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  );
}

export default SignUp;

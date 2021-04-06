import { connect } from 'react-redux'
import { withFormik } from 'formik'
import FormField from '../../components/Form/FormField'
import { Button, Form, Card } from 'react-bootstrap';
import * as Yup from "yup"
import { auth } from '../../store/actions/auth'
import { Link } from "react-router-dom"
import { ROUTE_LOGIN } from '../../api/routes';



const RegistrationForm = (props) => {
    const {
        handleSubmit,
        isSubmitting,
    } = props;

    return (
        <Card
            bg="light"
            text="dark"
            className="mb-2"
        >
            <Card.Header className="guest-card">
                <h1>Welcome to website</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto consequuntur, deserunt ullam optio ratione nulla voluptatem accusantium eius beatae aut numquam amet. Rem a rerum excepturi aliquam, eius eos nulla!
                </p>
                <Link to={ROUTE_LOGIN}>
                    Login
                </Link>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <FormField name="name" label="Name" type="text" />
                    <FormField name="email" label="Email address" type="email" />
                    <FormField name="password" label="Password" type="password" />
                    <FormField name="password_confirmation" label="Confirm password" type="password" />

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button
                        block
                        type="submit"
                        variant="primary"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Loading…' : 'Sign Up'}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}



const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2)
        .max(70)
        .required(),
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .min(2)
        .max(70)
        .required(),
    password_confirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const RegistrationFormWithFormic = withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),

    // Custom sync validation
    validationSchema: SignupSchema,

    handleSubmit: async (values, { props, setSubmitting }) => {
        const res = await props.dispatch(auth(values));

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    },
})(RegistrationForm);

export default connect()(RegistrationFormWithFormic);
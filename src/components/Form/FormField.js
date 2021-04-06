import { useField } from 'formik'
import { Form, InputGroup } from 'react-bootstrap'

const FormField = props => {
    const [field, meta] = useField(props);
    const {
        label
    } = props;

    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control isInvalid={meta.error && meta.touched} {...field} {...props} />
            <Form.Control.Feedback type="invalid">
                { meta.error }
            </Form.Control.Feedback>
        </Form.Group>
    );
};

FormField.defaultProps = {
    type: 'text'
};

export default FormField;
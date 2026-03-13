/**
 * 1. e.target.[name of the input field].value
 * 2. use form data action and formData in the action handler. formData.get('name of the input field)
 * 3. Controlled component. One per each field. use state on change of the field. Useful to dynamically handle error
 *   
 * Another Version:
 * -- Handle all controlled field on one state object
 *      const [formData, setFormData] = useState({
 *              'name': '',
 *              'password': '',
 *              'phone': '',
 *          })
 * 
 * 4. Uncontrolled using useRef
 * 5. Hook Form
 */
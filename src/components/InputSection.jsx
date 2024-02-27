import { useState } from 'react';
import PropTypes from 'prop-types';
import { formSections } from '../structure/formStructure';
import InputSectionDisclosure from './InputSectionDisclosure';
import { addNewFieldSet } from './addFieldSetUtil';

function InputSection({ onInputChange }) {
  // Manages values entered in the form fields
  const [formValues, setFormValues] = useState({});

  // Manages the sections of the form
  const [sections, setSections] = useState(formSections);

  // Function to add a new set of fields to a section
  const addFieldSet = (sectionTitle) => {
    setSections((prevSections) => addNewFieldSet(prevSections, sectionTitle));
  };

  // handles changes to any field in the form, updating the formValues state with new value
  const handleFieldChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));

    // Propagate change event to parent component if handler is provided.
    if (onInputChange) {
      onInputChange(id, value);
    }
  };

  return (
    <div className="flex-1 bg-white p-4">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <form>
            {sections.map((section) => (
              <InputSectionDisclosure
                key={section.title}
                section={section}
                formValues={formValues}
                handleFieldChange={handleFieldChange}
                addFieldSet={addFieldSet}
              />
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

InputSection.propTypes = {
  onInputChange: PropTypes.func,
};

export default InputSection;

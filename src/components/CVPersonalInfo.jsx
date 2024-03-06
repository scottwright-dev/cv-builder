import { InformationCircleIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

function CVPersonalInfo({ phone, email, linkedIn, website }) {
  return (
    <section className="ml-4 space-y-1 text-xs font-thin">
      <header className="flex items-center text-sm font-normal">
        <InformationCircleIcon className="mr-1 h-5 w-5" />
        <span className="text-lg">Contact</span>
      </header>
      {phone && <div className="flex items-center">{phone}</div>}
      {email && <div className="flex items-center">{email}</div>}
      {linkedIn && <div className="flex items-center">{linkedIn}</div>}
      {website && <div className="flex items-center">{website}</div>}
    </section>
  );
}

CVPersonalInfo.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  linkedIn: PropTypes.string,
  website: PropTypes.string,
};

export default CVPersonalInfo;
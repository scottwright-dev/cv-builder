import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

function CVSkill({ skill }) {
  return (
    <section className="mb-4 ml-4 space-y-1 text-xs font-thin">
      <header className="mb-2 flex items-center text-sm font-normal">
        <WrenchScrewdriverIcon className="mr-2 h-5 w-5" />
        <span className="text-lg">Skills</span>
      </header>
      {skill && (
        <div className="ml-3 flex items-center">
          <span className="mr-2.5 text-base leading-none">•</span>
          {skill}
        </div>
      )}
    </section>
  );
}

CVSkill.propTypes = {
  skill: PropTypes.string,
};

export default CVSkill;

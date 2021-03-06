import * as React from 'react';
import { TextInputTypes } from '@patternfly/react-core';
import { InputField } from '@console/shared';
import FormSection from '@console/dev-console/src/components/import/section/FormSection';

const PingSourceSection: React.FC = () => (
  <FormSection title="PingSource" extraMargin>
    <InputField
      type={TextInputTypes.text}
      name="data.pingsource.data"
      label="Data"
      helpText="The data posted to the target function"
    />
    <InputField
      type={TextInputTypes.text}
      name="data.pingsource.schedule"
      label="Schedule"
      helpText="Schedule is described using the unix-cron string format (* * * * *)"
      required
    />
  </FormSection>
);

export default PingSourceSection;

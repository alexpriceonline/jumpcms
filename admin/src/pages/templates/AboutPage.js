import React from 'react';

import {
  FormBody,
  FormSection,
  FormField
} from '../../components/Forms';

const AboutPage = ({ page, updateValue }) => (
  <FormBody>
    <FormSection title="Mini hero">
      <FormField
        helptext="Enter a catchy headline for this page"
        label="Mini hero headline"
        name="heroHeadline"
        onChange={updateValue}
        type="text"
        value={page.content.heroHeadline}
      />
    </FormSection>
    <FormSection title="Main Content">
      <FormField
        helptext="Enter the main body text here"
        label="Body Text"
        name="bodyText"
        onChange={updateValue}
        type="textarea"
        value={page.content.bodyText}
      />
    </FormSection>
  </FormBody>
);

export default AboutPage;
